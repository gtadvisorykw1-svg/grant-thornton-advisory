'use client';

import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Advisory',
    text: 'Our advisory services encompass due diligence, valuation, liquidation, forensics, and bookkeeping, ensuring informed financial decisions for your business.',
    href: '/advisory',
  },
  {
    title: 'Business Risk Services',
    text: 'We offer services such as internal audit, risk management, internal audit quality review, internal controls review, portfolio/AML reviews, and SOP development.',
    href: '/services',
  },
  {
    title: 'Tax',
    text: 'Enhance your Kuwait business with our comprehensive tax services, covering tax planning, corporate income tax compliance, and FATCA/CRS reporting.',
    href: '/services',
  },
];

export function AboutSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Block: Label & Headline - Grant Thornton Style */}
        <ScrollReveal variant="fadeUp">
          <div className="about-us__heading">
            <h2
              id="about-heading"
              className="text-2xl font-normal mb-6 block text-gt-purple"
            >
              About us
            </h2>
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-8 sm:mb-10 md:mb-14 text-gray-900"
              style={{ lineHeight: '1.17' }}
            >
              We are Grant Thornton. We go beyond business as usual, so you can too.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid - Grant Thornton Style */}
        <StaggerContainer className="relative -mx-4 mt-8">
          <div className="flex flex-wrap">
            {services.map((service) => (
              <StaggerItem
                key={service.title}
                className="w-full md:w-1/3 p-4"
              >
                <div className="py-8 h-full">
                  <Link
                    href={service.href}
                    className="block p-8 rounded-3xl h-full card-hover bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] focus-visible:ring-offset-2 transition-all duration-500"
                  >
                    <h3 className="mb-6">
                      <span className="text-2xl font-normal transition-colors duration-500 group-hover:text-[#CF2020] text-gt-purple">
                        {service.title}
                      </span>
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700 mb-6">
                      {service.text}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-[#4F2D7F] group-hover:text-[#CF2020] transition-colors duration-500">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-500" />
                    </span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
