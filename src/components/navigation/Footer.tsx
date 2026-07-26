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
    <footer className="border-border border-t">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-text-primary font-mono text-sm">
            anurag bheemani
          </span>
          <p className="text-text-muted max-w-xs text-sm">
            Machine learning engineer working on computer vision and applied
            GenAI systems.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
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

        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Email"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Mail className="size-4" strokeWidth={1.5} />
          </a>
        </div>
      </Container>

      <Container className="border-border border-t py-6">
        <p className="text-text-muted text-xs">
          &copy; {year} Anurag Bheemani. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
