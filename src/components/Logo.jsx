import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ className = "", size = "normal" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";
  
  let heightClass = 'h-[26px]';
  if (isSmall) {
    heightClass = 'h-[19px]';
  } else if (isLarge) {
    heightClass = 'h-[34px]'; // Larger size for header
  }

  // Adjust padding proportionally
  let paddingClass = 'px-4.5 py-2';
  if (isSmall) {
    paddingClass = 'px-3 py-1.5';
  } else if (isLarge) {
    paddingClass = 'px-5 py-2.5';
  }

  const [processedSrc, setProcessedSrc] = useState(logoImg);

  useEffect(() => {
    const img = new Image();
    img.src = logoImg;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Process pixels to remove black background and clean up chromatic aberration (red/blue fringing)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // 1. Make black/dark background transparent
        if (r < 30 && g < 30 && b < 30) {
          data[i + 3] = 0; // Alpha = 0
          continue;
        }

        // 2. Desaturate non-yellow pixels to clean up chromatic fringing around white text
        // Yellow threshold: High R and G, relatively low B
        const isYellow = (r > 150 && g > 150 && b < 100);
        if (!isYellow) {
          const avg = Math.round((r + g + b) / 3);
          // Boost contrast for cleaner, sharper text edges
          const contrastVal = avg > 120 ? Math.min(255, avg * 1.15) : avg;
          data[i] = contrastVal;
          data[i + 1] = contrastVal;
          data[i + 2] = contrastVal;
        }
      }
      ctx.putImageData(imgData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
  }, []);

  // Use a fallback background container if no custom background class is provided to ensure full readability
  const hasBg = className.includes('bg-');
  const defaultBgClass = hasBg ? '' : `bg-[#111111] ${paddingClass} rounded-full border border-neutral-850 shadow-sm`;

  return (
    <div className={`flex items-center justify-center select-none inline-flex ${defaultBgClass} ${className}`}>
      <img 
        src={processedSrc} 
        alt="RENZA Logo" 
        className={`${heightClass} w-auto object-contain`}
      />
    </div>
  );
}
