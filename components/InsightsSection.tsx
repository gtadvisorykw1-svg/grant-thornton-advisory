'use client';

import { ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { InsightCard } from './InsightCard';

const insights = [
  {
    id: 1,
    category: 'DIVERSITY, EQUITY AND INCLUSION',
    title: 'Women in Business 2025',
    description: '2025 marks the 21st year of monitoring and measuring the proportion of women occupying senior management roles around the world.',
    date: '03 Mar 2025',
    image: 'https://www.grantthornton.com.kw/globalassets/1.-member-firms/global/insights/women-in-business/2025/wib-2025-website-image_589px-x-658px.jpg',
    href: 'https://www.grantthornton.global/en/insights/women-in-business/women-in-business-2025/',
    external: true,
  },
  {
    id: 2,
    category: 'SUSTAINABILITY',
    title: 'The journey to a sustainable future',
    description: "Exploring the sustainability journey for the mid-market and what's driving these organisations to take action.",
    date: '25 Oct 2024',
    image: 'https://www.grantthornton.com.kw/globalassets/1.-member-firms/global/insights/sustainability/2024/journey-to-a-sustainable-future/sustainability-464x422.jpg',
    href: 'https://www.grantthornton.global/en/insights/sustainability/the-journey-to-a-sustainable-future/',
    external: true,
  },
  {
    id: 3,
    category: 'INTERNATIONAL BUSINESS',
    title: 'Mid-market businesses look past slowdown and plan for growth',
    description: 'Although there are signs of an improving global economic outlook, mid-market firms are under no illusions about the difficulties ahead.',
    date: '18 May 2023',
    image: 'https://www.grantthornton.com.kw/globalassets/1.-member-firms/global/insights/international-campaign/2023/international-business-hub-464x422.jpg',
    href: 'https://www.grantthornton.global/en/insights/international-business/mid-market-businesses-look-past-slowdown-and-plan-for-growth/',
    external: true,
  },
];

export function InsightsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F2F0EE]" aria-labelledby="insights-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-[#4F2D7F] text-sm font-medium uppercase tracking-wider">
              Our international network
            </span>
          </div>
          <div className="mb-12">
            <h2
              id="insights-heading"
              className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight"
            >
              Read the latest insights, news and more
            </h2>
            <p className="text-lg text-gray-600">
              Discover the latest insight from our international network
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
          {insights.map((insight) => (
            <StaggerItem key={insight.id}>
              <InsightCard
                category={insight.category}
                title={insight.title}
                description={insight.description}
                date={insight.date}
                image={insight.image}
                href={insight.href}
                external={insight.external}
              />
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
