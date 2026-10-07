import story1 from '../assets/story/story-1.webp'
import story2 from '../assets/story/story-2.webp'
import story3 from '../assets/story/story-3.webp'
import story4 from '../assets/story/story-4.webp'
import story6 from '../assets/story/story-6.webp'
import story9 from '../assets/story/story-9.webp'

const photos = [
  {
    src: story1,
    alt: 'A Nexus nurse talking with an elderly patient outside his home, with a mobile wound care van behind them',
  },
  { src: story2, alt: 'Two nurses chatting with an elderly patient in his living room' },
  { src: story3, alt: 'A nurse arriving at a patient’s front door with her care bag' },
  { src: story4, alt: 'A nurse treating a woman’s leg wound in the clinic' },
  { src: story6, alt: 'A nurse dressing a man’s leg wound in his home' },
  { src: story9, alt: 'A provider listening to a young girl’s heartbeat in the clinic while her mother watches' },
]

/**
 * Strip of photos that rolls continuously to the right. The photos are listed
 * twice so the loop is seamless; the second copy is hidden from screen readers.
 */
export function PhotoCarousel() {
  return (
    <section className="story" aria-label="Our care in pictures">
      <div className="story-track">
        {[false, true].map((isCopy) => (
          <ul className="story-set" key={String(isCopy)} aria-hidden={isCopy || undefined}>
            {photos.map((p) => (
              <li key={p.src}>
                <img src={p.src} alt={isCopy ? '' : p.alt} width="840" height="560" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
