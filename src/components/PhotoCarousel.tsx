import { useEffect, useState } from 'react'
import story4 from '../assets/story/story-4.webp'
import story6 from '../assets/story/story-6.webp'
import story9 from '../assets/story/story-9.webp'

const photos = [
  { src: story4, alt: 'A nurse treating a woman’s leg wound in the clinic' },
  { src: story6, alt: 'A nurse dressing a man’s leg wound in his home' },
  { src: story9, alt: 'A provider listening to a young girl’s heartbeat in the clinic while her mother watches' },
]

const INTERVAL_MS = 5000

/**
 * One photo at a time, fading to the next every few seconds. Pauses while the
 * visitor hovers over it; the dots let them pick a photo directly. Visitors who
 * turn off motion on their device get no automatic changes.
 */
export function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(() => setCurrent((c) => (c + 1) % photos.length), INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [current, paused])

  return (
    <section
      className="slideshow"
      aria-roledescription="carousel"
      aria-label="Our care in pictures"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="slideshow-frame">
          {photos.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              width="1400"
              height="933"
              className={i === current ? 'is-active' : undefined}
              aria-hidden={i !== current || undefined}
            />
          ))}
        </div>
        <div className="slideshow-dots">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === current}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
