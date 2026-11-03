import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { NAV_LINKS } from '@/constants/nav'
import { SOCIAL_LINKS } from '@/constants/social'
import { ROUTES } from '@/constants/routes'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border bg-surface/30 border-t">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
        <div className="flex flex-col gap-4">
          <span className="text-text-primary text-lg font-medium">Anurag Bheemani</span>
          <p className="text-text-muted max-w-xs text-sm">
            AI engineer building reliable systems from research to production.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={ROUTES.resume}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="border-border text-text-secondary hover:border-accent hover:text-accent border p-2.5 transition-colors"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="border-border text-text-secondary hover:border-accent hover:text-accent border p-2.5 transition-colors"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Email"
            className="border-border text-text-secondary hover:border-accent hover:text-accent border p-2.5 transition-colors"
          >
            <Mail className="size-4" strokeWidth={1.5} />
          </a>
        </div>
      </Container>

      <Container className="border-border flex flex-col gap-2 border-t py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-text-muted text-xs">&copy; {year} Anurag Bheemani.</p>
        <p className="text-text-muted text-xs">Hyderabad, India · Open to AI engineering opportunities</p>
      </Container>
    </footer>
  )
}
