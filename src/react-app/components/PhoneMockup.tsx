import type { FC, ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export const PhoneMockup: FC<PhoneMockupProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto w-full max-w-[320px] ${className}`}>
      {/* iPhone Frame */}
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
        
        {/* Screen Container */}
        <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
          {/* Screen Content */}
          <div className="absolute inset-0 bg-white overflow-hidden">
            {children}
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
};

interface PhoneScreenshotProps {
  src: string;
  alt: string;
  className?: string;
}

export const PhoneScreenshot: FC<PhoneScreenshotProps> = ({ src, alt, className = '' }) => {
  return (
    <PhoneMockup className={className}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover object-top"
      />
    </PhoneMockup>
  );
};

export default PhoneMockup;

