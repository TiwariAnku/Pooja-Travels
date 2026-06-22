import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  MapPin, 
  Clock, 
  Building2, 
  Users2, 
  Compass, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const stats = [
  { label: 'Years of Excellence', value: '18+', sub: 'Since 2008' },
  { label: 'Airport Transfers', value: '5000+', sub: 'Tracked & On-Time' },
  { label: 'Corporate Clients', value: '200+', sub: 'Retained Accounts' },
  { label: 'Miles Traversed', value: '1M+', sub: 'Pan India Mobility' }
];

const values = [
  {
    icon: <Shield className="text-amber-500" size={20} />,
    title: 'Discreet Security',
    description: 'Chauffeurs trained in defensive driving, real-time vehicle telematics telemetry, and absolute corporate privacy protocols.'
  },
  {
    icon: <Clock className="text-blue-500" size={20} />,
    title: 'Punctuality Guarantee',
    description: 'Advanced flight tracking integrations and AI-assisted dispatching routes to ensure zero passenger wait times.'
  },
  {
    icon: <Building2 className="text-amber-500" size={20} />,
    title: 'Corporate Compliance',
    description: 'Streamlined corporate operations with precise digital billing systems, immediate GST invoicing, and dedicated account management.'
  }
];

const milestones = [
  { year: '2008', title: 'The Genesis', desc: 'Pooja Travels launched in Mumbai with a premium fleet segment targeting core executive transit routes.' },
  { year: '2015', title: 'Corporate Alignment', desc: 'Passed the 100+ corporate accounts milestone, introducing 24/7 dedicated concierge helpdesks.' },
  { year: '2022', title: 'Pan-India Footprint', desc: 'Expanded specialized outstation tourist circuits and cross-border commercial business operations.' },
  { year: '2026', title: 'The Digital Era', desc: 'Integrating intelligent smart-routing technology to achieve 100% automated on-time tracking.' }
];

export default function AboutUs() {
  const [activeMilestone, setActiveMilestone] = useState(3);

  return (
    <div className="bg-[#0f1115] text-white min-h-screen font-sans overflow-hidden selection:bg-amber-500 selection:text-black">
      
      {/* Background Accent Lines & Radial Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.02] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HERO NARRATIVE SECTION */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">Est. 2008</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-8">
              Architecting Premium <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                Corporate Mobility
              </span>
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              For over a decade, Pooja Travels has defined luxury executive transit across Mumbai, Pune, and Nashik. We don't just book trips; we manage reliable schedules with premium corporate focus.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-14">
            <div className="p-8 rounded-2xl bg-[#13161c] border border-white/[0.04] shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-transparent rounded-tr-2xl pointer-events-none" />
              <Award className="text-amber-500 mb-6" size={28} />
              <h3 className="text-lg font-bold mb-3 tracking-tight">The Executive Standard</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                From specialized high-tier airport transfers to long-term group delegations, our mission centers around end-to-end premium reliability, immaculate cabin maintenance, and transparent institutional processes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LIVE HIGH-CONTRAST METRICS HUB */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.03]">
              <span className="text-xs text-slate-500 font-bold block mb-2 tracking-widest uppercase">{stat.label}</span>
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-1">{stat.value}</div>
              <span className="text-[10px] text-amber-500 font-bold tracking-wider uppercase">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE PRINCIPLES (GRID WITHOUT IMAGES) */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-16">
          <span className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase block mb-3">Institutional Values</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Engineered Around Absolute Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#13161c] border border-white/[0.03] flex flex-col justify-between group hover:border-white/10 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:bg-white/5 transition-colors">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white tracking-tight">{val.title}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{val.description}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.02] flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                <span>Verified Protocol</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CHRONOLOGICAL INTERACTIVE TIMELINE */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto bg-black/10 rounded-3xl border border-white/[0.02] mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase block mb-3">Our Footprint</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Chronicles of Evolution</h2>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Click through the landmark horizons that transformed a local luxury fleet provider into a trusted regional institutional logistics partner.
            </p>
          </div>

          <div className="lg:col-span-8">
            {/* Timeline Selection Track */}
            <div className="flex justify-between items-center relative mb-12 before:absolute before:w-full before:h-[1px] before:bg-white/5 before:top-1/2 before:left-0 before:-z-10">
              {milestones.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    activeMilestone === idx 
                      ? 'bg-amber-500 text-black shadow-lg scale-110' 
                      : 'bg-[#13161c] border border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>

            {/* Dynamic Event Frame */}
            <div className="p-8 rounded-2xl bg-[#13161c] border border-white/5 min-h-[140px] relative overflow-hidden">
              <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.01] select-none">
                {milestones[activeMilestone].year}
              </div>
              <h3 className="text-xl font-bold text-amber-500 mb-2 tracking-tight">
                {milestones[activeMilestone].title}
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed max-w-2xl">
                {milestones[activeMilestone].desc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. MINIMALIST GLOBAL FOOTER LINK */}
      <footer className="py-16 text-center border-t border-white/5">
        <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mb-4">Ready to Experience Elite Service?</p>
        <button className="group border border-white/10 px-8 py-4 rounded-xl hover:border-amber-500/40 bg-white/[0.01] transition-all duration-300">
          <span className="text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-3">
            Explore Premium Inventory <ChevronRight size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </footer>

    </div>
  );
}