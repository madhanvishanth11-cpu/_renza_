import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Check, Sparkles, Utensils, Bath, ChefHat, Home, HelpCircle } from 'lucide-react';
import dishImg from '../assets/dishwashing.jpg';
import kitchenImg from '../assets/kitchen_cleaning.jpg';
import fanImg from '../assets/fan_cleaning.jpg';
import windowImg from '../assets/window_cleaning.jpg';
import laundryImg from '../assets/laundry_help_new.jpg';
import bathImg from '../assets/bathroom_cleaning.jpg';
import servicesBg from '../assets/services_bg_new.png';

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
  const [bannerRef, bannerRevealed] = useScrollReveal();
  const [activeDot, setActiveDot] = useState(0);

  const serviceCards = [
    { title: "Dishwashing", img: dishImg, icon: <Utensils size={32} className="text-[#00D2C4]" />, bgGradient: "from-[#082022] to-[#040e0f]", description: "Sparkling clean dishes, pots, and pans handled with care." },
    { title: "Kitchen Cleaning", img: kitchenImg, icon: <ChefHat size={24} className="text-[#00D2C4]" />, bgGradient: "from-[#1a2d2a] to-[#081211]" },
    { title: "Fan Cleaning", img: fanImg, icon: <Sparkles size={24} className="text-[#00D2C4]" />, bgGradient: "from-[#0f2425] to-[#061011]" },
    { title: "Window Cleaning", img: windowImg, icon: <Home size={24} className="text-[#00D2C4]" />, bgGradient: "from-[#09282b] to-[#031011]" },
    { title: "Laundry Help", img: laundryImg, icon: <Sparkles size={24} className="text-[#00D2C4]" />, bgGradient: "from-[#111e30] to-[#070e18]" },
    { title: "Bathroom Cleaning", img: bathImg, icon: <Bath size={24} className="text-[#00D2C4]" />, bgGradient: "from-[#152e2a] to-[#081312]" }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-bg-light transition-colors duration-300 py-12 lg:py-16 border-t border-gray-200" id="services">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SERVICES SHOWCASE CONTAINER
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0c1f1e] via-[#051313] to-[#040c0c] border border-[#00D2C4]/20 shadow-xl p-6 md:p-10 lg:p-12 mb-12 lg:mb-16 transition-all duration-1000 transform flex flex-col justify-between ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main background image with overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img 
              src={servicesBg} 
              alt="" 
              className="w-full h-full object-cover object-[80%_15%] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-transparent" />
          </div>

          {/* Background Ambient Mesh Lights */}
          <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#00D2C4]/15 rounded-full blur-[90px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#00D2C4]/5 rounded-full blur-[80px] pointer-events-none z-0" />

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

          {/* Bottom Area: Desktop/Tablet Grid OR Mobile View */}
          <div className="w-full z-10">
            
            {/* DESKTOP / TABLET ASYMMETRIC GRID VIEW (hidden on mobile < 768px) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-12 w-full auto-rows-fr">
              {serviceCards.map((card, idx) => {
                const isFeatured = idx === 0;
                // Featured card takes 2 columns and 2 rows on Desktop (lg).
                // On Tablet (md), it takes 2 cols and 1 row (full width).
                return (
                  <div 
                    key={idx} 
                    className={`relative rounded-[24px] overflow-hidden bg-gradient-to-br ${card.bgGradient} border border-white/10 hover:border-[#00D2C4]/40 p-5 lg:p-6 flex flex-col justify-end text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00D2C4]/15 group cursor-pointer 
                      ${isFeatured 
                        ? 'md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-[460px]' 
                        : 'col-span-1 row-span-1 min-h-[220px]'
                      }
                      ${idx === 5 ? 'md:col-span-2 lg:col-span-1' : '' /* Fix tablet orphan card by spanning full width */}
                      `}
                  >
                    {/* Card background image */}
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 z-0 select-none pointer-events-none`}
                    />

                    {/* Background gradient overlay - Stronger on featured card for readability */}
                    <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none z-10 ${isFeatured ? 'from-black/95 via-black/40 to-black/10' : 'from-black/90 via-black/30 to-black/5'}`} />
                    
                    {/* Background mesh glow inside each card */}
                    <div className="absolute top-[-20%] right-[-20%] w-24 h-24 bg-[#00D2C4]/20 rounded-full blur-xl pointer-events-none z-10" />

                    {/* Content */}
                    <div className="z-20 flex flex-col justify-end h-full w-full">
                      <div className="flex items-end justify-between gap-4 w-full">
                        <div className="overflow-hidden flex-1">
                          {isFeatured && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D2C4]/20 border border-[#00D2C4]/30 text-[#00D2C4] text-[9px] font-black tracking-widest uppercase mb-3 backdrop-blur-md">
                              <Sparkles size={10} className="fill-[#00D2C4]" />
                              Featured Service
                            </div>
                          )}
                          <h4 className={`font-sans font-black text-white leading-tight mb-1 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-sm md:text-base'}`}>
                            {card.title}
                          </h4>
                          {isFeatured && card.description && (
                            <p className="text-gray-300 text-sm font-medium mt-2 max-w-[80%] line-clamp-2">
                              {card.description}
                            </p>
                          )}
                        </div>
                        <button className={`rounded-full bg-white text-deep-black flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#00D2C4] group-hover:scale-110 shadow-lg ${isFeatured ? 'w-12 h-12' : 'w-8 h-8'}`}>
                          <ArrowRight size={isFeatured ? 18 : 14} strokeWidth={isFeatured ? 3 : 2.5} className="text-[#00D2C4] group-hover:text-deep-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE LAYOUT (visible below 768px) */}
            <div className="flex md:hidden flex-col gap-4 mt-8 w-full">
              
              {/* Featured Card (Full width on mobile) */}
              <div className={`relative rounded-[24px] overflow-hidden bg-gradient-to-br ${serviceCards[0].bgGradient} border border-white/10 hover:border-[#00D2C4]/40 p-5 flex flex-col justify-end text-left min-h-[280px] shadow-lg group`}>
                <img 
                  src={serviceCards[0].img} 
                  alt={serviceCards[0].title} 
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10 pointer-events-none" />
                
                <div className="z-20 flex flex-col justify-end h-full w-full">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D2C4]/20 border border-[#00D2C4]/30 text-[#00D2C4] text-[9px] font-black tracking-widest uppercase mb-3 backdrop-blur-md w-fit">
                    <Sparkles size={10} className="fill-[#00D2C4]" />
                    Featured
                  </div>
                  <div className="flex items-end justify-between gap-2 w-full">
                    <div>
                      <h4 className="font-sans font-black text-2xl text-white leading-tight">
                        {serviceCards[0].title}
                      </h4>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-[#00D2C4] text-deep-black flex items-center justify-center flex-shrink-0 shadow-md">
                      <ArrowRight size={16} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Remaining Supporting Cards (Carousel) */}
              <div 
                className="flex overflow-x-auto gap-3.5 pb-2 scroll-smooth snap-x snap-mandatory scrollbar-none -mx-2 px-2 relative w-full mt-2"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft;
                  const cardWidth = e.target.scrollWidth / (serviceCards.length - 1);
                  const activeIndex = Math.round(scrollLeft / cardWidth);
                  setActiveDot(Math.min(activeIndex, serviceCards.length - 2));
                }}
              >
                {serviceCards.slice(1).map((card, idx) => (
                  <div 
                    key={idx + 1} 
                    className={`flex-shrink-0 w-[65%] snap-center relative aspect-square sm:aspect-[4/5] rounded-[20px] overflow-hidden bg-gradient-to-br ${card.bgGradient} border border-white/10 p-4 flex flex-col justify-end text-left select-none shadow-md`}
                  >
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10 pointer-events-none" />
                    
                    <div className="z-20 flex items-end justify-between gap-1 w-full">
                      <div className="overflow-hidden">
                        <h4 className="font-sans font-black text-sm text-white leading-tight">
                          {card.title}
                        </h4>
                      </div>
                      <button className="w-6 h-6 rounded-full bg-white text-deep-black flex items-center justify-center flex-shrink-0">
                        <ArrowRight size={12} strokeWidth={3} className="text-[#00D2C4]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile Progress Dots for Carousel */}
              <div className="flex justify-center gap-1.5 mt-2">
                {serviceCards.slice(1).map((_, dotIdx) => (
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
        </div>

        {/* =========================================================================
            SPECIAL VISUAL MESSAGE (HORIZONTAL BANNER)
           ========================================================================= */}
        <div 
          ref={bannerRef}
          className={`bg-white border border-gray-200 rounded-[36px] p-8 md:p-12 mb-12 lg:mb-16 transition-all duration-1000 transform ${
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
