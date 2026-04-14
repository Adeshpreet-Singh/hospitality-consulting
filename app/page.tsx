'use client';
import { useState, useEffect } from 'react';

const SERVICES = [
  { icon: '🏨', name: 'Hotel Operations', desc: 'Streamline front office, housekeeping, F&B, and back-of-house operations for maximum efficiency and guest satisfaction.', features: ['SOP Development', 'Staff Training', 'Quality Audits'] },
  { icon: '📈', name: 'Revenue Management', desc: 'Dynamic pricing, channel management, and demand forecasting to maximise RevPAR and occupancy rates.', features: ['Rate Strategy', 'OTA Optimization', 'Yield Management'] },
  { icon: '🎯', name: 'Guest Experience', desc: 'Design memorable guest journeys from booking to checkout. Mystery audits, NPS improvement, and loyalty programs.', features: ['Journey Mapping', 'Service Design', 'Loyalty Programs'] },
  { icon: '🏗️', name: 'Pre-Opening', desc: 'End-to-end pre-opening support for new hotels — from concept to launch. FF&E, OS&E, recruitment, and soft opening.', features: ['Concept Design', 'Recruitment', 'Launch Planning'] },
  { icon: '💡', name: 'Digital Transformation', desc: 'PMS, CRM, and channel manager selection and implementation. Guest-facing tech, mobile check-in, and automation.', features: ['Tech Stack Audit', 'PMS Selection', 'Automation'] },
  { icon: '🌱', name: 'Sustainability', desc: 'Green certification, energy audits, waste reduction, and sustainable procurement strategies for eco-conscious hospitality.', features: ['Green Certification', 'Energy Audits', 'ESG Reporting'] },
];

const RESULTS = [
  { stat: '200+', label: 'Hotels Consulted' },
  { stat: '32%', label: 'Avg RevPAR Increase' },
  { stat: '4.6→4.8', label: 'Avg Rating Improvement' },
  { stat: '18', label: 'Countries Served' },
];

const CASE_STUDIES = [
  { title: 'Heritage Resort Revival', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop', result: '+45% RevPAR in 12 months', desc: 'Transformed a struggling 80-room heritage property into a premium boutique hotel through repositioning, staff upskilling, and digital marketing overhaul.' },
  { title: 'Budget Chain Scaling', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=350&fit=crop', result: '15 to 45 properties in 3 years', desc: 'Designed scalable operations playbook, standardised SOPs, and built central reservation system for a rapidly growing budget hotel chain.' },
  { title: 'Luxury Beach Resort Launch', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=350&fit=crop', result: '92% occupancy in Year 1', desc: 'Managed pre-opening through launch for a 120-key luxury beach resort. Recruitment, training, vendor setup, and F&B concept development.' },
];

const TEAM = [
  { name: 'Amit Khanna', role: 'Founder & Principal', initials: 'AK', spec: '25 years in hospitality. Ex-VP Operations at Taj Hotels. Cornell Hotel School alumnus.' },
  { name: 'Sarah Chen', role: 'Director — Revenue', initials: 'SC', spec: '18 years in revenue management. Previously with Marriott International across APAC.' },
  { name: 'Raj Patel', role: 'Director — Pre-Opening', initials: 'RP', spec: '20+ hotel openings across India and Middle East. Expert in FF&E and OS&E procurement.' },
  { name: 'Meera Nair', role: 'Director — Guest Experience', initials: 'MN', spec: '15 years designing service excellence programs. Former Quality Head at Oberoi Hotels.' },
];

const testimonials = [
  { quote: "Amit's team transformed our operations completely. RevPAR increased 45% and our TripAdvisor rating went from 3.8 to 4.7. Their revenue management strategies alone paid for the engagement ten times over.", name: 'Vikram Singh', location: 'MD, Lakeview Heritage Resort', rating: 5 },
  { quote: "We engaged them for our pre-opening and they were indispensable. From recruitment to vendor setup to SOPs — everything was seamless. We hit 92% occupancy in Year 1, exceeding all projections.", name: 'Priya Agarwal', location: 'CEO, Azure Beach Resorts', rating: 5 },
  { quote: "Scaling from 15 to 45 hotels seemed impossible until they built our operations playbook. Standardised processes, central reservation system, and training modules that actually work at scale.", name: 'Rohit Mehta', location: 'Founder, StayEasy Hotels', rating: 5 },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-reveal').forEach((el) => obs.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-500/20" style={{ fontFamily: 'Source Serif 4, serif' }}>H</div>
            <div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Source Serif 4, serif', color: '#0f172a' }}>Horizon</span>
              <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#d97706' }}>Hospitality Advisors</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {['services', 'results', 'case-studies', 'team', 'testimonials', 'contact'].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="nav-link capitalize">{s.replace('-', ' ')}</button>
            ))}
            <button onClick={() => scrollTo('contact')} className="btn-amber text-sm">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c1222 0%, #1e293b 100%)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop" alt="Luxury hotel lobby" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-white">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8" style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.2)' }}>
              ★ Trusted by 200+ Hotels Worldwide
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.05]" style={{ fontFamily: 'Source Serif 4, serif' }}>
              Elevate your<br />
              <span style={{ color: '#fbbf24' }}>hospitality</span><br />
              experience.
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Boutique consulting firm specialising in hotel operations, revenue management, and guest experience design. We help hotels and resorts achieve operational excellence and sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('contact')} className="btn-amber px-10 py-4">Book Consultation</button>
              <button onClick={() => scrollTo('case-studies')} className="btn-outline-amber !border-white/30 !text-white hover:!bg-white/10 px-10 py-4">Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-reveal py-0 -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RESULTS.map((r, i) => (
              <div key={i} className="stat-card">
                <div className="text-3xl lg:text-4xl font-bold mb-1" style={{ color: '#fbbf24' }}>{r.stat}</div>
                <div className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-reveal py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: '#d97706' }}>What We Do</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: '#0f172a' }}>Our Services</h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#94a3b8' }}>Comprehensive hospitality consulting from operations to strategy, pre-opening to digital transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="consult-card p-8">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0f172a' }}>{s.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#475569' }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: '#fffbeb', color: '#92400e' }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section-reveal py-28" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: '#d97706' }}>Our Work</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: '#0f172a' }}>Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c, i) => (
              <div key={i} className="case-card">
                <div className="case-img">
                  <img src={c.img} alt={c.title} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#dcfce7', color: '#166534' }}>{c.result}</span>
                  <h3 className="text-lg font-bold mt-3 mb-2" style={{ color: '#0f172a' }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-reveal py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: '#d97706' }}>Our People</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: '#0f172a' }}>Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t, i) => (
              <div key={i} className="consult-card p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-2xl font-bold text-white shadow-lg">{t.initials}</div>
                <h3 className="text-lg font-bold" style={{ color: '#0f172a' }}>{t.name}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: '#d97706' }}>{t.role}</p>
                <div className="w-10 h-0.5 mx-auto my-4" style={{ background: '#fde68a' }} />
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{t.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-reveal py-28" style={{ background: '#0c1222' }}>
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: '#fbbf24' }}>Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3">Client Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => (<span key={j} style={{ color: '#fbbf24' }}>★</span>))}</div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'rgba(255,255,255,0.6)' }}>"{t.quote}"</p>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-reveal py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: '#d97706' }}>Contact</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6" style={{ color: '#0f172a' }}>Let's Transform Your Hotel</h2>
            <p className="mb-10 leading-relaxed" style={{ color: '#475569' }}>Book a free discovery call. We will understand your challenges, share relevant case studies, and outline how we can help.</p>
            <div className="space-y-6">
              {[
                { label: 'Email', value: 'hello@horizonhospitality.in' },
                { label: 'Phone', value: '+91 11 4567 8901' },
                { label: 'Office', value: 'The Mosaic, Connaught Place, New Delhi 110001' },
                { label: 'Global', value: 'Mumbai • Dubai • Singapore • London' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-xs uppercase tracking-wider mb-1 font-bold" style={{ color: '#d97706' }}>{item.label}</div>
                  <div style={{ color: '#0f172a' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <form className="consult-card p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}>
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: '#0f172a' }}>Name *</label>
              <input type="text" required placeholder="Your name" className="form-input" />
            </div>
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: '#0f172a' }}>Hotel / Company *</label>
              <input type="text" required placeholder="Hotel name" className="form-input" />
            </div>
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: '#0f172a' }}>Email *</label>
              <input type="email" required placeholder="your@email.com" className="form-input" />
            </div>
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: '#0f172a' }}>Service Interest</label>
              <select className="form-input">
                <option value="">Select service</option>
                {SERVICES.map((s, i) => (<option key={i} value={s.name}>{s.name}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: '#0f172a' }}>Message</label>
              <textarea rows={3} placeholder="Tell us about your hotel and challenges..." className="form-input resize-none" />
            </div>
            <button type="submit" className="w-full btn-amber py-4">{submitted ? '✓ Inquiry Sent!' : 'Book Discovery Call'}</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0c1222' }} className="text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-xl font-bold mb-3" style={{ fontFamily: 'Source Serif 4, serif', color: '#fbbf24' }}>Horizon</div>
              <p className="text-sm leading-relaxed opacity-50">Boutique hospitality consulting. Operations, revenue, guest experience, and digital transformation for hotels worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Services</h4>
              <ul className="space-y-2 text-sm opacity-50">
                {SERVICES.slice(0, 4).map((s, i) => (<li key={i} className="hover:opacity-100 transition-opacity cursor-pointer">{s.name}</li>))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Company</h4>
              <ul className="space-y-2 text-sm opacity-50">
                {['About', 'Team', 'Careers', 'Insights'].map((l, i) => (<li key={i} className="hover:opacity-100 transition-opacity cursor-pointer">{l}</li>))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Offices</h4>
              <ul className="space-y-2 text-sm opacity-50">
                {['New Delhi', 'Mumbai', 'Dubai', 'Singapore'].map((l, i) => (<li key={i}>{l}</li>))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs opacity-30">© 2026 Horizon Hospitality Advisors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
