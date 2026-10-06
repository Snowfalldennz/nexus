import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { practice } from '../data/site'

/** Green band shown near the bottom of most pages. */
export function CallToAction() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Health care at your doorstep</h2>
          <p>Call us to book a house call or clinic visit, or to ask whether your plan is accepted.</p>
        </div>
        <div className="cta-actions">
          <a href={practice.phone.href} className="btn btn-light">
            <Phone size={18} aria-hidden="true" />
            Call {practice.phone.display}
          </a>
          <Link to="/contact" className="btn btn-outline-light">Contact details</Link>
        </div>
      </div>
    </section>
  )
}
