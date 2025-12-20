'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home, ArrowRight, CheckCircle } from 'lucide-react';
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

      <main className="max-w-6xl mx-auto px-4 md:px-8" role="main" aria-label={`${title} service page`}>
        {/* Breadcrumb */}
        <nav className="py-4" aria-label="Breadcrumb">
          <ol className="flex items-center text-sm text-gray-600 gap-2">
            <li>
              <Link href="/" className="hover:text-[#4F2D7F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] rounded" aria-label="Home">
                <Home className="h-4 w-4" />
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">&gt;</li>
            <li>
              <Link href={breadcrumbParent.href} className="hover:text-[#4F2D7F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] rounded px-1">
                {breadcrumbParent.label}
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">&gt;</li>
            <li aria-current="page" className="text-gray-900">{title}</li>
          </ol>
        </nav>

        {/* Hero Section - Pill shaped */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gt-purple rounded-2xl py-16 md:py-24 px-8 md:px-12"
          >
            <span className="text-[#CF2020] text-sm font-medium mb-2 block">{subtitle}</span>
            <h1 id="service-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg text-white/80 max-w-3xl">
              {description}
            </p>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="pb-12" aria-labelledby="features-heading">
          <ScrollReveal>
            <div className="mb-8">
              <h2 id="features-heading" className="text-2xl font-bold text-[#4F2D7F] mb-4">Our Services Include</h2>
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
                  <h3 id={`feature-${index}-title`} className="text-xl font-bold text-[#4F2D7F] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
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
        </section>

        {/* Benefits Section */}
        {benefits && benefits.length > 0 && (
          <section className="pb-12" aria-labelledby="benefits-heading">
            <ScrollReveal>
              <h2 id="benefits-heading" className="text-2xl font-bold text-[#4F2D7F] mb-8">Why Choose Us</h2>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 bg-[#4F2D7F] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        )}

        {/* Custom Content */}
        {children}

        {/* CTA Section */}
        <section className="pb-16" aria-labelledby="cta-heading">
          <ScrollReveal variant="scale">
            <div className="bg-gt-purple rounded-2xl p-8 md:p-12">
              <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
                {ctaTitle}
              </h2>
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                {ctaDescription}
              </p>
              <Link
                href="/advisory/contact"
                className="inline-flex items-center px-6 py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-gt-purple transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F]"
              >
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
