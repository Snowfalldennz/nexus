import { Mail, MapPin, Phone, Printer, Smartphone } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { fullAddress, mapEmbedUrl, mapLinkUrl, practice } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function Contact() {
  usePageMeta(
    'Contact',
    `Contact Nexus Health and Wellness at ${fullAddress}. Tel ${practice.phone.display}, fax ${practice.fax.display}.`,
  )

  return (
    <>
      <PageHero eyebrow="Contact us" title="We’re here to help">
        <p>Call to book a house call or clinic visit, ask about insurance, or discuss a referral.</p>
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-tiles">
            <a className="contact-tile contact-tile-feature" href={practice.phone.href}>
              <Phone aria-hidden="true" />
              <p className="contact-label">Office phone</p>
              <p className="contact-value">{practice.phone.display}</p>
            </a>
            <a className="contact-tile" href={practice.cell.href}>
              <Smartphone aria-hidden="true" />
              <p className="contact-label">Cell</p>
              <p className="contact-value">{practice.cell.display}</p>
            </a>
            <div className="contact-tile">
              <Printer aria-hidden="true" />
              <p className="contact-label">Fax</p>
              <p className="contact-value">{practice.fax.display}</p>
            </div>
            <a className="contact-tile" href={`mailto:${practice.email}`}>
              <Mail aria-hidden="true" />
              <p className="contact-label">Email</p>
              <p className="contact-value contact-value-sm">{practice.email}</p>
            </a>
            <a className="contact-tile contact-tile-wide" href={mapLinkUrl} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden="true" />
              <p className="contact-label">Clinic address</p>
              <p className="contact-value contact-value-sm">{fullAddress}</p>
              <p className="contact-hint">Open in Google Maps</p>
            </a>
          </div>

          <div className="map-frame">
            <iframe
              title={`Map showing ${practice.name} at ${fullAddress}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="container">
          <p className="fine-print">
            In a medical emergency, call <a href="tel:911">911</a>. Please don’t send personal
            medical information by email — call or fax us instead.
          </p>
        </div>
      </section>
    </>
  )
}
