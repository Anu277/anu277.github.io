import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { cn } from '@/lib/cn'
import { ROUTES } from '@/constants/routes'

export function NotFound() {
  return (
    <Section className="flex min-h-[calc(100svh-4rem)] items-center">
      <Container>
        <div className="flex flex-col gap-6">
          <span className="text-accent font-mono text-sm">404</span>
          <h1 className="text-text-primary text-3xl font-medium md:text-4xl">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-text-secondary max-w-md">
            The page you&apos;re looking for was moved, removed, or never
            existed.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <Link to={ROUTES.home} className={cn(buttonVariants())}>
              Return home
            </Link>
            <Link
              to={ROUTES.projects}
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              View projects
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
