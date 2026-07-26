export interface GithubRepoStats {
  stars: number
  forks: number
  language: string | null
  updatedAt: string
  openIssues: number
}

export interface GithubProfileStats {
  publicRepos: number
  followers: number
  createdAt: string
}

export interface ContributionDay {
  date: string
  count: number
  /** Intensity bucket, 0 (none) to 4 (most active). */
  level: 0 | 1 | 2 | 3 | 4
}

export interface ContributionCalendar {
  totalLastYear: number
  days: ContributionDay[]
}

/** owner/repo from a github.com URL, e.g. "anu277/orieon-frontend". */
function parseRepoPath(url: string): string | null {
  const match = url.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git)?\/?$/)
  return match ? match[1] : null
}

export async function fetchGithubRepoStats(
  repoUrl: string,
): Promise<GithubRepoStats | null> {
  const path = parseRepoPath(repoUrl)
  if (!path) return null

  const res = await fetch(`https://api.github.com/repos/${path}`)
  if (!res.ok) return null

  const data = await res.json()
  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
    language: data.language,
    updatedAt: data.updated_at,
    openIssues: data.open_issues_count,
  }
}

export async function fetchGithubProfileStats(
  username: string,
): Promise<GithubProfileStats | null> {
  const res = await fetch(`https://api.github.com/users/${username}`)
  if (!res.ok) return null

  const data = await res.json()
  return {
    publicRepos: data.public_repos,
    followers: data.followers,
    createdAt: data.created_at,
  }
}

/**
 * GitHub's own contribution calendar isn't exposed by the public REST API
 * without an auth token. This uses a community JSON mirror of the same
 * data GitHub renders on public profile pages.
 */
export async function fetchContributionCalendar(
  username: string,
): Promise<ContributionCalendar | null> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
  )
  if (!res.ok) return null

  const data = await res.json()
  if (!Array.isArray(data.contributions)) return null

  return {
    totalLastYear: data.total?.lastYear ?? 0,
    days: data.contributions,
  }
}
