import React from 'react';

export default function Logo({ className = "", size = "normal" }) {
  const isSmall = size === "small";
  
  // Check if a custom text color class was passed in className
  const hasTextColor = className.split(' ').some(c => c.startsWith('text-'));
  const textColorClass = hasTextColor ? '' : 'text-text-dark dark:text-white';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Yellow geometric icon: Stylized modern R */}
      <svg 
        viewBox="0 0 24 24" 
        className={`${isSmall ? 'h-[18px] w-[18px]' : 'h-[24px] w-[24px]'} fill-[#FFE500] flex-shrink-0`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 3.5A1.5 1.5 0 0 1 7.5 2h5.5a5 5 0 0 1 5 5c0 2.5-1.8 4.2-4 4.8l3.8 7.4a1 1 0 0 1-.9 1.8h-3.5a1 1 0 0 1-.9-.5L10 13h-1v6.5A1.5 1.5 0 0 1 7.5 21H7a1 1 0 0 1-1-1V3.5z" />
      </svg>
      {/* Logo Text */}
      <span className={`font-sans font-black tracking-tight leading-none ${isSmall ? 'text-base' : 'text-xl'} ${textColorClass}`}>
        Renza
      </span>
    </div>
  );
}
