import { ArrowUp } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { scrollToTop } from '@/lib/lenis'
import { cn } from '@/lib/cn'

export function ScrollToTopButton() {
  const visible = useScrolled(600)

  return (
    <button
      type="button"
      onClick={() => scrollToTop()}
      aria-label="Scroll to top"
      className={cn(
        'border-border bg-surface hover:border-accent hover:text-accent text-text-secondary fixed right-6 bottom-6 z-40 flex size-11 items-center justify-center border transition-all duration-200 md:right-10 md:bottom-10',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUp className="size-4" strokeWidth={1.5} />
    </button>
  )
}
