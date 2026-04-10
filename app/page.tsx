'use client';
import { useState } from 'react';
const services = [
  { name: 'Revenue Management', desc: 'Dynamic pricing strategies, channel management, and demand forecasting. We optimize your RevPAR and reduce OTA dependency.' },
  { name: 'Operations Consulting', desc: 'Service standard design, staffing optimization, and efficiency audits. We identify where time and money are leaking.' },
  { name: 'Pre-Opening', desc: 'Full pre-opening support for new hotels and resorts. From FF&E procurement to staff training and soft-opening management.' },
  { name: 'Brand Strategy', desc: 'Positioning, brand identity, and guest experience design. We help independent hotels compete with branded properties.' },
  { name: 'Digital Marketing', desc: 'Website optimization, OTA listing management, social media strategy, and reputation management.' },
  { name: 'Sustainability', desc: 'Green certification guidance, energy audits, waste reduction, and sustainable procurement strategies.' },
];
const caseStudies = [
  { name: 'The Kensington, London', challenge: 'Underperforming 120-room boutique hotel with 58% occupancy and declining RevPAR.', solution: 'Revamped pricing strategy, restructured F&B, launched direct booking campaign, and redesigned guest journey.', result: 'Occupancy to 82%, RevPAR +34%, direct bookings from 12% to 41% in 18 months.', metric: '+34% RevPAR' },
  { name: 'Sunrise Resort, Bali', challenge: 'New 85-villa resort struggling with pre-opening delays and no brand awareness.', solution: 'Comprehensive pre-opening support, influencer launch campaign, and OTA optimization.', result: 'Sold-out opening month, 4.8 TripAdvisor rating within 6 months, featured in Condé Nast Traveler.', metric: '4.8★ Rating' },
  { name: 'CityStay Hotels (8 properties)', challenge: 'Regional chain with inconsistent service quality and high staff turnover (45%).', solution: 'Created brand standards manual, redesigned training program, and implemented employee engagement initiatives.', result: 'Staff turnover reduced to 18%, guest satisfaction scores improved 23%, TripAdvisor average improved from 3.8 to 4.5.', metric: '+23% Satisfaction' },
];
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen" style={{ background: 'var(--ink)', color: '#e8e4df' }}>
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: '#0d1b2aee', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div><h1 className="heading-corp text-xl" style={{ color: 'var(--gold)' }}>Apex Hospitality</h1><p className="text-[9px] tracking-[0.3em] uppercase opacity-40">Group · Advisory</p></div>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.15em] uppercase opacity-60">{['services', 'results', 'contact'].map(s => <button key={s} onClick={() => scrollTo(s)}>{s}</button>)}</div>
        <button onClick={() => scrollTo('contact')} className="text-xs tracking-wider uppercase px-5 py-2" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>Contact</button>
      </nav>
      <main>
        <section className="py-28 px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--gold)' }}>Hotel & Resort Consulting</p>
            <h2 className="heading-corp text-5xl md:text-7xl mb-8">Elevate every<br/><em style={{ color: 'var(--gold)' }}>guest experience.</em></h2>
            <p className="text-lg opacity-50 max-w-xl mb-10 leading-relaxed">We help independent hotels and boutique resorts compete with the big brands. Revenue optimization, operational excellence, and guest experience design.</p>
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              {[
                { n: '120+', l: 'Hotels Advised' },
                { n: '$2.8B', l: 'Revenue Influenced' },
                { n: '28', l: 'Countries' },
              ].map(s => <div key={s.l}><p className="heading-corp text-2xl" style={{ color: 'var(--gold)' }}>{s.n}</p><p className="text-xs opacity-40">{s.l}</p></div>)}
            </div>
          </div>
        </section>
        <section id="services" className="reveal py-24 px-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>What We Do</p>
            <h2 className="heading-corp text-4xl mb-12">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <div key={s.name} className="service-card">
                  <h3 className="heading-corp text-lg mb-3" style={{ color: 'var(--gold)' }}>{s.name}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="results" className="reveal py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Results</p>
            <h2 className="heading-corp text-4xl mb-12">Case Studies</h2>
            <div className="space-y-6">
              {caseStudies.map(c => (
                <div key={c.name} className="case-study">
                  <div className="flex justify-between items-start mb-4"><h3 className="heading-corp text-xl">{c.name}</h3><span className="text-sm font-bold px-3 py-1 rounded" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>{c.metric}</span></div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div><p className="font-semibold mb-1" style={{ color: 'var(--gold)' }}>Challenge</p><p className="opacity-50">{c.challenge}</p></div>
                    <div><p className="font-semibold mb-1" style={{ color: 'var(--gold)' }}>Solution</p><p className="opacity-50">{c.solution}</p></div>
                    <div><p className="font-semibold mb-1" style={{ color: 'var(--gold)' }}>Result</p><p className="opacity-50">{c.result}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="reveal py-24 px-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Partner</p>
              <h2 className="heading-corp text-4xl mb-6">Book a Consultation</h2>
              <p className="opacity-50 leading-relaxed mb-6">Tell us about your property and challenges. We offer a free 30-minute discovery call to see if we are a good fit.</p>
              <div className="space-y-2 text-sm opacity-50"><p>📍 350 Fifth Avenue, Suite 5100, New York, NY 10118</p><p>📧 <a href="mailto:advisory@apexhospitality.com" style={{ color: 'var(--gold)' }}>advisory@apexhospitality.com</a></p><p>📞 <a href="tel:(212) 555-0210" style={{ color: 'var(--gold)' }}>(212) 555-0210</a></p></div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex items-center"><div><p className="heading-corp text-2xl" style={{ color: 'var(--gold)' }}>Received.</p><p className="opacity-50 text-sm mt-2">A partner will contact you within 48 hours.</p></div></div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <input type="text" placeholder="Name" required className="w-full" />
                  <input type="email" placeholder="Email" required className="w-full" />
                  <input type="text" placeholder="Hotel/Resort name" className="w-full" />
                  <select className="w-full"><option value="">Service interest</option>{services.map(s => <option key={s.name}>{s.name}</option>)}</select>
                  <textarea rows={4} placeholder="Tell us about your property and challenges..." className="w-full" />
                  <button type="submit" className="w-full py-3 text-xs tracking-wider uppercase" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>Request Consultation</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-xs opacity-30"><p>Apex Hospitality Group. New York.</p></footer>
    </div>
  );
}