import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Check, X, ShieldCheck, UserCheck, IndianRupee, Heart, Sparkles, Lock, Shield, CheckCircle2, AlertOctagon } from 'lucide-react';

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

export default function WorkforceSection() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [compRef, compRevealed] = useScrollReveal();
  const [benefitsRef, benefitsRevealed] = useScrollReveal();
  const [worryRef, worryRevealed] = useScrollReveal();

  const traditionalSteps = [
    { text: "Customer", icon: "👤" },
    { text: "Find different workers", icon: "🔍" },
    { text: "Call & check availability", icon: "📞" },
    { text: "Negotiate pricing", icon: "💰" },
    { text: "Manage the service", icon: "🤔" }
  ];

  const renzaSteps = [
    { text: "RENZA", icon: "⚡", primary: true },
    { text: "Trained Workforce", icon: "👷" },
    { text: "Managed Service Standards", icon: "🛡️" },
    { text: "Consistent Experience", icon: "✨" },
    { text: "Customer Gets the Outcome", icon: "✅" }
  ];

  const benefits = [
    {
      title: "Consistent Quality",
      desc: "Every service follows RENZA's expected quality standards.",
      icon: <ShieldCheck className="text-deep-black" size={24} />
    },
    {
      title: "Trained Workforce",
      desc: "Workers are trained and managed to deliver a professional service experience.",
      icon: <UserCheck className="text-deep-black" size={24} />
    },
    {
      title: "Clear Pricing",
      desc: "Customers don't have to negotiate prices with individual workers.",
      icon: <IndianRupee className="text-deep-black" size={24} />
    },
    {
      title: "Better Experience",
      desc: "RENZA stays responsible for delivering a reliable and professional experience.",
      icon: <Heart className="text-deep-black" size={24} />
    }
  ];

  const worries = [
    "Finding the right worker",
    "Calling different people",
    "Checking availability",
    "Negotiating prices",
    "Managing the worker",
    "Handling everything alone"
  ];

  const renzaSolutions = [
    "Tell RENZA what you need.",
    "RENZA manages the service experience."
  ];

  return (
    <section className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="workforce-section">
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
            AS OF NOW
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            RENZA's Own <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] py-0.5 inline-block shadow-sm">
                Trained & Managed
              </span>
            </span> Workforce.
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            RENZA will have its own trained and managed workforce, so we can maintain consistent service quality, professional behaviour and transparent pricing.
          </p>
        </div>

        {/* =========================================================================
            VISUAL COMPARISON (Traditional vs RENZA Model)
           ========================================================================= */}
        <div 
          ref={compRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24 transition-all duration-1000 transform ${
            compRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* LEFT COLUMN: Traditional Approach */}
          <div className="bg-white/40 border border-gray-200 rounded-[36px] p-6 md:p-10 flex flex-col justify-between transition-colors">
            <div>
              <div className="text-left mb-8">
                <h3 className="font-sans font-black text-xl text-text-secondary uppercase tracking-wider">Traditional Approach</h3>
              </div>
              <div className="flex flex-col items-center gap-2 max-w-sm mx-auto">
                {traditionalSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="w-full flex items-center justify-between bg-white/50 p-4 rounded-xl border border-gray-200/50 shadow-sm transition-all hover:scale-[1.01]">
                      <div className="flex items-center gap-3.5">
                        <span className="text-xl">{step.icon}</span>
                        <span className="font-semibold text-[#5F6368] text-sm md:text-base">{step.text}</span>
                      </div>
                    </div>
                    {idx < traditionalSteps.length - 1 && (
                      <ArrowDown size={14} className="text-text-secondary/40 my-0.5" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200/50 text-center">
              <span className="text-xs font-black text-red-500 tracking-wider uppercase block bg-red-500/5 py-3 rounded-xl border border-red-500/10">
                ❌ CUSTOMER MANAGES EVERYTHING
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: The RENZA Model */}
          <div className="bg-white border border-[#FFE500]/60 shadow-yellow-glow rounded-[36px] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden transition-colors">
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div>
              <div className="text-left mb-8">
                <h3 className="font-sans font-black text-xl text-text-dark uppercase tracking-wider flex items-center gap-2">
                  The RENZA Model
                  <span className="px-2.5 py-0.5 bg-brand-yellow text-deep-black text-[9px] font-black uppercase rounded-full">Ownership</span>
                </h3>
              </div>
              <div className="flex flex-col items-center gap-2 max-w-sm mx-auto">
                {renzaSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className={`w-full flex items-center justify-between p-4 rounded-xl border shadow-sm transition-all hover:scale-[1.01] ${
                      step.primary 
                        ? 'bg-brand-yellow border-brand-yellow text-deep-black font-black' 
                        : 'bg-brand-yellow/10 border-brand-yellow/30 text-text-dark font-extrabold'
                    }`}>
                      <div className="flex items-center gap-3.5">
                        <span className="text-xl">{step.icon}</span>
                        <span className="text-sm md:text-base leading-none">{step.text}</span>
                      </div>
                    </div>
                    {idx < renzaSteps.length - 1 && (
                      <ArrowDown size={14} className="text-brand-yellow my-0.5 animate-pulse" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#FFE500]/30 text-center">
              <span className="text-xs font-black text-deep-black tracking-wider uppercase block bg-brand-yellow py-3 rounded-xl border border-brand-yellow shadow-md">
                ⚡ RENZA TAKES RESPONSIBILITY
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN BENEFITS GRID
           ========================================================================= */}
        <div 
          ref={benefitsRef}
          className={`mb-24 transition-all duration-1000 transform ${
            benefitsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-3xl p-6 hover:border-brand-yellow shadow-sm hover:shadow-yellow-glow/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-deep-black flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="font-sans font-black text-lg text-text-dark mb-2 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-text-secondary text-xs md:text-sm font-normal leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            STRONG RESPONSIBILITY MESSAGE (YELLOW BANNER)
           ========================================================================= */}
        <div className="w-full bg-brand-yellow rounded-[40px] p-8 md:p-12 lg:p-16 text-deep-black text-center relative overflow-hidden shadow-yellow-glow mb-24 transition-transform hover:scale-[1.01] duration-500">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-deep-black/10 flex items-center justify-center mb-6">
              <Lock size={22} className="text-deep-black" />
            </div>
            <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl tracking-tight mb-2 uppercase leading-none">
              You Don't Manage the Worker.
            </h3>
            <h4 className="font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tight mb-6 uppercase text-deep-black/80">
              RENZA Manages the Service.
            </h4>
            <p className="text-deep-black/90 text-base md:text-lg font-bold max-w-2xl leading-relaxed">
              The customer doesn't have to worry about finding or managing the worker. RENZA takes responsibility for the complete service experience.
            </p>
          </div>
        </div>

        {/* =========================================================================
            CUSTOMER PEACE OF MIND (✕ vs ✓ lists)
           ========================================================================= */}
        <div 
          ref={worryRef}
          className={`bg-white border border-gray-200 rounded-[36px] p-8 md:p-12 transition-all duration-1000 transform ${
            worryRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-sans font-black text-2xl text-text-dark mb-2">What the customer doesn't have to worry about</h3>
            <p className="text-text-secondary text-sm md:text-base">We have completely restructured the experience to give you absolute peace of mind.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto text-left">
            
            {/* Worries Column (✕) */}
            <div className="flex flex-col gap-4">
              {worries.map((worry, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                  <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <X size={12} strokeWidth={3.5} />
                  </div>
                  <span className="text-text-secondary text-sm font-semibold">{worry}</span>
                </div>
              ))}
            </div>

            {/* Renza Solutions Column (✓) */}
            <div className="flex flex-col gap-4">
              {renzaSolutions.map((sol, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-brand-yellow/10 p-5 rounded-2xl border border-brand-yellow/30 shadow-yellow-glow/5 h-full justify-center">
                  <div className="w-7 h-7 rounded-full bg-brand-yellow text-deep-black flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-text-dark text-base font-extrabold">{sol}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
