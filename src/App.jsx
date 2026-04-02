import './App.css'

const practiceAreas = [
  'Administrative Law',
  'Business Law',
  'Civil Litigation',
  'Construction Law',
  'Employment & Labor Law',
  'Family Law',
  'Insurance Litigation',
  'Real Estate, Zoning & Land Use'
]

const positioning = [
  {
    title: 'Strategic Legal Counsel',
    body: 'Case-by-case planning that balances legal outcomes, timelines, and business realities.'
  },
  {
    title: 'Litigation Experience',
    body: 'Representation before local, state, and federal courts and agencies when stakes are high.'
  },
  {
    title: 'Client Accessibility',
    body: 'Responsive communication and practical guidance throughout the life of each matter.'
  }
]

function App() {
  return (
    <div className="law-app">
      <header className="law-header">
        <div className="law-shell law-nav">
          <a className="law-brand" href="#top" aria-label="Henson Law Office home">
            <img src="/assets/logo.jpg" alt="Henson Law Office logo" />
          </a>
          <a className="law-call" href="tel:+17852322200">
            785-232-2200
          </a>
        </div>
      </header>

      <main id="top">
        <section className="law-hero">
          <div className="law-shell hero-grid">
            <article>
              <p className="eyebrow">Legal Expertise And Experience</p>
              <h1>Practical counsel for complex legal challenges.</h1>
              <p>
                Henson Law Office advises businesses and individuals with disciplined strategy,
                litigation depth, and clear communication from intake through resolution.
              </p>
              <div className="hero-actions">
                <a href="#contact">Contact Office</a>
                <a className="ghost" href="#practice">
                  View Practice Areas
                </a>
              </div>
            </article>
            <img src="/assets/team.jpg" alt="Henson Law Office team" />
          </div>
        </section>

        <section className="law-shell position-grid">
          {positioning.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <section className="practice-band" id="practice">
          <div className="law-shell practice-inner">
            <div className="practice-head">
              <p className="eyebrow">Areas Of Practice</p>
              <h2>Broad legal coverage, delivered with focused attention.</h2>
            </div>
            <div className="practice-grid">
              {practiceAreas.map((area) => (
                <div key={area} className="practice-pill">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="law-shell office-grid" id="contact">
          <article className="office-card">
            <p className="eyebrow">Office</p>
            <h3>Henson Law Office</h3>
            <p>3649 SW Burlingame Rd., Ste. 200, Topeka, KS 66611-2155</p>
            <p>
              Phone: <a href="tel:+17852322200">785-232-2200</a>
              <br />
              Fax: 785-232-3344
            </p>
            <a className="map-link" href="https://maps.google.com/?q=3649+SW+Burlingame+Rd+Topeka+KS+66611" target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </article>
          <img src="/assets/office.jpg" alt="Henson Law Office building" />
        </section>
      </main>

      <a className="mobile-cta" href="tel:+17852322200">
        Call Henson Law Office
      </a>
    </div>
  )
}

export default App
