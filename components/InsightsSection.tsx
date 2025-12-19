'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

const insights = [
  {
    id: 1,
    category: 'INTERNATIONAL BUSINESS',
    title: 'Thriving through disruption',
    date: '28 Oct 2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    href: 'https://www.grantthornton.global/en/insights/articles/thriving-through-disruption/',
    external: true,
  },
  {
    id: 2,
    category: 'SUSTAINABILITY',
    title: 'Scaling sustainability: How the mid-market is future proofing growth',
    date: '23 Sep 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop',
    href: 'https://www.grantthornton.global/en/insights/sustainability/',
    external: true,
  },
  {
    id: 3,
    category: 'DIVERSITY, EQUITY AND INCLUSION',
    title: 'Women in Business 2025',
    date: '03 Mar 2025',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
    href: 'https://www.grantthornton.global/en/insights/women-in-business/',
    external: true,
  },
];

export function InsightsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F2F0EE]" aria-labelledby="insights-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <h2
              id="insights-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Read the latest insights, news and more
            </h2>
            <p className="text-lg text-gray-600">
              Discover the latest insight from our international network, tailored for the Kuwait market
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
          {insights.map((insight) => (
            <StaggerItem key={insight.id}>
              <Link
                href={insight.href}
                target={insight.external ? '_blank' : undefined}
                rel={insight.external ? 'noopener noreferrer' : undefined}
                className="group block bg-white rounded-3xl overflow-hidden card-hover h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] focus-visible:ring-offset-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={insight.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col min-h-[200px]">
                  {/* Category */}
                  <span className="text-xs font-medium text-[#4F2D7F] uppercase tracking-wider mb-3">
                    {insight.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4F2D7F] transition-colors duration-500 leading-snug">
                    {insight.title}
                  </h3>

                  {/* Date */}
                  <p className="text-sm text-[#CF2020] mb-auto">{insight.date}</p>

                  {/* Icon */}
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#4F2D7F] text-[#4F2D7F] group-hover:bg-[#4F2D7F] group-hover:text-white transition-all duration-500">
                      <ExternalLink className="w-4 h-4 transition-all duration-500" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Button */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="text-center">
            <a
              href="https://www.grantthornton.global/en/insights/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#CF2020] text-white font-medium rounded hover:bg-[#B01B1B] transition-all duration-500 btn-hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CF2020] focus-visible:ring-offset-2"
            >
              View more on grantthornton.global
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
