'use client';
import { useState } from 'react';

const services = [
  {
    name: 'Hotel Operations',
    icon: '◆',
    desc: 'End-to-end operational audits covering front office, housekeeping, engineering, and security. We map every workflow, identify bottlenecks, and implement lean processes that reduce costs while elevating service delivery. Our proprietary Quality Index scorecard gives leadership a real-time pulse on departmental performance.',
  },
  {
    name: 'Revenue Management',
    icon: '◆',
    desc: 'Dynamic pricing strategies powered by demand forecasting, competitive benchmarking, and channel distribution optimization. We build custom revenue management frameworks that maximize RevPAR, reduce OTA commission dependency, and grow direct booking share. Our clients see an average 22 percent RevPAR uplift within the first year.',
  },
  {
    name: 'F&B Consulting',
    icon: '◆',
    desc: 'Restaurant concept development, menu engineering, kitchen design, and beverage program creation. We analyze food cost ratios, plate composition, and guest ordering patterns to craft menus that delight guests and protect margins. From casual poolside dining to fine dining, we engineer profitable culinary experiences.',
  },
  {
    name: 'Staff Training',
    icon: '◆',
    desc: 'Comprehensive training programs covering service excellence, leadership development, brand standards, and safety compliance. We design custom curricula with hands-on workshops, e-learning modules, and mystery guest evaluations. Our blended approach reduces time-to-competency by 40 percent and measurably improves guest satisfaction scores.',
  },
  {
    name: 'Pre-Opening Support',
    icon: '◆',
    desc: 'Full pre-opening management from FF&E procurement and OS&E selection through staff recruitment, training, and soft-opening orchestration. We coordinate with architects, contractors, and operators to ensure your property launches on time, on brand, and on budget. Seventy-eight properties opened with zero critical-path delays using our methodology.',
  },
  {
    name: 'Brand Strategy',
    icon: '◆',
    desc: 'Brand positioning, visual identity development, guest persona creation, and experience journey mapping. We help independent hotels and boutique resorts build brands that command premium rates and fierce guest loyalty. Our brand architecture framework has been adopted by over 40 properties competing successfully against global chains.',
  },
];

const caseStudies = [
  {
    name: 'The Kensington, London',
    type: '120-Room Boutique Hotel',
    challenge: 'Underperforming property with 58 percent occupancy, declining RevPAR over three consecutive quarters, heavy reliance on OTAs accounting for 72 percent of bookings, and inconsistent guest reviews citing slow check-in and dated F&B offerings.',
    solution: 'Revamped pricing strategy using demand-based dynamic rates, restructured the restaurant concept from generic brasserie to a modern British bistro, launched a direct booking campaign with loyalty incentives, and redesigned the guest arrival journey with digital pre-check-in and a welcome amenity program.',
    result: 'Occupancy climbed to 82 percent within 18 months. RevPAR increased 34 percent. Direct bookings rose from 12 percent to 41 percent of total reservations. TripAdvisor rating improved from 3.9 to 4.6. Annual F&B revenue grew by GBP 420,000.',
    metric: '+34% RevPAR',
  },
  {
    name: 'Sunrise Resort, Bali',
    type: '85-Villa Luxury Resort',
    challenge: 'Greenfield resort six months from opening with construction delays, no brand awareness in target markets, undefined operational standards, and no pre-opening marketing plan or staff recruitment pipeline.',
    solution: 'Deployed a full pre-opening team for 24 weeks. Established brand identity and positioning targeting the luxury experiential traveler. Executed an influencer launch campaign across Instagram and YouTube. Optimized OTA listings with professional photography and keyword-rich descriptions. Recruited and trained 160 staff members using our hospitality excellence curriculum.',
    result: 'Achieved sold-out status for opening month. Earned a 4.8-star TripAdvisor rating within six months. Featured in Condé Nast Traveler as one of the top new resorts in Southeast Asia. Secured a preferred partnership with Virtuoso within the first year of operations.',
    metric: '4.8★ Rating',
  },
  {
    name: 'CityStay Hotels',
    type: '8-Property Regional Chain',
    challenge: 'Regional hotel group with wildly inconsistent service quality across properties, staff turnover at 45 percent annually, fragmented brand identity, and guest satisfaction scores averaging only 72 percent on post-stay surveys.',
    solution: 'Created a comprehensive brand standards manual covering every guest touchpoint from reservation to checkout. Redesigned the training program with quarterly certification cycles and career development pathways. Implemented employee engagement initiatives including recognition programs, mentorship pairings, and competitive compensation benchmarking.',
    result: 'Staff turnover reduced to 18 percent. Guest satisfaction scores improved 23 percent to 95 percent. Average TripAdvisor rating across all eight properties rose from 3.8 to 4.5. Annual recruitment costs decreased by $280,000. The group earned its first industry award for service excellence.',
    metric: '+23% Satisfaction',
  },
];

const approachPhases = [
  {
    phase: '01',
    name: 'Discovery & Assessment',
    duration: 'Weeks 1–3',
    desc: 'We immerse ourselves in your property. Our team conducts on-site operational audits, stakeholder interviews, competitive benchmarking, and guest journey mapping. We analyze financial performance, staffing structures, service delivery, and brand positioning. Every engagement begins with a 360-degree diagnostic that identifies the highest-impact opportunities.',
  },
  {
    phase: '02',
    name: 'Strategy & Planning',
    duration: 'Weeks 4–6',
    desc: 'Armed with data, we craft a tailored strategic roadmap. This phase delivers a prioritized action plan with clear KPIs, resource requirements, budgets, and timelines. We present findings to ownership and leadership, aligning on goals and securing buy-in across all departments before a single change is made.',
  },
  {
    phase: '03',
    name: 'Implementation & Execution',
    duration: 'Weeks 7–16',
    desc: 'Our consultants work shoulder-to-shoulder with your team to execute the plan. Whether it is rolling out a new revenue management system, redesigning service standards, launching a training program, or repositioning a restaurant concept, we are embedded in daily operations ensuring every initiative lands effectively.',
  },
  {
    phase: '04',
    name: 'Optimization & Handover',
    duration: 'Weeks 17–20',
    desc: 'We measure results against the KPIs established in Phase 2. We fine-tune underperforming initiatives, document all processes and playbooks, and train your internal team to sustain improvements independently. Our goal is not dependency but a self-sufficient operation performing at a higher level than when we arrived.',
  },
];

const team = [
  {
    name: 'Caroline Ashford',
    title: 'Managing Partner',
    bio: 'Former VP of Operations at Four Seasons Hotels with 22 years of luxury hospitality experience across North America, Europe, and Asia. Caroline has led operational turnarounds for 40+ properties and is a frequent speaker at the International Hotel Investment Forum. She holds an MBA from Cornell School of Hotel Administration.',
    specialties: ['Operations', 'Brand Standards', 'Leadership Development'],
  },
  {
    name: 'Marcus Delgado',
    title: 'Director of Revenue Strategy',
    bio: 'Previously Chief Revenue Officer at a portfolio of 15 boutique hotels in Latin America. Marcus is an expert in dynamic pricing, channel distribution, and total revenue management including ancillary streams. He has generated over $180 million in incremental revenue for clients over his 16-year career.',
    specialties: ['Revenue Management', 'Distribution', 'Data Analytics'],
  },
  {
    name: 'Naomi Tanaka',
    title: 'Head of F&B and Experience Design',
    bio: 'Award-winning restaurant consultant and former executive chef with Michelin-starred experience in Tokyo, Paris, and New York. Naomi specializes in concept development, menu engineering, and creating signature dining experiences that become destinations in their own right. She has launched 25 restaurant concepts globally.',
    specialties: ['F&B Strategy', 'Concept Development', 'Culinary Innovation'],
  },
];

const testimonials = [
  {
    quote: 'Apex Hospitality did not just consult. They transformed how we think about our hotel as a business. Within one year, every KPI we track moved in the right direction. The revenue management overhaul alone paid for the engagement three times over.',
    author: 'James Whitfield',
    role: 'Owner & General Manager, The Kensington, London',
  },
  {
    quote: 'We hired Apex to help us open our resort and they delivered far beyond expectations. They managed everything from brand identity to staff training to our launch marketing. The result was a property that arrived on the market fully formed and immediately competitive.',
    author: 'Putu Aryani',
    role: 'CEO, Sunrise Resorts Group, Bali',
  },
  {
    quote: 'The training program Apex built for our eight hotels was a game-changer. Staff engagement soared, turnover plummeted, and our guests noticed the difference immediately. For the first time, all our properties feel like they belong to the same brand.',
    author: 'Daniel Ortega',
    role: 'VP of Operations, CityStay Hotels',
  },
];

const faqs = [
  {
    q: 'What types of properties do you work with?',
    a: 'We specialize in independent hotels, boutique resorts, and small to mid-size hotel groups ranging from 40 to 500 rooms. Our clients include luxury boutiques, lifestyle hotels, resort properties, and regional chains. We do not typically work with budget motels or large global franchise operations where corporate mandates limit flexibility.',
  },
  {
    q: 'How long does a typical engagement last?',
    a: 'Engagements vary by scope. A focused revenue management project may run 8 to 12 weeks, while a full operational transformation or pre-opening support typically spans 16 to 24 weeks. We also offer ongoing advisory retainers for clients who want continuous strategic support after the initial project concludes.',
  },
  {
    q: 'What is the investment range for your services?',
    a: 'Our fees are structured around scope and complexity, not hourly billing. Foundational projects such as an operational audit start at $35,000. Comprehensive engagements including strategy, implementation, and training typically range from $75,000 to $200,000. Pre-opening mandates are quoted individually based on property size and timeline. We provide detailed proposals after the discovery call.',
  },
  {
    q: 'Do you work on-site or remotely?',
    a: 'We believe the best consulting happens on the property. Our standard model includes dedicated on-site time during discovery and implementation phases, supplemented by remote support for strategy, analysis, and follow-up. For international projects, we structure intensive on-site sprints with remote continuity between visits.',
  },
  {
    q: 'How do you measure success?',
    a: 'Every engagement begins with clearly defined KPIs agreed upon during the strategy phase. Common metrics include RevPAR growth, occupancy improvement, direct booking percentage, guest satisfaction scores, staff turnover reduction, TripAdvisor rating improvement, and F&B revenue per available seat. We report progress monthly and conduct a final impact assessment at project close.',
  },
  {
    q: 'Can you help with technology selection and implementation?',
    a: 'Yes. We are vendor-agnostic and help clients evaluate, select, and implement property management systems, revenue management platforms, CRM tools, POS systems, and guest experience technology. We do not resell software, so our recommendations are based purely on fit and functionality for your specific operation.',
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--ink)', color: '#e8e4df' }}>
      {/* Navigation */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center"
        style={{
          background: '#0d1b2aee',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div>
          <h1 className="heading-corp text-xl" style={{ color: 'var(--gold)' }}>
            Apex Hospitality
          </h1>
          <p className="text-base tracking-[0.3em] uppercase opacity-90">Group · Advisory</p>
        </div>
        <div className="hidden lg:flex gap-8 text-xs tracking-[0.15em] uppercase font-medium">
          {['services', 'results', 'approach', 'team', 'testimonials', 'faq', 'contact'].map((s) => (
            <button style={{ cursor: "pointer" }} key={s} onClick={() => scrollTo(s)} aria-label={`Navigate to ${s}`} style={{ color: '#c8c4bf', background: 'transparent', border: 'none', padding: '0.5rem 0', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#e8e4df'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#c8c4bf'}>
              {s}
            </button>
          ))}
        </div>
        <button style={{ cursor: "pointer" }} className="btn text-xs tracking-wider uppercase px-5 py-2" onClick={() => scrollTo('contact')} aria-label="Book a discovery call" style={{ background: 'var(--gold)', color: 'var(--ink)' }} >
          Book a Call
        </button>
      </nav>

      <main role="main">
        {/* Hero */}
        <section className="py-24 md:py-24 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--gold)' }}>
              Hotel & Resort Consulting
            </p>
            <h2 className="heading-corp text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05]">
              Transform your<br />
              hospitality <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>business.</em>
            </h2>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mb-12 leading-relaxed">
              We partner with independent hotels, boutique resorts, and regional hotel groups to unlock revenue growth,
              streamline operations, and create guest experiences that drive loyalty and premium positioning.
              Since 2009, we have advised over 120 properties across 28 countries.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <button style={{ cursor: "pointer" }} className="btn text-sm tracking-wider uppercase px-8 py-3 font-semibold" onClick={() => scrollTo('contact')} style={{ background: 'var(--gold)', color: 'var(--ink)' }} >
                Schedule Discovery Call
              </button>
              <button style={{ cursor: "pointer" }} className="btn text-sm tracking-wider uppercase px-8 py-3 font-semibold" onClick={() => scrollTo('results')} style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#e8e4df' }} >
                View Case Studies
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
              {[
                { n: '120+', l: 'Hotels Advised' },
                { n: '$2.8B', l: 'Revenue Influenced' },
                { n: '28', l: 'Countries' },
                { n: '96%', l: 'Client Retention' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="heading-corp text-2xl md:text-3xl" style={{ color: 'var(--gold)' }}>
                    {s.n}
                  </p>
                  <p className="text-sm opacity-90 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" alt="Luxury hotel resort with pool" className="w-full h-64 md:h-96 object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="reveal py-24 px-6 md:px-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              What We Do
            </p>
            <h2 className="heading-corp text-4xl md:text-5xl mb-4">Services</h2>
            <p className="text-base opacity-90 max-w-2xl mb-14 leading-relaxed">
              Six core practice areas covering every dimension of hospitality performance. Each engagement is tailored
              to your property, your market, and your ambitions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.name} className="service-card p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-2xl mb-4 block">{s.icon}</span>
                  <h3 className="heading-corp text-lg mb-3" style={{ color: 'var(--gold)' }}>
                    {s.name}
                  </h3>
                  <p className="text-sm opacity-100 leading-relaxed" style={{ color: '#c8c4bf' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="results" className="reveal py-24 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Proven Results
            </p>
            <h2 className="heading-corp text-4xl md:text-5xl mb-4">Case Studies</h2>
            <p className="text-base opacity-90 max-w-2xl mb-14 leading-relaxed">
              Real properties, real challenges, measurable outcomes. Here is how we move the needle.
            </p>
            <div className="space-y-8">
              {caseStudies.map((c) => (
                <div
                  key={c.name}
                  className="p-6 md:p-8 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="heading-corp text-xl md:text-2xl">{c.name}</h3>
                      <p className="text-sm opacity-90 mt-1">{c.type}</p>
                    </div>
                    <span
                      className="text-sm font-bold px-4 py-2 rounded self-start"
                      style={{ background: 'var(--gold)', color: 'var(--ink)' }}
                    >
                      {c.metric}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <p className="font-semibold mb-2" style={{ color: 'var(--gold)' }}>
                        Challenge
                      </p>
                      <p className="opacity-80 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: 'var(--gold)' }}>
                        Solution
                      </p>
                      <p className="opacity-80 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: 'var(--gold)' }}>
                        Result
                      </p>
                      <p className="opacity-80 leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section id="approach" className="reveal py-24 px-6 md:px-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              How We Work
            </p>
            <h2 className="heading-corp text-4xl md:text-5xl mb-4">Our Approach</h2>
            <p className="text-base opacity-90 max-w-2xl mb-14 leading-relaxed">
              A structured four-phase methodology refined over 15 years and 120+ engagements. Rigorous in analysis,
              flexible in execution, relentless in follow-through.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {approachPhases.map((p) => (
                <div
                  key={p.phase}
                  className="p-6 rounded-lg relative"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="heading-corp text-3xl" style={{ color: 'var(--gold)' }}>
                      {p.phase}
                    </span>
                    <div>
                      <h3 className="heading-corp text-lg">{p.name}</h3>
                      <p className="text-sm opacity-90 mt-1">{p.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="reveal py-24 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Leadership
            </p>
            <h2 className="heading-corp text-4xl md:text-5xl mb-4">Our Team</h2>
            <p className="text-base opacity-90 max-w-2xl mb-14 leading-relaxed">
              Senior consultants with deep operator experience. We have sat in the GM chair, run the revenue meeting,
              and led the kitchen. We understand hospitality from the inside.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((t) => (
                <div
                  key={t.name}
                  className="p-6 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-5"
                    style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--gold)' }}
                  >
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <h3 className="heading-corp text-lg" style={{ color: 'var(--gold)' }}>
                    {t.name}
                  </h3>
                  <p className="text-sm tracking-wider uppercase opacity-90 mb-4">{t.title}</p>
                  <p className="text-sm opacity-80 leading-relaxed mb-4">{t.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.specialties.map((sp) => (
                      <span
                        key={sp}
                        className="text-sm tracking-wider uppercase px-3 py-1 rounded-full"
                        style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--gold)' }}
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="reveal py-24 px-6 md:px-8"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Client Voices
            </p>
            <h2 className="heading-corp text-4xl md:text-5xl mb-4">Testimonials</h2>
            <p className="text-base opacity-90 max-w-2xl mb-14 leading-relaxed">
              Our clients say it better than we can. Here is what working with Apex feels like.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="p-6 rounded-lg flex flex-col"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="text-3xl mb-4" style={{ color: 'var(--gold)', opacity: '0.88' }}>
                    &ldquo;
                  </div>
                  <p className="text-sm opacity-85 leading-relaxed flex-1 mb-6">{t.quote}</p>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>
                      {t.author}
                    </p>
                    <p className="text-sm opacity-90 mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="reveal py-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Common Questions
            </p>
            <h2 className="heading-corp text-4xl md:text-5xl mb-4">FAQ</h2>
            <p className="text-base opacity-90 max-w-2xl mb-14 leading-relaxed">
              Everything you need to know before starting a conversation with us.
            </p>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <button style={{ cursor: "pointer" }} className="btn w-full text-left px-6 py-5 flex justify-between items-center gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ background: openFaq === i ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)' }} >
                    <span className="text-sm font-semibold">{f.q}</span>
                    <span
                      className="text-lg flex-shrink-0 transition-transform"
                      style={{
                        color: 'var(--gold)',
                        transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-sm opacity-80 leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Booking */}
        <section
          id="contact"
          className="reveal py-24 px-6 md:px-8"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
                Start Here
              </p>
              <h2 className="heading-corp text-4xl md:text-5xl mb-6">Book a Consultation</h2>
              <p className="text-base opacity-80 leading-relaxed mb-8">
                Tell us about your property, your challenges, and your goals. We offer a complimentary 30-minute
                discovery call to understand your situation and determine whether we are the right partner. There is
                no obligation and no pressure, just an honest conversation about what is possible.
              </p>
              <div className="space-y-3 text-sm opacity-80 mb-8">
                <p>📍 350 Fifth Avenue, Suite 5100, New York, NY 10118</p>
                <p>
                  📧{' '}
                  <a href="mailto:advisory@apexhospitality.com" style={{ color: 'var(--gold)' }}>
                    advisory@apexhospitality.com
                  </a>
                </p>
                <p>
                  📞{' '}
                  <a href="tel:(212) 555-0210" style={{ color: 'var(--gold)' }}>
                    (212) 555-0210
                  </a>
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--gold)' }}>
                  What to expect
                </p>
                <ul className="text-sm opacity-80 space-y-2 leading-relaxed">
                  <li>1. Submit the form with your property details</li>
                  <li>2. We review and respond within 48 hours</li>
                  <li>3. Schedule a 30-minute discovery call</li>
                  <li>4. Receive a tailored proposal within one week</li>
                </ul>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex items-center">
                  <div>
                    <p className="heading-corp text-3xl mb-3" style={{ color: 'var(--gold)' }}>
                      Thank you.
                    </p>
                    <p className="opacity-80 text-base leading-relaxed">
                      Your inquiry has been received. A senior partner will contact you within 48 hours to schedule
                      your discovery call. We look forward to learning about your property.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <input type="text" placeholder="Full Name" aria-label="Full name" required className="w-full p-3 border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #ddd', borderRadius: '0.5rem' }} />
                  <input type="email" placeholder="Email Address" aria-label="Email address" required className="w-full p-3 border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #ddd', borderRadius: '0.5rem' }} />
                  <input type="text" placeholder="Hotel / Resort Name" aria-label="Hotel or resort name" className="w-full p-3 border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #ddd', borderRadius: '0.5rem' }} />
                  <select aria-label="" className="w-full p-3 border border-gray-300 " style={{ border: '1px solid #ddd', borderRadius: '0.5rem' }}>
                    <option value="">Service of Interest</option>
                    {services.map((s) => (
                      <option key={s.name}>{s.name}</option>
                    ))}
                  </select>
                  <input type="text" placeholder="Property Location (City, Country)" aria-label="Property location" className="w-full p-3 border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #ddd', borderRadius: '0.5rem' }} />
                  <input type="number" placeholder="Number of Rooms" aria-label="Number of rooms" className="w-full p-3 border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #ddd', borderRadius: '0.5rem' }} />
                  <textarea
                    rows={5}
                    placeholder="Tell us about your property and the challenges you are facing..."
                    aria-label="Property details and challenges"
                    className="w-full p-3 border border-gray-300 " style={{ border: '1px solid #ddd', borderRadius: '0.5rem' }}
                  />
                  <button style={{ cursor: "pointer" }}
                    type="submit"
                    aria-label="Request a free consultation"
                    className="w-full py-4 text-sm tracking-wider uppercase font-semibold"
                    style={{ background: 'var(--gold)', color: 'var(--ink)' }}
                  >
                    Request Free Consultation
                  </button>
                  <p className="text-sm opacity-80 text-center">
                    We respect your privacy. Your information is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 px-6 md:px-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="heading-corp text-sm mb-2" style={{ color: 'var(--gold)' }}>
          Apex Hospitality Group
        </p>
        <p className="text-sm opacity-85">New York · London · Singapore · Dubai</p>
        <p className="text-sm opacity-80 mt-2">© 2026 Apex Hospitality Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
