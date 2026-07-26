import { useMemo } from 'react'
import { useContributionCalendar } from '@/hooks/useContributionCalendar'
import type { ContributionDay } from '@/services/github'
import { cn } from '@/lib/cn'

const LEVEL_CLASSES: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: 'bg-surface-elevated',
  1: 'bg-accent/25',
  2: 'bg-accent/50',
  3: 'bg-accent/75',
  4: 'bg-accent',
}

const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function ContributionGraph({ username }: { username: string }) {
  const { calendar, loading } = useContributionCalendar(username)

  const weeks = useMemo(() => {
    if (!calendar) return []

    const days = calendar.days
    const firstDay = new Date(days[0].date).getDay()
    const padded: (ContributionDay | null)[] = [
      ...Array.from({ length: firstDay }, () => null),
      ...days,
    ]

    const result: (ContributionDay | null)[][] = []
    for (let i = 0; i < padded.length; i += 7) {
      result.push(padded.slice(i, i + 7))
    }
    return result
  }, [calendar])

  const monthMarkers = useMemo(() => {
    const markers: { label: string; weekIndex: number }[] = []
    let lastMonth = -1

    weeks.forEach((week, weekIndex) => {
      const firstValidDay = week.find((d) => d !== null)
      if (!firstValidDay) return
      const month = new Date(firstValidDay.date).getMonth()
      if (month !== lastMonth) {
        markers.push({ label: MONTH_LABELS[month], weekIndex })
        lastMonth = month
      }
    })

    return markers
  }, [weeks])

  if (loading || !calendar) return null

  return (
    <div className="flex flex-col gap-4">
      <span className="text-text-secondary text-sm">
        {calendar.totalLastYear} contributions in the last year
      </span>

      <div className="overflow-x-auto">
        <div className="flex min-w-fit flex-col gap-1">
          <div className="relative h-4 text-xs">
            {monthMarkers.map((marker) => (
              <span
                key={`${marker.label}-${marker.weekIndex}`}
                className="text-text-muted absolute font-mono"
                style={{ left: `${marker.weekIndex * 14}px` }}
              >
                {marker.label}
              </span>
            ))}
          </div>

          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) =>
                  day ? (
                    <div
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      className={cn(
                        'size-2.5',
                        LEVEL_CLASSES[day.level],
                      )}
                    />
                  ) : (
                    <div key={dayIndex} className="size-2.5" />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-text-muted flex items-center gap-1.5 text-xs">
        <span>Less</span>
        {([0, 1, 2, 3, 4] as const).map((level) => (
          <div key={level} className={cn('size-2.5', LEVEL_CLASSES[level])} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
