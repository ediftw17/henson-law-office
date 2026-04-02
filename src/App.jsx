import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
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
    id: 'john-h-hutton',
    name: 'John H. Hutton',
    profile: 'https://www.hensonlawoffice.com/attorneys/john-hutton_attorney/',
    image: 'https://www.hensonlawoffice.com/wp-content/uploads/2019/03/John-H.-Hutton-Copy-1.jpg',
    imagePosition: 'center 16%',
    focus: 'Commercial law, construction law, real estate and contract law, civil litigation, and zoning/land use.',
    practiceAreas: [
      'Commercial Law',
      'Construction Law',
      'Real Estate and Contract Law',
      'Corporate and Business Law',
      'Civil Litigation',
      'Banking Law',
      'Zoning and Land Use'
    ],
    education: ['University of Kansas (B.A., 1991)', 'University of Kansas (J.D., 1994)'],
    admissions: [
      'Kansas (1994)',
      'Missouri (1995)',
      'U.S. District Court, District of Kansas',
      'U.S. District Court, Western District of Missouri',
      'Kickapoo Tribal District Court'
    ],
    activities: [
      'Topeka Bar Association (Ethics and Grievance Committee)',
      'Kansas Bar Association',
      'American Bar Association',
      'The Missouri Bar'
    ]
  },
  {
    id: 'j-phillip-gragson',
    name: 'J. Phillip Gragson',
    profile: 'https://www.hensonlawoffice.com/attorneys/phillip_gragson_attorney/',
    image: 'https://www.hensonlawoffice.com/wp-content/uploads/2019/03/J.-Phillip-Gragson-Copy.jpg',
    imagePosition: 'center 18%',
    focus: 'Construction law, insurance defense, labor arbitration, personal injury trial practice, and employment matters.',
    practiceAreas: [
      'Construction Law',
      'Business Law',
      'Insurance Defense',
      'Civil Litigation',
      'Landlord and Tenant Law',
      'Employment Law',
      'Labor Arbitration',
      'Personal Injury',
      'Trial Practice',
      'Employment Discrimination Claims and Litigation'
    ],
    education: [
      'Washburn University of Topeka (B.P.A., cum laude, 1990)',
      'Washburn University (J.D., cum laude, 1993)'
    ],
    admissions: [
      'Missouri (1993)',
      'Kansas (1994)',
      'U.S. Court of Appeals, Tenth Circuit',
      'U.S. District Court, Western District of Missouri'
    ],
    activities: ['Washburn Law Journal (1991-1993)', 'Kansas and Topeka Bar Associations']
  },
  {
    id: 'amanda-s-vogelsberg',
    name: 'Amanda S. Vogelsberg',
    profile: 'https://www.hensonlawoffice.com/attorneys/amanda_vogelsberg_attorney/',
    image: 'https://www.hensonlawoffice.com/wp-content/uploads/2019/03/Amanda-Vogelsberg-Copy.jpg',
    imagePosition: 'center 17%',
    focus: 'Civil litigation, labor law, employment discrimination, and family law including custody and support.',
    practiceAreas: [
      'Civil Litigation',
      'Employment Discrimination Claims and Litigation',
      'Labor Law',
      'Labor Arbitration and Fact Finding',
      'Family Law: Divorce, Child Custody, Child Support, Adoptions'
    ],
    education: ['University of Central Missouri, cum laude (B.A., 2004)', 'University of Kansas (J.D., 2007)'],
    admissions: [
      'Kansas and U.S. District Court, District of Kansas (2007)',
      'Missouri and U.S. District Court, Western District of Missouri (2008)',
      'U.S. Court of Appeals, Tenth Circuit (2011)'
    ],
    activities: [
      'Kansas Bar Associations',
      'Topeka Bar Associations',
      'Approved by the Kansas Department of Education as Hearing Examiner for Teacher Due Process cases'
    ]
  },
  {
    id: 'kara-l-eisenhut',
    name: 'Kara L. Eisenhut',
    profile: 'https://www.hensonlawoffice.com/attorneys/kara-l-eisenhut/',
    image: 'https://www.hensonlawoffice.com/wp-content/uploads/2020/08/IMG_9864-scaled-e1596813972700.jpg',
    imagePosition: 'center 28%',
    focus: 'Family law, criminal defense, probate and estate planning, landlord-tenant law, and contract disputes.',
    practiceAreas: [
      'Family Law: Divorce, Child Custody, Child Support, Adoptions',
      'Criminal Defense',
      'Probate: Estate Plans, Wills, Trusts, Power of Attorney, Medical Directives, Estate Disputes',
      'Social Security Disability',
      'Landlord and Tenant Law',
      'Civil Litigation',
      'Employment Discrimination Claims and Litigation',
      'Corporate and Business Law',
      'Contract Law'
    ],
    education: ['Washburn University (B.L.S., 2007)', 'Washburn University School of Law (J.D., 2015)'],
    admissions: ['Kansas (2016)', 'U.S. District Court, District of Kansas (2016)'],
    activities: ['Topeka Bar Association', 'Kansas Bar Association']
  },
  {
    id: 'harrison-f-devaughn',
    name: 'Harrison F. DeVaughn',
    profile: 'https://www.hensonlawoffice.com/attorneys/harrison-f-devaughn/',
    image: 'https://www.hensonlawoffice.com/wp-content/uploads/2025/10/Copy-04-scaled.jpg',
    imagePosition: 'center 21%',
    focus: 'Family law, probate planning, civil litigation, employment discrimination claims, and business law.',
    practiceAreas: [
      'Family Law: Divorce, Child Custody, Child Support',
      'Probate: Estate Plans, Wills, Trusts, Power of Attorney',
      'Civil Litigation',
      'Employment Discrimination Claims',
      'Corporate and Business Law',
      'Contract Law'
    ],
    education: ['Baker University (B.S., 2022)', 'Washburn University School of Law (J.D., 2025)'],
    admissions: ['Kansas (2025)', 'U.S. District Court, District of Kansas (2025)'],
    activities: ['Topeka Bar Association', 'Kansas Bar Association']
  }
]

const firmPrinciples = [
  'Ethical and zealous advocacy for businesses and individuals in Kansas.',
  'Attorneys actively engaged in state and community affairs.',
  'Case strategy grounded in practical legal outcomes and clear client communication.'
]

const heroStats = [
  { label: 'Attorneys on team', value: 5 },
  { label: 'Practice groups listed', value: 8 },
  { label: 'State admissions represented', value: 2 },
  { label: 'Topeka office', value: 1 }
]

const revealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
}

const revealItem = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.66,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }

    let rafId = 0
    const durationMs = 1400
    const startedAt = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setDisplay(Math.round(value * eased))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
    </span>
  )
}

function App() {
  const [selectedAttorneyId, setSelectedAttorneyId] = useState(attorneys[0].id)

  const selectedAttorney = useMemo(
    () => attorneys.find((attorney) => attorney.id === selectedAttorneyId) ?? attorneys[0],
    [selectedAttorneyId]
  )

  const chooseAttorney = (attorneyId) => {
    setSelectedAttorneyId(attorneyId)
    requestAnimationFrame(() => {
      document.getElementById('profile-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

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
            <div className="absolute inset-0 bg-[rgba(18,26,41,0.72)]" />
          </div>

          <motion.div
            className="relative mx-auto grid max-w-[1580px] gap-8 px-4 py-12 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-14"
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.28 }}
          >
            <motion.article variants={revealItem} className="border border-[rgba(255,255,255,0.24)] bg-[rgba(13,20,33,0.58)] p-6 md:p-8">
              <motion.p variants={revealItem} className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b985]">
                Legal expertise and experience
              </motion.p>
              <motion.h1 variants={revealItem} className="mt-3 text-4xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
                Counsel for complex disputes, transactions, and family matters.
              </motion.h1>
              <motion.p variants={revealItem} className="mt-4 max-w-[72ch] text-base leading-7 text-[#d6dde9]">
                Henson Law Office presents broad practice coverage with an emphasis on strategic legal planning,
                disciplined litigation, and direct client communication.
              </motion.p>
              <motion.div variants={revealItem} className="mt-7 flex flex-wrap gap-3">
                <motion.a
                  href="#attorneys"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#d8b985] bg-[#d8b985] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#162033]"
                >
                  Meet Attorneys
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[rgba(255,255,255,0.34)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f1efe8]"
                >
                  Contact Office
                </motion.a>
              </motion.div>
            </motion.article>

            <motion.figure
              variants={revealItem}
              initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.32 }}
              className="overflow-hidden border border-[rgba(255,255,255,0.24)] bg-black"
            >
              <motion.img
                src="/assets/team.jpg"
                alt="Henson Law Office attorneys"
                className="h-full min-h-[340px] w-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.figure>
          </motion.div>

          <motion.div
            className="relative mx-auto grid max-w-[1580px] gap-px border-t border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.2)] px-4 pb-10 md:grid-cols-2 md:px-8 lg:grid-cols-4"
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {heroStats.map((stat) => (
              <motion.article variants={revealItem} key={stat.label} className="bg-[rgba(12,19,31,0.78)] px-4 py-5">
                <p className="m-0 text-[11px] uppercase tracking-[0.16em] text-[#b8a786]">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-[#f6efe2]">
                  <CountUp value={stat.value} />
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1580px] px-4 py-12 md:px-8">
          <motion.div
            className="grid gap-8 md:grid-cols-[1fr_1fr]"
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <motion.article variants={revealItem} className="border border-[#d2c7b4] bg-[#fbf8f2] p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7c66]">Firm Positioning</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">How the attorneys page frames the team</h2>
              <p className="mt-4 text-base leading-7 text-[#485166]">
                "Our attorneys are highly capable, well-rounded individuals who provide ethical and zealous advocacy.
                Many are actively involved in state and community affairs."
              </p>
              <ul className="mt-5 space-y-4 pl-5 text-[#34405a]">
                {firmPrinciples.map((item) => (
                  <li key={item} className="leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article variants={revealItem} className="border border-[#d2c7b4] bg-[#fbf8f2] p-6">
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
                <motion.a
                  href="https://www.hensonlawoffice.com/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#6d542f] bg-[#6d542f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                >
                  Contact Page
                </motion.a>
                <motion.a
                  href="https://maps.google.com/?q=3649+SW+Burlingame+Rd,+Topeka,+KS+66611"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#c4b59d] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d542f]"
                >
                  Get Directions
                </motion.a>
              </div>
            </motion.article>
          </motion.div>
        </section>

        <section className="border-y border-[#c8bda9] bg-[#171f30] text-[#efe6d7]">
          <div className="mx-auto max-w-[1580px] px-4 py-12 md:px-8">
            <motion.div
              className="flex flex-wrap items-end justify-between gap-5"
              variants={revealContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={revealItem}>
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#c2a578]">Practice Groups</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Primary legal coverage</h2>
              </motion.div>
              <motion.a
                variants={revealItem}
                href="https://www.hensonlawoffice.com/practice_groups/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-[rgba(255,255,255,0.28)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#efe6d7]"
              >
                View all practice groups
              </motion.a>
            </motion.div>
            <motion.div
              className="mt-7 grid gap-px bg-[rgba(255,255,255,0.22)] md:grid-cols-2 lg:grid-cols-4"
              variants={revealContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {practiceGroups.map((group) => (
                <motion.a
                  key={group.name}
                  href={group.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={revealItem}
                  whileHover={{ y: -4, scale: 1.01, backgroundColor: '#17223a' }}
                  className="bg-[#101726] px-4 py-4 text-sm font-semibold text-[#efe6d7]"
                >
                  {group.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="attorneys" className="mx-auto max-w-[1580px] px-4 py-14 md:px-8">
          <motion.div
            className="flex flex-wrap items-end justify-between gap-5"
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={revealItem}>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7c66]">Attorney Profiles</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Full attorney profiles implemented in this site</h2>
            </motion.div>
            <motion.p
              variants={revealItem}
              className="border border-[#c4b59d] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d542f]"
            >
              Click any card to load local details below
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-px bg-[#d2c7b4] md:grid-cols-2 xl:grid-cols-3"
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
          >
            {attorneys.map((attorney, index) => {
              const isFinalCardWithoutPair = attorneys.length % 3 === 2 && index === attorneys.length - 1
              const isSelected = attorney.id === selectedAttorney.id

              return (
                <motion.article
                  key={attorney.id}
                  variants={revealItem}
                  whileHover={{ y: -8 }}
                  className={`bg-[#fbf8f2] ${isFinalCardWithoutPair ? 'xl:col-span-2' : ''}`}
                >
                  <div className="overflow-hidden border-b border-[#d2c7b4]">
                    <motion.img
                      src={attorney.image}
                      alt={attorney.name}
                      className="h-80 w-full object-cover md:h-96 xl:h-80"
                      loading="lazy"
                      style={{ objectPosition: attorney.imagePosition }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="p-5">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7c66]">Attorney</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{attorney.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#3f4960]">{attorney.focus}</p>
                    <motion.button
                      type="button"
                      onClick={() => chooseAttorney(attorney.id)}
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`mt-4 inline-block border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                        isSelected
                          ? 'border-[#6d542f] bg-[#6d542f] text-white'
                          : 'border-[#c4b59d] bg-white text-[#6d542f]'
                      }`}
                    >
                      View full profile
                    </motion.button>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          <div id="profile-detail" className="mt-10 border border-[#d2c7b4] bg-[#fbf8f2]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedAttorney.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-0 lg:grid-cols-[0.44fr_0.56fr]"
              >
                <div className="overflow-hidden border-b border-[#d2c7b4] lg:border-b-0 lg:border-r">
                  <motion.img
                    src={selectedAttorney.image}
                    alt={selectedAttorney.name}
                    className="h-full min-h-[420px] w-full object-cover"
                    style={{ objectPosition: selectedAttorney.imagePosition }}
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7c66]">Selected Attorney Profile</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{selectedAttorney.name}</h3>
                  <p className="mt-4 text-base leading-7 text-[#3f4960]">{selectedAttorney.focus}</p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <article>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7c66]">Practice Areas</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-[#364058]">
                        {selectedAttorney.practiceAreas.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>

                    <article>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7c66]">Education</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-[#364058]">
                        {selectedAttorney.education.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <article>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7c66]">Bar Admissions</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-[#364058]">
                        {selectedAttorney.admissions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>

                    <article>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7c66]">Professional Activities</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-[#364058]">
                        {selectedAttorney.activities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <motion.a
                      href="tel:+17852322200"
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="border border-[#6d542f] bg-[#6d542f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                    >
                      Call 785-232-2200
                    </motion.a>
                    <motion.a
                      href={selectedAttorney.profile}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="border border-[#c4b59d] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d542f]"
                    >
                      View source bio
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>

        <section id="contact" className="border-t border-[#c8bda9] bg-[#fbf8f2]">
          <motion.div
            className="mx-auto grid max-w-[1580px] gap-6 px-4 py-10 md:grid-cols-[1fr_1fr] md:px-8"
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <motion.article variants={revealItem}>
              <h3 className="m-0 text-2xl font-semibold tracking-tight">Request counsel</h3>
              <p className="mt-3 text-[#485166]">
                Reach Henson Law Office by phone for consultation scheduling or use the firm contact form.
              </p>
              <p className="mt-2 text-[#485166]">
                <a href="tel:+17852322200" className="font-semibold text-[#6d542f]">
                  785-232-2200
                </a>
              </p>
            </motion.article>
            <motion.figure variants={revealItem} className="overflow-hidden border border-[#d2c7b4] bg-white">
              <motion.img
                src="/assets/office.jpg"
                alt="Henson Law Office building"
                className="h-full min-h-[240px] w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.figure>
          </motion.div>
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
