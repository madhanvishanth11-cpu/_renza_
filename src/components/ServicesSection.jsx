import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Check, Sparkles } from 'lucide-react';

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

export default function ServicesSection() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [gridRef, gridRevealed] = useScrollReveal();
  const [bannerRef, bannerRevealed] = useScrollReveal();
  const [feelsRef, feelsRevealed] = useScrollReveal();

  const services = [
    {
      icon: "🍽️",
      title: "Washing Vessels",
      desc: "Get help with everyday dish and vessel washing.",
      badge: "RENZA Managed"
    },
    {
      icon: "🧹",
      title: "Floor Cleaning",
      desc: "Keep your floors clean without managing the work yourself.",
      badge: "RENZA Managed"
    },
    {
      icon: "🛁",
      title: "Bathroom Cleaning",
      desc: "Get help maintaining a clean and hygienic bathroom.",
      badge: "RENZA Managed"
    },
    {
      icon: "🍳",
      title: "Kitchen Cleaning",
      desc: "Get support with everyday kitchen cleaning.",
      badge: "RENZA Managed"
    },
    {
      icon: "🏠",
      title: "General Household Help",
      desc: "Everyday support for common household tasks.",
      badge: "RENZA Managed"
    },
    {
      icon: "✨",
      title: "More Household Help",
      desc: "Tell us what you need help with.",
      isSpecial: true
    }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="services-section">
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
            EVERYDAY HOUSEHOLD HELP
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-4">
            What Do You Need Help With?
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed mb-6">
            From everyday cleaning to household support, simply choose what you need. RENZA takes responsibility for managing the service experience.
          </p>
          <div className="bg-brand-yellow/10 border border-brand-yellow/30 text-text-dark font-extrabold px-4 py-2.5 rounded-xl text-sm max-w-fit shadow-yellow-glow/5">
            Choose the task. Focus on your day. RENZA handles the service.
          </div>
        </div>

        {/* =========================================================================
            SERVICES GRID
           ========================================================================= */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-1000 transform ${
            gridRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`rounded-[20px] p-8 border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-yellow-glow/10 cursor-pointer group ${
                service.isSpecial 
                  ? 'bg-white border-brand-yellow/60 shadow-yellow-glow/5' 
                  : 'bg-white border-gray-200 shadow-sm hover:border-brand-yellow hover:shadow-md'
              }`}
            >
              <div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {service.icon}
                </div>
                
                <h3 className="font-sans font-black text-xl text-text-dark mb-2 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div>
                {service.isSpecial ? (
                  <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-yellow text-deep-black font-extrabold text-xs shadow-sm hover:bg-[#F2D900] active:scale-95 transition-all">
                    <span>Tell RENZA</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-yellow text-deep-black text-[9px] font-black uppercase tracking-wider shadow-sm">
                    <Check size={8} strokeWidth={4} />
                    {service.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            SPECIAL VISUAL MESSAGE (HORIZONTAL BANNER)
           ========================================================================= */}
        <div 
          ref={bannerRef}
          className={`bg-white border border-gray-200 rounded-[36px] p-8 md:p-12 mb-24 transition-all duration-1000 transform ${
            bannerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-gray-200/60">
            <div className="text-left">
              <span className="text-[10px] text-text-secondary font-black tracking-widest uppercase block mb-1">Step 01</span>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-text-dark">You Choose the Need.</h3>
            </div>
            
            <div className="hidden lg:block w-12 h-[1px] bg-gray-200" />
            
            <div className="text-left lg:text-right lg:ml-auto">
              <span className="text-[10px] text-text-secondary font-black tracking-widest uppercase block mb-1">Step 02</span>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-deep-black bg-brand-yellow px-4 py-1 rounded-md inline-block shadow-sm">
                RENZA Handles the Experience.
              </h3>
            </div>
          </div>

          <p className="text-text-secondary text-sm md:text-base font-semibold text-center mb-8">
            No calling multiple people. No negotiating with individual workers. No managing the service yourself.
          </p>

          {/* Connected Flowchart Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto select-none">
            
            {/* Box 1 */}
            <div className="bg-bg-light border border-gray-200 px-6 py-3 rounded-xl font-black text-xs text-text-dark uppercase tracking-wider text-center w-full md:w-auto shadow-sm">
              Choose the Task
            </div>

            {/* Vector Arrow 1 */}
            <ArrowRight size={16} className="text-brand-yellow rotate-90 md:rotate-0 my-1 md:my-0 flex-shrink-0 animate-pulse" />

            {/* Box 2 */}
            <div className="bg-brand-yellow/15 border border-brand-yellow/30 px-6 py-3 rounded-xl font-black text-xs text-text-dark uppercase tracking-wider text-center w-full md:w-auto shadow-sm">
              RENZA Manages the Service
            </div>

            {/* Vector Arrow 2 */}
            <ArrowRight size={16} className="text-brand-yellow rotate-90 md:rotate-0 my-1 md:my-0 flex-shrink-0 animate-pulse" />

            {/* Box 3 */}
            <div className="bg-brand-yellow px-6 py-3 rounded-xl font-black text-xs text-deep-black uppercase tracking-wider text-center w-full md:w-auto shadow-md">
              Get It Done
            </div>

          </div>
        </div>

        {/* =========================================================================
            "HOW IT FEELS" MICRO SECTION
           ========================================================================= */}
        <div 
          ref={feelsRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            feelsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
            
            {/* Old Experience */}
            <div className="bg-white/40 border border-gray-200 rounded-[24px] p-6 text-center flex flex-col justify-center min-h-[100px]">
              <span className="text-[9px] text-[#5F6368] font-black uppercase tracking-widest block mb-2">Old Experience</span>
              <span className="text-sm font-semibold text-[#5F6368] italic">
                "I need to find someone to clean my floor."
              </span>
            </div>

            {/* New Renza Experience */}
            <div className="bg-white border border-brand-yellow/60 shadow-yellow-glow rounded-[24px] p-6 text-center flex flex-col justify-center min-h-[100px] relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-yellow/5 rounded-full blur-xl" />
              <span className="text-[9px] text-text-secondary font-black uppercase tracking-widest block mb-2">New RENZA Experience</span>
              <span className="text-base font-black text-text-dark">
                ✨ "I need my floor cleaned."
              </span>
            </div>

          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="w-[1px] h-10 bg-brand-yellow/40 mb-1" />
            <span className="text-sm font-black text-text-secondary uppercase tracking-widest block">
              That's the difference.
            </span>
            <p className="text-text-secondary text-xs max-w-md text-center leading-relaxed">
              The customer tells RENZA the outcome they need — not which worker they need to find.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
