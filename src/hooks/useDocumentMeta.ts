import { useEffect } from 'react'

export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

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
      if (description) {
        const meta = document.querySelector('meta[name="description"]')
        if (meta && previousDescription !== null) {
          meta.setAttribute('content', previousDescription)
        }
      }
    }
  }, [title, description])
}
