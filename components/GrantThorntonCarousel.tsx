'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Glide from '@glidejs/glide';

// --- Types ---
interface CarouselItem {
  id: string;
  index: number;
  title: string;
  description: string;
  link: string;
  bgDesktop: string;
  bgMobile: string;
  headline: string;
  subHeadline: string;
}

// --- Data extracted from your file ---
const slides: CarouselItem[] = [
  {
    id: 'go-beyond',
    index: 0,
    title: 'Go Beyond',
    description: 'Empowering the mid-market',
    link: '/about/',
    bgDesktop: '/carousl-images/Slide1.png',
    bgMobile: '/carousl-images/Slide1.png',
    headline: 'Get the most from a thriving market.',
    subHeadline: 'Go Beyond with Grant Thornton in Kuwait',
  },
  {
    id: 'leaders',
    index: 1,
    title: 'Access to senior leaders',
    description: 'Supporting you to thrive.',
    link: '/meet-our-people/',
    bgDesktop: '/carousl-images/Slide2.png',
    bgMobile: '/carousl-images/Slide2.png',
    headline: 'Leading with Purpose and Insight.',
    subHeadline: 'Meet our world-class leadership team',
  },
  {
    id: 'advisory',
    index: 2,
    title: 'Navigate complex challenges',
    description: 'Go beyond with our advisory insights.',
    link: '/service/advisory/',
    bgDesktop: '/carousl-images/Slide3.png',
    bgMobile: '/carousl-images/Slide3.png',
    headline: 'Navigate complexity with confidence.',
    subHeadline: 'Explore our comprehensive advisory services',
  },
];

export const GrantThorntonCarousel = () => {
  const glideRef = useRef<HTMLDivElement>(null);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (glideRef.current) {
      // Initialize Glide.js carousel
      glideInstance.current = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 1,
        autoplay: 5000,
        animationDuration: 800,
        rewind: true,
        gap: 0,
        hoverpause: true,
        keyboard: true,
        swipeThreshold: 60,
        dragThreshold: 100,
      });

      glideInstance.current.mount();
    }

    // Cleanup function
    return () => {
      if (glideInstance.current) {
        glideInstance.current.destroy();
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    if (glideInstance.current) {
      glideInstance.current.go(`=${index}`);
    }
  };

  return (
    <div className="homepagecolumnsliderblock relative w-full bg-[#1a1a1a] overflow-hidden">
      {/* Glide.js carousel wrapper */}
      <div ref={glideRef} className="glide">
        {/* 1. HERO BACKGROUND SECTION (.columns-carousel__hero) */}
        <div className="columns-carousel__hero relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[700px]">
          <div className="glide__track h-full" data-glide-el="track">
            <ul className="glide__slides !h-full">
              {slides.map((slide, idx) => (
                <li key={slide.id} className="glide__slide hero-item relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[700px]">
                  {/* Dark Overlay - Reduced opacity for better clarity */}
                  <div className="absolute inset-0 bg-black/20 z-10" />

                  <Image
                    src={slide.bgDesktop}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    quality={90}
                    sizes="100vw"
                    unoptimized
                  />

                  {/* Dynamic Headline Section - Positioned and synchronized with the image */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end pb-48 sm:pb-56 md:pb-72 lg:pb-80 pointer-events-none">
                    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-[1440px]">
                      <div className="headline-carousel mb-8 md:mb-12 transition-all duration-700 delay-300 opacity-100 translate-y-0 pointer-events-auto">
                        <h1 className="gt-hero-title heavy text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-4 leading-tight max-w-3xl">
                          {slide.headline}
                        </h1>
                        <h2 className="gt-small-title heavy text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gt-purple bg-white/95 inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-sm shadow-lg">
                          {slide.subHeadline}
                        </h2>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Arrows - Absolute Positioned on Sides */}
          <div className="glide__arrows absolute inset-0 z-40 pointer-events-none flex items-center justify-between px-2 sm:px-4 md:px-8 pb-24 sm:pb-28 md:pb-32" data-glide-el="controls">
            <button
              data-glide-dir="<"
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gt-purple/80 hover:bg-gt-purple text-white transition-all duration-500 backdrop-blur-sm shadow-lg group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:-translate-x-0.5 transition-transform duration-500" />
            </button>
            <button
              data-glide-dir=">"
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gt-purple/80 hover:bg-gt-purple text-white transition-all duration-500 backdrop-blur-sm shadow-lg group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. CARD OVERLAY (.columns-carousel__main) */}
      <div
        className="columns-carousel__main absolute inset-0 z-30 flex flex-col justify-end pointer-events-none"
        role="region"
        aria-label="carousel"
      >
        <div className="container mx-auto px-0 sm:px-4 md:px-12 max-w-[1440px]">
          {/* SLIDER CARDS STRIP - Bottom aligned row */}
          <div className="main-carousel absolute bottom-0 left-0 right-0 w-full z-30">
            {/* CARD TRACK - Full width flex row, stacked on mobile */}
            <div className="w-full">
              <div className="flex flex-col sm:flex-row w-full items-stretch">
                {slides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className="flex-1 min-w-0"
                  >
                    <button
                      onClick={() => goToSlide(idx)}
                      className="block w-full h-full group text-left transition-all duration-500 relative overflow-hidden outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 bg-black/40 hover:bg-black/60 backdrop-blur-sm"
                      aria-current="false"
                    >
                      {/* Active Border Indicator (Left side for active) */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white hidden" />

                      {/* Vertical Divider (Right side) - except last item, hidden on mobile */}
                      {idx < slides.length - 1 && (
                        <div className="absolute right-0 top-6 bottom-6 w-[1px] bg-white/20 hidden sm:block" />
                      )}
                      
                      {/* Horizontal Divider for mobile - except last item */}
                      {idx < slides.length - 1 && (
                        <div className="absolute left-6 right-6 bottom-0 h-[1px] bg-white/20 sm:hidden" />
                      )}

                      <div className="p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-row sm:flex-col justify-between items-center sm:items-start min-h-[80px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] gap-3 sm:gap-0">
                        <div className="space-y-1 sm:space-y-3 flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white/90 group-hover:text-white line-clamp-1 sm:line-clamp-none">
                            {slide.title}
                          </h3>
                          <div className="text-xs sm:text-sm md:text-base font-medium text-gray-300 hidden sm:block">
                            <p className="line-clamp-2">{slide.description}</p>
                          </div>
                        </div>

                        {/* Arrow Icon */}
                        <div className="flex justify-end sm:mt-4 transition-transform duration-500 translate-x-0 group-hover:translate-x-2 shrink-0">
                          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/30 text-white group-hover:border-white transition-all duration-500">
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-500" />
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
