import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus, Sparkles, HelpCircle } from 'lucide-react';

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

export default function FAQSection() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [accordionRef, accordionRevealed] = useScrollReveal();

  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      q: "What is RENZA?",
      a: "RENZA is designed to make everyday household help simpler. Instead of spending time finding and managing different workers, customers can tell RENZA what they need help with and RENZA manages the service experience."
    },
    {
      q: "Do I need to find and choose a worker myself?",
      a: "No. The customer focuses on the service they need, rather than searching through individual worker profiles. RENZA manages the service experience and workforce coordination."
    },
    {
      q: "What kind of help can I request?",
      a: "RENZA is focused on everyday household needs such as washing vessels, floor cleaning, bathroom cleaning, kitchen cleaning and general household help. Available services may vary as RENZA expands."
    },
    {
      q: "Who provides the service?",
      a: "As of now, RENZA plans to operate with its own trained and managed workforce for household work and selected services. This helps RENZA maintain a more consistent service experience."
    },
    {
      q: "Do I need to negotiate the price with the worker?",
      a: "No. RENZA aims to provide a simpler and more transparent service experience, so customers don't have to negotiate directly with individual workers."
    },
    {
      q: "What happens after I tell RENZA what I need?",
      a: "RENZA manages the service experience, including workforce coordination and service standards, while the customer focuses on the outcome they need."
    },
    {
      q: "What if I have a problem with the service?",
      a: "If something needs attention, RENZA remains responsible for managing the service experience and helping address the issue."
    },
    {
      q: "Is RENZA available everywhere?",
      a: "Service availability may depend on your location and the services currently available in your area. RENZA will continue expanding its service coverage."
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-bg-light transition-colors duration-300 py-12 lg:py-16 border-t border-gray-200" id="faq">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SECTION INTRODUCTION
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`text-left mb-8 lg:mb-10 max-w-3xl transition-all duration-700 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-text-dark text-[11px] font-bold tracking-wider uppercase mb-4">
            <HelpCircle size={11} className="text-amber-500 fill-amber-500" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            Questions? We've Got You.
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            Everything you need to know about getting household help with RENZA.
          </p>
        </div>

        {/* =========================================================================
            FAQ ACCORDION LAYOUT
           ========================================================================= */}
        <div 
          ref={accordionRef}
          className={`max-w-[900px] mx-auto flex flex-col gap-4 mb-12 lg:mb-8 lg:mb-10 transition-all duration-1000 transform ${
            accordionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen 
                    ? 'border-brand-yellow/60 border-l-4 border-l-brand-yellow shadow-yellow-glow/5 scale-[1.005]' 
                    : 'border-gray-200 hover:border-gray-300 hover:scale-[1.002]'
                }`}
              >
                {/* Header toggle button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-sans font-black text-base md:text-lg transition-colors ${
                    isOpen ? 'text-text-dark' : 'text-text-dark/95 group-hover:text-text-dark'
                  }`}>
                    {item.q}
                  </span>
                  
                  {/* Rotating plus icon */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bg-light border border-gray-200/50 flex items-center justify-center transition-colors group-hover:bg-neutral-100">
                    <Plus 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-brand-yellow' : 'rotate-0 text-text-secondary'
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                </button>

                {/* Animated content body panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden text-left ${
                    isOpen ? 'max-h-[200px] border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 md:p-6 text-text-secondary text-sm md:text-base font-semibold leading-relaxed bg-[#F7F7F5]/30">
                    "{item.a}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
