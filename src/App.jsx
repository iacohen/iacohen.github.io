import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
