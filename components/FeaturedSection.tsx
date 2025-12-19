'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const articles = [
  {
    category: 'SPECIAL EDITION',
    title: 'Women in Business 2025',
    date: '06 Mar 2025',
    // Woman wearing hijab
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=85',
  },
  {
    category: 'TECHNICAL INSIGHTS',
    title: 'Get ready for IFRS 18',
    date: '01 Dec 2024',
    // Woman with curly hair and glasses in warm lighting
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=85',
  },
  {
    category: 'INSIGHTS',
    title: 'M&A in Kuwait: Key Considerations for Due Diligence and...',
    date: '03 Nov 2024',
    // Skyscrapers representing M&A
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=85',
  },
  {
    category: 'INSIGHTS',
    title: 'The journey to a sustainable future: Why the world needs a...',
    date: '25 Oct 2024',
    image: 'https://images.pexels.com/photos/13164870/pexels-photo-13164870.jpeg',
  },
];

export function FeaturedSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="heading-xl mb-12">Featured content</h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group h-full">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <p className="label-text text-gt-purple mb-2">{article.category}</p>
                    <h3 className="heading-sm mb-3 line-clamp-2">{article.title}</h3>
                    <p className="body-sm text-muted-foreground">{article.date}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
