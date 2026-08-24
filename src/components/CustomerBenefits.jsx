import React, { useEffect, useRef, useState } from 'react';
import { Clock, Smile, ShieldCheck, Target, ArrowRight, Check, X, Sparkles } from 'lucide-react';

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

export default function CustomerBenefits() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [layoutRef, layoutRevealed] = useScrollReveal();
  const [cardsRef, cardsRevealed] = useScrollReveal();
  const [contrastRef, contrastRevealed] = useScrollReveal();
  const [bannerRef, bannerRevealed] = useScrollReveal();

  const checklistItems = [
    "No calling different people",
    "No searching for individual workers",
    "No negotiating prices one by one",
    "No coordinating everything yourself",
    "No worrying about who will handle the work"
  ];

  const benefitCards = [
    {
      icon: <Clock size={24} className="text-deep-black" />,
      title: "Save Time",
      desc: "Spend less time searching, calling and coordinating household help."
    },
    {
      icon: <Smile size={24} className="text-deep-black" />,
      title: "Less Stress",
      desc: "You don't have to manage every part of the service experience yourself."
    },
    {
      icon: <ShieldCheck size={24} className="text-deep-black" />,
      title: "Managed Experience",
      desc: "RENZA takes responsibility for coordinating and managing the service experience."
    },
    {
      icon: <Target size={24} className="text-deep-black" />,
      title: "Focus on the Outcome",
      desc: "Tell us what you need done and focus on the result you want."
    }
  ];

  return (
    <section className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="customer-benefits-section">
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
            WHY CUSTOMERS CHOOSE RENZA
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            Less To Manage. <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] py-0.5 inline-block shadow-sm">
                More Time For You.
              </span>
            </span>
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            Household work shouldn't require hours of calling, coordinating and managing people. RENZA is designed to make getting help simpler.
          </p>
        </div>

        {/* =========================================================================
            TWO-COLUMN MAIN LAYOUT
           ========================================================================= */}
        <div 
          ref={layoutRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24 transition-all duration-1000 transform ${
            layoutRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* LEFT COLUMN: Stop Managing */}
          <div className="flex flex-col justify-between items-start text-left bg-white/40 border border-gray-200 rounded-[32px] p-8 md:p-10 transition-colors">
            <div>
              <h3 className="font-sans font-black text-2xl text-text-dark mb-6">Stop Managing Household Help</h3>
              
              <div className="flex flex-col gap-4 mb-8">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                      <Check size={12} strokeWidth={3} className="text-[#E2C700]" />
                    </div>
                    <span className="text-text-secondary text-sm md:text-base font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full bg-brand-yellow/10 border border-brand-yellow/30 p-5 rounded-2xl">
              <span className="text-base md:text-lg font-extrabold text-text-dark leading-none">
                💡 Simply tell RENZA what you need.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: With RENZA Daily Story */}
          <div className="bg-white border border-[#FFE500]/60 shadow-yellow-glow rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-left relative overflow-hidden transition-colors group">
            {/* Accent backdrop glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              <span className="text-xs font-black text-brand-yellow tracking-widest uppercase block mb-2">Daily Timeline</span>
              <h4 className="font-sans font-black text-xl text-text-dark mb-6">With RENZA</h4>
              
              {/* Daily timeline steps */}
              <div className="flex flex-col gap-6 relative pl-6 border-l-2 border-brand-yellow/30">
                
                {/* Morning realised */}
                <div className="relative">
                  <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-brand-yellow text-deep-black flex items-center justify-center border border-brand-yellow font-black text-[9px] shadow-sm">1</div>
                  <span className="text-[10px] text-text-secondary font-black tracking-widest uppercase block mb-1">Morning</span>
                  <span className="text-sm font-extrabold text-text-dark">You realise: 🧹 The floor needs cleaning.</span>
                </div>

                {/* Old way frustrations */}
                <div className="relative opacity-65">
                  <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-neutral-200 text-text-secondary flex items-center justify-center border border-neutral-300 font-bold text-[9px]">2</div>
                  <span className="text-[9px] text-text-secondary font-bold tracking-widest uppercase block mb-1">Traditional Way</span>
                  <span className="text-xs font-semibold text-text-secondary line-through">
                    📞 Calling multiple people &bull; 💬 Checking availability &bull; 💰 Negotiating
                  </span>
                </div>

                {/* Renza solution path */}
                <div className="relative">
                  <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-brand-yellow text-deep-black flex items-center justify-center border border-brand-yellow font-black text-[9px] shadow-sm animate-ping" />
                  <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-brand-yellow text-deep-black flex items-center justify-center border border-brand-yellow font-black text-[9px] shadow-sm">3</div>
                  <span className="text-[10px] text-brand-yellow font-black tracking-widest uppercase block mb-1">The RENZA Way</span>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-text-dark flex-wrap bg-brand-yellow/10 p-2.5 rounded-xl border border-brand-yellow/30 shadow-yellow-glow/5">
                    <span>📱 Open RENZA</span>
                    <ArrowRight size={10} className="text-brand-yellow" />
                    <span>✨ Select task</span>
                    <ArrowRight size={10} className="text-brand-yellow" />
                    <span>👷 Managed Service</span>
                    <ArrowRight size={10} className="text-brand-yellow" />
                    <span>✓ Back to your day</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-yellow/30 flex items-center justify-between">
              <span className="text-base font-black text-text-dark">Your time stays yours.</span>
              <span className="px-3 py-1 bg-brand-yellow text-deep-black text-[10px] font-black uppercase rounded-full shadow-sm">No Hassle</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FOUR BENEFIT CARDS
           ========================================================================= */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 transition-all duration-1000 transform ${
            cardsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {benefitCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-[28px] p-6 hover:border-brand-yellow shadow-sm hover:shadow-yellow-glow/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <h3 className="font-sans font-black text-lg text-text-dark mb-2 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-text-secondary text-xs md:text-sm font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            BEFORE AND AFTER EXPERIENCE ROW
           ========================================================================= */}
        <div 
          ref={contrastRef}
          className={`mb-24 transition-all duration-1000 transform ${
            contrastRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
            
            {/* Before Renza */}
            <div className="bg-white/40 border border-gray-200 rounded-[32px] p-8 text-left transition-colors flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[9px] text-[#5F6368] font-black tracking-widest uppercase block mb-3">Before RENZA</span>
                <div className="flex flex-wrap gap-2">
                  {["How do I find someone?", "Who is available?", "How much will they charge?", "Do I need to manage everything?"].map((q, idx) => (
                    <span key={idx} className="bg-neutral-250/20 border border-neutral-300/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-text-secondary">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-250/30">
                <span className="text-[10px] text-text-secondary font-black tracking-widest uppercase block">Unnecessary thoughts</span>
              </div>
            </div>

            {/* After Renza */}
            <div className="bg-white border border-[#FFE500]/60 shadow-yellow-glow rounded-[32px] p-8 text-left relative overflow-hidden transition-colors flex flex-col justify-between min-h-[220px] group">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-yellow/5 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="text-[9px] text-text-secondary font-black tracking-widest uppercase block mb-3">After RENZA</span>
                <span className="text-xl font-black text-text-dark block mb-2 leading-none">
                  "I need this done."
                </span>
                <span className="font-sans font-black text-2xl text-deep-black bg-brand-yellow px-3 py-1 rounded-[4px] inline-block shadow-sm tracking-tight mt-1 uppercase">
                  That's enough.
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-yellow/30">
                <span className="text-[10px] text-brand-yellow font-black tracking-widest uppercase block">All you need to think about</span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            STRONG CUSTOMER MESSAGE (YELLOW BANNER)
           ========================================================================= */}
        <div 
          ref={bannerRef}
          className={`w-full bg-brand-yellow rounded-[40px] p-8 md:p-12 lg:p-16 text-deep-black text-center relative overflow-hidden shadow-yellow-glow transition-all duration-1000 transform ${
            bannerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl tracking-tight mb-2 uppercase leading-none">
              Your Home Has Enough To Manage.
            </h3>
            <h4 className="font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tight mb-6 uppercase text-deep-black/80">
              Household Help Shouldn't Be Another One.
            </h4>
            <p className="text-deep-black/90 text-sm md:text-base font-bold max-w-xl leading-relaxed mb-10">
              RENZA is designed to reduce the effort involved in getting everyday household work handled.
            </p>

            {/* Formula Block */}
            <div className="w-full max-w-lg py-4 border-y border-deep-black/10 select-none text-[10px] md:text-xs font-black tracking-widest uppercase text-deep-black/70 flex flex-col md:flex-row items-center justify-center gap-3">
              <span>YOUR DAY</span>
              <span>+</span>
              <span>YOUR NEED</span>
              <span>+</span>
              <span>RENZA HANDLES SERVICE</span>
              <span className="hidden md:inline">=</span>
              <span className="bg-deep-black text-white px-3 py-1 rounded-[4px] font-black shadow-md">MORE TIME FOR YOU</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
