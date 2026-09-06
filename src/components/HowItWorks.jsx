import React, { useEffect, useRef, useState } from 'react';
import { Search, Settings, CheckCircle2 } from 'lucide-react';

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
      { threshold: 0.15 }
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

  const steps = [
    {
      num: "01",
      title: "Choose the task",
      desc: "You have a need. Simply choose what you need help with in the RENZA app. For example: \"My floor needs cleaning.\"",
      icon: <Search size={20} strokeWidth={2.5} className="text-[#00D2C4]" />
    },
    {
      num: "02",
      title: "RENZA manages the service",
      desc: "We manage the entire service experience, coordinating the workforce, ensuring quality standards, and providing clear pricing.",
      icon: <Settings size={20} strokeWidth={2.5} className="text-[#00D2C4]" />
    },
    {
      num: "03",
      title: "Get it done",
      desc: "The job is successfully completed. Your floor is cleaned, and you can get back to focusing on your day.",
      icon: <CheckCircle2 size={20} strokeWidth={2.5} className="text-[#00D2C4]" />
    }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* =========================================================================
            CENTERED HEADER & CENTRAL STATEMENT
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`text-center mx-auto mb-16 lg:mb-24 flex flex-col items-center transition-all duration-1000 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Section Label */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 text-[#00D2C4] text-[10px] md:text-xs font-black tracking-[0.15em] uppercase mb-8">
            How RENZA Works
          </span>
          
          {/* Main Statement */}
          <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-white tracking-tight leading-[1.05] mb-6 max-w-[900px] drop-shadow-md">
            You choose the need. <br className="hidden md:block" />
            <span className="text-neutral-500">RENZA handles the experience.</span>
          </h2>
          
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-[600px] mx-auto">
            No calling multiple people. No negotiating with individual workers. No managing the service yourself.
          </p>
        </div>

        {/* =========================================================================
            HORIZONTAL / VERTICAL TIMELINE JOURNEY
           ========================================================================= */}
        <div 
          ref={journeyRef}
          className={`relative transition-all duration-1000 delay-200 transform ${
            journeyRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Desktop Connecting Line (Horizontal) */}
          <div className="absolute top-[32px] left-[15%] right-[15%] h-[1px] bg-neutral-800 z-0 hidden lg:block">
             <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00D2C4]/40 to-transparent" />
          </div>

          {/* Desktop Layout: 3 Horizontal Columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12 xl:gap-20 relative z-10">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center group cursor-default">
                  
                  {/* Faded Background Number */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[100px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[#00D2C4]/[0.05] transition-colors duration-500">
                    {step.num}
                  </div>

                  {/* Step Marker Node */}
                  <div className="flex-shrink-0 w-16 h-16 mb-8 rounded-full bg-[#0A0A0A] flex items-center justify-center border border-neutral-800 z-20 group-hover:border-[#00D2C4]/50 group-hover:shadow-[0_0_20px_rgba(0,210,196,0.15)] transition-all duration-500 relative">
                    {step.icon}
                    {/* Tiny active dot */}
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-[2px] border-[#0A0A0A] transition-all duration-300 ${isLast ? 'bg-[#00D2C4]' : 'bg-neutral-800 group-hover:bg-[#00D2C4]'}`} />
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex flex-col items-center group-hover:-translate-y-1 transition-transform duration-500 w-full">
                    <span className="block text-sm font-black tracking-widest text-[#00D2C4] mb-3 uppercase">
                      Step {step.num}
                    </span>
                    <h3 className="font-sans font-black text-2xl text-white mb-4 drop-shadow-md">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 text-base font-medium leading-relaxed max-w-[320px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Layout: Vertical Timeline */}
          <div className="flex flex-col gap-12 lg:hidden relative z-10 px-2 sm:px-8">
            {/* Mobile Connecting Line (Vertical) */}
            <div className="absolute left-[39px] sm:left-[63px] top-[10px] bottom-[20px] w-[2px] bg-neutral-800 z-0">
               <div className="w-full h-[70%] bg-gradient-to-b from-[#00D2C4]/40 via-transparent to-transparent" />
            </div>

            {steps.map((step, idx) => {
              return (
                <div key={idx} className="relative flex items-start group">
                  {/* Left Column: Number Node */}
                  <div className="flex-shrink-0 w-[80px] flex justify-center relative z-10 mt-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0A0A0A] flex items-center justify-center border-2 border-neutral-800 group-hover:border-[#00D2C4] transition-colors duration-300 shadow-sm">
                       <span className="font-sans font-black text-xl md:text-2xl text-white">
                         {step.num}
                       </span>
                    </div>
                  </div>
                  
                  {/* Right Column: Icon, Title, Desc */}
                  <div className="ml-4 md:ml-8 flex-1 pt-2 md:pt-3">
                    <div className="flex items-center gap-3 mb-3">
                       <div className="w-8 h-8 rounded-full bg-[#00D2C4]/10 flex items-center justify-center">
                         {step.icon}
                       </div>
                       <h3 className="font-sans font-black text-xl md:text-2xl text-white tracking-tight">
                         {step.title}
                       </h3>
                    </div>
                    
                    <p className="text-neutral-400 text-base font-medium leading-relaxed max-w-[400px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
