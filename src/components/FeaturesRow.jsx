import React from 'react';
import { ShieldCheck, Smartphone, KeyRound } from 'lucide-react';

export default function FeaturesRow() {
  const features = [
    {
      icon: <ShieldCheck size={24} className="text-[#00D2C4]" />,
      title: "100% Verified Profiles",
      description: "Every service professional undergoes biometric and document verification for absolute peace of mind."
    },
    {
      icon: <Smartphone size={24} className="text-[#00D2C4]" />,
      title: "Direct App Booking",
      description: "Chat, agree on terms, negotiate, and hire verified local workers seamlessly inside the RENZA app."
    },
    {
      icon: <KeyRound size={24} className="text-[#00D2C4]" />,
      title: "Secure OTP Verification",
      description: "A secure start-of-work OTP ensures work is only completed and paid when you authorize it."
    }
  ];

  return (
    <div className="w-full mt-auto pt-10 pb-8 border-t border-gray-200/80 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feat, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 hover:bg-white/80 border border-transparent hover:border-gray-250 transition-all duration-300 hover:scale-[1.01] hover:shadow-sm"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#111111] shadow-md">
                {feat.icon}
              </div>
              
              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-bold text-[#111111] text-base leading-tight">
                  {feat.title}
                </h3>
                <p className="text-text-secondary text-sm font-normal leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
