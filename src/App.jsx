import { GrainGradient } from '@paper-design/shaders-react'

const practiceGroups = [
  { name: 'Administrative Law', href: 'https://www.hensonlawoffice.com/practice_groups/' },
  { name: 'Business Law', href: 'https://www.hensonlawoffice.com/practice_groups/' },
  { name: 'Civil Litigation', href: 'https://www.hensonlawoffice.com/practice_groups/civil-litigation' },
  { name: 'Construction Law', href: 'https://www.hensonlawoffice.com/practice_groups/' },
  { name: 'Employment & Labor Law', href: 'https://www.hensonlawoffice.com/practice_groups/' },
  { name: 'Family Law', href: 'https://www.hensonlawoffice.com/practice_groups/family-law' },
  { name: 'Insurance Litigation', href: 'https://www.hensonlawoffice.com/practice_groups/insurance-litigation-law' },
  { name: 'Other Areas of Practice', href: 'https://www.hensonlawoffice.com/practice_groups/other-areas-of-practice' }
]

const attorneys = [
  {
    name: 'John H. Hutton',
    profile: 'https://hensonlawoffice.com/attorneys/john-hutton_attorney',
    image: 'https://hensonlawoffice.com/wp-content/uploads/2019/03/John-H.-Hutton-Copy-1.jpg',
    focus: 'Commercial law, construction law, real estate and contract law, civil litigation, and zoning/land use.'
  },
  {
    name: 'J. Phillip Gragson',
    profile: 'https://hensonlawoffice.com/attorneys/phillip_gragson_attorney',
    image: 'https://hensonlawoffice.com/wp-content/uploads/2019/03/J.-Phillip-Gragson-Copy.jpg',
    focus: 'Construction law, insurance defense, labor arbitration, personal injury trial practice, and employment matters.'
  },
  {
    name: 'Amanda S. Vogelsberg',
    profile: 'https://hensonlawoffice.com/attorneys/amanda_vogelsberg_attorney',
    image: 'https://hensonlawoffice.com/wp-content/uploads/2019/03/Amanda-Vogelsberg-Copy.jpg',
    focus: 'Civil litigation, labor law, employment discrimination, and family law including custody and support.'
  },
  {
    name: 'Kara L. Eisenhut',
    profile: 'https://www.hensonlawoffice.com/attorneys/kara-l-eisenhut/',
    image: 'https://www.hensonlawoffice.com/wp-content/uploads/2020/08/IMG_9864-scaled-e1596813972700.jpg',
    focus: 'Family law, criminal defense, probate and estate planning, landlord-tenant law, and contract disputes.'
  },
  {
    name: 'Harrison F. DeVaughn',
    profile: 'https://www.hensonlawoffice.com/attorneys/harrison-f-devaughn/',
    image: 'https://www.hensonlawoffice.com/wp-content/uploads/2025/10/Copy-04-scaled.jpg',
    focus: 'Family law, probate planning, civil litigation, employment discrimination claims, and business law.'
  }
]

const firmPrinciples = [
  'Ethical and zealous advocacy for businesses and individuals in Kansas.',
  'Attorneys actively engaged in state and community affairs.',
  'Case strategy grounded in practical legal outcomes and clear client communication.'
]

function App() {
  return (
    <div className="min-h-screen bg-[#f4f0e8] text-[#1c2230]">
      <header className="border-b border-[#c8bda9] bg-[#fbf8f2]">
        <div className="mx-auto flex max-w-[1580px] items-center justify-between px-4 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Henson Law Office home">
            <img src="/assets/logo.jpg" alt="Henson Law Office logo" className="h-12 w-auto" />
            <div>
              <p className="m-0 text-[11px] uppercase tracking-[0.2em] text-[#826944]">Topeka, Kansas</p>
              <p className="m-0 text-lg font-semibold tracking-tight">Henson Law Office</p>
            </div>
          </a>
          <div className="text-right">
            <p className="m-0 text-[11px] uppercase tracking-[0.16em] text-[#8a7c66]">Office Phone</p>
            <a className="text-lg font-semibold text-[#6d542f]" href="tel:+17852322200">
              785-232-2200
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="relative border-b border-[#c8bda9] bg-[#121a29] text-[#f6efe2]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <GrainGradient
              style={{ width: '100%', height: '100%' }}
              colorBack="hsl(221, 34%, 14%)"
              softness={0.76}
              intensity={0.3}
              noise={0}
              shape="corners"
              speed={0}
              colors={['hsl(36, 72%, 56%)', 'hsl(25, 56%, 46%)', 'hsl(352, 44%, 38%)']}
            />
            <div className="absolute inset-0 bg-[rgba(18,26,41,0.8)]" />
          </div>

          <div className="relative mx-auto grid max-w-[1580px] gap-8 px-4 py-12 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-14">
            <article className="border border-[rgba(255,255,255,0.24)] bg-[rgba(13,20,33,0.6)] p-6 md:p-8">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b985]">Legal expertise and experience</p>
              <h1 className="mt-3 text-4xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
                Counsel for complex disputes, transactions, and family matters.
              </h1>
              <p className="mt-4 max-w-[72ch] text-base leading-7 text-[#d6dde9]">
                Henson Law Office presents broad practice coverage with an emphasis on strategic
                legal planning, disciplined litigation, and direct client communication.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#attorneys"
                  className="border border-[#d8b985] bg-[#d8b985] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#162033]"
                >
                  Meet Attorneys
                </a>
                <a
                  href="#contact"
                  className="border border-[rgba(255,255,255,0.34)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f1efe8]"
                >
                  Contact Office
                </a>
              </div>
            </article>

            <figure className="border border-[rgba(255,255,255,0.24)] bg-black">
              <img src="/assets/team.jpg" alt="Henson Law Office attorneys" className="h-full min-h-[340px] w-full object-cover" />
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-[1580px] px-4 py-12 md:px-8">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <article className="border border-[#d2c7b4] bg-[#fbf8f2] p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7c66]">Firm Positioning</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">How the attorneys page frames the team</h2>
              <p className="mt-4 text-base leading-7 text-[#485166]">
                “Our attorneys are highly capable, well-rounded individuals who provide ethical and zealous advocacy.
                Many are actively involved in state and community affairs.”
              </p>
              <ul className="mt-5 space-y-4 pl-5 text-[#34405a]">
                {firmPrinciples.map((item) => (
                  <li key={item} className="leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-[#d2c7b4] bg-[#fbf8f2] p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7c66]">Office</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Henson Law Office</h2>
              <p className="mt-4 text-[#485166]">3649 SW Burlingame Rd., Ste. 200, Topeka, KS 66611-2155</p>
              <p className="mt-2 text-[#485166]">
                Phone:{' '}
                <a href="tel:+17852322200" className="font-semibold text-[#6d542f]">
                  785-232-2200
                </a>
              </p>
              <p className="mt-1 text-[#485166]">Fax: 785-232-3344</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.hensonlawoffice.com/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#6d542f] bg-[#6d542f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                >
                  Contact Page
                </a>
                <a
                  href="https://maps.google.com/?q=3649+SW+Burlingame+Rd,+Topeka,+KS+66611"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#c4b59d] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d542f]"
                >
                  Get Directions
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-[#c8bda9] bg-[#171f30] text-[#efe6d7]">
          <div className="mx-auto max-w-[1580px] px-4 py-12 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#c2a578]">Practice Groups</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Primary legal coverage</h2>
              </div>
              <a
                href="https://www.hensonlawoffice.com/practice_groups/"
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(255,255,255,0.28)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#efe6d7]"
              >
                View all practice groups
              </a>
            </div>
            <div className="mt-7 grid gap-px bg-[rgba(255,255,255,0.22)] md:grid-cols-2 lg:grid-cols-4">
              {practiceGroups.map((group) => (
                <a
                  key={group.name}
                  href={group.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#101726] px-4 py-4 text-sm font-semibold text-[#efe6d7]"
                >
                  {group.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="attorneys" className="mx-auto max-w-[1580px] px-4 py-14 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7c66]">Attorney Profiles</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Individual attorney pages from the source site</h2>
            </div>
            <a
              href="https://www.hensonlawoffice.com/attorneys/"
              target="_blank"
              rel="noreferrer"
              className="border border-[#c4b59d] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d542f]"
            >
              Open attorneys page
            </a>
          </div>

          <div className="mt-8 grid gap-px bg-[#d2c7b4] md:grid-cols-2 xl:grid-cols-3">
            {attorneys.map((attorney) => (
              <article key={attorney.name} className="bg-[#fbf8f2]">
                <img src={attorney.image} alt={attorney.name} className="h-72 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7c66]">Attorney</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{attorney.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#3f4960]">{attorney.focus}</p>
                  <a
                    href={attorney.profile}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block border border-[#c4b59d] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d542f]"
                  >
                    Open profile
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-[#c8bda9] bg-[#fbf8f2]">
          <div className="mx-auto grid max-w-[1580px] gap-6 px-4 py-10 md:grid-cols-[1fr_1fr] md:px-8">
            <article>
              <h3 className="m-0 text-2xl font-semibold tracking-tight">Request counsel</h3>
              <p className="mt-3 text-[#485166]">
                Reach Henson Law Office by phone for consultation scheduling or use the firm contact form.
              </p>
              <p className="mt-2 text-[#485166]">
                <a href="tel:+17852322200" className="font-semibold text-[#6d542f]">785-232-2200</a>
              </p>
            </article>
            <figure className="border border-[#d2c7b4] bg-white">
              <img src="/assets/office.jpg" alt="Henson Law Office building" className="h-full min-h-[240px] w-full object-cover" />
            </figure>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#c8bda9] bg-[#f0e8da]">
        <div className="mx-auto flex max-w-[1580px] flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs uppercase tracking-[0.16em] text-[#84745c] md:px-8">
          <span>Nule Pipeline Build</span>
          <span>Henson Law Office • Topeka, Kansas</span>
        </div>
      </footer>
    </div>
  )
}

export default App
