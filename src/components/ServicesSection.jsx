import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Check, Sparkles, Utensils, Bath, ChefHat, Home, HelpCircle } from 'lucide-react';
import workforceImg from '../assets/workforce.png';

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

  const serviceCards = [
    { title: "Dishwashing", icon: <Utensils size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#082022] to-[#040e0f]" },
    { title: "Kitchen Cleaning", icon: <ChefHat size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#1a2d2a] to-[#081211]" },
    { title: "Fan Cleaning", icon: <Sparkles size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#0f2425] to-[#061011]" },
    { title: "Window Cleaning", icon: <Home size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#09282b] to-[#031011]" },
    { title: "Laundry Help", icon: <Sparkles size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#111e30] to-[#070e18]" },
    { title: "Bathroom Cleaning", icon: <Bath size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#152e2a] to-[#081312]" }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="services">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SERVICES SHOWCASE CONTAINER (MATCHING REFERENCE DESIGN)
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0c1f1e] via-[#051313] to-[#040c0c] border border-[#00D2C4]/20 shadow-xl p-6 md:p-10 lg:p-12 mb-24 transition-all duration-1000 transform flex flex-col justify-between ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Background Ambient Mesh Lights */}
          <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#00D2C4]/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#00D2C4]/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Right blended workforce background image (Desktop/Tablet) */}
          <div className="absolute right-[-2%] bottom-[12%] w-[42%] h-[85%] opacity-85 pointer-events-none z-0 hidden md:block">
            <img 
              src={workforceImg} 
              alt="" 
              className="w-full h-full object-contain object-right-bottom select-none"
            />
          </div>

          {/* Top Row: Heading and View All */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 w-full z-10">
            {/* Top Left: Heading */}
            <div className="text-left max-w-xl">
              <span className="text-[#00D2C4] text-[10px] md:text-xs font-black tracking-widest block uppercase mb-2">
                SERVICES
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-[38px] text-white leading-tight">
                What Can Your House Help Do?
              </h2>
            </div>

            {/* Top Right: View All */}
            <div className="flex items-center gap-2.5 self-start sm:self-auto flex-shrink-0">
              <span className="text-white text-xs font-black tracking-wider uppercase">
                View All
              </span>
              <button className="w-8 h-8 rounded-full bg-white hover:bg-[#00D2C4] text-[#00D2C4] hover:text-deep-black flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer shadow-md">
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Bottom Area: Desktop/Tablet Grid OR Mobile Carousel */}
          <div className="w-full z-10">
            {/* DESKTOP / TABLET GRID VIEW (hidden on mobile < 768px) */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 w-full">
              {serviceCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`relative aspect-[4/5] rounded-[22px] overflow-hidden bg-gradient-to-br ${card.bgGradient} border border-white/10 hover:border-[#00D2C4]/40 p-4 flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#00D2C4]/10 group cursor-pointer`}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-0" />
                  
                  {/* Background mesh glow inside each card */}
                  <div className="absolute top-[-20%] right-[-20%] w-16 h-16 bg-[#00D2C4]/15 rounded-full blur-md pointer-events-none" />

                  {/* Icon */}
                  <div className="z-10 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {card.icon}
                  </div>

                  {/* Bottom Content */}
                  <div className="z-10 flex items-end justify-between gap-1 w-full">
                    <div className="overflow-hidden">
                      <h4 className="font-sans font-black text-xs md:text-sm text-white leading-tight">
                        {card.title}
                      </h4>
                    </div>
                    <button className="w-5 h-5 rounded-full bg-white text-deep-black flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#00D2C4] group-hover:scale-105">
                      <ArrowRight size={10} strokeWidth={3.5} className="text-[#00D2C4] group-hover:text-deep-black" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CAROUSEL VIEW (visible below 768px) */}
            <div 
              className="flex md:hidden overflow-x-auto gap-3.5 pb-2 mt-8 scroll-smooth snap-x snap-mandatory scrollbar-none -mx-4 px-4 relative w-full"
              onScroll={(e) => {
                const scrollLeft = e.target.scrollLeft;
                const cardWidth = e.target.scrollWidth / serviceCards.length;
                const activeIndex = Math.round(scrollLeft / cardWidth);
                setActiveDot(Math.min(activeIndex, serviceCards.length - 1));
              }}
            >
              {serviceCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`flex-shrink-0 w-[68%] snap-center relative aspect-[4/5] rounded-[22px] overflow-hidden bg-gradient-to-br ${card.bgGradient} border border-white/10 p-4 flex flex-col justify-between text-left select-none`}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-0" />
                  
                  {/* Background mesh glow inside each card */}
                  <div className="absolute top-[-20%] right-[-20%] w-16 h-16 bg-[#00D2C4]/15 rounded-full blur-md pointer-events-none" />

                  {/* Icon */}
                  <div className="z-10 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {card.icon}
                  </div>

                  {/* Bottom Content */}
                  <div className="z-10 flex items-end justify-between gap-1 w-full">
                    <div className="overflow-hidden">
                      <h4 className="font-sans font-black text-xs text-white leading-tight">
                        {card.title}
                      </h4>
                    </div>
                    <button className="w-5 h-5 rounded-full bg-white text-deep-black flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={10} strokeWidth={3.5} className="text-[#00D2C4]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Progress Dots */}
            <div className="flex md:hidden justify-center gap-1.5 mt-4">
              {serviceCards.map((_, dotIdx) => (
                <div 
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeDot === dotIdx 
                      ? 'w-4 bg-[#00D2C4]' 
                      : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
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
