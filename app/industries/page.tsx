'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { industriesData } from '@/lib/industries-data';

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label="Industries page">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="industries-title">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center text-sm text-white/70 gap-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded" aria-label="Home">
                    <Home className="h-4 w-4" />
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page" className="text-white">Industries</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="label-text text-[#CF2020] mb-2 block">Our Expertise</span>
              <h1 id="industries-title" className="heading-xl md:heading-hero text-white mb-6">
                Industries
              </h1>
              <p className="body-lg text-white/80 max-w-3xl">
                We bring deep industry knowledge and sector-specific expertise to help businesses navigate challenges and seize opportunities across diverse markets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 md:py-24" aria-labelledby="industries-grid-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <h2 id="industries-grid-heading" className="heading-lg text-[#4F2D7F] mb-8">
                Explore Our Industries
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {industriesData.map((industry) => (
                <StaggerItem key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group block bg-white border border-gray-200 rounded-lg p-6 h-full card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] focus-visible:ring-offset-2"
                  >
                    <div className="flex flex-col h-full">
                      {industry.tagline && (
                        <span className="label-text text-[#CF2020] mb-2">{industry.tagline}</span>
                      )}
                      <h3 className="heading-md text-[#4F2D7F] mb-3 group-hover:text-[#281440] transition-colors">
                        {industry.title}
                      </h3>
                      <p className="body-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                        {industry.description}
                      </p>
                      <div className="flex items-center text-[#CF2020] font-medium text-sm group-hover:text-[#B01B1B] transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal variant="scale">
              <div className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] rounded-2xl p-8 md:p-12 text-center">
                <h2 id="cta-heading" className="heading-lg text-white mb-4">
                  Need industry-specific expertise?
                </h2>
                <p className="body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Our sector specialists are ready to help you navigate your industry&apos;s unique challenges.
                </p>
                <Link
                  href="/advisory/contact"
                  className="inline-flex items-center px-8 py-3 bg-[#CF2020] text-white font-medium rounded btn-hover-lift hover:bg-[#B01B1B] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F]"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
