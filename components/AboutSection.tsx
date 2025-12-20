'use client';

import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Advisory',
    text: 'We offer a comprehensive range of advisory services to help you create, transform and protect value.',
    href: '/services',
  },
  {
    title: 'Assurance',
    text: 'We have the scope, depth, and global reach to serve businesses who are positioned to thrive in Kuwait. Our team provide you with assurance services that deliver real value and…',
    href: '/services',
  },
  {
    title: 'Zakat and Tax',
    text: 'Our experienced tax team not only support core compliance but are at the leading edge of transformation and operational resilience in respect of the tax landscape across Kuwait',
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
              We are a different kind of accounting and advisory firm, ready to meet the very diverse demands of today&apos;s business in Kuwait. Delivering fresh perspectives, practical solutions, and consistent high quality.
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
