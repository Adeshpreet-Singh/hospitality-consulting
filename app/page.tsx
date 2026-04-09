'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 {{ACCENTBG}} text-white px-4 py-2 rounded z-[100] font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-current/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div><h1 className="text-xl font-bold">Apex Hospitality</h1><p className="text-xs text-slate-400 tracking-wider uppercase">Est. 2012</p></div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('about')} className="text-sm text-slate-400 hover:text-teal-400">About</button>
              <button onClick={() => scrollTo('services')} className="text-sm text-slate-400 hover:text-teal-400">Services</button>
              <button onClick={() => scrollTo('team')} className="text-sm text-slate-400 hover:text-teal-400">Team</button>
              <button onClick={() => scrollTo('contact')} className="{{ACCENTBG}} text-white px-5 py-2 text-sm rounded-full">Book Consultation</button>
            </div>
          </div>
        </nav>
      </header>
      <main id="main" role="main">
        {/* EDITORIAL HERO - Asymmetric split */}
        <section className="pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-teal-400 text-sm tracking-widest uppercase mb-6">Est. 2012</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight whitespace-pre-line">Elevate every
guest experience.</h2>
              <p className="text-xl text-slate-400 mt-8 max-w-lg leading-relaxed">Strategic consulting for hotels, restaurants, and hospitality brands seeking operational excellence.</p>
              <div className="flex gap-4 mt-10">
                <button onClick={() => scrollTo('contact')} className="{{ACCENTBG}} text-white px-8 py-4 rounded-full">Book Consultation</button>
                <button onClick={() => scrollTo('services')} className="border-2 border-current/20 px-8 py-4 rounded-full">Case Studies</button>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col items-end gap-6 text-right">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-teal-400">200+</div><div className="text-sm text-slate-400 mt-1">Hotels served</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-teal-400">$50M+</div><div className="text-sm text-slate-400 mt-1">Revenue generated</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-teal-400">40+</div><div className="text-sm text-slate-400 mt-1">Countries</div></div>
            </div>
          </div>
        </section>
        {/* Ornament divider */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-current/10 my-4"></div></div>
        {/* EXPANDABLE SERVICES - Side-by-side description */}
        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4"><p className="text-teal-400 text-sm tracking-widest uppercase mb-3">What We Do</p><h2 id="services-heading" className="text-4xl font-bold">Our Services</h2></div>
              <div className="md:col-span-8 flex items-end"><p className="text-slate-400 text-lg">Comprehensive solutions tailored to your needs.</p></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Operations</h3>
              <p className="text-slate-400 leading-relaxed">Efficiency audits and SOPs.</p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Revenue Mgmt</h3>
              <p className="text-slate-400 leading-relaxed">Pricing strategy and yield optimization.</p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Brand Strategy</h3>
              <p className="text-slate-400 leading-relaxed">Positioning and guest experience design.</p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Staff Training</h3>
              <p className="text-slate-400 leading-relaxed">Service excellence programs.</p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Concept Dev</h3>
              <p className="text-slate-400 leading-relaxed">New restaurant and hotel concepts.</p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3">Tech Integration</h3>
              <p className="text-slate-400 leading-relaxed">PMS, POS, and CRM systems.</p>
            </article>
            </div>
          </div>
        </section>
        {/* TEAM - Dark section with initials */}
        <section id="team" className="py-24 bg-slate-900" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-5"><p className="text-teal-400 text-sm tracking-widest uppercase mb-3">Our Team</p><h2 id="team-heading" className="text-4xl font-bold">The experts behind your success.</h2></div>
              <div className="md:col-span-7 flex items-end"><p className="text-slate-400">Our team combines deep expertise with strategic vision.</p></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center text-2xl font-bold text-teal-400">MT</div>
              <h3 className="font-bold">Michael Torres</h3><p className="text-sm text-teal-400">Managing Director</p><p className="text-sm text-slate-400 mt-1">30yr hospitality</p></div>
            <div className="bg-slate-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center text-2xl font-bold text-teal-400">SC</div>
              <h3 className="font-bold">Sarah Chen</h3><p className="text-sm text-teal-400">Revenue Lead</p><p className="text-sm text-slate-400 mt-1">Ex-Marriott</p></div>
            <div className="bg-slate-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center text-2xl font-bold text-teal-400">DK</div>
              <h3 className="font-bold">David Kim</h3><p className="text-sm text-teal-400">Brand Strategist</p><p className="text-sm text-slate-400 mt-1">Ex-Starwood</p></div>
            <div className="bg-slate-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center text-2xl font-bold text-teal-400">LP</div>
              <h3 className="font-bold">Lisa Park</h3><p className="text-sm text-teal-400">Training Director</p><p className="text-sm text-slate-400 mt-1">CHRE certified</p></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12"><p className="text-teal-400 text-sm tracking-widest uppercase mb-3">Questions</p><h2 id="faq-heading" className="text-4xl font-bold">FAQ</h2></div>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Client size?<span className="ml-4 text-slate-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">Boutique hotels to international chains.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Duration?<span className="ml-4 text-slate-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">3-12 month engagements typical.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Results?<span className="ml-4 text-slate-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">Average 22% revenue increase in year one.</p></details></div>
          </div>
        </section>
        {/* CONTACT - Split with form */}
        <section id="contact" className="py-24 bg-slate-900" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-teal-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
              <h2 id="contact-heading" className="text-4xl font-bold mb-6">Book Consultation</h2>
              <div className="space-y-6 text-slate-400">                  <div><div className="font-bold">Phone</div><a href="tel:(555) 678-9013" className="text-teal-400">(555) 678-9013</a></div>
                  <div><div className="font-bold">Address</div><p>500 Hospitality Row, Miami, FL</p></div>
                  <div><div className="font-bold">Hours</div><p>Mon–Fri 9 AM – 6 PM</p></div></div>
            </div>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label htmlFor="name" className="block text-sm mb-2">Name</label><input id="name" type="text" placeholder="Your name" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" /></div>
                <div><label htmlFor="email" className="block text-sm mb-2">Email</label><input id="email" type="email" placeholder="you@email.com" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" /></div>
              </div>
              <div><label htmlFor="message" className="block text-sm mb-2">Message</label><textarea id="message" rows={4} placeholder="How can we help?" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent resize-none" /></div>
              <button type="submit" className="w-full {{ACCENTBG}} text-white py-4 rounded-xl">{submitted ? "Sent!" : "Book Consultation"}</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 border-t border-current/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold">Apex Hospitality</div>
          <p className="text-sm text-slate-400">&copy; 2026 Apex Hospitality</p>
        </div>
      </footer>
    </div>
  );
}
