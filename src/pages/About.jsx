import FadeIn from '../components/FadeIn'

export default function About() {
  return (
    <main>
      <section id="about">
        <FadeIn as="h2">About</FadeIn>
        <FadeIn as="p" className="tagline" delay={0.1}>
          Mechanical Engineering, Stanford University &mdash; Thermo/Fluids Track
        </FadeIn>
        <FadeIn as="p" delay={0.2}>
          I'm an undergraduate researcher working at the intersection of fluid mechanics,
          pneumatic haptics, and human-robot interaction. My work focuses on designing
          soft actuator systems that communicate meaningful tactile information to users.
        </FadeIn>
        <FadeIn as="p" delay={0.3}>
          Outside the lab I enjoy hiking, cooking, and thinking about how physical
          sensation shapes the way we understand the world.
        </FadeIn>
      </section>
    </main>
  )
}
