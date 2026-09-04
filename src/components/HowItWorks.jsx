import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Check, ArrowRight, Shield, Settings, Users, ShieldCheck, IndianRupee } from 'lucide-react';
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

export default function HowItWorks() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [journeyRef, journeyRevealed] = useScrollReveal();

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-[#F7F7F5] transition-colors duration-300 py-12 lg:py-16 border-t border-gray-250/60" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`text-center mx-auto mb-10 lg:mb-12 max-w-[650px] flex flex-col items-center transition-all duration-700 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00D2C4]/15 border border-[#00D2C4]/30 text-text-dark text-[10px] font-black tracking-wider uppercase mb-4 shadow-sm">
            HOW RENZA WORKS
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl text-text-dark tracking-tight leading-[1.1] mb-6">
            From a Problem to a <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-[#00D2C4] rounded-[4px] py-0.5 inline-block shadow-sm">
                Solved Outcome.
              </span>
            </span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base font-semibold leading-relaxed">
            Tell RENZA what you need. We manage the service experience so you can focus on the result.
          </p>
        </div>

        {/* =========================================================================
            TOP WORKFLOW TIMELINE & MAIN 4 CARD WORKFLOW
           ========================================================================= */}
        <div 
          ref={journeyRef}
          className={`relative mb-8 lg:mb-10 transition-all duration-1000 transform ${
            journeyRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Horizontal Line behind nodes (Desktop Only) */}
          <div className="absolute top-[18px] left-[12.5%] right-[12.5%] h-[2px] bg-neutral-300 dark:bg-neutral-800 z-0 hidden lg:block">
            <div className="w-full h-full animate-line-progress" />
          </div>

          {/* Yellow chevrons in between steps on timeline (Desktop Only) */}
          <div className="absolute top-[18px] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex bg-[#F7F7F5] dark:bg-bg-light px-2">
            <span className="text-[10px] font-black text-[#00D2C4] font-sans">&gt;</span>
          </div>
          <div className="absolute top-[18px] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex bg-[#F7F7F5] dark:bg-bg-light px-2">
            <span className="text-[10px] font-black text-[#00D2C4] font-sans">&gt;</span>
          </div>
          <div className="absolute top-[18px] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex bg-[#F7F7F5] dark:bg-bg-light px-2">
            <span className="text-[10px] font-black text-[#00D2C4] font-sans">&gt;</span>
          </div>

          {/* Vertical connecting line for Mobile/Tablet layout */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-neutral-300 dark:bg-neutral-800 z-0 hidden md:block lg:hidden md:-translate-x-1/2" />

          {/* Grid/Flex Layout of Cards */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 lg:gap-6 pb-6 md:pb-0 scroll-smooth snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0 relative z-10">
            
            {/* CARD 1 — THE NEED */}
            <div className="flex flex-col items-center relative flex-shrink-0 w-[84%] md:w-auto snap-center">
              <div className="w-9 h-9 rounded-full bg-[#00D2C4] text-white flex items-center justify-center font-sans font-black text-xs border-[3px] border-[#F7F7F5] dark:border-bg-light shadow-sm z-20 mb-6">
                01
              </div>
              
              <div className="w-full max-w-[300px] md:max-w-[260px] min-h-[340px] max-h-[380px] bg-white border border-gray-250/70 rounded-[24px] p-5 shadow-sm hover:shadow-lg hover:shadow-[#00D2C4]/10 hover:border-[#00D2C4]/40 hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between text-left group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center mb-5 border border-gray-200/50">
                    {/* Broom / Cleaning SVG icon */}
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-deep-black">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z" />
                      <path d="M3 21h18" />
                      <path d="M3 17h12" />
                      <path d="M3 13h10" />
                      <path d="m9 9 4-4" />
                    </svg>
                  </div>
                  
                  <span className="text-[9px] text-text-secondary font-black tracking-widest block mb-1">01 — START</span>
                  <h3 className="font-sans font-black text-lg text-text-dark mb-2">You Have a Need</h3>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    "My floor needs cleaning."
                  </p>
                </div>

                <div>
                  <span className="inline-flex px-3 py-1 rounded-full border border-gray-200 text-text-secondary text-[9px] font-black uppercase tracking-wider">
                    START
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2 — TELL RENZA */}
            <div className="flex flex-col items-center relative flex-shrink-0 w-[84%] md:w-auto snap-center">
              <div className="w-9 h-9 rounded-full bg-[#00D2C4] text-white flex items-center justify-center font-sans font-black text-xs border-[3px] border-[#F7F7F5] dark:border-bg-light shadow-sm z-20 mb-6">
                02
              </div>

              <div className="w-full max-w-[300px] md:max-w-[260px] min-h-[340px] max-h-[380px] bg-white border border-gray-250/70 rounded-[24px] p-5 shadow-sm hover:shadow-lg hover:shadow-[#00D2C4]/10 hover:border-[#00D2C4]/40 hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between text-left group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center mb-5 border border-gray-200/50">
                    <Smartphone size={20} className="text-deep-black" />
                  </div>
                  
                  <h3 className="font-sans font-black text-lg text-text-dark mb-1">Tell RENZA</h3>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed mb-3">
                    Choose what you need help with in the RENZA app.
                  </p>

                  {/* SMALL Mini App Interface Selector */}
                  <div className="bg-[#F7F7F5] border border-gray-250/60 p-3 rounded-2xl text-[9px] font-black text-text-dark text-left w-full select-none">
                    <span className="block text-[7px] text-[#8E9093] font-bold uppercase tracking-wider mb-1">What do you need?</span>
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-1.5 mb-1.5 font-bold">
                      <span className="flex items-center gap-1">Floor Cleaning</span>
                      <span className="text-text-secondary text-[8px]">&gt;</span>
                    </div>
                    <div className="w-full py-1 bg-[#00D2C4] text-white font-extrabold text-[7.5px] text-center rounded-lg uppercase tracking-wider">
                      Continue &rarr;
                    </div>
                  </div>
                </div>

                <div>
                  <span className="inline-flex px-3 py-1 rounded-full border border-gray-200 text-text-secondary text-[9px] font-black uppercase tracking-wider">
                    YOUR INPUT
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 3 — RENZA MANAGES */}
            <div className="flex flex-col items-center relative flex-shrink-0 w-[84%] md:w-auto snap-center">
              <div className="w-9 h-9 rounded-full bg-[#00D2C4] text-white flex items-center justify-center font-sans font-black text-xs border-[3px] border-[#F7F7F5] dark:border-bg-light shadow-sm z-20 mb-6">
                03
              </div>

              <div className="w-full max-w-[300px] md:max-w-[260px] min-h-[340px] max-h-[380px] bg-white border border-gray-250/70 rounded-[24px] p-5 shadow-sm hover:shadow-lg hover:shadow-[#00D2C4]/10 hover:border-[#00D2C4]/40 hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between text-left group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Logo className="px-2.5 py-1 text-[9px] text-white bg-neutral-900 border border-neutral-800" size="small" />
                  </div>
                  
                  <h3 className="font-sans font-black text-lg text-text-dark mb-1.5">RENZA Handles It</h3>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed mb-4">
                    RENZA manages the service experience.
                  </p>

                  {/* Compact 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: <Settings size={14} className="text-[#00B3A6]" />, label: "Coordination" },
                      { icon: <Users size={14} className="text-[#00B3A6]" />, label: "Workforce" },
                      { icon: <ShieldCheck size={14} className="text-[#00B3A6]" />, label: "Standards" },
                      { icon: <IndianRupee size={14} className="text-[#00B3A6]" />, label: "Clear Pricing" }
                    ].map((chip, idx) => (
                      <div key={idx} className="bg-[#F7F7F5] border border-gray-250/60 p-2 rounded-xl flex flex-col items-start gap-1 justify-between min-h-[48px]">
                        <span className="flex-shrink-0">{chip.icon}</span>
                        <span className="text-[7.5px] font-black text-text-dark uppercase tracking-tight leading-none">
                          {chip.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="inline-flex px-3 py-1 rounded-full border border-gray-200 text-text-secondary text-[9px] font-black uppercase tracking-wider">
                    RENZA MANAGED
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 4 — OUTCOME */}
            <div className="flex flex-col items-center relative flex-shrink-0 w-[84%] md:w-auto snap-center">
              <div className="w-9 h-9 rounded-full bg-[#00D2C4] text-white flex items-center justify-center font-sans font-black text-xs border-[3px] border-[#F7F7F5] dark:border-bg-light shadow-sm z-20 mb-6">
                04
              </div>

              <div className="w-full max-w-[300px] md:max-w-[260px] min-h-[340px] max-h-[380px] bg-white border border-gray-250/70 rounded-[24px] p-5 shadow-sm hover:shadow-lg hover:shadow-[#00D2C4]/10 hover:border-[#00D2C4]/40 hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between text-left group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center mb-5 border border-gray-200/50">
                    <Check size={18} className="text-amber-500" strokeWidth={3.5} />
                  </div>
                  
                  <h3 className="font-sans font-black text-lg text-text-dark mb-1">Problem Handled</h3>
                  <span className="font-sans font-black text-xl text-text-dark block mb-2">
                    Floor Cleaned
                  </span>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    "You focus on your day."
                  </p>
                </div>

                <div>
                  <span className="inline-flex px-3 py-1 rounded-full border border-gray-200 text-text-secondary text-[9px] font-black uppercase tracking-wider">
                    OUTCOME
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden flex-col items-center gap-1 mt-4 text-[#00B3A6] animate-pulse">
            <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
              Swipe to explore <ArrowRight size={10} className="animate-bounce-horizontal" />
            </span>
          </div>
        </div>



      </div>
    </section>
  );
}
