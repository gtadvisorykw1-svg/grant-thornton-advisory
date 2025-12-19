'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Home, 
  ChevronRight, 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Heart, 
  Lightbulb, 
  Target, 
  Shield, 
  Zap, 
  Award,
  MapPin,
  Clock,
  TrendingUp,
  BookOpen,
  Coffee,
  Plane,
  HandHeart,
  CheckCircle,
  Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { useState } from 'react';

// CLEARR Values
const clearrValues = [
  {
    letter: 'C',
    title: 'Collaboration',
    description: 'Ask for help, give help – we work well together.',
    icon: Users,
  },
  {
    letter: 'L',
    title: 'Leadership',
    description: 'Have courage and inspire others – we challenge each other to be the best we can be.',
    icon: Target,
  },
  {
    letter: 'E',
    title: 'Excellence',
    description: 'Find a better way every time – we never get complacent.',
    icon: Award,
  },
  {
    letter: 'A',
    title: 'Agility',
    description: 'Think broadly, act quickly – we thrive on change.',
    icon: Zap,
  },
  {
    letter: 'R',
    title: 'Responsibility',
    description: 'Use influence wisely – we own our actions.',
    icon: Shield,
  },
  {
    letter: 'R',
    title: 'Respect',
    description: 'Listen and understand, be forthright – we create honest relationships.',
    icon: Heart,
  },
];

// Career Tracks
const careerTracks = [
  {
    title: 'Students & Graduates',
    subtitle: 'Launch Your Career',
    description: 'Begin your professional journey with structured training, mentorship, and hands-on experience. Our graduate programs offer the foundation for a successful career in advisory services.',
    icon: GraduationCap,
    features: ['Professional qualification support', 'Mentorship programs', 'Rotational opportunities', 'International exposure'],
    href: '/careers/students',
    color: 'bg-[#4F2D7F]',
  },
  {
    title: 'Experienced Professionals',
    subtitle: 'Elevate Your Expertise',
    description: 'Take your career to the next level with challenging projects, leadership opportunities, and the chance to make a real impact with prestigious clients across Kuwait and the GCC.',
    icon: Briefcase,
    features: ['Partner-led client engagements', 'Leadership development', 'Specialist expertise growth', 'Cross-border projects'],
    href: '/careers/experienced',
    color: 'bg-[#CF2020]',
  },
  {
    title: 'Internships',
    subtitle: 'Explore & Discover',
    description: 'Get a taste of professional services through our internship programs. Gain real-world experience and explore different service areas to find your passion.',
    icon: BookOpen,
    features: ['Summer programs', 'Project-based learning', 'Networking opportunities', 'Potential full-time offers'],
    href: '/careers/internships',
    color: 'bg-[#00B4C8]',
  },
];

// Benefits
const benefits = [
  {
    title: 'Learning & Development',
    description: 'Continuous training and professional qualification support',
    icon: TrendingUp,
  },
  {
    title: 'Global Mobility',
    description: 'Opportunities for international assignments across 135+ countries',
    icon: Plane,
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and wellness programs',
    icon: Coffee,
  },
  {
    title: 'Community Impact',
    description: 'CSR initiatives and volunteering opportunities',
    icon: HandHeart,
  },
];

// Sample Job Openings
const jobOpenings = [
  {
    title: 'Senior Consultant - Internal Audit',
    department: 'Business Risk Services',
    location: 'Kuwait City',
    type: 'Full-time',
    posted: '2 days ago',
  },
  {
    title: 'Manager - Valuations',
    department: 'Transaction Advisory',
    location: 'Kuwait City',
    type: 'Full-time',
    posted: '5 days ago',
  },
  {
    title: 'Associate - Corporate Governance',
    department: 'Operational Advisory',
    location: 'Kuwait City',
    type: 'Full-time',
    posted: '1 week ago',
  },
  {
    title: 'IT Advisory Consultant',
    department: 'IT Advisory',
    location: 'Kuwait City',
    type: 'Full-time',
    posted: '1 week ago',
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Grant Thornton gave me the platform to grow from an associate to a senior manager. The mentorship and exposure to diverse projects accelerated my career beyond my expectations.",
    name: "Sarah Al-Khalid",
    role: "Senior Manager, Business Risk Services",
    years: "8 years at GT",
  },
  {
    quote: "What I love most is the collaborative culture. Despite being a global firm, we maintain close relationships where everyone's contribution is valued.",
    name: "Ahmed Hassan",
    role: "Manager, Transaction Advisory",
    years: "5 years at GT",
  },
  {
    quote: "The international opportunities have been incredible. I've worked on projects across the GCC, gaining experiences that would have taken decades elsewhere.",
    name: "Fatima Al-Rashid",
    role: "Associate Director, Valuations",
    years: "10 years at GT",
  },
];

export default function CareersPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label="Careers page">
        {/* Hero Section */}
        <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden" aria-labelledby="careers-title">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/career.jpg")',
            }}
          />
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(79, 45, 127, 0.9) 0%, rgba(40, 20, 64, 0.85) 100%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 h-full flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center text-sm text-white/70 gap-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded" aria-label="Home">
                    <Home className="h-4 w-4" />
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page" className="text-white">Careers</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <span className="label-text text-[#CF2020] mb-2 block">CAREERS</span>
              <h1 id="careers-title" className="heading-xl md:heading-hero text-white mb-6">
                Go Beyond in Your Career
              </h1>
              <p className="body-lg text-white/90 mb-8 max-w-2xl">
                Are you ready for a new challenge? Join our team of talented and committed professionals in Kuwait. At Grant Thornton, we help you make a difference every day while building a career that matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/careers/opportunities"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#CF2020] text-white font-medium rounded btn-hover-lift hover:bg-[#B01B1B] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F]"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
                <button
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Play className="mr-2 h-5 w-5" aria-hidden="true" />
                  Watch Our Story
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '135+', label: 'Countries' },
                { value: '73,000+', label: 'People Globally' },
                { value: '20+', label: 'Years in Kuwait' },
                { value: '100+', label: 'Local Professionals' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="heading-lg text-white mb-1">{stat.value}</div>
                  <div className="body-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The GT Difference - CLEARR Values */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="label-text text-[#CF2020] mb-2 block">THE GRANT THORNTON DIFFERENCE</span>
                <h2 id="values-heading" className="heading-xl text-[#4F2D7F] mb-4">
                  Our CLEARR Values
                </h2>
                <p className="body-lg text-gray-600 max-w-2xl mx-auto">
                  We pride ourselves on being a values-driven organisation. Our people are passionately committed to these six values that underpin our culture.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {clearrValues.map((value, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-xl p-6 h-full card-hover border border-transparent hover:border-[#4F2D7F]">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#4F2D7F] rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-2xl font-bold text-white">{value.letter}</span>
                      </div>
                      <div>
                        <h3 className="heading-md text-[#4F2D7F] mb-2">{value.title}</h3>
                        <p className="body-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Career Tracks */}
        <section className="py-16 md:py-24" aria-labelledby="tracks-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="label-text text-[#CF2020] mb-2 block">CAREER OPPORTUNITIES</span>
                <h2 id="tracks-heading" className="heading-xl text-[#4F2D7F] mb-4">
                  Find Your Path
                </h2>
                <p className="body-lg text-gray-600 max-w-2xl mx-auto">
                  Whether you&apos;re starting your career or looking to take the next step, we have opportunities for talented individuals at every stage.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {careerTracks.map((track, index) => (
                <StaggerItem key={index}>
                  <Link href={track.href} className="block h-full group">
                    <div className="bg-white rounded-2xl overflow-hidden h-full border border-gray-200 hover:border-[#4F2D7F] hover:shadow-xl transition-all duration-300">
                      <div className={`${track.color} p-6 text-white`}>
                        <track.icon className="h-12 w-12 mb-4" />
                        <p className="label-text text-white/80 mb-1">{track.subtitle}</p>
                        <h3 className="heading-md text-white">{track.title}</h3>
                      </div>
                      <div className="p-6">
                        <p className="body-md text-gray-600 mb-6">{track.description}</p>
                        <ul className="space-y-2 mb-6">
                          {track.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-[#CF2020]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-[#4F2D7F] font-medium group-hover:text-[#CF2020] transition-colors">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Life at Grant Thornton */}
        <section className="py-16 md:py-24" aria-labelledby="life-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="fadeRight">
                <div>
                  <span className="label-text text-[#CF2020] mb-2 block">LIFE AT GRANT THORNTON</span>
                  <h2 id="life-heading" className="heading-xl text-[#4F2D7F] mb-6">
                    More Than Just a Job
                  </h2>
                  <p className="body-lg text-gray-600 mb-8">
                    At Grant Thornton, we believe in creating an environment where you can thrive both professionally and personally. Our culture is built on collaboration, innovation, and a genuine commitment to your growth.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#F2F0EE] rounded-lg flex items-center justify-center shrink-0">
                          <benefit.icon className="h-5 w-5 text-[#4F2D7F]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#4F2D7F] mb-1">{benefit.title}</h3>
                          <p className="body-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeLeft">
                <div className="relative">
                  <div className="aspect-[4/3] bg-[#F2F0EE] rounded-2xl overflow-hidden">
                    <Image
                      src="/career.jpg"
                      alt="Life at Grant Thornton Kuwait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4F2D7F] rounded-2xl -z-10" />
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#CF2020] rounded-2xl -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="label-text text-[#CF2020] mb-2 block">OUR PEOPLE</span>
                <h2 id="testimonials-heading" className="heading-xl text-[#4F2D7F] mb-4">
                  Hear From Our Team
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-[#4F2D7F]/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="body-md text-gray-700 mb-6 flex-grow italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t border-gray-100 pt-6">
                      <p className="font-medium text-[#4F2D7F]">{testimonial.name}</p>
                      <p className="body-sm text-gray-600">{testimonial.role}</p>
                      <p className="body-sm text-[#CF2020]">{testimonial.years}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Global Network */}
        <section className="py-16 md:py-24" aria-labelledby="global-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] rounded-2xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="h-8 w-8 text-[#CF2020]" />
                      <h2 id="global-heading" className="heading-lg text-white">
                        Global Opportunities
                      </h2>
                    </div>
                    <p className="body-lg text-white/80 mb-6">
                      As part of Grant Thornton International, you have access to opportunities across 135+ countries. Our global mobility program enables talented individuals to gain international experience and accelerate their careers.
                    </p>
                    <a
                      href="https://www.grantthornton.global/en/careers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white font-medium hover:text-[#CF2020] transition-colors"
                    >
                      Explore global opportunities
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { region: 'Middle East', countries: '8 countries' },
                      { region: 'Europe', countries: '40+ countries' },
                      { region: 'Asia Pacific', countries: '25+ countries' },
                      { region: 'Americas', countries: '30+ countries' },
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <p className="font-medium text-white mb-1">{item.region}</p>
                        <p className="body-sm text-white/70">{item.countries}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal variant="scale">
              <div className="text-center">
                <h2 id="cta-heading" className="heading-xl text-[#4F2D7F] mb-4">
                  Ready to Go Beyond?
                </h2>
                <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Take the next step in your career journey. Browse our open positions or submit your CV for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/careers/opportunities"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#CF2020] text-white font-medium rounded btn-hover-lift hover:bg-[#B01B1B] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CF2020] focus-visible:ring-offset-2"
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/careers/apply"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#4F2D7F] text-white font-medium rounded btn-hover-lift hover:bg-[#281440] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] focus-visible:ring-offset-2"
                  >
                    Submit Your CV
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
                <p className="body-sm text-gray-500 mt-6">
                  Questions? Contact us at{' '}
                  <a href="mailto:careers@kw.gt.com" className="text-[#4F2D7F] hover:text-[#CF2020] underline">
                    careers@kw.gt.com
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#CF2020] transition-colors"
              aria-label="Close video"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://www.youtube.com/embed/--WxC5x5wDs?autoplay=1"
              title="Grant Thornton - Great Place to Work"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
