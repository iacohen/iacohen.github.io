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
