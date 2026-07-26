import { useEffect, useState } from 'react'
import {
  fetchContributionCalendar,
  type ContributionCalendar,
} from '@/services/github'

export function useContributionCalendar(username: string) {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetchContributionCalendar(username).then((result) => {
      if (!cancelled) {
        setCalendar(result)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [username])

  return { calendar, loading }
}
