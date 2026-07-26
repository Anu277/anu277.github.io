import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton'
import { useLenis } from '@/hooks/useLenis'

export function Layout() {
  useLenis()

  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
