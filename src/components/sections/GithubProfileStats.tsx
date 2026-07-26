import { useGithubProfileStats } from '@/hooks/useGithubProfileStats'

export function GithubProfileStats({ username }: { username: string }) {
  const { stats, loading } = useGithubProfileStats(username)

  if (loading || !stats) return null

  const memberSince = new Date(stats.createdAt).getFullYear()

  return (
    <div className="border-border grid grid-cols-3 border-t pt-6">
      <div className="flex flex-col gap-1">
        <span className="text-accent font-mono text-2xl font-medium">
          {stats.publicRepos}
        </span>
        <span className="text-text-muted text-sm">Public repos</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-accent font-mono text-2xl font-medium">
          {stats.followers}
        </span>
        <span className="text-text-muted text-sm">Followers</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-accent font-mono text-2xl font-medium">
          {memberSince}
        </span>
        <span className="text-text-muted text-sm">On GitHub since</span>
      </div>
    </div>
  )
}
