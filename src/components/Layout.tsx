import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollManager } from './ScrollManager'

export function Layout() {
  return (
    <>
      <ScrollManager />
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
