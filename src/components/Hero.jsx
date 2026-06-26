export default function Hero() {
  return (
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
      <div className="scroll-hint" aria-hidden="true">↓</div>
    </section>
  )
}
