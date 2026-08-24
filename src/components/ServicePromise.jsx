import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Check, Sparkles, ClipboardCheck, Users, CheckCircle } from 'lucide-react';

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

export default function ServicePromise() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [flowRef, flowRevealed] = useScrollReveal();
  const [messageRef, messageRevealed] = useScrollReveal();
  const [promiseCardsRef, promiseCardsRevealed] = useScrollReveal();
  const [darkRef, darkRevealed] = useScrollReveal();
  const [footerRef, footerRevealed] = useScrollReveal();

  const promiseSteps = [
    {
      num: "Step 01",
      title: "YOUR NEED",
      desc: "My floor needs to be cleaned.",
      icon: "🧹"
    },
    {
      num: "Step 02",
      title: "TELL RENZA",
      desc: "Choose Floor Cleaning in the RENZA app.",
      icon: "📱"
    },
    {
      num: "Step 03",
      title: "RENZA TAKES RESPONSIBILITY",
      desc: "Coordinates standard delivery directly.",
      icon: "🛡️",
      points: [
        "Coordinates the service",
        "Manages the workforce",
        "Maintains service standards",
        "Supports the service experience"
      ]
    },
    {
      num: "Step 04",
      title: "PROBLEM HANDLED",
      desc: "Floor cleaned",
      icon: "✨",
      highlight: true
    }
  ];

  const promiseCards = [
    {
      icon: <ClipboardCheck size={24} className="text-deep-black" />,
      title: "We Understand the Need",
      desc: "Start by telling us what needs to be done."
    },
    {
      icon: <Users size={24} className="text-deep-black" />,
      title: "We Manage the Experience",
      desc: "RENZA coordinates the workforce and manages the service experience."
    },
    {
      icon: <CheckCircle size={24} className="text-deep-black" />,
      title: "We Focus on the Outcome",
      desc: "The goal is simple: help get the work done and the customer's need addressed."
    }
  ];

  return (
    <section className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="service-promise-section">
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
            THE RENZA SERVICE PROMISE
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            You Have a Problem. <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] py-0.5 inline-block shadow-sm">
                RENZA Helps Get It Solved.
              </span>
            </span>
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            When something needs to be done at home, you shouldn't have to spend your time searching for people, coordinating workers and managing the entire experience. Tell RENZA what you need, and we take responsibility for managing the service experience.
          </p>
        </div>

        {/* =========================================================================
            MAIN PROMISE VISUAL FLOW
           ========================================================================= */}
        <div 
          ref={flowRef}
          className={`grid grid-cols-1 lg:grid-cols-7 items-stretch gap-4 mb-20 transition-all duration-1000 transform ${
            flowRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Step 1 */}
          <div className="lg:col-span-1.5 bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between text-left transition-all hover:scale-[1.01]">
            <div>
              <span className="text-[10px] text-text-secondary font-black tracking-widest block mb-2">{promiseSteps[0].num}</span>
              <div className="w-10 h-10 rounded-xl bg-bg-light border border-gray-200 flex items-center justify-center mb-4 text-xl">
                {promiseSteps[0].icon}
              </div>
              <h4 className="font-sans font-black text-sm text-text-dark mb-2 tracking-wide uppercase leading-tight">{promiseSteps[0].title}</h4>
              <p className="text-text-secondary text-xs leading-relaxed">"{promiseSteps[0].desc}"</p>
            </div>
          </div>

          {/* Separator Arrow 1 */}
          <div className="flex items-center justify-center py-2 lg:py-0">
            <ArrowRight size={18} className="text-brand-yellow rotate-90 lg:rotate-0" />
          </div>

          {/* Step 2 */}
          <div className="lg:col-span-1.5 bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between text-left transition-all hover:scale-[1.01]">
            <div>
              <span className="text-[10px] text-text-secondary font-black tracking-widest block mb-2">{promiseSteps[1].num}</span>
              <div className="w-10 h-10 rounded-xl bg-bg-light border border-gray-200 flex items-center justify-center mb-4 text-xl">
                {promiseSteps[1].icon}
              </div>
              <h4 className="font-sans font-black text-sm text-text-dark mb-2 tracking-wide uppercase leading-tight">{promiseSteps[1].title}</h4>
              <p className="text-text-secondary text-xs leading-relaxed">{promiseSteps[1].desc}</p>
            </div>
          </div>

          {/* Separator Arrow 2 */}
          <div className="flex items-center justify-center py-2 lg:py-0">
            <ArrowRight size={18} className="text-brand-yellow rotate-90 lg:rotate-0" />
          </div>

          {/* Step 3 */}
          <div className="lg:col-span-1.5 bg-white border border-gray-250 rounded-3xl p-6 flex flex-col justify-between text-left transition-all hover:scale-[1.01] hover:border-brand-yellow/60 hover:shadow-yellow-glow/5">
            <div>
              <span className="text-[10px] text-text-secondary font-black tracking-widest block mb-2">{promiseSteps[2].num}</span>
              <div className="w-10 h-10 rounded-xl bg-bg-light border border-gray-200 flex items-center justify-center mb-4 text-xl">
                {promiseSteps[2].icon}
              </div>
              <h4 className="font-sans font-black text-sm text-text-dark mb-2 tracking-wide uppercase leading-tight">{promiseSteps[2].title}</h4>
              
              <div className="flex flex-col gap-2 mt-4">
                {promiseSteps[2].points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check size={11} className="text-brand-yellow" strokeWidth={3.5} />
                    <span className="text-[11px] font-bold text-text-secondary leading-none">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Separator Arrow 3 */}
          <div className="flex items-center justify-center py-2 lg:py-0">
            <ArrowRight size={18} className="text-brand-yellow rotate-90 lg:rotate-0" />
          </div>

          {/* Step 4 */}
          <div className="lg:col-span-1.5 bg-brand-yellow border border-brand-yellow shadow-yellow-glow rounded-3xl p-6 flex flex-col justify-between text-left relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/20 rounded-full blur-xl pointer-events-none" />
            <div>
              <span className="text-[10px] text-deep-black/60 font-black tracking-widest block mb-2">{promiseSteps[3].num}</span>
              <div className="w-10 h-10 rounded-xl bg-deep-black text-lg flex items-center justify-center mb-4 shadow-md">
                <Check size={18} className="text-brand-yellow" strokeWidth={3} />
              </div>
              <h4 className="font-sans font-black text-deep-black text-sm mb-2 tracking-wide uppercase leading-none">{promiseSteps[3].title}</h4>
              <span className="text-deep-black font-black text-lg block mb-1">
                ✓ {promiseSteps[3].desc}
              </span>
              <p className="text-deep-black/80 text-[10px] font-bold tracking-wide uppercase">
                Focus on the outcome.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            IMPORTANT CUSTOMER MESSAGE
           ========================================================================= */}
        <div 
          ref={messageRef}
          className={`text-center mb-24 max-w-3xl mx-auto transition-all duration-700 transform ${
            messageRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-sans font-black text-2xl md:text-3xl text-text-dark tracking-tight uppercase leading-tight">
              "You don't need to manage the person doing the work."
            </h3>
            <span className="font-sans font-black text-3xl md:text-4xl text-deep-black bg-brand-yellow px-4 py-1.5 rounded-xl inline-block shadow-sm tracking-tight mt-2 uppercase">
              You need the work to get done.
            </span>
          </div>
        </div>

        {/* =========================================================================
            THREE BRAND PROMISE CARDS
           ========================================================================= */}
        <div 
          ref={promiseCardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 transition-all duration-1000 transform ${
            promiseCardsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {promiseCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-[28px] p-8 hover:border-brand-yellow shadow-sm hover:shadow-yellow-glow/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <h3 className="font-sans font-black text-lg text-text-dark mb-2 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-text-secondary text-sm font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            STRONG BLACK SECTION
           ========================================================================= */}
        <div 
          ref={darkRef}
          className={`bg-deep-black text-white rounded-[40px] p-8 md:p-14 lg:p-20 text-center relative overflow-hidden shadow-2xl transition-all duration-1000 transform ${
            darkRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            
            <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-4 uppercase">
              Don't Look for a Worker.
            </h3>
            
            <h4 className="font-sans font-black text-2xl md:text-4xl text-brand-yellow mb-8 tracking-tight uppercase leading-none">
              Tell RENZA What You Need.
            </h4>
            
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              The experience begins with your need — not with searching through worker profiles. RENZA is designed to manage the service experience so customers can focus on what they need done.
            </p>

            {/* Connected flow line */}
            <div className="w-full max-w-2xl py-4 border-y border-white/10 select-none text-xs font-black tracking-widest text-neutral-400 flex flex-col md:flex-row items-center justify-center gap-4">
              <span>YOUR NEED</span>
              <ArrowRight size={14} className="text-brand-yellow rotate-90 md:rotate-0" />
              <span className="text-brand-yellow font-black">RENZA</span>
              <ArrowRight size={14} className="text-brand-yellow rotate-90 md:rotate-0" />
              <span>MANAGED SERVICE</span>
              <ArrowRight size={14} className="text-brand-yellow rotate-90 md:rotate-0" />
              <span className="text-brand-yellow font-black">OUTCOME</span>
            </div>

          </div>
        </div>

        {/* =========================================================================
            FINAL PROMISE AND CTA
           ========================================================================= */}
        <div 
          ref={footerRef}
          className={`mt-20 text-center flex flex-col items-center gap-6 transition-all duration-1000 transform ${
            footerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h3 className="font-sans font-black text-3xl md:text-4xl text-text-dark tracking-tight mb-2 uppercase leading-none">
              Less Managing. More Getting Done.
            </h3>
            <p className="text-text-secondary text-sm md:text-base font-semibold">
              That's the RENZA promise.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-extrabold text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer group">
            Tell RENZA What You Need
            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
