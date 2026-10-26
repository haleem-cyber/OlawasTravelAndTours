import { useState } from 'react'
import { ArrowIcon, BrandMark, WhatsAppIcon } from './Brand.jsx'
import { createWhatsAppUrl } from './contact.js'
import './App.css'

const destinations = [
  {
    name: 'Dubai',
    region: 'United Arab Emirates',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85',
    alt: 'Dubai skyline glowing at sunset',
  },
  {
    name: 'Zanzibar',
    region: 'Tanzania',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85',
    alt: 'Clear turquoise water along a tropical coast',
  },
  {
    name: 'London',
    region: 'United Kingdom',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85',
    alt: 'Historic London streets beside the River Thames',
  },
]

const services = [
  {
    number: '01',
    title: 'Visa application guidance',
    description:
      'Understand destination requirements, organise supporting documents, and prepare for the application process.',
    icon: 'passport',
    href: '/visa-guidance.html',
  },
  {
    number: '02',
    title: 'Flights & accommodation',
    description:
      'Compare suitable flight routes and places to stay around your dates, priorities, and travel plans.',
    icon: 'plane',
    href: '/flights-and-stays.html',
  },
  {
    number: '03',
    title: 'Travel consultation',
    description:
      'Talk through your destination, trip purpose, timing, and the practical next steps to consider.',
    icon: 'map',
    href: '#plan',
  },
  {
    number: '04',
    title: 'Study travel planning',
    description:
      'Organise travel details for a course, campus visit, or study abroad plan around your own requirements.',
    icon: 'passport',
    href: '/study-travel.html',
  },
  {
    number: '05',
    title: 'Custom itineraries',
    description:
      'Shape a destination wish-list into a considered trip plan, from the first stop to the last.',
    icon: 'map',
    href: '#plan',
  },
  {
    number: '06',
    title: 'Family & group trips',
    description:
      'Coordinate travel plans for families, friends, and groups with different needs and schedules.',
    icon: 'people',
    href: '#plan',
  },
]

const faqs = [
  {
    question: 'Can anyone guarantee that my visa will be approved?',
    answer:
      'No. Visa decisions are made by the relevant embassy, consulate, or immigration authority. Olawas can help you understand the process and prepare, but no travel agency can promise an approval.',
  },
  {
    question: 'Which documents will I need?',
    answer:
      'Requirements depend on your destination, nationality, reason for travel, and personal circumstances. Start by sharing your destination and trip purpose. Check current instructions from the official government or visa-centre source before submitting an application.',
  },
  {
    question: 'How long will visa processing take?',
    answer:
      'Processing times vary by destination, application type, season, and individual case. Check the current official estimate and plan ahead; an estimate is not a guarantee of a decision date.',
  },
  {
    question: 'What will my travel quote include?',
    answer:
      'Ask for a clear breakdown before confirming. Agency service fees are separate from charges set by governments, embassies, visa centres, airlines, hotels, or other providers. Those third-party charges can change.',
  },
  {
    question: 'Can I ask for help with only one part of my trip?',
    answer:
      'Yes. Tell us whether you need help with visa preparation, flights, accommodation, an itinerary, study-related travel planning, or a combination. The right options depend on your destination and requirements.',
  },
]

function ServiceIcon({ name }) {
  const paths = {
    passport: <><rect x="5" y="3.5" width="14" height="17" rx="2" /><circle cx="12" cy="11" r="3" /><path d="M8 17h8M12 8v6m-3-3h6" /></>,
    plane: <path d="m21 3-7.2 18-3.5-7.3L3 10.2 21 3ZM10.3 13.7 15 9" />,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15m6-12v15" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20H3.5Zm12-15a3 3 0 0 1 0 6m2 3a4.5 4.5 0 0 1 3 4.3V20h-3" /></>,
  }

  return (
    <svg
      aria-hidden="true"
      className="service-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [destination, setDestination] = useState('')
  const [travelMonth, setTravelMonth] = useState('')
  const [travellers, setTravellers] = useState('2')
  const [travelStyle, setTravelStyle] = useState('A little bit of everything')
  const [tripBrief, setTripBrief] = useState('')

  const closeMenu = () => setMenuOpen(false)

  function handleSubmit(event) {
    event.preventDefault()
    const month = travelMonth
      ? new Date(`${travelMonth}-01T12:00:00`).toLocaleDateString('en', {
          month: 'long',
          year: 'numeric',
        })
      : 'Dates to be decided'

    setTripBrief(
      [
        'Hello Olawas Travel & Tours,',
        '',
        `I would love help planning a trip to ${destination}.`,
        `When: ${month}`,
        `Travellers: ${travellers}`,
        `Travel style: ${travelStyle}`,
        '',
        'Please let me know the next steps.',
      ].join('\n'),
    )
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Olawas Travel & Tours home" onClick={closeMenu}>
          <BrandMark />
          <span className="brand-words"><strong>olawas</strong><small>TRAVEL & TOURS</small></span>
        </a>
        <a
          aria-label="Chat with Olawas on WhatsApp"
          className="header-whatsapp"
          href={createWhatsAppUrl('Hello Olawas Travel & Tours, I would like to ask about planning a trip.')}
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsAppIcon /><span>WhatsApp</span>
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span /><span />
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#destinations" onClick={closeMenu}>Where to go</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#faqs" onClick={closeMenu}>FAQs</a>
          <a
            className="nav-cta whatsapp-cta"
            href={createWhatsAppUrl('Hello Olawas Travel & Tours, I would like to ask about planning a trip.')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon /><span>Chat on WhatsApp</span><ArrowIcon />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A better way to get away</p>
            <h1 id="hero-title">The world is closer <em>than you think.</em></h1>
            <p className="hero-description">
              Thoughtful travel planning, helpful guidance, and the little details handled. Tell us where you want to go; we’ll help you figure out the how.
            </p>
            <div className="hero-actions">
              <a
                className="button whatsapp-hero"
                href={createWhatsAppUrl('Hello Olawas Travel & Tours, I would like to ask about planning a trip.')}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon />Chat with us on WhatsApp<ArrowIcon />
              </a>
              <a className="text-link" href="#plan">Plan a trip <ArrowIcon /></a>
              <a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note">
              <span aria-hidden="true" className="note-spark">✳</span>
              <p>Big holiday, quick getaway, or first passport stamp.<br /><strong>There’s room for every kind of journey.</strong></p>
            </div>
          </div>
          <div className="hero-visual">
            <img
              alt="Sunlit mountain road winding toward a faraway horizon"
              className="hero-image"
              fetchPriority="high"
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90"
            />
            <div className="image-caption"><span>MAKE THE JOURNEY YOURS</span><span className="caption-line" /><span>01 / 04</span></div>
            <div className="hero-stamp" aria-hidden="true"><span>GO SOMEWHERE</span><BrandMark /><span>FEEL SOMETHING</span></div>
            <div className="hero-image-label"><span className="label-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
          </div>
        </section>

        <section className="intro-band" aria-label="Travel support">
          <p>GOOD TRIPS START WITH A GOOD PLAN</p>
          <span aria-hidden="true">✳</span>
          <p>MADE FOR THE WAY YOU TRAVEL</p>
          <span aria-hidden="true">✳</span>
          <p>HERE FOR THE DETAILS</p>
        </section>

        <section className="services section-wrap" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR TRIP, YOUR WAY</p>
              <h2 id="services-title">All the moving parts.<br /><em>Moving together.</em></h2>
            </div>
              <p className="section-aside">From understanding visa steps to coordinating flights, stays, and study or holiday plans, get practical support for the parts that make a journey work.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <div className="service-top"><ServiceIcon name={service.icon} /><span>{service.number}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="service-link" href={service.href} aria-label={`Learn about ${service.title}`}>
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="destinations" id="destinations" aria-labelledby="destinations-title">
          <div className="section-wrap destination-inner">
            <div className="section-heading destination-heading">
              <div>
                <p className="eyebrow">A LITTLE INSPIRATION</p>
                <h2 id="destinations-title">Somewhere on<br /><em>your mind?</em></h2>
              </div>
              <p className="section-aside">A few places to get the daydream going. Pick one to start your trip brief, or tell us about somewhere else entirely.</p>
            </div>
            <div className="destination-grid">
              {destinations.map((place, index) => (
                <a
                  className={`destination-card destination-card-${index + 1}`}
                  href="#plan"
                  key={place.name}
                  onClick={() => setDestination(place.name)}
                >
                  <img alt={place.alt} loading="lazy" src={place.image} />
                  <span className="destination-overlay" />
                  <span className="destination-index">0{index + 1}</span>
                  <span className="destination-info"><span>{place.region}</span><strong>{place.name}</strong></span>
                  <span className="destination-arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
            <p className="destination-note">These destinations are inspiration, not a list of confirmed services. Entry rules, eligibility, and availability vary by traveller and trip.</p>
          </div>
        </section>

        <section className="approach section-wrap" id="approach" aria-labelledby="approach-title">
          <div className="approach-mark" aria-hidden="true"><BrandMark /><span>OLAWAS / TRAVEL NOTES</span></div>
          <div className="approach-copy">
            <p className="eyebrow">THE OLAWAS WAY</p>
            <h2 id="approach-title">Less guesswork.<br /><em>More “we’re here.”</em></h2>
            <p>Good travel should feel exciting before you leave home. We start by listening, get clear about what matters to you, and help bring your plans into focus, one decision at a time.</p>
            <a className="text-link approach-link" href="#plan">Start with an idea <ArrowIcon /></a>
          </div>
          <div className="approach-steps">
            <div><span>01</span><p><strong>Tell us what you have in mind</strong><br />A place, a reason, or just a feeling.</p></div>
            <div><span>02</span><p><strong>Make a plan that fits</strong><br />We’ll help you explore the practical details.</p></div>
            <div><span>03</span><p><strong>Get ready to go</strong><br />Take the next step with more clarity.</p></div>
          </div>
        </section>

        <section className="faq-section" id="faqs" aria-labelledby="faq-title">
          <div className="faq-inner section-wrap">
            <div className="faq-intro">
              <p className="eyebrow">GOOD TO KNOW BEFORE YOU GO</p>
              <h2 id="faq-title">A few useful<br /><em>things to know.</em></h2>
              <p>Travel rules depend on your destination and circumstances. Use these answers as a starting point, then check current official guidance for your trip.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="planning" id="plan" aria-labelledby="plan-title">
          <div className="planning-inner section-wrap">
            <div className="planning-copy">
              <p className="eyebrow">YOUR FIRST STEP</p>
              <h2 id="plan-title">Let’s get your<br /><em>trip in motion.</em></h2>
              <p>Share your destination, timing, and travel style. We’ll open a WhatsApp chat with your enquiry ready for you to review. Prefer to talk first? Use the WhatsApp button at the top of this page.</p>
              <div className="planning-footnote"><span aria-hidden="true">✳</span><p>The website does not submit this form. WhatsApp opens with a prefilled draft; Olawas receives your enquiry only after you tap Send.</p></div>
            </div>
            <div className="planner-form-wrap">
              <form className="planner-form" onSubmit={handleSubmit}>
                <label htmlFor="destination">Where would you like to go?</label>
                <input
                  autoComplete="country-name"
                  id="destination"
                  onChange={(event) => setDestination(event.target.value)}
                  placeholder="A country, city, or ‘somewhere warm’"
                  required
                  value={destination}
                />
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="travel-month">When are you thinking?</label>
                    <input id="travel-month" onChange={(event) => setTravelMonth(event.target.value)} type="month" value={travelMonth} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="travellers">Travellers</label>
                    <select id="travellers" onChange={(event) => setTravellers(event.target.value)} value={travellers}>
                      <option value="1">1 traveller</option>
                      <option value="2">2 travellers</option>
                      <option value="3">3 travellers</option>
                      <option value="4">4 travellers</option>
                      <option value="5+">5 or more</option>
                    </select>
                  </div>
                </div>
                <label htmlFor="travel-style">What kind of trip feels right?</label>
                <select id="travel-style" onChange={(event) => setTravelStyle(event.target.value)} value={travelStyle}>
                  <option>A little bit of everything</option>
                  <option>Rest and recharge</option>
                  <option>Culture and exploring</option>
                  <option>Family time</option>
                  <option>Work or study</option>
                  <option>Something else</option>
                </select>
                <button className="button button-dark form-submit" type="submit">Create my trip brief <ArrowIcon /></button>
              </form>
              {tripBrief && (
                <div aria-live="polite" className="trip-result">
                  <label htmlFor="trip-brief">Your trip brief</label>
                  <textarea id="trip-brief" onChange={(event) => setTripBrief(event.target.value)} readOnly rows="7" value={tripBrief} />
                  <a
                    className="button button-dark whatsapp-button"
                    href={createWhatsAppUrl(tripBrief)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Continue in WhatsApp <ArrowIcon />
                  </a>
                  <p className="whatsapp-note">Review your message in WhatsApp, then tap Send to contact Olawas.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <BrandMark />
          <span className="brand-words"><strong>olawas</strong><small>TRAVEL & TOURS</small></span>
        </a>
        <p>Go well. Come back with stories.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Olawas Travel & Tours</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  )
}

export default App