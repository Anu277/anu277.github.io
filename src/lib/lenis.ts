import type Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance
}

export function getLenisInstance() {
  return lenisInstance
}

export function scrollToTop(immediate = false) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate })
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
  }
}

export function scrollToElement(target: HTMLElement, offset = -24) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset })
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
