import FadeIn from '../components/FadeIn'

const projects = [
  {
    title: 'Pneumatic Haptic Display',
    meta: 'Stanford Human-Robot Interaction Lab · 2025–present',
    description:
      'Designing a wearable array of pneumatic actuators for conveying directional and magnitude information through skin stretch and pressure cues. Work spans CFD modeling of micro-channel networks, fabrication of soft silicone bladders, and user studies measuring perception thresholds.',
    tags: ['Soft Robotics', 'CFD', 'SolidWorks', 'Python'],
  },
  {
    title: 'Fluid Mechanics of Soft Actuators',
    meta: 'ME Research · 2024',
    description:
      'Investigated pressure-flow dynamics in bellows-style soft actuators. Built a benchtop testbed to characterize hysteresis and developed reduced-order analytical models validated against experimental data.',
    tags: ['MATLAB', 'Lab Testing', 'Analytical Modeling'],
  },
  {
    title: 'Human-Robot Interaction Study',
    meta: 'Class Project · 2024',
    description:
      'Ran a controlled study examining how tactile feedback modality (vibrotactile vs. pneumatic) affects task performance and subjective preference in a teleoperation task.',
    tags: ['User Studies', 'Python', 'Statistics'],
  },
]

export default function Projects() {
  return (
    <main>
      <section id="projects">
        <FadeIn as="h2">Projects</FadeIn>
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={0.1 * (i + 1)}>
            <article className="project">
              <h3>{p.title}</h3>
              <p className="project-meta">{p.meta}</p>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </section>
    </main>
  )
}
