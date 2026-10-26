import { ArrowIcon, BrandMark, WhatsAppIcon } from './Brand.jsx'
import { createWhatsAppUrl } from './contact.js'
import './App.css'
import './ServicePage.css'

const pages = {
  visa: {
    eyebrow: 'VISA APPLICATION GUIDANCE',
    title: 'A clearer start to your visa application.',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85',
    heroAlt: 'Travel destination architecture in warm afternoon light',
    intro:
      'Understand the steps, identify the documents to prepare, and know which official guidance to check before you apply.',
    overview:
      'Visa requirements are set by each destination and depend on your passport, purpose of travel, and personal circumstances. Olawas can help you get organised and understand the process. The relevant embassy, consulate, or immigration authority makes every visa decision.',
    prepare: [
      'Your destination and the reason for travelling',
      'Your intended travel dates and approximate length of stay',
      'The passport nationality you will travel with',
      'Any official instructions or application steps you have already reviewed',
    ],
    steps: [
      ['Start with your trip', 'Share your destination, travel purpose, and rough timing so the right process can be discussed.'],
      ['Check current official guidance', 'Use the destination government or authorised visa-centre website for current requirements and fees.'],
      ['Prepare and review', 'Organise your supporting information and clarify questions before you submit through the official channel.'],
    ],
    faqs: [
      ['Can Olawas guarantee visa approval?', 'No. Only the relevant authority can decide an application. No agency can guarantee a visa outcome.'],
      ['Can you tell me exactly which documents I need?', 'The requirements depend on your destination, passport, travel purpose, and situation. We can help you understand what to check, but always confirm the current list with the official authority.'],
      ['Should I book non-refundable travel before applying?', 'Check the official application instructions first. Avoid making non-refundable commitments unless the relevant authority or provider guidance supports doing so.'],
    ],
    note: 'Do not send passport numbers, bank details, or full document scans in an initial WhatsApp enquiry. Ask how documents will be handled before sharing them.',
  },
  flights: {
    eyebrow: 'FLIGHTS & ACCOMMODATION',
    title: 'Compare the details before you go.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85',
    heroAlt: 'Airplane wing above clouds in daylight',
    intro:
      'Bring your dates, route, and stay preferences together to explore flight and accommodation options that suit your plans.',
    overview:
      'A useful travel quote starts with the details that shape your trip: departure city, dates, flexibility, baggage needs, number of travellers, and where you want to stay. Availability and provider prices can change until a booking is confirmed.',
    prepare: [
      'Departure city, destination, and preferred travel dates',
      'Whether your dates or nearby airports are flexible',
      'Number of travellers and any child or accessibility needs',
      'Accommodation location, room needs, and approximate budget',
    ],
    steps: [
      ['Share your priorities', 'Tell us what matters most: dates, route, baggage, location, comfort, or budget.'],
      ['Review the options', 'Compare schedules, connections, baggage terms, cancellation conditions, and accommodation details.'],
      ['Confirm before paying', 'Ask for the full cost and booking conditions. Provider availability and prices may change until confirmed.'],
    ],
    faqs: [
      ['What details help with a flight enquiry?', 'Share the departure and arrival cities, date range, number of travellers, and any baggage or schedule priorities. Do not send payment-card details over chat.'],
      ['Can flight or hotel prices change?', 'Yes. Prices and availability are set by the provider and may change until a booking is confirmed. Ask for the quote validity and full terms before paying.'],
      ['Can I request accommodation only?', 'You can ask about the travel support you need. Share your destination, dates, number of guests, and the type of accommodation you are considering.'],
    ],
    note: 'Always review the airline or accommodation provider’s baggage, change, cancellation, and refund conditions before confirming.',
  },
  study: {
    eyebrow: 'STUDY TRAVEL PLANNING',
    title: 'Make the travel part of your study plan clearer.',
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    heroAlt: 'Mountain road leading toward a distant travel destination',
    intro:
      'Organise the practical travel details around your course, campus visit, or confirmed study plans, one step at a time.',
    overview:
      'International study involves decisions from schools, immigration authorities, and travel providers. Olawas can help you think through the travel arrangements around your plans. For admissions, scholarships, course eligibility, and student-visa rules, confirm details directly with the institution and the relevant official authority.',
    prepare: [
      'The country and institution you are planning around',
      'Whether you are exploring, visiting, or already have an offer',
      'Your expected start date and travel window',
      'The travel questions you would like help organising',
    ],
    steps: [
      ['Clarify your study milestone', 'Separate what is confirmed from what you are still exploring, such as a campus visit or travel date.'],
      ['Verify academic and immigration steps', 'Check admissions and funding with the institution, and visa requirements with the official authority.'],
      ['Plan the travel details', 'Once your dates and plans are clearer, discuss routes, accommodation, and practical next steps.'],
    ],
    faqs: [
      ['Does travel planning include admission or scholarship decisions?', 'No. Institutions decide admissions, course eligibility, and scholarships. Contact the school directly for those decisions and deadlines.'],
      ['Who confirms student-visa requirements?', 'The destination government or authorised visa centre publishes the current requirements. Check its official guidance for your circumstances.'],
      ['Can I plan travel before receiving an offer?', 'You can discuss early travel questions, but confirm official application and booking requirements before making non-refundable commitments.'],
    ],
    note: 'Do not share application passwords, passport details, or financial documents in an initial enquiry. Confirm secure document handling before sharing sensitive paperwork.',
  },
}

function ServicePage({ page }) {
  const content = pages[page]

  if (!content) return null

  const contactUrl = createWhatsAppUrl(
    `Hello Olawas Travel & Tours, I would like to ask about ${content.eyebrow.toLowerCase()}.`,
  )

  return (
    <div className="service-page">
      <header className="site-header detail-header">
        <a className="brand" href="/" aria-label="Olawas Travel & Tours home">
          <BrandMark />
          <span className="brand-words"><strong>olawas</strong><small>TRAVEL & TOURS</small></span>
        </a>
        <nav aria-label="Service page navigation" className="detail-nav">
          <a href="/#services">All services</a>
          <a className="nav-cta" href={contactUrl} rel="noopener noreferrer" target="_blank">
            <WhatsAppIcon />Chat on WhatsApp<ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <nav aria-label="Breadcrumb" className="breadcrumbs section-wrap">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/#services">Services</a><span aria-hidden="true">/</span><span>{content.eyebrow}</span>
        </nav>

        <section className="detail-hero">
          <div className="detail-hero-inner section-wrap">
            <div className="detail-hero-copy">
              <p className="eyebrow">{content.eyebrow}</p>
              <h1>{content.title}</h1>
              <p>{content.intro}</p>
              <a className="button button-dark" href={contactUrl} rel="noopener noreferrer" target="_blank">
                <WhatsAppIcon />Ask Olawas about this<ArrowIcon />
              </a>
            </div>
            <div className="detail-hero-art">
              <img alt={content.heroAlt} fetchPriority="high" src={content.heroImage} />
              <span aria-hidden="true">THOUGHTFUL PLANS<br />START WITH A CONVERSATION</span>
            </div>
          </div>
        </section>

        <section className="detail-overview section-wrap">
          <div>
            <p className="eyebrow">A GOOD PLACE TO START</p>
            <h2>Useful guidance.<br /><em>No guesswork promises.</em></h2>
          </div>
          <p>{content.overview}</p>
        </section>

        <section className="detail-prep">
          <div className="section-wrap detail-prep-inner">
            <div>
              <p className="eyebrow">BEFORE YOU MESSAGE</p>
              <h2>A few details<br /><em>make it easier.</em></h2>
              <p>Share only what is needed to start the conversation. You do not need to include private document or payment details.</p>
            </div>
            <ul className="prep-list">
              {content.prepare.map((item, index) => (
                <li key={item}><span>0{index + 1}</span>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="detail-process section-wrap">
          <p className="eyebrow">HOW TO MOVE FORWARD</p>
          <h2>Three sensible next steps.</h2>
          <div className="process-grid">
            {content.steps.map(([title, description], index) => (
              <article className="process-step" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="detail-note">{content.note}</p>
        </section>

        <section className="detail-faq">
          <div className="section-wrap detail-faq-inner">
            <div>
              <p className="eyebrow">COMMON QUESTIONS</p>
              <h2>Good to know<br /><em>before you go.</em></h2>
            </div>
            <div className="faq-list">
              {content.faqs.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-contact">
          <div className="section-wrap detail-contact-inner">
            <div><p className="eyebrow">NEXT STEP</p><h2>Start with a question.</h2></div>
            <a className="button detail-contact-button" href={contactUrl} rel="noopener noreferrer" target="_blank">
              <WhatsAppIcon />Chat with Olawas on WhatsApp<ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer detail-footer">
        <a className="brand footer-brand" href="/">
          <BrandMark />
          <span className="brand-words"><strong>olawas</strong><small>TRAVEL & TOURS</small></span>
        </a>
        <p>Go well. Come back with stories.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Olawas Travel & Tours</span><a href="/">Home</a></div>
      </footer>
    </div>
  )
}

export default ServicePage