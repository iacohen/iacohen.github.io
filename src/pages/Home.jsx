import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

const cards = [
  {
    to: '/about',
    title: 'About',
    desc: 'Mechanical Engineering at Stanford — thermo-fluids track, soft actuators, and haptics research.',
  },
  {
    to: '/projects',
    title: 'Projects',
    desc: 'Pneumatic haptic displays, fluid mechanics of soft actuators, and HRI user studies.',
  },
  {
    to: '/hobbies',
    title: 'Hobbies',
    desc: 'Hiking, cooking, and the ideas that live outside the lab.',
  },
  {
    to: '/contact',
    title: 'Contact',
    desc: 'Research collaborations, questions, and interesting problems.',
  },
]

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <div className="profile-photo-wrapper">
            <img src="/images/profile.jpg" alt="Ilana Cohen" className="profile-photo" />
          </div>
          <div className="hero-text">
            <h1 className="hero-hi">Hi!</h1>
            <p className="hero-name">I'm Ilana.</p>
            <p className="hero-sub">Mechanical Engineering&nbsp;&middot; Stanford&nbsp;&middot; Haptics &amp; HRI</p>
          </div>
        </div>
        <button
          className="scroll-hint"
          onClick={() => document.getElementById('sections')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to sections"
        >
          ↓
        </button>
      </section>

      <div id="sections" className="home-sections">
        {cards.map((card, i) => (
          <FadeIn key={card.to} delay={0.1 * i}>
            <Link to={card.to} className="section-card">
              <span className="section-card-title">{card.title}</span>
              <p className="section-card-desc">{card.desc}</p>
              <span className="section-card-arrow">→</span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </>
  )
}
