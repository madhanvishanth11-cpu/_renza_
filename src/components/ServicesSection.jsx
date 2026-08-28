import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Check, Sparkles, Utensils, Bath, ChefHat, Home, HelpCircle } from 'lucide-react';

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
  const [activeDot, setActiveDot] = useState(0);

  const services = [
    {
      icon: <Utensils size={32} className="text-[#00D2C4]" />,
      title: "Washing Vessels",
      desc: "Get help with everyday dish and vessel washing.",
      badge: "RENZA Managed"
    },
    {
      icon: <Sparkles size={32} className="text-[#00D2C4]" />,
      title: "Floor Cleaning",
      desc: "Keep your floors clean without managing the work yourself.",
      badge: "RENZA Managed"
    },
    {
      icon: <Bath size={32} className="text-[#00D2C4]" />,
      title: "Bathroom Cleaning",
      desc: "Get help maintaining a clean and hygienic bathroom.",
      badge: "RENZA Managed"
    },
    {
      icon: <ChefHat size={32} className="text-[#00D2C4]" />,
      title: "Kitchen Cleaning",
      desc: "Get support with everyday kitchen cleaning.",
      badge: "RENZA Managed"
    },
    {
      icon: <Home size={32} className="text-[#00D2C4]" />,
      title: "General Household Help",
      desc: "Everyday support for common household tasks.",
      badge: "RENZA Managed"
    },
    {
      icon: <HelpCircle size={32} className="text-[#00D2C4]" />,
      title: "More Household Help",
      desc: "Tell us what you need help with.",
      isSpecial: true
    }
  ];

  const mobileServices = [
    { title: "Floor Cleaning", icon: <Sparkles size={16} />, badge: "Floor mopping" },
    { title: "Bathroom Cleaning", icon: <Bath size={16} />, badge: "Deep sanitize" },
    { title: "Washing Vessels", icon: <Utensils size={16} />, badge: "Daily cleaning" },
    { title: "General Help", icon: <Home size={16} />, badge: "Everyday chores" },
    { title: "More Help", icon: <HelpCircle size={16} />, badge: "Custom requests" }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="services">
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

        {/* MOBILE VIEW ONLY (below 768px) */}
        <div className="block md:hidden mb-16">
          {/* 1. Large Featured Service Card */}
          <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#021b1b] via-[#052e2c] to-[#083a37] border border-[#00D2C4]/20 shadow-lg p-6 flex flex-col justify-between mb-6 group select-none">
            {/* Dark mesh background ambient lights */}
            <div className="absolute top-[-20%] right-[-20%] w-[180px] h-[180px] bg-[#00D2C4]/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[150px] h-[150px] bg-[#00D2C4]/10 rounded-full blur-[35px] pointer-events-none" />
            
            {/* Top Row: Category tag and View All */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#00D2C4] text-[10px] font-black tracking-widest uppercase">
                FEATURED OUTCOME
              </span>
              <button className="w-8 h-8 rounded-full bg-[#00D2C4] hover:bg-[#00B3A6] text-deep-black flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer shadow-sm shadow-[#00D2C4]/35">
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>

            {/* Bottom Row: Text content */}
            <div className="z-10 text-left">
              <h3 className="font-sans font-black text-2xl text-white mb-2 leading-tight">
                Kitchen Deep Cleaning
              </h3>
              <p className="text-white/70 text-xs font-semibold leading-relaxed mb-1">
                Every counter, sink, and surface polished to perfection.
              </p>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00D2C4]/20 text-[#00D2C4] text-[8px] font-black uppercase tracking-wider mt-2">
                <Check size={8} strokeWidth={4} />
                RENZA Managed
              </span>
            </div>
          </div>

          {/* 2. Swipeable Small Service Cards Carousel */}
          <div 
            className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none -mx-6 px-6 relative z-10"
            onScroll={(e) => {
              const scrollLeft = e.target.scrollLeft;
              const cardWidth = e.target.scrollWidth / mobileServices.length;
              const activeIndex = Math.round(scrollLeft / cardWidth);
              setActiveDot(Math.min(activeIndex, mobileServices.length - 1));
            }}
          >
            {mobileServices.map((srv, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[55%] snap-center relative aspect-[1/1] rounded-[22px] overflow-hidden bg-gradient-to-br from-[#121c1b] to-[#0d1313] border border-[#00D2C4]/15 shadow-sm p-4 flex flex-col justify-between text-left select-none"
              >
                {/* Glow badge overlay */}
                <div className="absolute top-[-30%] right-[-30%] w-[100px] h-[100px] bg-[#00D2C4]/10 rounded-full blur-[25px] pointer-events-none" />
                
                {/* Top: Icon */}
                <div className="z-10 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D2C4]">
                  {srv.icon}
                </div>

                {/* Bottom: Text and Button */}
                <div className="z-10 flex items-end justify-between gap-2">
                  <div className="overflow-hidden">
                    <h4 className="font-sans font-black text-sm text-white leading-tight truncate">
                      {srv.title}
                    </h4>
                    <span className="text-white/50 text-[9px] font-semibold leading-none block mt-1">
                      {srv.badge}
                    </span>
                  </div>
                  <button className="w-6 h-6 rounded-full bg-[#00D2C4] text-deep-black flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#00D2C4]/20">
                    <ArrowRight size={10} strokeWidth={3} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Carousel Progress Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {mobileServices.map((_, dotIdx) => (
              <div 
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeDot === dotIdx 
                    ? 'w-4 bg-[#00D2C4]' 
                    : 'w-1.5 bg-neutral-300 dark:bg-neutral-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            SERVICES GRID (Tablet/Desktop View)
           ========================================================================= */}
        <div 
          ref={gridRef}
          className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-1000 transform ${
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
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
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
                  <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-yellow text-deep-black font-extrabold text-xs shadow-sm hover:bg-[#00B3A6] active:scale-95 transition-all">
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

      </div>
    </section>
  );
}
