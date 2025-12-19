'use client';

import React, { useRef } from 'react';
import { CarouselControls } from './CarouselControls';
import { SlideCard } from './SlideCard';

// --- Types ---
export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface ContentCarouselProps {
  items: CarouselItem[];
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const ContentCarousel: React.FC<ContentCarouselProps> = ({ 
  items, 
  activeIndex, 
  onNext, 
  onPrev 
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      
      {/* 1. Static Headline Section - Removed from here to keep component focused on carousel content only, 
          as the parent GrantThorntonHero handles the main page headline. 
          If standalone usage is needed, the headline can be passed as children or a prop. */}

      {/* 2. Main Carousel Area */}
      <div className="relative w-full md:w-[450px]">
        {/* Track Window */}
        <div className="overflow-hidden relative min-h-[220px]">
          <div 
            ref={trackRef} 
            className="flex transition-transform duration-500 ease-in-out h-full" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }} 
          > 
            {items.map((item, index) => ( 
              <SlideCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={item.link}
                index={index}
                totalSlides={items.length}
                // Use calc(100% - 2px) width to account for the 1px left/right margins (mx-[1px])
                // This ensures the total width per item is exactly 100% of the container, preventing drift
                width="calc(100% - 2px)"
                className="mx-[1px]"
              />
            ))} 
          </div> 
        </div> 

        {/* 3. Custom Navigation Controls */} 
        <CarouselControls 
          onPrev={onPrev} 
          onNext={onNext} 
          className="mt-4" 
        /> 

      </div> 
    </div> 
  ); 
};
