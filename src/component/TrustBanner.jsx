/* eslint-disable no-unused-vars */
// TrustBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

const points = [
  { 
    title: 'Secure & Safe Travel', 
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: 'We follow strict vehicle safety standards. All cars undergo daily inspection before every trip.' 
  },
  { 
    title: 'Well-Trained Chauffeurs', 
    icon: <CheckCircle2 className="w-6 h-6" />,
    desc: 'Every driver is trained, polite, and professional. Reach us at any time for immediate assistance.' 
  },
  { 
    title: 'Reserve Online, Instantly', 
    icon: <MapPin className="w-6 h-6" />,
    desc: 'Book in just a few steps. Instant confirmation via SMS and WhatsApp. No hidden charges.' 
  },
];

export function TrustBanner() {
  return (
    <section className="bg-[#FCFCFD] py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-600 uppercase tracking-[0.3em] text-[10px] font-black">
              The Gold Standard
            </span>
          </div>
          
          <h2 className="text-slate-900 text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
            Renting a Car Has <br />
            <span className="font-serif italic text-amber-500">Never Been This Easy.</span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-lg font-light">
            From instant online booking to doorstep pickup — Pooja Travel makes every journey seamless,
            comfortable, and affordable. Trust built over <span className="font-semibold text-slate-900 underline decoration-amber-500/30">18 years</span> of excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto bg-slate-900 text-white font-bold text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-200 transition-all duration-300">
              Get a Free Quote
            </button>
            <button className="group flex items-center gap-2 text-slate-900 font-bold text-xs tracking-[0.2em] uppercase">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Content - Features */}
        <div className="relative space-y-4">
          {/* Vertical line decoration */}
          <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-slate-100 hidden md:block" />

          {points.map((p, index) => (
            <motion.div 
              key={p.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex gap-8 p-10 bg-white border border-slate-100 rounded-2xl hover:border-amber-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                {p.icon}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-black text-amber-500/40 tracking-tighter">0{index + 1}</span>
                  <h4 className="font-bold text-slate-900 text-xl tracking-tight">{p.title}</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>

              {/* Minimalist Hover Accent */}
              <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustBanner;