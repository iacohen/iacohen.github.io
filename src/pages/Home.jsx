import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import Carousel from '../components/Carousel'

// Add your own photos to public/images (e.g. ABOUT_1.jpg) and list them here.
const aboutImages = [
  '/images/ABOUT_1.jpg',
  '/images/ABOUT_2.jpg',
  '/images/ABOUT_3.jpg',
]

const cards = [
  {
    to: '/projects',
    title: 'Projects',
    desc: 'See what Ive been making, for class and for fun.',
  },
  {
    to: '/experience',
    title: 'Experience',
    desc: 'From research internships and residential life to tutoring and dance.',
  },
  {
    to: '/hobbies',
    title: 'Hobbies',
    desc: 'Hiking, cooking, and the ideas that live outside the lab.',
  },
  {
    to: '/contact',
    title: 'Contact',
    desc: 'Get in touch! Reach out anytime; Id love to chat.',
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
            <p className="hero-sub">Mechanical Engineering&nbsp;&middot; Illinois&nbsp;&middot; Stanford</p>
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

      <main>
        <section id="about">
          <FadeIn as="h2">About</FadeIn>
          <FadeIn as="p" className="tagline" delay={0.1}>
            Currently @ Stanford University as a Mechanical Engineering M.S. Candidate
          </FadeIn>
          <FadeIn as="p" delay={0.2}>
            Welcome to my corner of the web!
          </FadeIn>
          <FadeIn as="p" delay={0.2}>
            I'm a girl from Champaign, IL studying for my Master's degree at Stanford. I got my B.S. from Stanford in Mechanical Engineering in 2026,
            and am continuing on for my graduate degree. I'm interested in mechanical design, controls, and fluid mechanics, and especially in where they
            intersect. Currently, I serve as a Course Assistant in the Stanford Product Realization Laboratory, and my research has focused on pneumatic haptics,
            controls, and human-robot interaction, specifically designing soft actuator systems that communicate meaningful tactile information to users. My passion
            for engineering comes from creating experiences that feel meaningful, intuitive, immersive, and seamless, which is what draws me to haptics and human-robot
            interaction in the first place: I love thinking about how physical sensation shapes the way we understand the world.
          </FadeIn>
          <FadeIn as="p" delay={0.3}>
            When I'm not studying or working, you can probably find me dancing, listening to music, out on a hike, or exploring a new place. I like making things with my hands,
            and I proudly call myself a penguin enthusiast. I also paint, edit videos, and occasionally try to run, all while working toward visiting as
            many national parks as I can. Music is a constant for me, whether I'm jamming with my headphones on, playing piano, teaching myself guitar, or singing in choir. Outside of that,
            I collect sea glass from beaches, and every trip I take adds a postcard or two to a growing collection from everywhere I've been.
          </FadeIn>
        <FadeIn delay={0.4}>
          <Carousel images={aboutImages} alt="Ilana Cohen" className="carousel-about" />
          </FadeIn>
        </section>
      </main>

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
