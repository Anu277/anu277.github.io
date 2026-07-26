import { useEffect, useState } from 'react'
import {
  fetchGithubProfileStats,
  type GithubProfileStats,
} from '@/services/github'

export function useGithubProfileStats(username: string) {
  const [stats, setStats] = useState<GithubProfileStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetchGithubProfileStats(username).then((result) => {
      if (!cancelled) {
        setStats(result)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [username])

  return { stats, loading }
}
