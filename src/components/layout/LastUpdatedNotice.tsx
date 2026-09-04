import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

const LAST_UPDATED = new Date(__LAST_UPDATED__).toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

export function LastUpdatedNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 1000)
    const hideTimer = setTimeout(() => setVisible(false), 7000)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      aria-live="polite"
      className={cn(
        'bg-accent fixed bottom-6 left-6 z-40 flex h-[50px] w-[150px] flex-col justify-center gap-0.5 px-4 transition-all duration-300 ease-out md:left-10',
        visible
          ? 'translate-x-0 opacity-100'
          : 'pointer-events-none -translate-x-[calc(100%+2.5rem)] opacity-0',
      )}
    >
      <span className="text-background/70 font-mono text-[10px] tracking-wide uppercase">
        Last updated
      </span>
      <span className="text-background font-mono text-xs font-medium">
        {LAST_UPDATED}
      </span>
    </div>
  )
}
