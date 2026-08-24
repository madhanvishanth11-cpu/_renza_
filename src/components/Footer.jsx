import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full" id="footer">
      
      {/* =========================================================================
          FOOTER TOP CTA (Yellow Panel)
         ========================================================================= */}
      <div className="w-full bg-brand-yellow py-16 text-deep-black text-center relative overflow-hidden px-6 md:px-12 lg:px-20 select-none">
        {/* Subtle accent blur circles */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h3 className="font-sans font-black text-3xl md:text-5xl tracking-tight leading-none mb-3 uppercase">
            Ready to Make Household Help Simpler?
          </h3>
          <p className="text-deep-black/90 text-sm md:text-base font-bold max-w-lg leading-relaxed mb-8">
            Tell RENZA what you need and focus on getting things done.
          </p>

          {/* CTA Action button */}
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-deep-black hover:bg-neutral-900 text-white font-extrabold text-base tracking-wide transition-all duration-300 shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer group mb-4">
            Get Started with RENZA
            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <span className="text-deep-black/75 text-xs font-black tracking-wider uppercase">
            Less searching. &bull; Less managing. &bull; More getting done.
          </span>
        </div>
      </div>

      {/* =========================================================================
          MAIN DARK FOOTER (Deep Black)
         ========================================================================= */}
      <div className="w-full bg-deep-black text-white py-16 px-6 md:px-12 lg:px-20 relative select-none">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 items-start mb-16 text-left">
          
          {/* Logo Section */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <Logo className="px-4 py-2 bg-neutral-900 border border-neutral-800" />
            <span className="text-brand-yellow font-extrabold text-xs tracking-wider uppercase block mt-1">
              Household help, made simpler.
            </span>
            <p className="text-neutral-400 text-sm font-semibold max-w-xs leading-relaxed">
              Tell RENZA what you need. We help manage the service experience so you can focus on what matters.
            </p>

            {/* Social Icons (using safe inline SVGs to match custom/older lucide dependency) */}
            <div className="flex items-center gap-3 mt-2">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="current-color">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  label: "Instagram"
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="current-color">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ),
                  label: "LinkedIn"
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="current-color">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  ),
                  label: "Twitter"
                }
              ].map((soc, idx) => (
                <a 
                  key={idx}
                  href="#"
                  aria-label={soc.label}
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-brand-yellow hover:border-brand-yellow/50 transition-all duration-300 hover:scale-105"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-black text-sm tracking-wider uppercase text-neutral-300">
              Explore
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "How RENZA Works", id: "#how-it-works" },
                { label: "Household Services", id: "#services" },
                { label: "Why RENZA", id: "#trust-section" },
                { label: "Our Service Promise", id: "#service-promise-section" }
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.id}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="text-neutral-400 hover:text-brand-yellow text-sm font-bold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-black text-sm tracking-wider uppercase text-neutral-300">
              Support
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Help & Support", href: "#" },
                { label: "Frequently Asked Questions", href: "#faq-section" },
                { label: "Contact RENZA", href: "#" }
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  onClick={link.href.startsWith('#faq') ? (e) => handleSmoothScroll(e, link.href) : undefined}
                  className="text-neutral-400 hover:text-brand-yellow text-sm font-bold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact/Get in Touch */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-black text-sm tracking-wider uppercase text-neutral-300">
              Get in Touch
            </h4>
            <p className="text-neutral-400 text-sm font-semibold max-w-[180px] leading-relaxed">
              Have a question about RENZA?
            </p>
            <button className="px-5 py-2.5 rounded-full border border-white/20 hover:border-brand-yellow text-white hover:text-deep-black hover:bg-brand-yellow font-extrabold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer">
              Contact Us
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800/80 my-8 w-full max-w-7xl mx-auto" />

        {/* Brand Promise Footer Banner */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-4">
          <div className="text-left">
            <span className="text-neutral-500 font-extrabold text-[10px] tracking-widest uppercase block mb-1">
              Final Brand Message
            </span>
            <span className="font-sans font-black text-base text-neutral-300 block uppercase leading-none">
              You Have a Problem.
            </span>
            <span className="font-sans font-black text-lg text-brand-yellow block uppercase leading-none mt-1">
              RENZA Helps Get It Done.
            </span>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-neutral-400 font-bold">
            <span className="italic text-neutral-500 text-[10px]">
              "Don't manage the worker. Tell RENZA what you need and focus on the outcome."
            </span>
            <div className="flex gap-4 mt-1">
              <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright information row */}
        <div className="max-w-7xl mx-auto border-t border-neutral-900/60 pt-6 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-[10px] font-bold tracking-wider uppercase gap-4">
          <span>&copy; 2026 RENZA. All rights reserved.</span>
          <span>Made for premium household managed outcomes.</span>
        </div>

      </div>
    </footer>
  );
}
