"use client";

import { useState, useEffect } from "react";

const services = [
  { name: "Revenue Management", icon: "📈", desc: "Optimize pricing & maximize occupancy" },
  { name: "Operations Audit", icon: "🔍", desc: "Comprehensive efficiency analysis" },
  { name: "Staff Training", icon: "👥", desc: "World-class hospitality training" },
  { name: "Digital Strategy", icon: "💻", desc: "Technology & online presence" },
];

const stats = [
  { value: "500+", label: "Hotels Served" },
  { value: "35%", label: "Avg Revenue Increase" },
  { value: "25+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", hotel: "", service: "", message: "" });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Consultation request sent! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🏨</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-wider">HOSPITALITY PRO</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Results", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-500 transition-all"
          >
            Free Audit
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-3xl"
            style={{ 
              top: '10%', 
              left: '20%',
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` 
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-8">
              <span className="text-emerald-600">✓</span>
              <span className="text-emerald-700 text-sm font-medium">Trusted by 500+ Hotels</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hospitality</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Strategic consulting that transforms hotels into world-class destinations. 
              Increase revenue, delight guests, and lead your market.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
              >
                Get Free Audit
              </button>
              <button 
                onClick={() => scrollToSection("results")} 
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all"
              >
                View Results
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
                alt="Luxury hotel" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">+35% Revenue</div>
                  <div className="text-sm text-gray-500">Average Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 text-sm tracking-[0.3em] uppercase mb-4 block">What We Do</span>
            <h2 className="text-5xl font-bold text-gray-900">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-emerald-100 hover:border-emerald-300"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-200 text-sm tracking-[0.3em] uppercase mb-4 block">Our Story</span>
            <h2 className="text-5xl font-bold mb-8">Industry Pioneers</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              Founded by former hotel executives, we understand the hospitality industry from the inside out. 
              Our data-driven approach combined with deep industry expertise delivers measurable results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-emerald-200 text-sm">Hotels Served</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">$2B+</div>
                <div className="text-emerald-200 text-sm">Revenue Generated</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" 
              alt="Hotel lobby" 
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 text-sm tracking-[0.3em] uppercase mb-4 block">Get Started</span>
            <h2 className="text-5xl font-bold text-gray-900">Free Consultation</h2>
          </div>

          <div className="bg-emerald-50 rounded-3xl p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-emerald-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  placeholder="Your name"
                  required
                />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-emerald-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.hotel}
                  onChange={(e) => setFormData({...formData, hotel: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-emerald-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  placeholder="Hotel name"
                />
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-emerald-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                >
                  <option value="">Service interest</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-emerald-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
                placeholder="Current challenges..."
              />
              <button 
                type="submit" 
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all hover:scale-[1.02]"
              >
                Request Free Audit
              </button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-emerald-50 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">📍</span>
              <p className="text-gray-600">456 Hospitality Ave<br />Luxury District, NY 10036</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">📞</span>
              <p className="text-gray-600">+1 (212) 555-0199</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">🕐</span>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM<br />By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white">🏨</span>
              </div>
              <span className="text-xl font-bold tracking-wider">HOSPITALITY PRO</span>
            </div>
            <div className="flex gap-6">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2026 Hospitality Pro Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}