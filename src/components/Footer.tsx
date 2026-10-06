import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Printer, Smartphone } from 'lucide-react'
import logo from '../assets/logo.png'
import { fullAddress, mapLinkUrl, practice } from '../data/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="" width="64" height="64" />
          <p className="footer-name">{practice.name}</p>
          <p className="footer-tag">{practice.tagline}</p>
          <p className="footer-blurb">
            Clinic and mobile medical care for homebound patients. Health care at your doorstep.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/services#wound-care">Wound Care</Link></li>
            <li><Link to="/referrals">Referral Partners</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer">{fullAddress}</a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <span>Tel: <a href={practice.phone.href}>{practice.phone.display}</a></span>
            </li>
            <li>
              <Smartphone size={18} aria-hidden="true" />
              <span>Cell: <a href={practice.cell.href}>{practice.cell.display}</a></span>
            </li>
            <li>
              <Printer size={18} aria-hidden="true" />
              <span>Fax: {practice.fax.display}</span>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${practice.email}`}>{practice.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} {practice.name}. All rights reserved.</p>
          <p>
            In a medical emergency, call <a href="tel:911">911</a>. Please do not send personal medical
            information by email.
          </p>
        </div>
      </div>
    </footer>
  )
}
