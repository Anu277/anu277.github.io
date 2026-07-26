import { ROUTES } from '@/constants/routes'
import type { NavLink } from '@/types/nav'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Projects', href: ROUTES.projects },
  { label: 'Research', href: ROUTES.research },
  { label: 'About', href: ROUTES.about },
  { label: 'Resume', href: ROUTES.resume },
  { label: 'Contact', href: ROUTES.contact },
]
