import { CircleCheck, UserRound } from 'lucide-react'
import nurseVisit from '../assets/nurse-visit.webp'
import { CallToAction } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { practice, whyChooseUs } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const credentials = [
  { abbr: 'MSN', text: 'Master of Science in Nursing' },
  { abbr: 'ARNP', text: 'Advanced Registered Nurse Practitioner' },
  { abbr: 'FNP-C', text: 'Family Nurse Practitioner – Certified' },
]

export function About() {
  usePageMeta(
    'About',
    `Nexus Health and Wellness is a provider-led family medicine, primary care and wound care practice in Chandler, AZ, led by ${practice.provider.name}, ${practice.provider.credentials}.`,
  )

  return (
    <>
      <PageHero eyebrow="About us" title="Provider-led care that comes to you">
        <p>
          {practice.name} offers both clinic and mobile medical care, so patients who can’t easily
          travel still get consistent, high-quality primary and wound care.
        </p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our practice</p>
            <h2>Family medicine, primary care and wound care</h2>
            <p>
              We serve homebound patients, residents of assisted living communities and group
              homes, and patients recovering after a hospital stay. We also work closely with home
              health agencies and facilities, with fast order turnaround and clear communication.
            </p>
            <ul className="check-list">
              {whyChooseUs.map((w) => (
                <li key={w.title}>
                  <CircleCheck aria-hidden="true" />
                  <span><strong>{w.title}.</strong> {w.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="split-media">
            <img
              src={nurseVisit}
              alt="A nurse checking in with an elderly patient"
              width="1199"
              height="800"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="provider-card provider-card-lg">
            <span className="provider-avatar" aria-hidden="true"><UserRound /></span>
            <div>
              <p className="eyebrow">Meet your provider</p>
              <h2>{practice.provider.name}</h2>
              <p className="provider-creds">{practice.provider.credentials}</p>
              <ul className="cred-list">
                {credentials.map((c) => (
                  <li key={c.abbr}>
                    <span className="cred-abbr">{c.abbr}</span>
                    <span>{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
