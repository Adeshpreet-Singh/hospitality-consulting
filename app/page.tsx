'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-bold text-teal-400">Apex Hospitality</h1><p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">Consulting — Miami</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-gray-400 hover:text-teal-400">Services</button>
            <button onClick={() => scrollTo('results')} className="text-sm text-gray-400 hover:text-teal-400">Results</button>
            <button onClick={() => scrollTo('contact')} className="bg-teal-600 text-white px-5 py-2.5 text-sm rounded-full hover:bg-teal-500">Book Consultation</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-24 bg-gradient-to-br from-teal-950 via-[#030712] to-cyan-950">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-40 text-center">
            <p className="text-teal-400 text-sm tracking-[0.3em] uppercase mb-6">Hospitality Consulting — Est. 2012</p>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-6">Elevate every<br />guest <span className="text-teal-400">experience.</span></h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto mb-10">Strategic consulting for hotels, restaurants, and hospitality brands seeking operational excellence and revenue growth.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => scrollTo('contact')} className="bg-teal-600 text-white px-8 py-4 text-lg rounded-full hover:bg-teal-500">Book Consultation</button>
              <button onClick={() => scrollTo('results')} className="border-2 border-gray-600 text-gray-300 px-8 py-4 text-lg rounded-full hover:border-teal-500">Case Studies</button>
            </div>
          </div>
        </section>

        <section className="py-8 border-y border-gray-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
            <div><div className="text-3xl font-bold text-teal-400">200+</div><div className="text-xs text-gray-500 uppercase">Hotels Served</div></div>
            <div><div className="text-3xl font-bold text-teal-400">$50M+</div><div className="text-xs text-gray-500 uppercase">Revenue Generated</div></div>
            <div><div className="text-3xl font-bold text-teal-400">40+</div><div className="text-xs text-gray-500 uppercase">Countries</div></div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-bold">Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Operations', desc: 'Efficiency audits, SOPs, and service standard optimization.', icon: '📊' },
                { name: 'Revenue Management', desc: 'Pricing strategy, yield optimization, and distribution.', icon: '📈' },
                { name: 'Brand Strategy', desc: 'Positioning, guest experience design, and storytelling.', icon: '🎯' },
                { name: 'Staff Training', desc: 'Service excellence programs and leadership development.', icon: '👥' },
                { name: 'Concept Development', desc: 'New restaurant and hotel concept creation.', icon: '💡' },
                { name: 'Tech Integration', desc: 'PMS, POS, CRM, and digital transformation.', icon: '💻' },
              ].map((s, i) => (
                <div key={i} className="border border-gray-800 rounded-xl p-8 hover:border-teal-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="py-24 bg-gray-900/30" aria-labelledby="results-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="results-heading" className="text-4xl font-bold">Results</h2></div>
            <div className="space-y-8">
              {[
                { title: 'Boutique Hotel Revival', result: '35% RevPAR increase', desc: 'Restructured pricing, redesigned guest journey, and implemented upselling strategy for a 120-room boutique property.' },
                { title: 'Restaurant Turnaround', result: 'From 2.8 to 4.6 stars', desc: 'Overhauled service training, menu engineering, and online reputation management for a struggling fine dining restaurant.' },
              ].map((cs, i) => (
                <div key={i} className="border-l-3 border-teal-500 pl-6">
                  <div className="text-teal-400 font-bold text-sm mb-1">{cs.result}</div>
                  <h3 className="text-xl font-bold mb-2">{cs.title}</h3>
                  <p className="text-gray-400">{cs.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Book a Consultation</h2>
            <p className="text-gray-400 mb-10">Free 60-minute assessment of your property's opportunities.</p>
            <form className="border border-gray-800 rounded-xl p-8 space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-gray-400">Name</label><input type="text" placeholder="Your name" required className="w-full border border-gray-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-gray-600 focus:border-teal-500 focus:outline-none" /></div>
                <div><label className="block text-sm mb-2 text-gray-400">Email</label><input type="email" placeholder="you@hotel.com" required className="w-full border border-gray-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-gray-600 focus:border-teal-500 focus:outline-none" /></div>
              </div>
              <div><label className="block text-sm mb-2 text-gray-400">Property Type</label>
                <select className="w-full border border-gray-700 bg-[#030712] px-4 py-3 rounded-lg focus:border-teal-500 focus:outline-none text-gray-100">
                  <option>Boutique Hotel</option><option>Hotel Chain</option><option>Restaurant</option><option>Resort</option>
                </select>
              </div>
              <button type="submit" disabled={submitted} className="w-full bg-teal-600 text-white py-4 rounded-lg font-bold hover:bg-teal-500 transition-colors disabled:opacity-60">{submitted ? '✓ Scheduled! We\'ll confirm' : 'Book Consultation'}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">© {new Date().getFullYear()} Apex Hospitality. Miami, FL.</div></footer>
    </div>
  );
}
