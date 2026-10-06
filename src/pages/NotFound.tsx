import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.')

  return (
    <section className="section">
      <div className="container not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find that page.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  )
}
