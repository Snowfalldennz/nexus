import { Link } from 'react-router-dom'
import { CircleCheck, ShieldCheck } from 'lucide-react'
import { CallToAction } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { serviceIcons } from '../components/icons'
import { insurances, practice, services, whoWeServe } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function Services() {
  usePageMeta(
    'Services',
    'House calls, chronic disease management, post-discharge care (TCM), advanced wound care and grafts, home health orders and medication management in Chandler, AZ.',
  )

  return (
    <>
      <PageHero eyebrow="Our services" title="Family Medicine & Wound Care">
        <p>We do both — in our clinic and in the comfort of patients’ homes.</p>
      </PageHero>

      <nav className="jump-nav" aria-label="Services on this page">
        <div className="container">
          <ul>
            {services.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section">
        <div className="container service-list">
          {services.map((s) => {
            const Icon = serviceIcons[s.id]
            return (
              <article id={s.id} className="service-row" key={s.id}>
                <span className="icon-chip icon-chip-lg"><Icon aria-hidden="true" /></span>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.summary}</p>
                  <ul className="check-list check-list-cols">
                    {s.details.map((d) => (
                      <li key={d}><CircleCheck aria-hidden="true" />{d}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who we serve</p>
            <h2>Built around patients who can’t easily get to a clinic</h2>
          </div>
          <div className="card-grid card-grid-3">
            {whoWeServe.map((w) => (
              <div className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice">
            <ShieldCheck className="notice-icon" aria-hidden="true" />
            <div>
              <h2>Partnering Insurances</h2>
              <p>
                {insurances.join(', ')} — and more pending application. Call us at{' '}
                <a href={practice.phone.href}>{practice.phone.display}</a> to confirm your plan
                before your first visit.
              </p>
              <p>
                Are you a home health agency or facility?{' '}
                <Link to="/referrals">See how we support referral partners</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
