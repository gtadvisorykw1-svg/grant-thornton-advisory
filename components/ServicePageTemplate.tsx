'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

interface ServiceFeature {
  title: string;
  description: string;
  items?: string[];
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbParent?: { label: string; href: string };
  features: ServiceFeature[];
  benefits?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  children?: ReactNode;
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  breadcrumbParent = { label: 'Services', href: '/services' },
  features,
  benefits,
  ctaTitle = "Ready to get started?",
  ctaDescription = "Connect with our team to discuss how we can help your organization.",
  children,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label={`${title} service page`}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="service-title">
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
                  <Link href={breadcrumbParent.href} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
                    {breadcrumbParent.label}
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
              <span className="label-text text-[#CF2020] mb-2 block">{subtitle}</span>
              <h1 id="service-title" className="heading-xl md:heading-hero text-white mb-6">
                {title}
              </h1>
              <p className="body-lg text-white/80 max-w-3xl">
                {description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="mb-12">
                <h2 id="features-heading" className="heading-lg text-[#4F2D7F] mb-4">Our Services Include</h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div
                    className="service-card bg-white border border-gray-200 rounded-lg p-6 h-full focus-within:ring-2 focus-within:ring-[#4F2D7F] focus-within:ring-offset-2"
                    tabIndex={0}
                    role="article"
                    aria-labelledby={`feature-${index}-title`}
                  >
                    <h3 id={`feature-${index}-title`} className="heading-md text-[#4F2D7F] mb-3">
                      {feature.title}
                    </h3>
                    <p className="body-md text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    {feature.items && (
                      <ul className="space-y-2" aria-label={`${feature.title} includes`}>
                        {feature.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-[#CF2020] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits Section */}
        {benefits && benefits.length > 0 && (
          <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="benefits-heading">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <ScrollReveal>
                <h2 id="benefits-heading" className="heading-lg text-[#4F2D7F] mb-8">Why Choose Us</h2>
              </ScrollReveal>
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 group">
                      <div className="w-8 h-8 bg-[#4F2D7F] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <p className="body-md text-gray-700">{benefit}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        )}

        {/* Custom Content */}
        {children}

        {/* CTA Section */}
        <section className="py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal variant="scale">
              <div className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] rounded-2xl p-8 md:p-12 text-center">
                <h2 id="cta-heading" className="heading-lg text-white mb-4">
                  {ctaTitle}
                </h2>
                <p className="body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  {ctaDescription}
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
