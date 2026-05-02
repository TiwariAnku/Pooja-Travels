/* eslint-disable react-hooks/static-components */
import React from 'react';
// We import the main Lucide object to avoid named export "SyntaxErrors"
import * as Lucide from 'lucide-react';

const footerLinks = {
  'Quick Links': ['Home', 'Our Fleet', 'Services', 'About Us', 'Contact'],
  'Our Services': ['Airport Transfers', 'Outstation Trips', 'Corporate Travel', 'Wedding Cars', 'Pilgrimage Tours'],
};

export default function PremiumFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to safely render icons
  const Icon = ({ name, size = 18, className = "" }) => {
    const LucideIcon = Lucide[name];
    if (!LucideIcon) return null;
    return <LucideIcon size={size} className={className} />;
  };

  return (
    <footer className="bg-[#0f1115] border-t border-white/5 pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden text-white font-sans">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold tracking-tighter mb-6">
              <span className="text-amber-500 italic">Pooja</span>
              <span className="text-white ml-2">Travel</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Premium logistics solutions for corporate and private journeys. 
              Excellence in motion since 2018.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Send', 'Globe'].map((iconName) => (
                <a key={iconName} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300">
                  <Icon name={iconName} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8 border-l-2 border-amber-500 pl-4">
                {heading}
              </h4>
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="group text-slate-400 hover:text-white text-sm flex items-center gap-2 transition-all">
                      <div className="w-0 group-hover:w-3 h-[1px] bg-amber-500 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8 border-l-2 border-amber-500 pl-4">
              Concierge
            </h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                // eslint-disable-next-line react-hooks/static-components
                <Icon name="Phone" className="text-amber-500" size={18} />
                <span className="text-slate-300 text-sm">+91 88798 54275</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Mail" className="text-amber-500" size={18} />
                <span className="text-slate-300 text-sm">info@poojatravel.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="MapPin" className="text-amber-500" size={18} />
                <span className="text-slate-300 text-sm">Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} POOJA TRAVEL LOGISTICS
          </p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
            <Icon name="ChevronUp" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}