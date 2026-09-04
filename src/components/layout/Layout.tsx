import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton'
import { LastUpdatedNotice } from '@/components/layout/LastUpdatedNotice'
import { useLenis } from '@/hooks/useLenis'
import { TechnicalCursor } from '@/components/animations/TechnicalCursor'

export function Layout() {
  useLenis()

  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <TechnicalCursor />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
      <LastUpdatedNotice />
    </div>
  )
}
