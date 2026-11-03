import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useScrolled } from '@/hooks/useScrolled'
import { NAV_LINKS } from '@/constants/nav'
import { Container } from '@/components/layout/Container'

export function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-colors duration-200',
        scrolled
          ? 'bg-background/90 border-border border-b backdrop-blur-sm'
          : 'bg-transparent',
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Primary"
        >
          <NavLink
            to="/"
            className="text-text-primary flex items-center gap-2 text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            <span className="border border-border px-1.5 py-0.5 text-xs text-accent">AB</span>
            Anurag Bheemani
          </NavLink>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'text-sm transition-colors duration-150',
                      isActive
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-text-primary',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="group hidden items-center gap-2 border border-border px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-accent hover:text-accent lg:flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </NavLink>

          <button
            type="button"
            className="text-text-primary md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="size-5" strokeWidth={1.5} />
            ) : (
              <Menu className="size-5" strokeWidth={1.5} />
            )}
          </button>
        </nav>
      </Container>

      {menuOpen && (
        <div className="border-border bg-background border-t md:hidden">
          <Container>
            <p className="text-text-secondary pt-4 text-sm">
              Machine Learning Engineer
            </p>
            <ul className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block px-2 py-2.5 text-sm transition-colors',
                        isActive
                          ? 'text-accent'
                          : 'text-text-secondary hover:text-text-primary',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}
