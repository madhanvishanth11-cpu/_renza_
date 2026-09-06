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
  const [containerRef, containerRevealed] = useScrollReveal();
  const [bannerRef, bannerRevealed] = useScrollReveal();
  const [activeDot, setActiveDot] = useState(0);

  const serviceCards = [
    { title: "Dishwashing", img: dishImg, icon: <Utensils size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#082022] to-[#040e0f]" },
    { title: "Kitchen Cleaning", img: kitchenImg, icon: <ChefHat size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#1a2d2a] to-[#081211]" },
    { title: "Fan Cleaning", img: fanImg, icon: <Sparkles size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#0f2425] to-[#061011]" },
    { title: "Window Cleaning", img: windowImg, icon: <Home size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#09282b] to-[#031011]" },
    { title: "Laundry Help", img: laundryImg, icon: <Sparkles size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#111e30] to-[#070e18]" },
    { title: "Bathroom Cleaning", img: bathImg, icon: <Bath size={28} className="text-[#00D2C4]" />, bgGradient: "from-[#152e2a] to-[#081312]" }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-bg-light transition-colors duration-300 py-12 lg:py-16 border-t border-gray-200" id="services">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SERVICES IMMERSIVE CONTAINER
           ========================================================================= */}
        <div 
          ref={containerRef}
          className={`relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0c1f1e] via-[#051313] to-[#040c0c] border border-[#00D2C4]/20 shadow-2xl mb-12 lg:mb-16 transition-all duration-1000 transform flex flex-col justify-between min-h-[500px] md:min-h-[600px] lg:min-h-[700px] ${
            containerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* MAIN FEATURED BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img 
              src={servicesBg} 
              alt="House Help Service Experience" 
              className="w-full h-full object-cover object-[70%_20%] lg:object-[80%_15%] opacity-90 transition-transform duration-1000 hover:scale-[1.02]"
            />
            {/* Subtle dark gradient overlay for text readability & card contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />
          </div>

          {/* Background Ambient Mesh Lights */}
          <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[#00D2C4]/20 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* TOP AREA: Heading and View All */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6 w-full p-8 md:p-10 lg:p-12">
            {/* Top Left: Heading */}
            <div className="text-left max-w-xl">
              <span className="text-[#00D2C4] text-[10px] md:text-xs font-black tracking-widest block uppercase mb-3">
                SERVICES
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.1] drop-shadow-md">
                What Can Your House Help Do?
              </h2>
            </div>

            {/* Top Right: View All */}
            <div className="flex items-center gap-3 self-start sm:self-auto flex-shrink-0 mt-2 sm:mt-0">
              <span className="text-white text-xs font-black tracking-wider uppercase drop-shadow-sm">
                View All
              </span>
              <button className="w-10 h-10 rounded-full bg-white hover:bg-[#00D2C4] text-[#00D2C4] hover:text-deep-black flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-lg hover:shadow-[#00D2C4]/50">
                <ArrowRight size={18} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* BOTTOM AREA: Horizontal Row of Service Cards OVERLAPPING the background */}
          <div className="relative z-10 w-full p-6 md:p-8 lg:p-10 pt-20 mt-auto">
            
            {/* Desktop / Tablet Grid (Nicely fitted side-by-side) */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 w-full">
              {serviceCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] rounded-[20px] overflow-hidden border border-white/20 hover:border-[#00D2C4]/50 flex flex-col justify-end text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00D2C4]/20 group cursor-pointer"
                >
                  {/* Small Card Background Image */}
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 z-0 select-none pointer-events-none"
                  />

                  {/* Strong Dark Gradient at the bottom of the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />
                  
                  {/* Background mesh glow inside each card */}
                  <div className="absolute top-[-20%] right-[-20%] w-16 h-16 bg-[#00D2C4]/20 rounded-full blur-md pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card Content */}
                  <div className="z-20 p-4 lg:p-5 flex items-end justify-between gap-2 w-full mt-auto">
                    <div className="overflow-hidden">
                      <h4 className="font-sans font-black text-sm lg:text-sm xl:text-base text-white leading-tight drop-shadow-md">
                        {card.title}
                      </h4>
                    </div>
                    <button className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white text-deep-black flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#00D2C4] shadow-md group-hover:scale-110">
                      <ArrowRight size={12} strokeWidth={3} className="text-[#00D2C4] group-hover:text-deep-black" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CAROUSEL VIEW (visible below 768px) */}
            <div className="flex md:hidden flex-col gap-4 w-full">
              <div 
                className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none -mx-6 px-6 relative w-[calc(100%+3rem)]"
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
                    className="flex-shrink-0 w-[55%] snap-center relative aspect-[3/4] rounded-[20px] overflow-hidden border border-white/20 p-4 flex flex-col justify-end text-left select-none shadow-xl"
                  >
                    {/* Small Card Background Image */}
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
                    />

                    {/* Strong Dark Gradient at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />

                    {/* Card Content */}
                    <div className="z-20 flex items-end justify-between gap-2 w-full mt-auto">
                      <div className="overflow-hidden">
                        <h4 className="font-sans font-black text-sm text-white leading-tight drop-shadow-md">
                          {card.title}
                        </h4>
                      </div>
                      <button className="w-7 h-7 rounded-full bg-white text-deep-black flex items-center justify-center flex-shrink-0 shadow-md">
                        <ArrowRight size={12} strokeWidth={3} className="text-[#00D2C4]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile Progress Dots for Carousel */}
              <div className="flex justify-center gap-1.5 mt-0">
                {serviceCards.map((_, dotIdx) => (
                  <div 
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeDot === dotIdx 
                        ? 'w-4 bg-[#00D2C4]' 
                        : 'w-1.5 bg-white/30'
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
      </div>

      {/* FULL-WIDTH DARK HOW RENZA WORKS REPLACEMENT */}
      <div className="w-full bg-[#0A0A0A] py-24 lg:py-36 border-t border-[#1a1a1a] mt-16">
        <div 
          ref={bannerRef}
          className={`w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 transition-all duration-1000 transform ${
            bannerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Editorial Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: HEADER (Sticky) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="lg:sticky lg:top-32">
                {/* Subtle Label & Accent Line */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-[#00D2C4]" />
                  <span className="text-[#00D2C4] text-[10px] font-black tracking-[0.2em] uppercase">
                    HOW RENZA WORKS
                  </span>
                </div>
                
                <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[64px] text-white tracking-tight leading-[1.05] mb-8">
                  From a Problem to a Solved Outcome.
                </h2>
                
                <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-[440px]">
                  Tell RENZA what you need. We manage the service experience so you can focus on your day.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: VERTICAL JOURNEY */}
            <div className="lg:col-span-7 relative pt-4 lg:pt-0">
              
              {/* The Thin Vertical Connecting Line */}
              <div className="absolute left-[19px] top-[16px] bottom-[40px] w-[2px] bg-neutral-800 z-0">
                 <div className="w-full h-[60%] bg-gradient-to-b from-[#00D2C4]/40 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col gap-16 lg:gap-20 relative z-10">
                {[
                  { num: "01", title: "Choose the task", desc: "You have a need. Simply choose what you need help with in the RENZA app. For example: \"My floor needs cleaning.\"" },
                  { num: "02", title: "RENZA manages the service", desc: "We manage the entire service experience, coordinating the workforce, ensuring quality standards, and providing clear pricing." },
                  { num: "03", title: "Get it done", desc: "The job is successfully completed. Your floor is cleaned, and you can get back to focusing on your day." }
                ].map((step, idx, arr) => {
                  const isLast = idx === arr.length - 1;
                  return (
                    <div key={idx} className="relative flex items-start group">
                      {/* Node on the line */}
                      <div className="flex-shrink-0 w-[40px] flex items-start justify-center relative mt-2.5">
                        <div className={`w-[10px] h-[10px] rounded-full transition-all duration-500 z-10 ${
                          isLast ? 'bg-[#00D2C4] shadow-[0_0_16px_rgba(0,210,196,0.6)]' : 'bg-neutral-600 group-hover:bg-[#00D2C4]'
                        }`} />
                      </div>
                      
                      {/* Step Content */}
                      <div className="ml-4 md:ml-8 flex-1 group-hover:-translate-y-1 transition-transform duration-500">
                        <span className="block text-lg md:text-xl font-black text-neutral-600 mb-2 transition-colors duration-500 group-hover:text-white">
                          {step.num}
                        </span>
                        
                        <h3 className="font-sans font-black text-2xl md:text-4xl text-white tracking-tight mb-4 transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-neutral-400 text-base md:text-lg font-medium leading-relaxed max-w-[500px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
