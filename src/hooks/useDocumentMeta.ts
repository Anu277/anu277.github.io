import { useEffect } from 'react'

export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title
    const resolvedTitle = title.includes('AI Engineer')
      ? title
      : `${title} | AI Engineer`
    document.title = resolvedTitle

    const canonicalUrl = new URL(window.location.pathname, 'https://anu277.github.io').href
    const canonicalElement = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const previousCanonical = canonicalElement?.href ?? null
    if (canonicalElement) canonicalElement.href = canonicalUrl

    const ogUrlElement = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    const previousOgUrl = ogUrlElement?.content ?? null
    if (ogUrlElement) ogUrlElement.content = canonicalUrl

    const metadata = [
      ['meta[property="og:title"]', resolvedTitle],
      ['meta[name="twitter:title"]', resolvedTitle],
      ...(description
        ? [
            ['meta[property="og:description"]', description],
            ['meta[name="twitter:description"]', description],
          ]
        : []),
    ] as const

    const previousMetadata = metadata.map(([selector, value]) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      const previousValue = element?.content ?? null
      if (element) element.content = value
      return [element, previousValue] as const
    })

    let previousDescription: string | null = null
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) {
        previousDescription = meta.getAttribute('content')
        meta.setAttribute('content', description)
      }
    }

    return () => {
      document.title = previousTitle
      if (canonicalElement && previousCanonical) canonicalElement.href = previousCanonical
      if (ogUrlElement && previousOgUrl) ogUrlElement.content = previousOgUrl
      previousMetadata.forEach(([element, previousValue]) => {
        if (element && previousValue !== null) element.content = previousValue
      })
      if (description) {
        const meta = document.querySelector('meta[name="description"]')
        if (meta && previousDescription !== null) {
          meta.setAttribute('content', previousDescription)
        }
      }
    }
  }, [title, description])
}
