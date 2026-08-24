import React, { useEffect, useRef, useState } from 'react';
import { Download, ArrowRight, Check, Sparkles, Smartphone, Play, Apple, Home, Search, Calendar, User } from 'lucide-react';
import Logo from './Logo';

// Lightweight Intersection Observer hook for scroll reveal animations
function useScrollReveal() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, revealed];
}

export default function DownloadCTA() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [gridRef, gridRevealed] = useScrollReveal();
  const [midCtaRef, midCtaRevealed] = useScrollReveal();
  const [downloadsRef, downloadsRevealed] = useScrollReveal();
  const [darkBannerRef, darkBannerRevealed] = useScrollReveal();

  const checklistItems = [
    "Tell us what you need",
    "Choose the household help you need",
    "RENZA manages the service experience",
    "Focus on getting things done"
  ];

  const appServices = [
    { name: "Washing Vessels", icon: "🍽️" },
    { name: "Floor Cleaning", icon: "🧹" },
    { name: "Bathroom Cleaning", icon: "🛁" },
    { name: "Household Help", icon: "🏠" }
  ];

  return (
    <section className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="download-cta-section">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SECTION INTRODUCTION
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`text-left mb-16 max-w-3xl transition-all duration-700 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-text-dark text-[11px] font-bold tracking-wider uppercase mb-4">
            <Sparkles size={11} className="text-amber-500 fill-amber-500" />
            GET STARTED WITH RENZA
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            Need Help at Home? <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] py-0.5 inline-block shadow-sm">
                Start With RENZA.
              </span>
            </span>
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            Tell RENZA what you need help with and experience a simpler, more managed way to handle everyday household work.
          </p>
        </div>

        {/* =========================================================================
            MAIN CTA LAYOUT (2-COLUMN)
           ========================================================================= */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 transition-all duration-1000 transform ${
            gridRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* LEFT SIDE: Promotional Checklist and Main CTA button */}
          <div className="text-left flex flex-col items-start justify-center">
            <h3 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-text-dark leading-tight mb-6">
              Getting Help Shouldn't <br />Take So Much Effort.
            </h3>

            <div className="flex flex-col gap-3.5 mb-8">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Check size={12} strokeWidth={3} className="text-[#E2C700]" />
                  </div>
                  <span className="text-text-secondary text-sm md:text-base font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-extrabold text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer group mb-3">
              <Download size={18} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
              Download RENZA App
            </button>
            <span className="text-text-secondary text-xs font-semibold pl-2">
              Household help, made simpler.
            </span>
          </div>

          {/* RIGHT SIDE: Smartphone Mockup */}
          <div className="flex justify-center items-center relative py-8">
            {/* Ambient pulsing yellow glow */}
            <div className="absolute w-[280px] md:w-[350px] h-[280px] md:h-[350px] bg-brand-yellow/30 rounded-full blur-[90px] pointer-events-none animate-pulse-glow z-0" />

            {/* Smartphone shell */}
            <div className="relative w-[280px] md:w-[300px] h-[580px] bg-[#000000] rounded-[44px] p-[8px] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.25)] border-[2px] border-neutral-800/80 transition-all duration-700 hover:scale-[1.02] z-10 animate-float">
              
              {/* Inner phone mockup screen */}
              <div className="w-full h-full bg-white rounded-[36px] overflow-hidden flex flex-col justify-between pt-6 pb-2.5 px-3 select-none relative">
                
                {/* Upper bar / Notch details */}
                <div className="w-full flex justify-between items-center px-1 mb-4">
                  <Logo className="px-2 py-1" size="small" />
                  <div className="w-20 h-6 bg-neutral-100 rounded-full border border-neutral-200/50 flex items-center justify-center text-[8px] font-black text-text-secondary tracking-widest">
                    12:00 PM
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 flex flex-col justify-between mb-2">
                  <div className="text-left px-1 mb-2">
                    <span className="text-[10px] text-text-secondary font-black block mb-1">WELCOME TO RENZA</span>
                    <h4 className="font-sans font-black text-base text-text-dark leading-tight">
                      What do you need <br />help with?
                    </h4>
                  </div>

                  {/* App Service Grid */}
                  <div className="grid grid-cols-2 gap-2 flex-1 items-center max-h-[260px]">
                    {appServices.map((srv, idx) => (
                      <div key={idx} className="bg-bg-light border border-gray-200 p-3 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
                        <span className="text-2xl mb-1.5">{srv.icon}</span>
                        <span className="text-[9px] font-black text-text-dark uppercase tracking-tight text-center leading-tight">
                          {srv.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* App action button */}
                  <button className="w-full py-2.5 bg-brand-yellow text-deep-black font-extrabold text-[10px] uppercase rounded-xl shadow-sm tracking-wider mt-4">
                    Tell RENZA What You Need
                  </button>
                </div>

                {/* Bottom Navigation Mock Bar */}
                <div className="border-t border-gray-100 pt-2 flex items-center justify-around text-text-secondary">
                  <Home size={14} className="text-brand-yellow" />
                  <Search size={14} />
                  <Calendar size={14} />
                  <User size={14} />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            SECONDARY CTA MESSAGE
           ========================================================================= */}
        <div 
          ref={midCtaRef}
          className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-700 transform ${
            midCtaRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col items-center gap-1 mb-4">
            <h3 className="font-sans font-black text-xl md:text-2xl lg:text-3xl text-text-dark tracking-tight uppercase leading-none">
              "You Don't Need to Find the Right Worker."
            </h3>
            <span className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-deep-black bg-brand-yellow px-4 py-1.5 rounded-xl inline-block shadow-sm tracking-tight mt-1 uppercase">
              You Just Need to Tell RENZA What You Need.
            </span>
          </div>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            RENZA is designed to manage the service experience so you can focus on the outcome.
          </p>
        </div>

        {/* =========================================================================
            DOWNLOAD OPTIONS BUTTONS (COMING SOON)
           ========================================================================= */}
        <div 
          ref={downloadsRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 transition-all duration-700 transform ${
            downloadsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Button 1: Google Play */}
          <div className="relative group">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-200 bg-white/60 text-[#5F6368] font-bold text-sm tracking-wide opacity-75 cursor-not-allowed select-none shadow-sm min-w-[160px] justify-center">
              <Play size={16} fill="#5F6368" />
              Google Play
            </button>
            <span className="absolute -top-2.5 left-[50%] -translate-x-[50%] bg-neutral-250 border border-gray-200 text-[8px] font-black text-[#5F6368] px-2 py-0.5 rounded-full tracking-widest shadow-sm select-none">
              COMING SOON
            </span>
          </div>

          {/* Button 2: App Store */}
          <div className="relative group">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-200 bg-white/60 text-[#5F6368] font-bold text-sm tracking-wide opacity-75 cursor-not-allowed select-none shadow-sm min-w-[160px] justify-center">
              <Apple size={16} fill="#5F6368" />
              App Store
            </button>
            <span className="absolute -top-2.5 left-[50%] -translate-x-[50%] bg-neutral-250 border border-gray-200 text-[8px] font-black text-[#5F6368] px-2 py-0.5 rounded-full tracking-widest shadow-sm select-none">
              COMING SOON
            </span>
          </div>
        </div>

        {/* =========================================================================
            STRONG FINAL MESSAGE (DARK BANNER)
           ========================================================================= */}
        <div 
          ref={darkBannerRef}
          className={`bg-deep-black text-white rounded-[40px] p-8 md:p-14 lg:p-20 text-center relative overflow-hidden shadow-2xl transition-all duration-1000 transform ${
            darkBannerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            
            <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-2 uppercase">
              Your Problem.
            </h3>
            
            <h4 className="font-sans font-black text-2xl md:text-4xl lg:text-5xl text-brand-yellow mb-8 tracking-tight uppercase leading-none">
              RENZA's Responsibility.
            </h4>
            
            <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Tell us what needs to be done. RENZA helps manage the service experience.
            </p>

            {/* Final CTA Action */}
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-extrabold text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer group">
              Get Started
              <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
