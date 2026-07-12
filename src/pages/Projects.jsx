import FadeIn from '../components/FadeIn'
import Carousel from '../components/Carousel'

const projects = [
  {
    title: 'PieZense: Pneumatic Haptics System',
    meta: 'CHARM Lab @ Stanford · 2025–2026',
    description:
      'Redesigned and fabricated the CHARM Lab\'s primary pneumatic haptics system, focusing on modularity, compactness, and ease of use across applications. Led the mechanical design process, iterating CAD models to integrate custom PCBs with piezoelectric valves into a cohesive architecture. Collaborated with electrical and software teammates to build a system adaptable for future research and startup deployment, using Bambu and Formlabs rapid prototyping. The new PieZense system is now the foundation of the startup Haptica.',
    images: [
      '/images/PROJECT_piezense_1.png',
      '/images/PROJECT_piezense_2.png',
      '/images/PROJECT_piezense_3.png',
      '/images/PROJECT_piezense_4.png',
      '/images/PROJECT_piezense_5.jpg',
    ],
    tags: ['Haptics', 'CAD', 'Rapid Prototyping', 'PCB Integration'],
  },
    {
    title: 'Vial-to-Vial Transfer Device',
    meta: 'Gilead Sciences & Stanford ME · 2025–2026',
    description:
      'Worked with Gilead Sciences to design and develop a user-centered vial-to-vial drug transfer device with a focus on ergonomic usability, manufacturability, and reliable fluid transfer. Iterated through CAD and 3D printing—exploring multiple geometries, sealing approaches, and materials—to optimize accuracy, alignment, and robustness in operation and handling.',
    images: [
      '/images/PROJECT_vial_Main.png',
      '/images/PROJECT_vial_1.png',
      '/images/PROJECT_vial_4.png',
      '/images/PROJECT_vial_3.png',
    ],
    tags: ['CAD', '3D Printing', 'User Testing', 'Medical Device Design'],
  },
  {
    title: 'Glowing Up',
    meta: '2026',
    description:
      'Designed and fabricated a rotating, customizable lithophane lamp displaying childhood photos that glow when lit from within. Combined two AM-specific techniques: a print-in-place plain bearing that produces the lazy-Susan rotation in a single print, and mid-print magnet inserts that let each lithophane panel snap on and off. Tuned bearing clearance (0.3 mm radial) and lithophane settings (0.1 mm layers) through targeted prototypes, then paired the printed PLA frames with a laser-cut wooden lid for material contrast.',
    images: [
      '/images/PROJECT_litho1.png',
      '/images/PROJECT_litho2.png',
      '/images/PROJECT_litho3.png',
      '/images/PROJECT_litho4.png',
      '/images/PROJECT_litho5.png',
      '/images/PROJECT_litho6.png',
      '/images/PROJECT_litho7.png',
    ],
    tags: ['Print-in-Place', '3D Printing', 'Lithophanes', 'Mid-Print Insert'],
  },
  {
    title: 'Dorm Buddy: Suction-Mounted Key Clip',
    meta: '2026',
    description:
      'Designed a suction-cup-mounted, spring-driven key clip for non-destructive storage on mirrors and smooth surfaces. Engineered a flexible resin suction cup (Elastic 50A) sized from a suction-force analysis to hold a ~2 N load, finding that surface finish and post-processing mattered as much as geometry. Paired it with a PLA print-in-place hinge clip and commercial compression spring, then used Fusion generative design to optimize the load-bearing clip body against expected and accidental-misuse loads.',
    images: [
      '/images/PROJECT_clip1.png',
      '/images/PROJECT_clip2.png',
      '/images/PROJECT_clip3.png',
      '/images/PROJECT_clip4.png',
      '/images/PROJECT_clip5.png',
      '/images/PROJECT_clip6.png',
      '/images/PROJECT_clip7.png',
    ],
    tags: ['Generative Design', 'Resin Printing', 'Compliant Mechanisms', 'CAD'],
  },
    {
    title: 'Trum-Pal',
    meta: '2026',
    description:
      'Built a haptic trumpet trainer on a four-person team that teaches fingering and timing through a Guitar Hero–style Unity game paired with a 3D-printed trumpet that provides live force and vibrotactile feedback. Fingertip ERM motors give anticipatory vibration cues while 25 N solenoids deliver force feedback on note release, with time-of-flight sensors (1 mm resolution) feeding a Teensy 4.0 control loop. Characterized the solenoids\' nonlinear force response and added hard stops to keep them linear, then confirmed stability with a state-space eigenvalue analysis. Demoed to 25 users at the ME 327 Open House.',
    link: 'https://charm.stanford.edu/ME327/2026-Group16',
    images: [
      '/images/PROJECT_trumpet1.png',
      '/images/PROJECT_trumpet2.png',
      '/images/PROJECT_trumpet3.png',
    ],
    tags: ['Haptics', 'Mechatronics', 'Force Feedback', 'Unity / C#'],
  },
  {
    title: 'Stomp Rocket',
    meta: '2026',
    description:
      'Designed a stomp-powered pneumatic launcher on a three-person team, converting a human stomp into thrust to fire a resin-printed rocket. Owned the rocket subsystem, printing it in Formlabs Tough 2000 for impact resistance and sizing it from energy calculations targeting a ~4 m apogee. Each component—a polypropylene accordion pump, a stiff PLA launch platform, and the rocket—was deliberately matched to a distinct AM behavior: compliance, stiffness, or impact absorption. Used FEA to locate stress concentrations and iterate geometry to minimize layer delamination.',
    images: [
      '/images/PROJECT_rocket1.png',
      '/images/PROJECT_rocket2.png',
      '/images/PROJECT_rocket3.png',
    ],
    tags: ['Pneumatics', 'Resin Printing', 'FEA', 'Material Selection'],
  },
  {
    title: 'אילן',
    meta: '2025',
    description:
      'Designed and fabricated a custom planter titled אילן ("Ilan," Hebrew for "tree"). Constructed from sheet steel with lathe-turned brass feet, integrating TIG welding, bead blasting, and selective powder coating using heat-resistant tape masking. The final piece now houses a thriving bromeliad, balancing structured geometry with personal and familial meaning.',
    images: [
      '/images/PROJECT_planter_Main.png',
      '/images/PROJECT_planter_1.png',
      '/images/PROJECT_planter_2.png',
      '/images/PROJECT_planter_3.png',
      '/images/PROJECT_planter_4.png',
    ],
    tags: ['Sheet Metal', 'TIG Welding', 'Lathe Turning', 'Powder Coating'],
  },
  {
    title: 'Turning Mechanical Timepiece',
    meta: '2024',
    description:
      'Designed and built a mechanical timepiece in which a new card flips into view every hour, marking time through motion and imagery rather than a traditional clock face. Driven by an escapement mechanism and gear train, with components fabricated through 3D printing, laser cutting, and woodworking. The interchangeable display can shift from standard numerals to custom visual sequences.',
    images: [
      '/images/PROJECT_timepiece_Main.png',
      '/images/PROJECT_timepiece_1.png',
      '/images/PROJECT_timepiece_2.png',
    ],
    tags: ['Mechanical Design', 'Laser Cutting', 'Woodworking', '3D Printing'],
  },
]

const artImages = [
  '/images/PROJECT_Art1.png',
  '/images/PROJECT_Art2.png',
  '/images/PROJECT_Art3.png',
  '/images/PROJECT_Art4.jpg',
  '/images/PROJECT_Art5.jpg',
  '/images/PROJECT_Art6.jpg',
  '/images/PROJECT_Art7.jpg',
  '/images/PROJECT_Art8.jpg',
  '/images/PROJECT_Art9.jpg',
  '/images/PROJECT_Art10.PNG',
  '/images/PROJECT_Art11.jpg',
  '/images/PROJECT_Art12.JPG',
  '/images/PROJECT_Art13.JPG',
  '/images/PROJECT_Art14.jpg',
  '/images/PROJECT_Art15.png',
  '/images/PROJECT_Art16.jpg',
]

export default function Projects() {
  return (
    <main className="main-wide">
      <section id="projects">
        <FadeIn as="h2">Projects</FadeIn>

        <div className="proj-list">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * (i + 1)}>
              <div className="proj-card">
                <Carousel images={p.images} alt={p.title} />
                <div className="proj-info">
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="project-meta">{p.meta}</p>
                  <p className="proj-desc">{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <p className="proj-section-label">Painting &amp; Mixed Media</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="proj-art-card">
            <div className="proj-art-text">
              <p className="proj-desc">
                A collection of mixed-media works, paintings, and digital art spanning years of creative exploration.
                The centerpiece is a large-scale self-portrait whose face is composed of hundreds of daily photographs
                transferred onto canvas, with hair built from layered string and T-shirts, paper cranes, and butterfly
                hair ties as symbolic elements. Other works range from acrylic paintings made as gifts to collages
                using magazine clippings, shells, and found objects.
              </p>
            </div>
            <Carousel images={artImages} alt="Mixed media artwork" className="carousel-art" />
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
