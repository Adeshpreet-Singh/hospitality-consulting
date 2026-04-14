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
  { name: 'Amit Khanna', role: 'Founder & Principal', initials: 'AK', spec: '25 years in hospitality. Ex-VP Operations at Taj Hotels. Cornell Hotel School alumnus.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop' },
  { name: 'Sarah Chen', role: 'Director — Revenue', initials: 'SC', spec: '18 years in revenue management. Previously with Marriott International across APAC.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
  { name: 'Raj Patel', role: 'Director — Pre-Opening', initials: 'RP', spec: '20+ hotel openings across India and Middle East. Expert in FF&E and OS&E procurement.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
  { name: 'Meera Nair', role: 'Director — Guest Experience', initials: 'MN', spec: '15 years designing service excellence programs. Former Quality Head at Oberoi Hotels.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
];

const TESTIMONIALS = [
  { quote: "Amit\'s team transformed our operations completely. RevPAR increased 45% and our TripAdvisor rating went from 3.8 to 4.7. Their revenue management strategies alone paid for the engagement ten times over.", name: 'Vikram Singh', location: 'MD, Lakeview Heritage Resort', rating: 5 },
  { quote: "We engaged them for our pre-opening and they were indispensable. From recruitment to vendor setup to SOPs — everything was seamless. We hit 92% occupancy in Year 1, exceeding all projections.", name: 'Priya Agarwal', location: 'CEO, Azure Beach Resorts', rating: 5 },
  { quote: "Scaling from 15 to 45 hotels seemed impossible until they built our operations playbook. Standardised processes, central reservation system, and training modules that actually work at scale.", name: 'Rohit Mehta', location: 'Founder, StayEasy Hotels', rating: 5 },
];

const APPROACH_STEPS = [
  { num: '01', title: 'Diagnose', desc: 'We begin with a comprehensive 360-degree audit of your property — operations, finance, guest sentiment, competitive landscape, and digital presence. Our diagnostic framework identifies the highest-impact opportunities for improvement.', icon: '🔍' },
  { num: '02', title: 'Strategize', desc: 'Based on diagnostic findings, we craft a tailored roadmap with clear KPIs, timelines, and investment requirements. Every strategy is grounded in data and benchmarked against industry leaders.', icon: '📋' },
  { num: '03', title: 'Implement', desc: 'Our team embeds alongside yours to drive execution. We dont just hand over a report — we roll up our sleeves and ensure changes stick. Weekly check-ins, training workshops, and progress dashboards keep everyone aligned.', icon: '⚙️' },
  { num: '04', title: 'Sustain', desc: 'We build internal capability so improvements endure long after our engagement ends. Knowledge transfer, SOP documentation, and ongoing advisory support ensure lasting transformation.', icon: '🔄' },
];

const INSIGHTS = [
  { title: 'The Future of Revenue Management in Post-Pandemic Hospitality', date: 'Mar 2026', category: 'Revenue', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop', excerpt: 'How AI-powered dynamic pricing and direct booking strategies are reshaping hotel revenue optimization.' },
  { title: 'Building a World-Class Housekeeping Operation', date: 'Feb 2026', category: 'Operations', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop', excerpt: 'A step-by-step guide to achieving consistent 95%+ cleanliness scores and operational efficiency.' },
  { title: 'Sustainability as a Competitive Advantage', date: 'Jan 2026', category: 'Sustainability', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=250&fit=crop', excerpt: 'Why green-certified hotels outperform peers by 18% in RevPAR and how to get there.' },
];

const CLIENT_LOGOS = ['Taj Hotels', 'Marriott', 'Oberoi', 'ITC Hotels', 'Lemon Tree', 'Sarovar'];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
            {['services', 'approach', 'results', 'case-studies', 'team', 'testimonials', 'contact'].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="nav-link capitalize">{s.replace('-', ' ')}</button>
            ))}
            <button onClick={() => scrollTo('contact')} className="btn-amber text-sm">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero — Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c1222 0%, #1e293b 100%)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop" alt="Luxury hotel lobby" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-500/3 rounded-full blur-2xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8" style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.2)' }}>
                ★ Trusted by 200+ Hotels Worldwide
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.05]" style={{ fontFamily: 'Source Serif 4, serif' }}>
                Elevate your<br />
                <span style={{ color: '#fbbf24' }}>hospitality</span><br />
                experience.
              </h1>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Boutique consulting firm specialising in hotel operations, revenue management, and guest experience design. We help hotels and resorts achieve operational excellence and sustainable growth across 18 countries.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('contact')} className="btn-amber px-10 py-4">Book Consultation</button>
                <button onClick={() => scrollTo('case-studies')} className="btn-outline-amber !border-white/30 !text-white hover:!bg-white/10 px-10 py-4">Case Studies</button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=500&fit=crop" alt="Hotel exterior" className="rounded-2xl w-full h-64 object-cover opacity-92" />
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=500&fit=crop" alt="Resort pool" className="rounded-2xl w-full h-64 object-cover opacity-92 mt-12" />
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=500&fit=crop" alt="Hotel room" className="rounded-2xl w-full h-64 object-cover opacity-92 -mt-12" />
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=500&fit=crop" alt="Luxury suite" className="rounded-2xl w-full h-64 object-cover opacity-92" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Bar */}
      <section className="py-12 border-b" style={{ borderColor: '#f1f5f9' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] uppercase font-bold mb-8" style={{ color: '#94a3b8' }}>Trusted by Leading Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {CLIENT_LOGOS.map((logo, i) => (
              <span key={i} className="text-lg font-bold" style={{ fontFamily: 'Source Serif 4, serif', color: '#cbd5e1' }}>{logo}</span>
            ))}
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

      {/* Approach — Horizontal Timeline */}
      <section id="approach" className="section-reveal py-28" style={{ background: '#0c1222' }}>
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: '#fbbf24' }}>Our Methodology</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3">The Horizon Approach</h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>A proven four-phase methodology refined over 200+ hotel engagements. Each phase builds on the last, ensuring sustainable transformation.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {APPROACH_STEPS.map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-3xl mb-4">{step.icon}</div>
                <div className="text-xs font-bold tracking-wider mb-2" style={{ color: '#fbbf24' }}>PHASE {step.num}</div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Source Serif 4, serif' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5" style={{ background: '#fbbf24', opacity: '0.9' }} />}
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
              <div key={i} className="consult-card overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{t.name}</h3>
                    <p className="text-xs" style={{ color: '#fbbf24' }}>{t.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{t.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights / Blog */}
      <section className="section-reveal py-28" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color: '#d97706' }}>Knowledge Hub</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: '#0f172a' }}>Latest Insights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {INSIGHTS.map((insight, i) => (
              <div key={i} className="case-card">
                <div className="case-img">
                  <img src={insight.img} alt={insight.title} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#fffbeb', color: '#92400e' }}>{insight.category}</span>
                    <span className="text-xs" style={{ color: '#94a3b8' }}>{insight.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0f172a' }}>{insight.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{insight.excerpt}</p>
                </div>
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
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => (<span key={j} style={{ color: '#fbbf24' }}>★</span>))}</div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'rgba(255,255,255,0.6)' }}>&ldquo;{t.quote}&rdquo;</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6" style={{ color: '#0f172a' }}>Let&rsquo;s Transform Your Hotel</h2>
            <p className="mb-10 leading-relaxed" style={{ color: '#475569' }}>Book a free discovery call. We will understand your challenges, share relevant case studies, and outline how we can help your property achieve its full potential.</p>
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
            <div className="mt-10">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop" alt="Office" className="rounded-2xl w-full h-48 object-cover" />
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
              <label className="block text-sm mb-2 font-medium" style={{ color: '#0f172a' }}>Property Size</label>
              <select className="form-input">
                <option value="">Number of rooms</option>
                <option>Under 50 rooms</option>
                <option>50-150 rooms</option>
                <option>150-300 rooms</option>
                <option>300+ rooms</option>
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
              <p className="text-sm leading-relaxed opacity-90">Boutique hospitality consulting. Operations, revenue, guest experience, and digital transformation for hotels worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Services</h4>
              <ul className="space-y-2 text-sm opacity-90">
                {SERVICES.slice(0, 4).map((s, i) => (<li key={i} className="hover:opacity-100 transition-opacity cursor-pointer">{s.name}</li>))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Company</h4>
              <ul className="space-y-2 text-sm opacity-90">
                {['About', 'Team', 'Careers', 'Insights'].map((l, i) => (<li key={i} className="hover:opacity-100 transition-opacity cursor-pointer">{l}</li>))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Offices</h4>
              <ul className="space-y-2 text-sm opacity-90">
                {['New Delhi', 'Mumbai', 'Dubai', 'Singapore'].map((l, i) => (<li key={i}>{l}</li>))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs opacity-85">© 2026 Horizon Hospitality Advisors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
