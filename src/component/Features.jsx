import React from 'react';
import { motion } from 'framer-motion';
import { Shield, UserCheck, Radio, Clock, ArrowRight } from 'lucide-react';

const features = [
  {
    id: '01',
    icon: <Shield className="w-6 h-6" />,
    title: 'Certified Safety Protocols',
    desc: 'Beyond standard insurance, our entire fleet undergoes rigorous 50-point safety inspections and daily sanitization cycles.'
  },
  {
    id: '02',
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Elite Chauffeur Corps',
    desc: 'Our professionals are background-verified concierge experts trained in defensive driving and premium etiquette.'
  },
  {
    id: '03',
    icon: <Radio className="w-6 h-6" />,
    title: 'Fleet Intelligence',
    desc: 'Advanced GPS telemetry provides live tracking and encrypted trip-sharing capabilities for enhanced security.'
  },
  {
    id: '04',
    icon: <Clock className="w-6 h-6" />,
    title: 'Precision Scheduling',
    desc: 'Our 24/7 operations center ensures 99.9% on-time arrivals, managing real-time flight tracking and rerouting.'
  },
];

const Features = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] text-[20rem] font-black text-slate-50/80 select-none leading-none">
          2018
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[2px] w-12 bg-amber-500" />
            <span className="text-amber-600 text-sm font-bold tracking-[0.4em] uppercase">
              The Standard of Excellence
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
          >
            The Pooja Travel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 italic font-serif">Commitment</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-slate-500 text-xl font-light leading-relaxed max-w-2xl"
          >
            Defining premium road travel through meticulous maintenance, 
            professional integrity, and technological innovation.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-50 border border-slate-200 p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:border-amber-200"
            >
              <div className="absolute top-8 right-8 text-slate-200 font-bold text-5xl group-hover:text-amber-100 transition-colors duration-300">
                {feature.id}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-900 text-amber-500 rounded-xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {feature.desc}
                </p>

                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-amber-600 transition-colors">
                  View Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex items-center gap-12">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Established</p>
              <p className="text-slate-900 font-extrabold text-2xl">Since 2018</p>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden md:block" />
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Support</p>
              <p className="text-slate-900 font-extrabold text-2xl">24/7 Live</p>
            </div>
          </div>

          <button className="relative overflow-hidden group bg-slate-950 text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:pr-16 active:scale-95">
            <span className="relative z-10">Explore the Fleet</span>
            <div className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-amber-500 opacity-0 group-hover:opacity-100 transition-all">
              <ArrowRight className="w-5 h-5 text-slate-900" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;