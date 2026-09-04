import { ROUTES } from '@/constants/routes'
import type { NavLink } from '@/types/nav'

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: ROUTES.projects },
  { label: 'Experiments', href: ROUTES.research },
  { label: 'About', href: ROUTES.about },
  { label: 'Contact', href: ROUTES.contact },
]
