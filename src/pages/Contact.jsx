import FadeIn from '../components/FadeIn'

export default function Contact() {
  return (
    <main>
      <section id="contact">
        <FadeIn as="h2">Contact</FadeIn>
        <FadeIn as="p" delay={0.1}>
          Reach out anytime! I'd love to talk about projects, interesting problems, research, penguins, or things just for fun.
        </FadeIn>
        <FadeIn as="ul" className="contact-list" delay={0.2}>
          <li>
            Email:{' '}
            <a href="mailto:iacohen@stanford.edu">iacohen@stanford.edu</a>
            {' | '}
            <a href="mailto:ilanacohen625@gmail.com">ilanacohen625@gmail.com</a>
          </li>
          <li>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/ilana-aguiar-cohen" target="_blank" rel="noopener">
              linkedin.com/in/ilana-aguiar-cohen
            </a>
          </li>
        </FadeIn>
      </section>
    </main>
  )
}
