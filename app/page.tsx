'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const services = [
    { title: 'Operations', desc: 'Efficiency, SOPs, quality standards', icon: '\u2699\uFE0F' },
    { title: 'Revenue Strategy', desc: 'Pricing, distribution, upselling', icon: '\uD83D\uDCC8' },
    { title: 'Guest Experience', desc: 'Journey mapping, service design', icon: '\u2B50' },
    { title: 'Digital Transformation', desc: 'Tech stack, automation, AI', icon: '\uD83D\uDCBB' },
  ];

  return (
    <div className="bg-slate-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-slate-800 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">E</div>
              <div><h1 className="text-lg font-bold text-slate-900">Elevate Hospitality</h1><p className="text-[9px] text-slate-600 tracking-wider">CONSULTING GROUP</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','Case Studies','About','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ','-'))} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Schedule a strategy session" className="bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-900 transition-colors focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-2">Strategy Session</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-slate-800 focus-visible:outline-2 focus-visible:outline-slate-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 right-20 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 text-sm font-medium mb-4">HOSPITALITY EXPERTS</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">Elevate<br/><span className="text-slate-500">Your Guest Experience</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Strategic consulting for hotels, resorts, and restaurants. We help you delight guests and drive revenue.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Schedule your strategy session" className="bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-900 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-2">Book Strategy Session</button>
                <button aria-label="View our case studies" className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-2">Case Studies</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'200+',label:'Hotels Served'},{num:'$50M+',label:'Revenue Impact'},{num:'15+',label:'Years Experience'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-slate-800">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" alt="Luxury hotel lobby with elegant design and warm lighting" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-slate-600 text-sm font-medium mb-4">WHAT WE DO</p><h2 id="services-heading" className="text-4xl font-bold text-slate-900 mb-4">Consulting Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div><h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3><p className="text-gray-500 text-sm">{s.desc}</p></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-slate-600 text-sm font-medium mb-4">GET STARTED</p><h2 id="contact-heading" className="text-4xl font-bold text-slate-900 mb-6">Book Your Strategy Session</h2><p className="text-gray-600 mb-8">60-minute deep dive into your hospitality challenges and opportunities.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Alex Hotelier" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">Business Type</label><select id="business" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 focus:outline-none transition-colors"><option value="">Select type</option><option value="hotel">Hotel</option><option value="resort">Resort</option><option value="restaurant">Restaurant</option><option value="other">Other</option></select></div>
                <button type="submit" aria-label="Book your strategy session" className="w-full bg-slate-800 text-white py-4 rounded-xl font-medium hover:bg-slate-900 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-2">Book Session</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-slate-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold" aria-hidden="true">E</div><span className="text-white font-bold">Elevate Hospitality</span></div><p className="text-slate-400 text-sm">Transforming hospitality since 2011</p></div></footer>
    </div>
  );
}