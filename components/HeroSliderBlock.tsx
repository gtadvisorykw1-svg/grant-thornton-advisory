'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- Data Configuration ---
interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    id: 'go-beyond',
    title: 'Go Beyond',
    subtitle: 'Empowering the mid-market',
    link: '/about/',
    desktopImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    alt: 'Go Beyond',
  },
  {
    id: 'leaders',
    title: 'Access to senior leaders',
    subtitle: 'Supporting you to thrive.',
    link: '/meet-our-people/',
    desktopImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    alt: 'Access to senior leaders',
  },
  {
    id: 'advisory',
    title: 'Navigate complex challenges',
    subtitle: 'Go beyond with our advisory insights.',
    link: '/service/advisory/',
    desktopImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    alt: 'Navigate complex challenges',
  }
];

export const HeroSliderBlock: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handlePrev = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Auto-rotate effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative w-full overflow-hidden bg-gt-purple-dark min-h-[600px] lg:h-[700px]">
      
      {/* --- 1. Background Image Layer (Hero) --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Gradient Overlay using Brand Colors */}
            <div 
              className="absolute inset-0 z-10" 
              style={{
                background: 'linear-gradient(135deg, rgba(40, 20, 64, 0.75), rgba(79, 45, 127, 0.6), rgba(160, 93, 239, 0.45))'
              }}
            />
            
            <Image
              src={slide.desktopImage}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* --- 2. Main Content Layer --- */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end pb-12 md:pb-24 pt-32 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Static Headline */}
        <div className="mb-12 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Get the most from a<br />thriving market.
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-white/90">
            Go Beyond with Grant Thornton in Kuwait
          </h2>
        </div>

        {/* Text Carousel Area */}
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          
          {/* Active Slide Card */}
          <div className="relative overflow-hidden bg-white/10 backdrop-blur-md border-l-4 border-gt-purple p-6 md:p-8 rounded-r-lg">
             <div className="relative min-h-[140px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      index === activeIndex
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0 pointer-events-none'
                    }`}
                  >
                    <Link href={slide.link} className="group block h-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gt-purple-light transition-colors">
                        {slide.title}
                      </h3>
                      <div className="text-lg text-white/80 mb-6 font-light">
                        <p>{slide.subtitle}</p>
                      </div>
                      
                      <div className="flex items-center text-gt-purple-light font-semibold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Explore
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                ))}
             </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/10 hover:bg-gt-purple text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              aria-label="Previous Slide"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white/10 hover:bg-gt-purple text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
