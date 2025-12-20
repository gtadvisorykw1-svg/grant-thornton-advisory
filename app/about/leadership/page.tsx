'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronRight, ArrowRight, Quote, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const leaders = [
  {
    name: 'Abdullatif M. Al Aiban',
    title: 'Managing Partner',
    image: '/Aiban.png',
    bio: "As Managing Partner of Grant Thornton Advisory Services Al-Aiban & Al-Qatami Co., Abdullatif M. Al Aiban leads the firm's strategic direction and oversees the delivery of world-class advisory services to clients across Kuwait and the region.",
    description: "Under his leadership, the firm has established itself as one of Kuwait's leading advisory practices, known for combining innovative thinking with a distinctive personal touch. His vision centers on providing services and products that are truly unique—built on deep understanding of client needs and a proactive interest in their success.",
    quote: "We listen, obtain a thorough understanding of your needs and then work closely with you to provide meaningful and functional solutions. We take a proactive interest in each client's success.",
  },
  {
    name: 'Tarek Shashaah',
    title: 'Partner',
    image: '/Tarek.png',
    bio: 'Tarek Shashaah serves as Partner at Grant Thornton Kuwait, bringing extensive experience in advisory services to growth-oriented entrepreneurial companies. He plays a key role in ensuring the firm delivers best-in-class international tools, methodologies, and risk management standards across all engagements.',
    description: 'His approach to client service emphasizes empowerment and transformation—helping businesses gain thorough control over their operations while working toward their envisioned goals.',
    quote: "We believe in empowering your thoughts and ideas and translating them into reality. Grant Thornton Advisory Kuwait symbolizes the 'power of all kinds' that vests in our clients—thorough control over their businesses and the intent to fulfill the vision envisaged for their dreams.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label="Leadership page">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="leadership-title">
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
                <li aria-current="page" className="text-white">Our Leadership</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="label-text text-[#CF2020] mb-2 block">Our Leadership</span>
              <h1 id="leadership-title" className="heading-xl md:heading-hero text-white mb-6">
                Experienced Leaders, Trusted Advisors
              </h1>
              <p className="body-lg text-white/80 max-w-3xl">
                Our leadership team combines decades of professional experience with deep expertise in advisory services. They guide our firm with a commitment to excellence, integrity, and client success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leaders Section */}
        <section className="py-16 md:py-24" aria-labelledby="leaders-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 id="leaders-heading" className="sr-only">Our Leaders</h2>
            
            <div className="space-y-16">
              {leaders.map((leader, index) => (
                <ScrollReveal key={leader.name}>
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <span className="label-text text-[#CF2020] mb-2 block">{leader.title}</span>
                      <h3 className="heading-lg text-[#4F2D7F] mb-4">{leader.name}</h3>
                      
                      <div className="space-y-4 body-md text-gray-700">
                        <p>{leader.bio}</p>
                        <p>{leader.description}</p>
                      </div>

                      {/* Quote */}
                      <div className="mt-6 bg-[#F2F0EE] rounded-xl p-6 relative">
                        <Quote className="absolute top-4 left-4 h-8 w-8 text-[#4F2D7F]/20" />
                        <p className="body-md text-gray-700 italic pl-8">
                          &ldquo;{leader.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-[#4F2D7F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 id="team-heading" className="heading-lg text-[#4F2D7F] mb-4">
                  Our Team
                </h2>
                <p className="body-md text-gray-700">
                  Beyond our leadership, Grant Thornton Kuwait is powered by a team of dedicated professionals with expertise spanning internal audit, corporate governance, risk management, valuations, M&A, IT advisory, human capital, and more. Our people are our greatest asset, and their commitment to excellence defines who we are.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal variant="scale">
              <div className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] rounded-2xl p-8 md:p-12 text-center">
                <h2 id="cta-heading" className="heading-lg text-white mb-4">
                  Connect with our leadership
                </h2>
                <p className="body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Get in touch to discuss how our experienced team can support your business goals.
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
