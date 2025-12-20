'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

interface IndustryPageProps {
  title: string;
  tagline?: string;
  description: string;
  whyGrantThornton: {
    title: string;
    content: string;
  };
  readMore?: string;
  heroImage?: string;
}

export function IndustryPageTemplate({
  title,
  tagline,
  description,
  whyGrantThornton,
  readMore,
  heroImage = '/industries/default-hero.jpg',
}: IndustryPageProps) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label={`${title} industry page`}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="industry-title">
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
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
                    Industries
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page" className="text-white">{title}</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {tagline && (
                <span className="label-text text-[#CF2020] mb-2 block">{tagline}</span>
              )}
              <h1 id="industry-title" className="heading-xl md:heading-hero text-white mb-6">
                {title}
              </h1>
              <p className="body-lg text-white/80 max-w-3xl">
                {description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Grant Thornton Section */}
        <section className="py-16 md:py-24" aria-labelledby="why-gt-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 id="why-gt-heading" className="heading-lg text-[#4F2D7F] mb-6">
                    {whyGrantThornton.title}
                  </h2>
                  <div className="body-md text-gray-700 space-y-4">
                    <p>{whyGrantThornton.content}</p>
                  </div>

                  {/* Read More Expandable */}
                  {readMore && (
                    <div className="mt-6">
                      <button
                        onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                        className="flex items-center text-[#CF2020] font-medium hover:text-[#B01B1B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] rounded"
                        aria-expanded={isReadMoreOpen}
                      >
                        <span>Read more</span>
                        <ChevronDown 
                          className={`ml-2 h-4 w-4 transition-transform duration-300 ${isReadMoreOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isReadMoreOpen ? 'auto' : 0,
                          opacity: isReadMoreOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 body-md text-gray-700">
                          <p>{readMore}</p>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Hero Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4F2D7F]/20 to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="insights-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <h2 id="insights-heading" className="heading-lg text-[#4F2D7F] mb-6">
                Insights
              </h2>
              <p className="body-md text-gray-700 mb-8">
                Explore our latest thinking and research on this industry.
              </p>
              <Link
                href="https://www.grantthornton.global/en/insights/"
                className="inline-flex items-center text-[#CF2020] font-medium hover:text-[#B01B1B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] rounded"
              >
                View all insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 md:py-24" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal variant="scale">
              <div className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] rounded-2xl p-8 md:p-12 text-center">
                <h2 id="contact-heading" className="heading-lg text-white mb-4">
                  Contact - We&apos;re here to help
                </h2>
                <p className="body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Get in touch with our team to discuss how we can support your business in this industry.
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
