import { useEffect, useState } from 'react'

export function TechnicalCursor() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(media.matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const cursor = document.createElement('div')
    cursor.className = 'technical-cursor'
    document.body.appendChild(cursor)
    const onMove = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      cursor.classList.toggle('is-interactive', Boolean((event.target as Element | null)?.closest('a, button, input, textarea, select')))
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.classList.add('has-technical-cursor')
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.classList.remove('has-technical-cursor')
      cursor.remove()
    }
  }, [enabled])

  return null
}
