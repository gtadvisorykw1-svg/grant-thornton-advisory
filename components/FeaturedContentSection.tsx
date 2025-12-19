'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselControls } from './CarouselControls';
import Image from 'next/image';
import { ScrollReveal } from './ui/ScrollReveal';

const articles = [
  {
    id: 1,
    category: 'Kuwait Edition',
    title: 'Women in Business 2025',
    description: "This year's report calls for a decisive shift in approach, aligning with the International Women's Day 2025 theme.",
    date: '06 Mar 2025',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=464&h=422&fit=crop',
    href: '#',
  },
  {
    id: 2,
    category: 'Technical Insights',
    title: 'Get ready for IFRS 18',
    description: 'In April 2024, the International Accounting Standards Board (IASB) introduced IFRS 18: Presentation and Disclosure in Financial Statements.',
    date: '04 Dec 2024',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=464&h=422&fit=crop',
    href: '#',
  },
  {
    id: 3,
    category: 'Blog',
    title: 'M&A in Kuwait: Key Considerations for Due Diligence',
    description: 'Kuwait continues to attract global investors with its robust Vision 2035 reforms, economic diversification.',
    date: '01 Nov 2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=464&h=422&fit=crop',
    href: '#',
  },
  {
    id: 4,
    category: 'Blog',
    title: 'The journey to a sustainable future',
    description: "When it comes to sustainable business, much is known and written about the world's largest corporations.",
    date: '28 Oct 2024',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=464&h=422&fit=crop',
    href: '#',
  },
  {
    id: 5,
    category: 'Unlocking Opportunities',
    title: 'India-Kuwait start-up ecosystem convergence',
    description: "The CII-Grant Thornton Bharat report serves as a comprehensive guide for start-up ecosystem convergence.",
    date: '01 Jan 2025',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=464&h=422&fit=crop',
    href: '#',
  },
  {
    id: 6,
    category: 'Blog',
    title: "Rising Importance of Cybersecurity in Kuwait's Digital Economy",
    description: 'As Kuwait accelerates its digital transformation under the ambitious Vision 2035 initiative.',
    date: '11 Oct 2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=464&h=422&fit=crop',
    href: '#',
  },
  {
    id: 7,
    category: "Tax Initiative",
    title: 'A brief overview',
    description: 'Kuwait is undergoing a significant digital transformation across various sectors.',
    date: '30 Dec 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=464&h=422&fit=crop',
    href: '#',
  },
];

export function FeaturedContentSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollSnaps = useMemo(() => {
    if (!emblaApi) {
      return [];
    }
    return emblaApi.scrollSnapList();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', handleSelect);
    handleSelect();
  }, [emblaApi]);

  return (
    <section
      className="py-24 pb-20 overflow-hidden bg-gt-gray-light"
      aria-labelledby="featured-content-heading"
    >
      {/* Header */}
      <div className="max-w-[1172px] mx-auto px-4 mb-16">
        <ScrollReveal>
          <h2 id="featured-content-heading" className="text-4xl lg:text-5xl font-extralight text-gray-900">
            Featured content
          </h2>
        </ScrollReveal>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex-none w-[calc(100%-32px)] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] xl:w-[380px] p-4"
              >
                <article
                  className="bg-white rounded-3xl overflow-hidden cursor-pointer h-[530px] flex flex-col relative group card-hover focus-within:ring-2 focus-within:ring-[#4F2D7F] focus-within:ring-offset-2"
                >
                  <div className="relative h-[47%] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col bg-white rounded-t-3xl -mt-6 relative z-10">
                    <div className="p-8 pt-10 flex-1">
                      <span className="text-sm text-gray-500 uppercase tracking-wider block mb-2">
                        {article.category}
                      </span>
                      <a
                        href={article.href}
                        className="text-2xl font-normal block transition-colors duration-300 hover:opacity-80 line-clamp-3 text-gt-purple"
                      >
                        {article.title}
                      </a>
                    </div>

                    {/* Date Footer */}
                    <div className="px-8 pb-8">
                      <span className="text-sm text-gray-500">
                        {article.date}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center mt-12 gap-8">
        {/* Custom Navigation Controls */}
        <CarouselControls 
          onPrev={scrollPrev} 
          onNext={scrollNext} 
          className="order-1" 
        />

        {/* Dots */}
        <div className="flex items-center gap-4 order-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'opacity-100'
                  : 'opacity-60'
              }`}
              style={{
                backgroundColor:
                  index === selectedIndex ? 'var(--gt-purple)' : 'var(--gt-purple-light)',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
