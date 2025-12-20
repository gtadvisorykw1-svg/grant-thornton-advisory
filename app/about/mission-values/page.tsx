'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Target, Lightbulb, Heart, Star, Users, Shield, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const whatMakesUsUnique = [
  {
    title: 'We Listen',
    description: 'Every engagement begins with understanding. We take the time to comprehend your unique challenges, aspirations, and business environment before proposing solutions.',
    icon: Heart,
  },
  {
    title: 'We Understand',
    description: "Our teams combine international expertise with deep local market knowledge, ensuring we grasp not just what you need, but why you need it.",
    icon: Lightbulb,
  },
  {
    title: 'We Create',
    description: 'Innovation drives our approach. We develop meaningful, functional solutions that address your specific needs rather than offering generic recommendations.',
    icon: Sparkles,
  },
  {
    title: 'We Implement',
    description: 'Our commitment extends beyond advice. We work closely with you to ensure successful implementation and measurable results.',
    icon: Target,
  },
];

const coreValues = [
  {
    title: 'Excellence',
    description: 'We adopt best-in-class international tools, methodologies, and independence standards across all our services.',
    icon: Star,
  },
  {
    title: 'Partnership',
    description: "We take a proactive interest in each client's success, treating your goals as our own.",
    icon: Users,
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of professional ethics and transparency in every engagement.',
    icon: Shield,
  },
  {
    title: 'Innovation',
    description: 'We combine innovative thinking with practical solutions to address complex business challenges.',
    icon: Lightbulb,
  },
  {
    title: 'Client Focus',
    description: 'Your success is our success. We measure our achievements by the results we deliver for you.',
    icon: UserCheck,
  },
];

export default function MissionValuesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label="Mission and values page">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="mission-title">
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
                <li aria-current="page" className="text-white">Our Mission & Values</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="label-text text-[#CF2020] mb-2 block">Our Mission & Values</span>
              <h1 id="mission-title" className="heading-xl md:heading-hero text-white mb-6">
                Empowering Your Vision, Delivering Your Success
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24" aria-labelledby="mission-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-[#F2F0EE] rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-[#CF2020]" />
                    <h2 id="mission-heading" className="heading-lg text-[#4F2D7F]">
                      Our Mission
                    </h2>
                  </div>
                  <p className="body-md text-gray-700">
                    To enhance our clients&apos; success and offer a distinct business advantage through innovative thinking, personalized service, and unwavering commitment to excellence.
                  </p>
                </div>
                <div className="bg-[#4F2D7F] rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="h-8 w-8 text-[#CF2020]" />
                    <h2 className="heading-lg text-white">
                      Our Purpose
                    </h2>
                  </div>
                  <p className="body-md text-white/90">
                    At Grant Thornton Kuwait, we exist to be the advisers of choice for businesses with global ambitions. We believe in empowering your thoughts and ideas and translating them into reality. We symbolize the &quot;power of all kinds&quot; that vests in our clients—thorough control over their businesses and the intent to fulfill the vision envisaged for their dreams.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What Makes Us Unique Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="unique-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <h2 id="unique-heading" className="heading-lg text-[#4F2D7F] mb-8 text-center">
                What Makes Us Unique
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {whatMakesUsUnique.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-xl p-6 h-full text-center card-hover">
                    <div className="w-16 h-16 bg-[#4F2D7F] rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="heading-md text-[#4F2D7F] mb-3">{item.title}</h3>
                    <p className="body-sm text-gray-600">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <h2 id="values-heading" className="heading-lg text-[#4F2D7F] mb-8 text-center">
                Our Core Values
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {coreValues.map((value, index) => (
                <StaggerItem key={index}>
                  <div className="border border-gray-200 rounded-xl p-6 h-full hover:border-[#4F2D7F] hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#CF2020] rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="heading-md text-[#4F2D7F]">{value.title}</h3>
                    </div>
                    <p className="body-md text-gray-600">{value.description}</p>
                  </div>
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
                  Experience our values in action
                </h2>
                <p className="body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Let us show you how our commitment to excellence can drive your business forward.
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
