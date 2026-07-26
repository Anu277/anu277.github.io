import { useEffect, useState } from 'react'
import { fetchGithubRepoStats, type GithubRepoStats } from '@/services/github'

export function useGithubRepoStats(repoUrl: string | undefined) {
  const [stats, setStats] = useState<GithubRepoStats | null>(null)
  const [loading, setLoading] = useState(Boolean(repoUrl))

  useEffect(() => {
    if (!repoUrl) {
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)

    fetchGithubRepoStats(repoUrl).then((result) => {
      if (!cancelled) {
        setStats(result)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [repoUrl])

  return { stats, loading }
}
