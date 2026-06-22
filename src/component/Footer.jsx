/* eslint-disable react-hooks/static-components */
import React from 'react';
import * as Lucide from 'lucide-react';

const footerLinks = {
  'Quick Links': ['Home', 'Our Fleet', 'Services', 'About Us', 'Contact'],
  'Our Services': ['Airport Transfers', 'Outstation Trips', 'Corporate Travel', 'Wedding Cars', 'Pilgrimage Tours'],
};

export default function PremiumFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Icon = ({ name, size = 18, className = "" }) => {
    const LucideIcon = Lucide[name];
    if (!LucideIcon) return null;
    return <LucideIcon size={size} className={className} />;
  };

  const mapsUrl = "https://maps.google.com/?q=Office+No.+194,+Vishnu+Nagar+Society,+L.U.+Gadkari+Marg,+Chembur,+Mumbai+400074";

  const socialLinks = [
    { icon: 'Instagram', href: 'https://www.instagram.com' },
    { icon: 'Send',      href: 'https://t.me/poojatravels' },
    { icon: 'Globe',     href: 'https://poojatravels.com' },
  ];

  return (
    <footer className="bg-[#0f1115] border-t border-white/5 pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden text-white font-sans">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold tracking-tighter mb-2">
              <span className="font-playfair text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
                POOJA<span className="text-amber-500 group-hover:text-white">TRAVELS</span>
              </span>
            </div>
            <div className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-500 mb-6">
              Car Rental Service
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Premium logistics solutions for corporate and private journeys. 
              Reliable service based in Mumbai.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                >
                  <Icon name={icon} size={18} />
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
              Contact Office
            </h4>
            <div className="space-y-6">

              {/* Location → Google Maps */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-amber-400 transition-colors group"
              >
                <Icon name="MapPin" className="text-amber-500 shrink-0 mt-1 group-hover:text-amber-400" size={18} />
                <span className="text-slate-300 text-sm leading-relaxed group-hover:text-amber-400">
                  Office No. 194, Vishnu Nagar Society, L.U. Gadkari Marg, Chembur, Mumbai - 400074
                </span>
              </a>

              {/* Phone → Direct Call */}
              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-amber-500 shrink-0 mt-1" size={18} />
                <div className="flex flex-col gap-1 text-slate-300 text-sm font-medium">
                  <a href="tel:+919594917750" className="hover:text-amber-500 transition-colors">+91 95949 17750</a>
                  <a href="tel:+919702909087" className="hover:text-amber-500 transition-colors">+91 97029 09087</a>
                  <a href="tel:+919594935086" className="hover:text-amber-500 transition-colors">+91 95949 35086</a>
                </div>
              </div>

              {/* Email → Gmail */}
              <div className="flex items-center gap-4">
                <Icon name="Mail" className="text-amber-500" size={18} />
                <a
                  href="mailto:poojatravels111@gmail.com"
                  className="text-slate-300 text-sm hover:text-amber-500 transition-colors"
                >
                  poojatravels111@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} POOJA TRAVELS
            </p>
            <span className="text-slate-600 text-[9px] font-bold uppercase tracking-tight">
              GSTIN: 27AICPT7468H1ZP
            </span>
          </div>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all group">
            <Icon name="ChevronUp" size={20} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}