import React from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ className = "", size = "normal" }) {
  const isSmall = size === "small";
  
  // Use a fallback background container if no custom background class is provided to ensure full readability
  const hasBg = className.includes('bg-');
  const defaultBgClass = hasBg ? '' : 'bg-[#111111] px-4 py-2 rounded-full border border-neutral-800 shadow-sm';

  return (
    <div className={`flex items-center justify-center select-none inline-flex ${defaultBgClass} ${className}`}>
      <img 
        src={logoImg} 
        alt="RENZA Logo" 
        className={`${isSmall ? 'h-[16px]' : 'h-[22px]'} w-auto object-contain`}
      />
    </div>
  );
}
