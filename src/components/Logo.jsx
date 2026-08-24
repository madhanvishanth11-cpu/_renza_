import React from 'react';

export default function Logo({ className = "", size = "normal" }) {
  const isSmall = size === "small";
  
  // Check if a custom text color class was passed in className
  const hasTextColor = className.split(' ').some(c => c.startsWith('text-'));
  const textColorClass = hasTextColor ? '' : 'text-text-dark dark:text-white';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Yellow geometric icon: Stylized solid R silhouette with flat bottom */}
      <svg 
        viewBox="0 0 24 24" 
        className={`${isSmall ? 'h-[18px] w-[18px]' : 'h-[24px] w-[24px]'} fill-[#FFE500] flex-shrink-0`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 20V5.5A3.5 3.5 0 0 1 9.5 2h4.5A5 5 0 0 1 19 7v3.5c0 2.5-2 3.5-4 3.5 2 0 3 2 3 6v1H6z" />
      </svg>
      {/* Logo Text */}
      <span className={`font-sans font-black tracking-tight leading-none ${isSmall ? 'text-base' : 'text-xl'} ${textColorClass}`}>
        Renza
      </span>
    </div>
  );
}
