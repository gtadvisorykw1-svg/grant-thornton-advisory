'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SlideData {
  id: string;
  title: string;
  description: string;
  href: string;
  ariaLabel: string;
}

const slides: SlideData[] = [
  {
    id: 'go-beyond',
    title: 'Go Beyond',
    description: 'Empowering the mid-market',
    href: '/about/',
    ariaLabel: 'Go Beyond  Empowering the mid-market',
  },
  {
    id: 'access-leaders',
    title: 'Access to senior leaders',
    description: 'Supporting you to thrive.',
    href: '/meet-our-people/',
    ariaLabel: 'Access to senior leaders  Supporting you to thrive.',
  },
  {
    id: 'navigate-challenges',
    title: 'Navigate complex challenges',
    description: 'Go beyond with our advisory insights.',
    href: '/service/advisory/',
    ariaLabel: 'Navigate complex challenges  Go beyond with our advisory insights.',
  },
];

export const CarouselSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="w-full bg-gt-purple-dark">
      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        {/* Slides Track */}
        <div className="relative h-96 flex items-stretch">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Link
                href={slide.href}
                className="block w-full h-full group"
                role="button"
                aria-roledescription={`${index + 1} of ${slides.length}`}
                aria-label={slide.ariaLabel}
              >
                {/* Slide Content */}
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gt-purple to-gt-purple-dark hover:from-gt-purple-light hover:to-gt-purple transition-colors">
                  <div className="text-center space-y-4">
                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-white/90 font-medium">
                      {slide.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-8 right-8 transform group-hover:translate-x-2 transition-transform">
                    <ChevronRight className="w-8 h-8 text-white" strokeWidth={3} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-6 h-6 text-white rotate-180" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Indicators/Dots */}
      <div className="flex justify-center items-center gap-3 py-6 bg-gt-purple-dark">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-gt-purple-light'
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};
