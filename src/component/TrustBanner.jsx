// TrustBanner.jsx
import React from 'react';

const points = [
  { 
    title: 'Secure & Safe Travel', 
    desc: 'We follow strict vehicle safety standards. All cars undergo daily inspection before every trip.' 
  },
  { 
    title: 'Well-Trained Chauffeurs', 
    desc: 'Every driver is trained, polite, and professional. Reach us at any time for immediate assistance.' 
  },
  { 
    title: 'Reserve Online, Instantly', 
    desc: 'Book in just a few steps. Instant confirmation via SMS and WhatsApp. No hidden charges.' 
  },
];

export function TrustBanner() {
  return (
    <section className="bg-[#0f172a] py-24 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="text-[#f59e0b] uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            The Gold Standard
          </span>
          <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Renting a Car Has Never <br />
            <span className="text-[#f59e0b]">Been This Easy</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
            From instant online booking to doorstep pickup — Pooja Travel makes every journey seamless,
            comfortable, and affordable. Trust built over 18 years of dedicated service.
          </p>
          <button className="bg-[#f59e0b] text-black font-extrabold text-sm tracking-widest uppercase px-12 py-5 rounded-sm hover:bg-white transition-colors duration-300">
            Get a Free Quote
          </button>
        </div>

        {/* Right Content - Features */}
        <div className="space-y-6">
          {points.map((p, index) => (
            <div key={p.title} className="group flex gap-6 p-8 bg-white/5 border border-white/10 rounded-sm hover:border-[#f59e0b]/50 transition-all duration-500">
              <div className="text-[#f59e0b] font-mono text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </div>
              <div>
                <div className="font-bold text-white text-lg mb-2 uppercase tracking-wide">{p.title}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustBanner;