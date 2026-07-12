import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import WorldMap from '../components/WorldMap'
import USMap from '../components/USMap'
import { IconMountain, IconCompass, IconMusicNote, IconPaintbrush, IconWave } from '../components/icons'

const hobbies = [
  {
    title: 'Walking & hiking',
    icon: IconMountain,
    description:
      'I love spending time outside! Whether it\'s the familiar flat land and forests I grew up with, or the rainforests and mountains of Latin America and California, I\'m always down to explore on foot. I\'m also trying to visit as many U.S. National Parks as I can. So far I\'ve been to:',
    parks: ['Arches', 'Bryce Canyon', 'Cuyahoga Valley', 'Yosemite', 'Zion'],
    otherSites: ['Gateway Arch', 'Statue of Liberty'],
  },
  {
    title: 'Getting lost & visiting new places',
    icon: IconCompass,
    description:
      'Contrary to popular opinion, I love getting lost. It lets you be fully immersed in the moment and discover places you never thought you would. I love using a compass and a map to figure out where I am and where I\'m going... something we don\'t often get the chance to do anymore.',
  },
  {
    title: 'Playing music',
    icon: IconMusicNote,
    description:
      'Music has been a constant for as long as I can remember — playing piano, teaching myself guitar, singing with the Stanford Light Opera Company, or just jamming with my headphones on. It\'s the one hobby that\'s followed me through every version of myself so far.',
  },
  {
    title: 'Painting',
    icon: IconPaintbrush,
    description: (
      <>
        I love painting with acrylics — it's a way to practice concentration, work with my hands, express myself
        creatively, and make personal gifts for people I care about. You can check out some of my artistic projects{' '}
        <Link to="/projects#painting">here</Link>.
      </>
    ),
  },
  {
    title: 'Collecting sea glass & postcards',
    icon: IconWave,
    description:
      'Every beach walk turns into a hunt for sea glass, and every trip adds a postcard or two to a growing collection from everywhere I\'ve been. Most of my favorite memories start the same way: watching the sunset over the water, from Half Moon Bay to Nome, Alaska, and wanting to hold onto a small piece of wherever I am.',
  },
]

export default function Hobbies() {
  return (
    <main className="main-wide">
      <section id="hobbies">
        <FadeIn as="h2">Hobbies</FadeIn>
        <FadeIn as="p" delay={0.1}>
          The things I do for fun's sake.
        </FadeIn>
        <div className="hobby-list">
          {hobbies.map((h, i) => (
            <FadeIn key={h.title} delay={0.15 * (i + 1)}>
              <div className="hobby-row">
                <h3 className="hobby-heading">{h.title}</h3>
                <h.icon className="hobby-icon" aria-hidden="true" />
                <div>
                  <p className="hobby-desc">{h.description}</p>
                  {h.parks && (
                    <ul className="hobby-parks">
                      {h.parks.map(park => <li key={park}>{park}</li>)}
                    </ul>
                  )}
                  {h.otherSites && (
                    <>
                      <p className="hobby-desc hobby-also">As well as:</p>
                      <ul className="hobby-parks">
                        {h.otherSites.map(site => <li key={site}>{site}</li>)}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn as="p" className="proj-section-label" delay={0.15 * (hobbies.length + 1)} style={{ marginTop: '3rem' }}>
          Places I've Been
        </FadeIn>
        <FadeIn as="p" delay={0.15 * (hobbies.length + 1) + 0.05}>
          Hover over a pin to see where.
        </FadeIn>
        <FadeIn delay={0.15 * (hobbies.length + 1) + 0.1}>
          <WorldMap />
        </FadeIn>

        <FadeIn as="h3" className="map-sub-heading" delay={0.15 * (hobbies.length + 1) + 0.15}>
          United States
        </FadeIn>
        <FadeIn delay={0.15 * (hobbies.length + 1) + 0.2}>
          <USMap />
        </FadeIn>
      </section>
    </main>
  )
}
