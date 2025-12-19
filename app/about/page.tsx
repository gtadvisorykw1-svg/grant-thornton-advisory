'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, CheckCircle, Globe, Users, Building2, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const stats = [
  { label: 'Global accounting firms recognized by Wall Street', value: '1 of 6' },
  { label: 'Ranked globally for advisory revenues', value: '5th' },
  { label: 'Forbes Global 100 companies served', value: '64%' },
  { label: 'Partners worldwide', value: '2,600+' },
  { label: 'Professionals globally', value: '40,000+' },
  { label: 'Countries with presence', value: '135+' },
  { label: 'Offices worldwide', value: '700+' },
  { label: 'Direct access across GCC region', value: '✓' },
];

const services = [
  'Internal Audit & Control Reviews',
  'Corporate Governance',
  'Fraud & Forensics',
  'Enterprise Risk Management',
  'Human Capital Advisory',
  'IT Advisory',
  'Valuations & Mergers and Acquisitions',
  'Due Diligence',
  'Feasibility Studies',
  'Business Strategy',
  'Project Finance',
  'Shariah Compliant Investment Advisory',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label="About us page">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="about-title">
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
                  <Link href="/about" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
                    About us
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page" className="text-white">Who we are</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="label-text text-[#CF2020] mb-2 block">Who We Are</span>
              <h1 id="about-title" className="heading-xl md:heading-hero text-white mb-6">
                A Trusted Partner for Business Excellence
              </h1>
              <p className="body-lg text-white/80 max-w-3xl">
                Grant Thornton Advisory Services Al-Aiban & Al-Qatami Co. stands as one of Kuwait&apos;s premier advisory firms, delivering world-class financial, business risk, and administration solutions to organizations seeking sustainable growth and operational excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Strength Section */}
        <section className="py-16 md:py-24" aria-labelledby="global-strength-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-8 w-8 text-[#4F2D7F]" />
                    <h2 id="global-strength-heading" className="heading-lg text-[#4F2D7F]">
                      Our Global Strength
                    </h2>
                  </div>
                  <p className="body-md text-gray-700 mb-6">
                    As a proud member of Grant Thornton International, we bring the power of a global network directly to Kuwait. Our affiliation enables us to draw upon the expertise and resources of one of the world&apos;s leading organizations of independently owned and managed accounting and consulting firms.
                  </p>
                </div>
                <div className="bg-[#F2F0EE] rounded-2xl p-8">
                  <h3 className="heading-md text-[#4F2D7F] mb-6">By the Numbers</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg">
                        <div className="heading-md text-[#CF2020] mb-1">{stat.value}</div>
                        <div className="body-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="difference-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-[#4F2D7F]" />
                  <h2 id="difference-heading" className="heading-lg text-[#4F2D7F]">
                    What Sets Us Apart
                  </h2>
                </div>
                <p className="body-md text-gray-700">
                  We specialize in providing advisory services to growth-oriented entrepreneurial companies, adopting best-in-class international tools, methodologies, and risk management standards. Our approach combines global expertise with deep local knowledge, ensuring our clients receive solutions tailored to the unique dynamics of the Kuwaiti and regional markets.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Service Portfolio Section */}
        <section className="py-16 md:py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="h-8 w-8 text-[#4F2D7F]" />
                <h2 id="services-heading" className="heading-lg text-[#4F2D7F]">
                  Our Service Portfolio
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.05}>
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#4F2D7F] hover:shadow-md transition-all">
                    <CheckCircle className="h-5 w-5 text-[#CF2020] mt-0.5 shrink-0" />
                    <span className="body-md text-gray-700">{service}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal>
              <div className="mt-8 text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center text-[#CF2020] font-medium hover:text-[#B01B1B] transition-colors"
                >
                  View all services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal variant="scale">
              <div className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] rounded-2xl p-8 md:p-12 text-center">
                <h2 id="cta-heading" className="heading-lg text-white mb-4">
                  Ready to partner with us?
                </h2>
                <p className="body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Connect with our team to discover how Grant Thornton can help your organization achieve its goals.
                </p>
                <Link
                  href="/contact"
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
