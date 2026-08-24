import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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

export default function OutcomeSection() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [problemRef, problemRevealed] = useScrollReveal();
  const [examplesRef, examplesRevealed] = useScrollReveal();
  const [darkMsgRef, darkMsgRevealed] = useScrollReveal();

  const questions = [
    "Who should I call?",
    "How much will it cost?",
    "Will they be available?",
    "Will the work be done properly?",
    "Do I need to manage everything?"
  ];

  const examples = [
    { emoji: "🍽️", text: "Need vessels washed", outcome: "RENZA helps get it done." },
    { emoji: "🧹", text: "Need the floor cleaned", outcome: "RENZA helps get it done." },
    { emoji: "🛁", text: "Need the bathroom cleaned", outcome: "RENZA helps get it done." }
  ];

  return (
    <section className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="outcome-section">
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
            THE RENZA PROMISE
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            Don't Manage the Worker. <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] py-0.5 inline-block shadow-sm">
                Focus on the Outcome.
              </span>
            </span>
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            Customers shouldn't have to worry about who to call, how to negotiate, or how to manage the work. Simply tell RENZA what needs to be done.
          </p>
        </div>

        {/* =========================================================================
            CUSTOMER PROBLEM EXAMPLE
           ========================================================================= */}
        <div 
          ref={problemRef}
          className={`bg-white border border-gray-250/80 rounded-[36px] p-8 md:p-12 mb-16 transition-all duration-1000 transform ${
            problemRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] text-text-secondary font-black tracking-widest uppercase block mb-3">Customer Problem Example</span>
            <h3 className="font-sans font-black text-2xl md:text-3xl text-text-dark mb-4">"Your problem is simple."</h3>
            
            {/* Core simple problem card */}
            <div className="bg-bg-light border border-gray-200 py-5 px-8 rounded-2xl inline-block shadow-inner mb-8">
              <span className="text-xl md:text-2xl font-black text-text-dark">
                🧹 "My floor needs to be cleaned."
              </span>
            </div>

            <p className="text-text-secondary text-xs md:text-sm font-semibold mb-6 uppercase tracking-wider">
              Then why should you have to worry about all of these questions?
            </p>

            {/* Questions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mb-10">
              {questions.map((q, idx) => (
                <div key={idx} className="bg-white/40 border border-gray-200 p-4 rounded-xl shadow-sm text-center flex items-center justify-center min-h-[72px]">
                  <span className="text-xs md:text-sm font-semibold text-[#5F6368]">{q}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-[1px] h-12 bg-red-500/30 mb-2" />
              <span className="text-red-500 text-lg md:text-xl font-black tracking-tight bg-red-500/5 px-6 py-2 rounded-xl border border-red-500/10 inline-block">
                ⚠️ These shouldn't be the customer's problems.
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUPPORTING VISUAL EXAMPLES
           ========================================================================= */}
        <div 
          ref={examplesRef}
          className={`mb-24 max-w-2xl mx-auto transition-all duration-1000 transform ${
            examplesRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-3">
            {examples.map((ex, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between bg-white border border-gray-200/80 px-6 py-4 rounded-2xl hover:border-brand-yellow transition-all duration-300 hover:scale-[1.01] hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ex.emoji}</span>
                  <span className="text-sm font-bold text-text-dark">{ex.text}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-yellow" />
                  <span className="text-xs font-black text-text-dark uppercase tracking-wider">{ex.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            FULL-WIDTH DARK MESSAGE SECTION
           ========================================================================= */}
        <div 
          ref={darkMsgRef}
          className={`bg-deep-black text-white rounded-[40px] p-8 md:p-14 lg:p-20 relative overflow-hidden shadow-2xl transition-all duration-1000 transform ${
            darkMsgRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <span className="text-brand-yellow text-xs font-black tracking-widest uppercase mb-6 bg-brand-yellow/10 border border-brand-yellow/20 px-4 py-1.5 rounded-full">
              Less worker management. More problem solving.
            </span>
            
            <h3 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
              You Have a Problem. <br />
              <span className="text-brand-yellow">RENZA Helps Get It Solved.</span>
            </h3>
            
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              Tell us what you need. RENZA manages the service experience and takes responsibility for helping deliver the expected outcome.
            </p>

            <div className="border border-white/15 bg-white/5 backdrop-blur-md px-8 py-5 rounded-[24px] shadow-inner max-w-xl">
              <span className="text-sm md:text-base font-extrabold text-white text-center block">
                👉 <span className="text-brand-yellow">Tell us what you need.</span> We'll take responsibility for getting it done.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
