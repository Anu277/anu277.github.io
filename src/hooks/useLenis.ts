import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenisInstance } from '@/lib/lenis'

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })
    setLenisInstance(lenis)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      setLenisInstance(null)
      lenis.destroy()
    }
  }, [])
}
