import React from 'react';

export default function Logo({ className = "px-4 py-2", size = "normal" }) {
  const isSmall = size === "small";
  
  return (
    <div className={`flex items-center gap-2 bg-[#111111] rounded-full inline-flex select-none transition-all duration-300 hover:scale-[1.03] ${className}`}>
      {/* Yellow geometric icon */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${isSmall ? 'h-4 w-4' : 'h-5.5 w-5.5'} fill-[#FFE500]`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Modern angular geometric R mark */}
        <path d="M25 15H60C76.57 15 90 28.43 90 45C90 55.45 84.65 64.65 76.5 70L90 85H68L56 70H45V85H25V15ZM45 33V52H60C64.69 52 68.5 48.19 68.5 43.5C68.5 38.81 64.69 33 60 33H45Z" />
      </svg>
      {/* Logo Text */}
      <span className={`font-sans font-bold text-white tracking-tight leading-none ${isSmall ? 'text-sm' : 'text-[17px]'}`}>
        Renza
      </span>
    </div>
  );
}
