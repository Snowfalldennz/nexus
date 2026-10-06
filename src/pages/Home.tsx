import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BedDouble,
  Building2,
  CircleCheck,
  Clock,
  House,
  Hospital,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from 'lucide-react'
import nurseVisit from '../assets/nurse-visit.webp'
import caringHands from '../assets/caring-hands.webp'
import logo from '../assets/logo.png'
import { CallToAction } from '../components/CallToAction'
import { serviceIcons } from '../components/icons'
import { practice, services, whoWeServe, whyPartner } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const trust = [
  { icon: Clock, title: 'Orders in 24–48 hrs', text: 'Fast order turnaround' },
  { icon: ShieldCheck, title: 'Medicare accepted', text: 'Plus multiple private plans' },
  { icon: Stethoscope, title: 'Provider-led', text: 'Care led by an FNP-C' },
  { icon: House, title: 'We come to you', text: 'House calls & clinic visits' },
]

const serveIcons = [BedDouble, Building2, Hospital]

export function Home() {
  usePageMeta(
    '',
    'Nexus Health and Wellness provides mobile primary care, house calls, chronic disease management, post-discharge care and advanced wound care in Chandler, Arizona. Medicare accepted.',
  )

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{practice.tagline}</p>
            <h1>
              Health care at your <span className="text-accent">doorstep</span>
            </h1>
            <p className="lead">
              Nexus Health &amp; Wellness provides mobile primary care and advanced wound care for
              homebound patients — and a clinic in Chandler, Arizona when you’d rather come to us.
            </p>
            <div className="hero-actions">
              <a href={practice.phone.href} className="btn btn-primary btn-lg">
                <Phone size={20} aria-hidden="true" />
                Call {practice.phone.display}
              </a>
              <Link to="/referrals" className="btn btn-secondary btn-lg">
                Refer a patient
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <img
              src={nurseVisit}
              alt="A nurse in blue scrubs smiling with an elderly patient at home"
              width="1199"
              height="800"
            />
            <div className="hero-badge">
              <img src={logo} alt="" width="44" height="44" />
              <span>
                <strong>We come to you</strong>
                Home, assisted living or group home
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="Why patients choose us">
        <div className="container trust-grid">
          {trust.map(({ icon: Icon, title, text }) => (
            <div className="trust-item" key={title}>
              <Icon className="trust-icon" aria-hidden="true" />
              <div>
                <p className="trust-title">{title}</p>
                <p className="trust-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our services</p>
            <h2>Complete care, wherever you are</h2>
            <p className="section-lead">
              From routine visits to complex wound treatment, our provider-led team brings the
              care to you.
            </p>
          </div>
          <div className="card-grid">
            {services.map((s) => {
              const Icon = serviceIcons[s.id]
              return (
                <Link to={`/services#${s.id}`} className="card card-link" key={s.id}>
                  <span className="icon-chip"><Icon aria-hidden="true" /></span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="card-more">
                    Learn more <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div className="split-media">
            <img
              src={caringHands}
              alt="A caregiver holding a patient’s hands"
              width="1600"
              height="1067"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Two ways to get care</p>
            <h2>Clinic visits and mobile medical care</h2>
            <p>
              We see patients at our Chandler clinic and in their homes. For patients who are
              homebound, recovering from a hospital stay or living in a care community, our
              provider comes to them.
            </p>
            <ul className="check-list">
              <li><CircleCheck aria-hidden="true" />House calls for homebound patients</li>
              <li><CircleCheck aria-hidden="true" />Visits in assisted living and group homes</li>
              <li><CircleCheck aria-hidden="true" />Clinic appointments at 3002 N Arizona Ave</li>
            </ul>
            <Link to="/services" className="btn btn-primary">
              View all services <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who we serve</p>
            <h2>Care for patients who need it most</h2>
          </div>
          <div className="card-grid card-grid-3">
            {whoWeServe.map((w, i) => {
              const Icon = serveIcons[i]
              return (
                <div className="card card-center" key={w.title}>
                  <span className="icon-chip icon-chip-blue"><Icon aria-hidden="true" /></span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split split-reverse-mobile">
          <div>
            <p className="eyebrow eyebrow-light">For home health agencies &amp; facilities</p>
            <h2>Fast orders. Reliable support.</h2>
            <p>
              We support your patients and your workflow efficiently — from Face-to-Face
              encounters and certifications to orders signed within 24–48 hours.
            </p>
            <div className="hero-actions">
              <Link to="/referrals" className="btn btn-light">
                Partner with us <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href={practice.phone.href} className="btn btn-outline-light">
                <Phone size={18} aria-hidden="true" /> {practice.phone.display}
              </a>
            </div>
          </div>
          <ul className="partner-list">
            {whyPartner.map((p) => (
              <li key={p}><CircleCheck aria-hidden="true" />{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="provider-card">
            <span className="provider-avatar" aria-hidden="true"><UserRound /></span>
            <div>
              <p className="eyebrow">Meet your provider</p>
              <h2>{practice.provider.name}, {practice.provider.credentials}</h2>
              <p>
                A board-certified Family Nurse Practitioner leading every patient’s care — from
                house calls and chronic disease management to advanced wound treatment.
              </p>
              <Link to="/about" className="text-link">
                About our practice <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
