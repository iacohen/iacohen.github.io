import FadeIn from '../components/FadeIn'

const education = [
  {
    org: 'Stanford University',
    location: 'Stanford, CA',
    dates: '2022–present',
    degree: 'B.S. Mechanical Engineering (2026) · M.S. Mechanical Engineering (expected 2027)',
    notes: ['Tau Beta Pi — Engineering Honor Society Member'],
  },
  {
    org: 'University Laboratory High School',
    location: 'Urbana, IL',
    dates: '2018–2022',
    notes: ['Matt Wilhelm "Service With A Smile" Award', 'Emma Koenker Foreign Language Award', 'Poésie en Liberté, Palmarès des établissements de l’étranger, Deuxième Prix, 2021'],
  },
]

const work = [
  {
    org: 'Stanford Product Realization Laboratory',
    role: 'Course Assistant',
    location: 'Stanford, CA',
    dates: 'Sep 2026-present',
    bullets: [
      'Part-time CA position at the Stanford machine shop teaching facility.',
      'Course Assistant in the PRL, managing the shop for maintenance, operating hours, and safety, and serving students in a mentorship and instructive role.',
    ],
  },
  {
    org: 'Gilead Sciences / Stanford ME Senior Capstone',
    role: 'Device Engineer & Finance and Materials Manager',
    location: 'Stanford, CA',
    dates: 'Sep 2025-Mar 2026',
    bullets: [
      'Designing, prototyping, and testing a mechanical vial-to-vial drug transfer device to enable safe, accurate 1 mL sterile dosing.',
      'Modeling internal fluid pathways and actuation forces to achieve target flow rates and ergonomic operation.',
      'Conducting validation testing and iterating on materials and CAD prototypes using experimental data.',
      'Collaborating directly with Gilead engineers to refine safety, usability, and manufacturability constraints.',
    ],
  },

  {
    org: 'CHARM Lab at Stanford University',
    role: 'Research Intern',
    location: 'Stanford, CA',
    dates: 'Jun 2025–Mar 2026',
    bullets: [
      'Redesigned and optimized a pneumatic haptic system with emphasis on modularity, flow path efficiency, and pressure–force characterization.',
      'Conducted a 20+ participant user study, collecting and analyzing pressure and force data to inform system performance improvements.',
      'Developed and validated pressure-to-force models to guide iterative design optimization.',
    ],
  },
  {
    org: 'SIM Lab at Stanford University',
    role: 'Research Intern',
    location: 'Stanford, CA',
    dates: 'Jan 2025–Jun 2025',
    bullets: [
      'Fabricated and tested experimental samples to study the mechanical behavior of blood clots under varied geometries and compositions.',
      'Processed experimental data and presented findings, evaluating how material properties influence system response.',
    ],
  },
  {
    org: 'Stanford University Residential Education',
    role: 'Resident Assistant & House Treasurer',
    location: 'Stanford, CA',
    dates: 'Aug 2024–Jun 2026',
    bullets: [
      'Led onboarding and training, coordinated events for 90+ residents, and managed budgeting and finances while collaborating with faculty and student teams.',
    ],
  },
  {
    org: 'Center for Power Optimization of Electro-Thermal Systems (POETS) / Ford Motors',
    role: 'Research Intern',
    location: 'Urbana, IL',
    dates: 'May 2024–Sep 2024',
    bullets: [
      'Developed algorithmic tools to automate thermal management system (TMS) design for Battery Electric Vehicles, improving system efficiency and cost optimization.',
      'Applied heat transfer, fluid flow, and system-level optimization principles to evaluate design tradeoffs.',
      'Presented results across three technical poster sessions and collaborated with Ford engineers to iteratively refine design criteria.',
    ],
  },
  {
    org: 'Transform Tutoring, LLC',
    role: 'Tutor & Interviewer',
    location: 'Palo Alto, CA',
    dates: 'Sep 2023–present',
    bullets: [
      'Designed structured lesson plans and mentored students in advanced mathematics; interviewed and evaluated tutor candidates.',
    ],
  },
  {
    org: 'AVIATE Center @ University of Illinois, Urbana-Champaign',
    role: 'Research Intern',
    location: 'Champaign, IL',
    dates: 'Jun 2023–Sep 2023',
    bullets: [
      'Applied control theory and system modeling using MATLAB and Simulink to autonomous systems problems.',
    ],
  },
  {
    org: 'Urbana Fine Arts Center / Champaign Urbana Ballet',
    role: 'Instructor & Company Member',
    location: 'Champaign-Urbana, IL',
    dates: '2017-2022',
    bullets: [
      'Part-time dance instructor for students aged 5-18 in ballet and tap.',
    ],
  },
]

const leadership = [
  {
    org: 'Stanford Light Opera Company',
    role: 'Vice President, Choreographer, Board Member',
    dates: 'Jan 2024–present',
  },
  {
    org: 'Ram\'s Head Theatrical Society & Stanford TAPS',
    role: 'Stage Manager',
    dates: 'Aug 2023–Dec 2023',
  },
  {
    org: 'Champaign Urbana Ballet Student Production',
    role: 'Producer & Film Editor',
    dates: 'Summer 2022',
  },
]

// Delays run cumulatively across the whole page instead of restarting
// per block, so a later block never fades in "ahead of" an earlier one
// when both are visible in the viewport at the same time.
const workDelayOffset = education.length
const leadershipDelayOffset = education.length + work.length

export default function Experience() {
  return (
    <main>
      <section id="experience">
        <FadeIn as="h2">Experience</FadeIn>

        {/* Education */}
        <div className="exp-block">
          <FadeIn><p className="exp-block-label">Education</p></FadeIn>
          <div className="exp-group">
            {education.map((e, i) => (
              <FadeIn key={e.org} delay={0.1 * (i + 1)}>
                <div className="exp-entry">
                  <div className="exp-header">
                    <h3 className="exp-org">{e.org}</h3>
                    <span className="exp-location-date">{e.location} · {e.dates}</span>
                  </div>
                  {e.degree && <p className="exp-degree">{e.degree}</p>}
                  {e.notes && (
                    <ul className="exp-notes">
                      {e.notes.map(n => <li key={n}>{n}</li>)}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="exp-block">
          <FadeIn><p className="exp-block-label">Work Experience</p></FadeIn>
          <div className="exp-group">
            {work.map((e, i) => (
              <FadeIn key={e.org + e.dates} delay={0.1 * (workDelayOffset + i + 1)}>
                <div className="exp-entry">
                  <div className="exp-header">
                    <h3 className="exp-org">{e.org}</h3>
                    <span className="exp-location-date">{e.location} · {e.dates}</span>
                  </div>
                  <p className="exp-role">{e.role}</p>
                  {e.bullets && (
                    <ul className="exp-bullets">
                      {e.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="exp-block">
          <FadeIn><p className="exp-block-label">Leadership</p></FadeIn>
          <div className="exp-group">
            {leadership.map((e, i) => (
              <FadeIn key={e.org} delay={0.1 * (leadershipDelayOffset + i + 1)}>
                <div className="exp-entry">
                  <div className="exp-header">
                    <h3 className="exp-org">{e.org}</h3>
                    <span className="exp-location-date">{e.dates}</span>
                  </div>
                  <p className="exp-role">{e.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </section>
    </main>
  )
}
