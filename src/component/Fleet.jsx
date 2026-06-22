import React, { useState } from 'react';
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
  Info,
  Briefcase,
  Fuel,
  CheckCircle2
} from 'lucide-react';

const cars = [
  {
    id: 1,
    code: 'SD-01',
    name: 'Swift Dzire',
    type: 'Executive Sedan',
    category: 'Sedan',
    badge: 'Most Efficient',
    description: 'Perfect for swift urban commutes and executive city travel with exceptional fuel efficiency.',
    specs: [
      { icon: <Users size={14} />, label: '4+1', sub: 'Seats' },
      { icon: <Briefcase size={14} />, label: '2 Bags', sub: 'Luggage' },
      { icon: <Settings size={14} />, label: 'Auto', sub: 'Class' },
      { icon: <Wind size={14} />, label: 'Dual', sub: 'Climate' },
      { icon: <Fuel size={14} />, label: 'Petrol', sub: 'Powertrain' },
    ],
    features: ['Professional Chauffeur', 'Complimentary Water', 'Live GPS Tracking'],
    price: '15',
  },
  {
    id: 2,
    code: 'IC-02',
    name: 'Innova Crysta',
    type: 'Premium MUV',
    category: 'Suv / Muv',
    badge: 'Luxury Choice',
    description: 'The gold standard of long-distance cruising. Unmatched captain-seat comfort for family or business.',
    specs: [
      { icon: <Users size={14} />, label: '6+1', sub: 'Seats' },
      { icon: <Briefcase size={14} />, label: '4 Bags', sub: 'Luggage' },
      { icon: <MapPin size={14} />, label: 'GPS', sub: 'Live' },
      { icon: <Star size={14} />, label: 'VIP', sub: 'Service' },
      { icon: <Fuel size={14} />, label: 'Diesel', sub: 'Torque' },
    ],
    features: ['Plush Leather Seats', 'Rear AC Control', 'Ample Legroom', 'WiFi Onboard'],
    price: '20',
  },
  {
    id: 3,
    code: 'TT-03',
    name: 'Tempo Traveller',
    type: 'Group Concierge',
    category: 'Luxury Coach',
    badge: 'Corporate Elite',
    description: 'Spacious high-roof luxury coach configured for corporate teams, event delegations, and grand family outings.',
    specs: [
      { icon: <Users size={14} />, label: '12-26', sub: 'Capacity' },
      { icon: <Briefcase size={14} />, label: '12+ Bags', sub: 'Vault' },
      { icon: <Settings size={14} />, label: 'Recliner', sub: 'Seats' },
      { icon: <Wind size={14} />, label: 'AV', sub: 'Media' },
      { icon: <Fuel size={14} />, label: 'Turbo', sub: 'Engine' },
    ],
    features: ['Individual Reading Lights', 'LCD Screen Media', 'Air Suspension', 'Ice Box Installed'],
    price: '35',
  },
];

export default function PremiumFleet() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCar, setSelectedCar] = useState(null);

  const categories = ['All', 'Sedan', 'Suv / Muv', 'Luxury Coach'];

  const filteredCars = activeCategory === 'All' 
    ? cars 
    : cars.filter(car => car.category.toLowerCase() === activeCategory.toLowerCase());

  const handleBook = (carName) => {
    alert(`📅 Redirecting to secure schedule checkout for: ${carName}`);
  };

  return (
    <section className="bg-[#0f1115] py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans select-none">
      {/* Subtle Premium Radial Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">Private Inventory</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
              The <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Concierge</span> Fleet
            </h2>
          </div>

          {/* Minimalist Trust Metrics */}
          <div className="flex gap-12 h-fit">
            <div>
              <p className="text-white font-bold text-2xl flex items-center gap-2 tracking-tight">
                <ShieldCheck className="text-amber-500" size={18} /> 100%
              </p>
              <p className="text-slate-500 text-[9px] uppercase tracking-[0.2em] mt-1 font-bold">Guaranteed Safety</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl tracking-tight">24/7</p>
              <p className="text-slate-500 text-[9px] uppercase tracking-[0.2em] mt-1 font-bold">On-Demand Dispatch</p>
            </div>
          </div>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat ? 'text-black z-10' : 'text-slate-500 hover:text-white'
              }`}
            >
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTabPanel"
                  className="absolute inset-0 bg-amber-500 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Fleet Typographic Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={car.id}
                className="group relative rounded-2xl bg-[#13151a] border border-white/[0.04] overflow-hidden hover:border-amber-500/20 transition-all duration-500 flex flex-col h-full shadow-xl"
              >
                {/* Structural Top Banner (Replaces Image Slot) */}
                <div className="p-6 border-b border-white/[0.04] bg-black/20 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black tracking-widest bg-amber-500/10 text-amber-500 px-2 py-1 rounded">
                      {car.code}
                    </span>
                    <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-3 mb-0.5">Rate / KM</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white text-3xl font-light tracking-tight">₹{car.price}</span>
                      <span className="text-slate-500 text-[9px] font-bold uppercase tracking-wider">Base</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black border border-white/10 px-2 py-0.5 rounded">
                      {car.badge}
                    </span>
                    <button 
                      onClick={() => setSelectedCar(selectedCar?.id === car.id ? null : car)}
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                        selectedCar?.id === car.id 
                          ? 'bg-amber-500 text-black border-amber-500' 
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Info size={12} />
                    </button>
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                        {car.name}
                      </h3>
                      <p className="text-slate-500 text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">
                        {car.type}
                      </p>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                      {car.description}
                    </p>

                    {/* Premium Technical Blueprint Grid */}
                    <div className="grid grid-cols-3 gap-2 p-2 bg-black/40 rounded-xl border border-white/[0.02] mb-6">
                      {car.specs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex flex-col p-2 rounded-lg bg-[#181b22]">
                          <div className="text-amber-500/80 mb-2">
                            {spec.icon}
                          </div>
                          <span className="text-white font-bold text-[11px]">{spec.label}</span>
                          <span className="text-slate-500 text-[8px] uppercase font-bold tracking-tight">{spec.sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* Inclusions Dropdown Drawer */}
                    <AnimatePresence>
                      {selectedCar?.id === car.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden border-t border-white/5 pt-4 mb-4"
                        >
                          <h4 className="text-[9px] uppercase tracking-widest font-black mb-2 text-slate-500">Tier Assets:</h4>
                          <div className="space-y-2">
                            {car.features.map((feat, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-slate-400 font-light">
                                <CheckCircle2 size={11} className="text-amber-500 shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Booking CTA Button */}
                  <button 
                    onClick={() => handleBook(car.name)}
                    className="w-full bg-white text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-amber-500 transition-all duration-300 active:scale-[0.99]"
                  >
                    Request Reservation
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Status Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-5"
        >
          <button className="group border border-white/10 px-8 py-3.5 rounded-xl hover:border-amber-500/30 transition-all duration-500 bg-white/[0.01]">
            <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase flex items-center gap-3">
              Review Custom Catalogs <ChevronRight size={12} className="text-amber-500" />
            </span>
          </button>
          
          <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.25em] flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> Live Dispatch Active
          </p>
        </motion.div>
      </div>
    </section>
  );
}