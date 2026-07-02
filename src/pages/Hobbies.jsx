import FadeIn from '../components/FadeIn'
import WorldMap from '../components/WorldMap'

const hobbies = [
  {
    title: 'Hiking',
    description:
      'There\'s something about being above the treeline that resets everything. I try to get into the mountains whenever I can — day hikes, longer trips, anything that involves a lot of vertical gain and a good view at the top.',
  },
  {
    title: 'Cooking',
    description:
      'Cooking is one of the few places where I get to experiment without worrying about statistical significance. I\'m especially into baking bread and finding excuses to use too much garlic.',
  },
  {
    title: 'Physical sensation & perception',
    description:
      'The question of how we make sense of the physical world through touch, pressure, and proprioception follows me outside the lab. I\'m endlessly interested in the gap between what we measure and what we actually feel.',
  },
]

export default function Hobbies() {
  return (
    <main>
      <section id="hobbies">
        <FadeIn as="h2">Hobbies</FadeIn>
        <FadeIn as="p" delay={0.1}>
          The things I do when I'm not in the lab.
        </FadeIn>
        {hobbies.map((h, i) => (
          <FadeIn key={h.title} delay={0.15 * (i + 1)}>
            <article className="project">
              <h3>{h.title}</h3>
              <p>{h.description}</p>
            </article>
          </FadeIn>
        ))}

        <FadeIn as="h2" delay={0.15 * (hobbies.length + 1)} style={{ marginTop: '3rem' }}>
          Places I've Been
        </FadeIn>
        <FadeIn as="p" delay={0.15 * (hobbies.length + 1) + 0.05}>
          Hover a pin to see where.
        </FadeIn>
        <FadeIn delay={0.15 * (hobbies.length + 1) + 0.1}>
          <WorldMap />
        </FadeIn>
      </section>
    </main>
  )
}
