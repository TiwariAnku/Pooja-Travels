import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Importing your logo from the assets folder relative to component/pages/
import Logo from '../../assets/logo.jpeg'; 

export default function Loading() {
  const [progress, setProgress] = useState(0);

  // Simulates a smooth luxury vehicle ignition/system check load sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Starts fast, slows down near the end for a premium feel
        const increment = prevProgress > 70 ? 1 : Math.floor(Math.random() * 8) + 4;
        return Math.min(prevProgress + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0f1115] min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-sans select-none">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="flex flex-col items-center max-w-sm w-full px-8 relative z-10">
        
        {/* Animated Premium Logo Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 p-1.5 bg-black/40 flex items-center justify-center mb-8 shadow-2xl relative"
        >
          {/* Subtle pulse border ring */}
          <div className="absolute inset-0 rounded-2xl border border-amber-500/20 animate-pulse pointer-events-none" />
          <img 
            src={Logo} 
            alt="Concierge Logo" 
            className="w-full h-full object-contain rounded-xl grayscale opacity-90 contrast-125"
          />
        </motion.div>

        {/* Minimal Typography Header */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-500 text-[9px] font-black tracking-[0.4em] uppercase">System Ignition</span>
          </div>
          <h2 className="text-sm font-light text-slate-400 tracking-[0.2em] uppercase">
            Initializing <span className="font-bold text-white">Concierge</span>
          </h2>
        </motion.div>

        {/* Premium Geometric Loading Tracker */}
        <div className="w-full space-y-3">
          {/* Track Bar */}
          <div className="h-[2px] w-full bg-white/[0.03] rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          
          {/* Telemetry Numbers */}
          {/* <div className="flex justify-between items-center px-1">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">
              {progress < 35 && 'Configuring Fleet...'}
              {progress >= 35 && progress < 75 && 'Securing Server Protocol...'}
              {progress >= 75 && progress < 100 && 'Readying Dispatch...'}
              {progress === 100 && 'Systems Nominal'}
            </span>
            <span className="text-amber-500 font-mono text-[11px] font-bold tracking-tighter">
              {String(progress).padStart(3, '0')}%
            </span>
          </div> */}
        </div>

      </div>

      {/* Decorative Bottom Grid Accents */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-12 pointer-events-none opacity-20">
        <span className="text-[8px] font-bold text-slate-600 tracking-[0.3em] uppercase">VIP Node v4.1</span>
        <span className="text-[8px] font-bold text-slate-600 tracking-[0.3em] uppercase">Secure Link</span>
      </div>
    </section>
  );
}