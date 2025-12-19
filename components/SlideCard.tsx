import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SlideCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
  totalSlides?: number;
  width?: string | number; // Optional prop to override width if needed
  className?: string; // For additional margins like 'ml-1'
}

export const SlideCard: React.FC<SlideCardProps> = ({
  title,
  description,
  href,
  index,
  totalSlides = 4,
  width = '100%', // Default to 100% to fit container, can be overridden
  className = '',
}) => {
  return (
    <div
      className={`relative flex-shrink-0 h-full ${className}`}
      style={{ width }}
      role="group"
      aria-roledescription="slide"
    >
      <Link
        href={href}
        className="block w-full h-full group focus:outline-none"
        role="button"
        aria-label={`${title} ${description}`}
        aria-roledescription={`${index + 1} of ${totalSlides}`}
      >
        {/* Card Container - Grant Thornton Brand Styling */}
        <div className="relative h-full bg-gt-purple/90 backdrop-blur-md border-l-[3px] border-gt-purple-light transition-all duration-300 hover:bg-gt-purple hover:border-white">
          
          <div className="flex flex-col h-full justify-between p-8 min-h-[220px]">
            {/* Top Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-gt-purple-light transition-colors">
                {title}
              </h3>
              
              <div className="text-lg text-white/90 font-light leading-relaxed">
                <p>{description}</p>
              </div>
            </div>

            {/* Bottom CTA Arrow */}
            <div className="flex justify-end mt-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gt-purple-light text-white transition-all duration-300 group-hover:bg-white group-hover:text-gt-purple group-hover:scale-110">
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </div>
            </div>
          </div>
          
        </div>
      </Link>
    </div>
  );
};
