'use client';

import { useState } from 'react';

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

 const scrollToSection = (id: string) => {
 const element = document.getElementById(id);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' });
 element.focus();
 }
 setMenuOpen(false);
 };

 const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormStatus('sending');
 const form = e.currentTarget;
 const formData = new FormData(form);
 try {
 const res = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 body: formData,
 });
 if (res.ok) {
 setFormStatus('sent');
 form.reset();
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }
 };

 const services = [
 { title: 'Operations Excellence', desc: 'Streamline workflows, implement SOPs, and elevate quality standards across your property.', icon: '\u2699\uFE0F' },
 { title: 'Revenue Strategy', desc: 'Optimize pricing, distribution channels, and upselling to maximize RevPAR and profitability.', icon: '\uD83D\uDCC8' },
 { title: 'Guest Experience Design', desc: 'Map the guest journey, design memorable touchpoints, and build loyalty programs that retain guests.', icon: '\u2B50' },
 { title: 'Digital Transformation', desc: 'Modernize your tech stack, automate operations, and leverage AI for smarter decision-making.', icon: '\uD83D\uDCBB' },
 { title: 'Staff Training', desc: 'Upskill your team with hospitality-specific training, leadership coaching, and service excellence programs.', icon: '\uD83C\uDF93' },
 { title: 'Sustainability Consulting', desc: 'Implement green practices, reduce costs, and attract eco-conscious travelers with ESG strategies.', icon: '\uD83C\uDF31' },
 ];

 const caseStudies = [
 {
 title: 'Grand Meridian Resort',
 result: '+32% Revenue in 6 Months',
 desc: 'Revamped pricing strategy and guest experience program for a 250-room luxury resort in Miami.',
 metric: '$2.4M additional revenue',
 },
 {
 title: 'Urban Bistro Chain',
 result: '4.2 to 4.8 Star Rating',
 desc: 'Operations overhaul and staff training across 12 restaurant locations in Chicago.',
 metric: '98% guest satisfaction',
 },
 {
 title: 'Coastal Boutique Hotels',
 result: '-25% Operating Costs',
 desc: 'Digital transformation and process automation for a portfolio of 5 boutique properties.',
 metric: '18-month ROI',
 },
 ];

 const team = [
 { name: 'Sarah Mitchell', role: 'Founder & CEO', bio: '20+ years in luxury hospitality. Former VP at Marriott International.' },
 { name: 'David Chen', role: 'Head of Revenue Strategy', bio: 'Revenue management expert with $100M+ in optimized pricing.' },
 { name: 'Amara Osei', role: 'Guest Experience Director', bio: 'Former Ritz-Carlton service designer. Certified hospitality educator.' },
 ];

 const navItems = ['Services', 'Case Studies', 'Team', 'Contact'];

 return (
 <div>
 {/* Skip Link */}
 <a
 href="#main-content"
 className="sr-only focus:not-sr-only"

 >
 Skip to main content
 </a>

 {/* Header / Nav */}
 <header>
 <nav role="navigation" aria-label="Main navigation">
 <div>
 <div>
 <div aria-hidden="true">E</div>
 <div>
 <span>Elevate Hospitality</span>
 <div>Consulting Group</div>
 </div>
 </div>

 {/* Desktop Nav */}
 <div className="hidden md:flex gap-6 items-center">
 {navItems.map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
 aria-label={`Navigate to ${item} section`}

 >
 {item}
 </button>
 ))}
 <a
 href="tel:+15551234567"

 >
 Free Consultation
 </a>
 </div>

 {/* Mobile Menu Button */}
 <button
 aria-label={menuOpen ? 'Close menu' : 'Open menu'}
 aria-expanded={menuOpen}
 className="md:hidden"

 onClick={() => setMenuOpen(!menuOpen)}
 >
 <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
 {menuOpen ? (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
 ) : (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
 )}
 </svg>
 </button>
 </div>

 {/* Mobile Menu */}
 {menuOpen && (
 <div className="md:hidden">
 {navItems.map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}

 >
 {item}
 </button>
 ))}
 <a href="tel:+15551234567">
 Free Consultation
 </a>
 </div>
 )}
 </nav>
 </header>

 <main id="main-content" role="main">
 {/* Hero */}
 <section aria-labelledby="hero-heading" className="hero reveal">
 <div className="md:grid-cols-2">
 <div>
 <span className="badge">Hospitality Experts</span>
 <h2 id="hero-heading" className="heading-serif">
 Elevate Your<br />
 <span>Guest Experience</span>
 </h2>
 <p>
 Strategic consulting for hotels, resorts, and restaurants. We help you delight guests, optimize operations, and drive sustainable revenue growth.
 </p>
 <div>
 <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
 Book Free Consultation
 </a>
 <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} className="btn-outline">
 View Case Studies
 </a>
 </div>
 <div>
 {[
 { num: '200+', label: 'Hotels Served' },
 { num: '$50M+', label: 'Revenue Impact' },
 { num: '15+', label: 'Years Experience' },
 ].map((s, i) => (
 <div key={i}>
 <div>{s.num}</div>
 <div>{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 <div className="img-hover reveal">
 <div>
 <img
 src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
 alt="Luxury hotel lobby with elegant design and warm lighting"

 />
 </div>
 </div>
 </div>
 </section>

 {/* Services */}
 <section id="services" aria-labelledby="services-heading">
 <div>
 <div className="reveal">
 <span className="badge">What We Do</span>
 <h2 id="services-heading" className="heading-sans">Consulting Services</h2>
 <p>Comprehensive solutions tailored to the unique challenges of the hospitality industry.</p>
 </div>
 <div>
 {services.map((s, i) => (
 <article key={i} className="card reveal">
 <div aria-hidden="true">{s.icon}</div>
 <h3>{s.title}</h3>
 <p>{s.desc}</p>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* Case Studies */}
 <section id="case-studies" aria-labelledby="case-studies-heading" className="section-alt">
 <div>
 <div className="reveal">
 <span className="badge">Results</span>
 <h2 id="case-studies-heading" className="heading-sans">Case Studies</h2>
 <p>Real results for real hospitality businesses.</p>
 </div>
 <div>
 {caseStudies.map((cs, i) => (
 <article key={i} className="card reveal">
 <div>{cs.result}</div>
 <h3>{cs.title}</h3>
 <p>{cs.desc}</p>
 <div className="trust-badge">{cs.metric}</div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* Team */}
 <section id="team" aria-labelledby="team-heading">
 <div>
 <div className="reveal">
 <span className="badge">Our Team</span>
 <h2 id="team-heading" className="heading-sans">Meet the Experts</h2>
 <p>Industry veterans with decades of combined hospitality experience.</p>
 </div>
 <div>
 {team.map((member, i) => (
 <div key={i} className="card reveal">
 <div>
 {member.name.split(' ').map(n => n[0]).join('')}
 </div>
 <h3>{member.name}</h3>
 <div>{member.role}</div>
 <p>{member.bio}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Contact / Free Consultation */}
 <section id="contact" aria-labelledby="contact-heading">
 <div className="md:grid-cols-2">
 <div className="reveal">
 <span className="badge">Get Started</span>
 <h2 id="contact-heading" className="heading-sans">Book Your Free Consultation</h2>
 <p>
 60-minute deep dive into your hospitality challenges and opportunities. No obligation, no pressure — just expert insights.
 </p>

 {/* Contact Info */}
 <div>
 <a href="tel:+15551234567">
 <span aria-hidden="true">
 <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
 </span>
 +1 (555) 123-4567
 </a>
 <a href="mailto:hello@elevatehospitality.com">
 <span aria-hidden="true">
 <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
 </span>
 hello@elevatehospitality.com
 </a>
 <div>
 <span aria-hidden="true">
 <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
 </span>
 350 Fifth Avenue, Suite 4200<br />New York, NY 10118
 </div>
 <div>
 <span aria-hidden="true">
 <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
 </span>
 Mon – Fri: 9:00 AM – 6:00 PM EST
 </div>
 </div>

 {/* Social / WhatsApp */}
 <div>
 <a href="https://www.linkedin.com/company/elevate-hospitality" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
 LinkedIn
 </a>
 <a href="https://wa.me/15551234567?text=Hi%20Elevate%20Hospitality%2C%20I%27d%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
 WhatsApp
 </a>
 </div>
 </div>

 {/* Form */}
 <div className="card reveal">
 {formStatus === 'sent' ? (
 <div>
 <div aria-hidden="true">\u2705</div>
 <h3>Thank You!</h3>
 <p>We&rsquo;ll get back to you within 24 hours to schedule your free consultation.</p>
 </div>
 ) : (
 <form onSubmit={handleFormSubmit} noValidate>
 {/* Web3Forms access key */}
 <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
 <input type="hidden" name="subject" value="New Consultation Request - Elevate Hospitality" />
 <input type="checkbox" name="botcheck" />

 <div className="form-group">
 <label htmlFor="name" className="form-label">Your Name *</label>
 <input id="name" name="name" type="text" required placeholder="Alex Hotelier" className="form-input" />
 </div>
 <div className="form-group">
 <label htmlFor="email" className="form-label">Email Address *</label>
 <input id="email" name="email" type="email" required placeholder="alex@hotel.com" className="form-input" />
 </div>
 <div className="form-group">
 <label htmlFor="phone" className="form-label">Phone Number</label>
 <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="form-input" />
 </div>
 <div className="form-group">
 <label htmlFor="business" className="form-label">Business Type *</label>
 <select id="business" name="business" required className="form-input">
 <option value="">Select type</option>
 <option value="hotel">Hotel</option>
 <option value="resort">Resort</option>
 <option value="restaurant">Restaurant</option>
 <option value="other">Other</option>
 </select>
 </div>
 <div className="form-group">
 <label htmlFor="message" className="form-label">Tell Us About Your Needs</label>
 <textarea id="message" name="message" rows={4} placeholder="Describe your current challenges or goals..." className="form-input" />
 </div>
 <button
 type="submit"
 disabled={formStatus === 'sending'}
 >
 {formStatus === 'sending' ? 'Sending...' : 'Book Free Consultation'}
 </button>
 {formStatus === 'error' && (
 <p>
 Something went wrong. Please try again or call us directly.
 </p>
 )}
 </form>
 )}
 </div>
 </div>
 </section>

 {/* Google Maps Embed */}
 <section aria-label="Our Location">
 <div>
 <iframe
 title="Elevate Hospitality office location in New York"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1"
 width="100%"
 height="350"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 />
 </div>
 </section>
 </main>

 {/* Footer */}
 <footer role="contentinfo">
 <div>
 <div>
 <div>
 <div>
 <div aria-hidden="true">E</div>
 <span>Elevate Hospitality</span>
 </div>
 <p>Transforming hospitality businesses since 2011.</p>
 </div>
 <div>
 <h4>Contact</h4>
 <div>
 <a href="tel:+15551234567">+1 (555) 123-4567</a>
 <a href="mailto:hello@elevatehospitality.com">hello@elevatehospitality.com</a>
 </div>
 </div>
 <div>
 <h4>Hours</h4>
 <p>Mon – Fri: 9:00 AM – 6:00 PM EST</p>
 </div>
 <div>
 <h4>Connect</h4>
              <a href="https://www.linkedin.com/company/elevate-hospitality" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/elevatehosp" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
 <div>
 &copy; {new Date().getFullYear()} Elevate Hospitality Consulting Group. All rights reserved.
 </div>
 </div>
 </footer>
 </div>
 );
}
