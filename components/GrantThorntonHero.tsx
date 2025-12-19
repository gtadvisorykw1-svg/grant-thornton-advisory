'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ContentCarousel, CarouselItem } from './ContentCarousel';

// --- Data Configuration ---
interface SlideData extends CarouselItem {
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    id: 'go-beyond',
    title: 'Go Beyond',
    description: 'Empowering the mid-market',
    link: '/about/',
    desktopImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    alt: 'Go Beyond',
  },
  {
    id: 'leaders',
    title: 'Access to senior leaders',
    description: 'Supporting you to thrive.',
    link: '/meet-our-people/',
    desktopImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    alt: 'Access to senior leaders',
  },
  {
    id: 'advisory',
    title: 'Navigate complex challenges',
    description: 'Go beyond with our advisory insights.',
    link: '/service/advisory/',
    desktopImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    alt: 'Navigate complex challenges',
  }
];

export const GrantThorntonHero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full bg-gt-purple-dark overflow-hidden group">
      
      {/* 1. Hero Image Layer (Absolute Background) */}
      <div className="relative h-[600px] lg:h-[700px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Gradient Overlay for text readability - Brand Aligned */}
            <div 
              className="absolute inset-0 z-10" 
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(40, 20, 64, 0.5) 40%, transparent 100%)'
              }}
            />
            
            <Image
              src={slide.desktopImage}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* 2. Main Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
          
          {/* Headline Section */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get the most from <br/> a thriving market.
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-gt-purple bg-white inline-block px-6 py-3 shadow-lg">
              Go Beyond with Grant Thornton in Kuwait
            </h2>
          </div>

          {/* Carousel Cards Section - Using Modular Component */}
          <ContentCarousel 
            items={slides}
            activeIndex={current}
            onNext={next}
            onPrev={prev}
          />
        </div>
      </div>
    </div>
  );
};
