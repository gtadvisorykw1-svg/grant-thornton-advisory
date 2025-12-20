'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const carouselData = [
  {
    id: 1,
    backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    cardTitle: 'Go Beyond',
    cardSubtitle: 'Empowering the mid-market',
  },
  {
    id: 2,
    backgroundImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
    cardTitle: 'Access to senior leaders',
    cardSubtitle: 'Direct engagement with experts',
  },
  {
    id: 3,
    backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    cardTitle: 'Navigate complex challenges',
    cardSubtitle: 'Advisory insights',
  },
  {
    id: 4,
    backgroundImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80',
    cardTitle: 'Global Scale',
    cardSubtitle: 'International reach',
  },
];

const slideTransition = {
  duration: 0.7,
  ease: [0.4, 0.0, 0.2, 1] as const,
};

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const totalSlides = carouselData.length;
  const visibleCards = 4;

  const getVisibleItems = useCallback(() => {
    const items = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % totalSlides;
      items.push({ ...carouselData[index], originalIndex: index });
    }
    return items;
  }, [currentIndex, totalSlides]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    pauseAutoPlay();
  }, [totalSlides, pauseAutoPlay]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    pauseAutoPlay();
  }, [totalSlides, pauseAutoPlay]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const currentSlide = carouselData[currentIndex];
  const visibleItems = getVisibleItems();

  return (
    <section className="relative h-[450px] sm:h-[550px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Layer 1: Background Image with slide animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          key={currentSlide.id}
          initial={{ x: direction > 0 ? '100%' : '-100%' }}
          animate={{ x: 0 }}
          transition={slideTransition}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.backgroundImage}
            alt={currentSlide.cardTitle}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(40, 20, 64, 0.75), rgba(79, 45, 127, 0.6), rgba(160, 93, 239, 0.45))',
          }}
        />
      </div>

      {/* Layer 2: Static Headline - Left aligned */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[88px] lg:leading-[88px] font-black mb-3 sm:mb-4">
              Get the most from a<br />thriving market.
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-[20px] lg:leading-[28px] font-light">
              Go Beyond with Grant Thornton in Kuwait
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Purple circles */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, var(--gt-purple-dark), var(--gt-purple))' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, var(--gt-purple-dark), var(--gt-purple))' }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
      </button>

      {/* Layer 3: Bottom Navigation Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <motion.div
          key={currentIndex}
          initial={{ x: direction > 0 ? '25%' : '-25%' }}
          animate={{ x: 0 }}
          transition={slideTransition}
          className="flex"
        >
          {visibleItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`relative flex-1 flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8 min-h-[90px] sm:min-h-[110px] lg:min-h-[140px] group cursor-pointer ${idx > 1 ? 'hidden md:flex' : 'flex'}`}
              style={{
                background:
                  'linear-gradient(90deg, var(--gt-purple-dark) 0%, var(--gt-purple) 50%, var(--gt-purple-light) 100%)',
              }}
            >
              {/* Vertical divider */}
              {idx < visibleCards - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/30" />
              )}

              {/* Card content */}
              <div className="space-y-1">
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {item.cardTitle}
                </h3>
                {/* Show subtitle only for first (active) card */}
                {idx === 0 && (
                  <p className="text-white/70 text-xs md:text-sm font-light">
                    {item.cardSubtitle}
                  </p>
                )}
                <ArrowRight className="w-4 h-4 text-white/80 mt-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
