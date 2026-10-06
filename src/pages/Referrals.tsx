import { Bandage, CircleCheck, ClipboardCheck, Handshake, Mail, Phone, Printer } from 'lucide-react'
import { CallToAction } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { homeHealthServices, practice, whyPartner, woundCareSupport } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const steps = [
  {
    title: 'Send the referral',
    text: `Fax the referral and supporting documents to ${practice.fax.display}, or call us to discuss the patient first.`,
  },
  {
    title: 'We schedule the visit',
    text: 'Our team contacts the patient or facility to arrange a house call or clinic visit.',
  },
  {
    title: 'Orders back fast',
    text: 'Orders are signed within 24–48 hours, and we keep you updated throughout care.',
  },
]

export function Referrals() {
  usePageMeta(
    'Referral Partners',
    'Home health support for agencies and facilities in the Chandler area: F2F encounters, certification and recertification, plan of care oversight, wound care, and orders signed within 24–48 hours.',
  )

  return (
    <>
      <PageHero eyebrow="For home health agencies & facilities" title="Fast orders. Reliable support.">
        <p>We support your patients and your workflow efficiently.</p>
      </PageHero>

      <section className="section">
        <div className="container card-grid card-grid-3 partner-cards">
          <div className="card">
            <span className="icon-chip"><ClipboardCheck aria-hidden="true" /></span>
            <h2 className="h3">Our services for home health</h2>
            <ul className="check-list">
              {homeHealthServices.map((s) => (
                <li key={s}><CircleCheck aria-hidden="true" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <span className="icon-chip"><Bandage aria-hidden="true" /></span>
            <h2 className="h3">Wound care support</h2>
            <ul className="check-list">
              {woundCareSupport.map((s) => (
                <li key={s}><CircleCheck aria-hidden="true" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <span className="icon-chip"><Handshake aria-hidden="true" /></span>
            <h2 className="h3">Why partner with us</h2>
            <ul className="check-list">
              {whyPartner.map((s) => (
                <li key={s}><CircleCheck aria-hidden="true" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How to refer</p>
            <h2>Three simple steps</h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="referral-contacts">
            <div className="contact-tile contact-tile-feature">
              <Printer aria-hidden="true" />
              <p className="contact-label">Referral fax</p>
              <p className="contact-value">{practice.fax.display}</p>
            </div>
            <a className="contact-tile" href={practice.phone.href}>
              <Phone aria-hidden="true" />
              <p className="contact-label">Call the office</p>
              <p className="contact-value">{practice.phone.display}</p>
            </a>
            <a className="contact-tile" href={`mailto:${practice.email}`}>
              <Mail aria-hidden="true" />
              <p className="contact-label">General email</p>
              <p className="contact-value contact-value-sm">{practice.email}</p>
            </a>
          </div>
          <p className="fine-print">
            Please send patient records by fax, not by email. Email is not a secure way to share
            protected health information.
          </p>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
