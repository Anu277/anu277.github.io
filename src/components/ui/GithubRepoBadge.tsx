import { Star, GitFork } from 'lucide-react'
import { useGithubRepoStats } from '@/hooks/useGithubRepoStats'

export function GithubRepoBadge({ repoUrl }: { repoUrl: string }) {
  const { stats, loading } = useGithubRepoStats(repoUrl)

  if (loading || !stats) return null

  return (
    <div className="text-text-muted flex items-center gap-4 font-mono text-xs">
      <span className="flex items-center gap-1.5">
        <Star className="size-3.5" strokeWidth={1.5} />
        {stats.stars}
      </span>
      <span className="flex items-center gap-1.5">
        <GitFork className="size-3.5" strokeWidth={1.5} />
        {stats.forks}
      </span>
      {stats.language && <span>{stats.language}</span>}
    </div>
  )
}
