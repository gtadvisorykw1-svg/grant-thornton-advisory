'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Types ---
interface SlideData {
  id: string;
  title: string;
  description: string;
  link: string;
  bgDesktop: string;
  bgMobile: string;
  index: number; // Matches data-index from your HTML
}

// --- Data extracted from paste.txt lines 14-49 and 72-159 ---
const heroSlides: SlideData[] = [
  {
    id: 'go-beyond',
    index: 0,
    title: 'Go Beyond',
    description: 'Empowering the mid-market',
    link: '/about/',
    bgDesktop: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    bgMobile: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
  {
    id: 'leaders',
    index: 1,
    title: 'Access to senior leaders',
    description: 'Supporting you to thrive.',
    link: '/meet-our-people/',
    bgDesktop: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
    bgMobile: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  },
  {
    id: 'advisory',
    index: 2,
    title: 'Navigate complex challenges',
    description: 'Go beyond with our advisory insights.',
    link: '/service/advisory/',
    bgDesktop: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    bgMobile: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  }
];

export const GTHeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 600); // Match CSS transition duration
  }, [isTransitioning]);

  const handlePrev = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  // Auto-rotate logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    // Wrapper .homepagecolumnsliderblock
    <div className="relative w-full overflow-hidden bg-gt-purple-dark">
      
      {/* 1. HERO BACKGROUNDS (.columns-carousel__hero) */}
      <div className="relative h-[600px] lg:h-[700px] w-full">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-item absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark overlay for text contrast - Brand Aligned Gradient */}
            <div 
              className="absolute inset-0 z-10" 
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(40, 20, 64, 0.5) 40%, transparent 100%)'
              }}
            />
            
            <picture>
              <source media="(min-width: 961px)" srcSet={slide.bgDesktop} />
              <source media="(max-width: 960px)" srcSet={slide.bgMobile} />
              <img
                src={slide.bgDesktop}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* 2. FOREGROUND CONTENT (.columns-carousel__main) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          
          {/* Headline (.headline-carousel) */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get the most from <br /> a thriving market.
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-gt-purple bg-white inline-block px-6 py-3 shadow-lg">
              Go Beyond with Grant Thornton in Kuwait
            </h2>
          </div>

          {/* Slider Track (.glide__track) */}
          <div className="relative w-full md:w-[450px]">
            {/* Window for the slides */}
            <div className="overflow-hidden relative h-[240px]">
              <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className="w-full flex-shrink-0 px-[1px]" // .glide__slide margin logic
                  >
                    <a
                      href={slide.link}
                      className="block h-full group focus:outline-none"
                    >
                      {/* .column-slider-item */}
                      <div className="h-full bg-gt-purple/90 backdrop-blur-md border-l-4 border-gt-purple-light p-8 flex flex-col justify-between hover:bg-gt-purple transition-colors">
                        
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-white group-hover:text-gt-purple-light transition-colors">
                            {slide.title}
                          </h3>
                          <p className="text-lg text-white/90 font-medium">
                            {slide.description}
                          </p>
                        </div>

                        {/* CTA Arrow (.column-anchor) */}
                        <div className="flex justify-end">
                          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gt-purple-light text-white group-hover:bg-white group-hover:text-gt-purple group-hover:scale-110 transition-all shadow-lg">
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                        
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Navigation (.glide-custom-control) */}
            <div className="flex gap-2 mt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-gt-purple hover:border-gt-purple transition-all focus:ring-2 focus:ring-gt-purple-light"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-gt-purple hover:border-gt-purple transition-all focus:ring-2 focus:ring-gt-purple-light"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
