import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Settings, 
  Wind, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  ChevronRight,
  Info
} from 'lucide-react';

const cars = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600',
    name: 'Swift Dzire',
    type: 'Executive Sedan',
    badge: 'Most Popular',
    specs: [
      { icon: <Users size={14} />, label: '4+1', sub: 'Seats' },
      { icon: <Settings size={14} />, label: 'Auto', sub: 'Class' },
      { icon: <Wind size={14} />, label: 'Dual', sub: 'Climate' },
    ],
    price: '12',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600',
    name: 'Innova Crysta',
    type: 'Premium MUV',
    badge: 'Luxury Choice',
    specs: [
      { icon: <Users size={14} />, label: '6+1', sub: 'Seats' },
      { icon: <MapPin size={14} />, label: 'GPS', sub: 'Live' },
      { icon: <Star size={14} />, label: 'VIP', sub: 'Service' },
    ],
    price: '18',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1559140331-016428d070b4?auto=format&fit=crop&q=80&w=600',
    name: 'Tempo Traveller',
    type: 'Group Concierge',
    badge: 'Corporate',
    specs: [
      { icon: <Users size={14} />, label: '12-26', sub: 'Capacity' },
      { icon: <Settings size={14} />, label: 'Recliner', sub: 'Seats' },
      { icon: <Wind size={14} />, label: 'AV', sub: 'Media' },
    ],
    price: '28',
  },
];

export default function PremiumFleet() {
  // eslint-disable-next-line no-unused-vars
  const [hoveredId, setHoveredId] = useState(null);

  const handleBook = (carName) => {
    alert(`Initiating booking for: ${carName}`);
  };

  return (
    <section className="bg-[#0f1115] py-24 px-6 lg:px-12 relative overflow-hidden font-sans">
      {/* Premium Background Accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-amber-500" />
              <span className="text-amber-500 text-xs font-black tracking-[0.4em] uppercase">Premium Experience</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Elite</span> Fleet
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-8 border-l border-white/10 pl-8"
          >
            <div>
              <p className="text-white font-bold text-2xl flex items-center gap-2">
                <ShieldCheck className="text-amber-500" size={20} /> 100%
              </p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1 font-bold">Safety Rated</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">24/7</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1 font-bold">Concierge</p>
            </div>
          </motion.div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(car.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-72 relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-115 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-80" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 overflow-hidden rounded-full">
                  <div className="bg-amber-500 text-black text-[9px] font-black tracking-widest uppercase px-4 py-1.5 flex items-center gap-2">
                    <Star size={10} fill="black" /> {car.badge}
                  </div>
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-6 left-8">
                   <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Rate / KM</div>
                   <div className="flex items-baseline gap-1">
                      <span className="text-white text-3xl font-black italic">₹{car.price}</span>
                      <span className="text-amber-500 text-xs font-bold uppercase">Base</span>
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{car.name}</h3>
                    <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">{car.type}</p>
                  </div>
                  <button 
                    onClick={() => handleBook(car.name)}
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    <Info size={20} />
                  </button>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/5">
                  {car.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="text-amber-500 bg-amber-500/10 w-fit p-1.5 rounded-lg">
                        {spec.icon}
                      </div>
                      <div>
                        <div className="text-white font-bold text-xs">{spec.label}</div>
                        <div className="text-slate-500 text-[9px] uppercase font-bold tracking-tighter">{spec.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleBook(car.name)}
                  className="w-full bg-white text-black py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group-hover:bg-amber-500 transition-all duration-300 transform active:scale-95 shadow-xl shadow-black/50"
                >
                  Reserve Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <button className="relative group overflow-hidden border border-white/20 px-12 py-5 rounded-full hover:border-amber-500/50 transition-all duration-500">
            <span className="relative z-10 text-white font-black text-xs tracking-[0.2em] uppercase flex items-center gap-4">
              Explore Full Catalog <ChevronRight size={16} className="text-amber-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
          <p className="mt-8 text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Availability Updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}