import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact">
      <FadeIn as="h2">Contact</FadeIn>
      <FadeIn as="p" delay={0.1}>
        I'm always happy to talk about research, collaborations, or interesting problems.
      </FadeIn>
      <FadeIn as="ul" className="contact-list" delay={0.2}>
        <li>
          Email:{' '}
          <a href="mailto:iacohen@stanford.edu">iacohen@stanford.edu</a>
          {' | '}
          <a href="mailto:ilanacohen625@gmail.com">ilanacohen625@gmail.com</a>
        </li>
        <li>
          GitHub:{' '}
          <a href="https://github.com/ilanacohen625" target="_blank" rel="noopener">
            github.com/ilanacohen625
          </a>
        </li>
      </FadeIn>
    </section>
  )
}
