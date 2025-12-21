'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home, ChevronRight, ArrowRight } from 'lucide-react';

const operationalAdvisoryServices = [
  {
    title: 'Internal Audit',
    description: 'Co-sourced and outsourced internal audit services providing independent, objective support in the design, implementation and operating effectiveness of controls.',
    href: '/services/internal-audit',
    features: ['Co-sourced Internal Audit', 'Outsourced Internal Audit', 'Effectiveness Reviews', 'Charter Development'],
  },
  {
    title: 'Internal Control Review',
    description: 'Comprehensive review of board structure, compliance frameworks, and financial/operational control and reporting systems.',
    href: '/services/internal-control-review',
    features: ['Board Level Review', 'Execution Level Review', 'Compliance Framework', 'Reporting Systems'],
  },
  {
    title: 'Corporate Governance',
    description: 'Corporate governance services aligned with international standards and local benchmarks like CMA and CBK.',
    href: '/services/corporate-governance',
    features: ['Gap Analyses', 'Board Restructuring', 'Full Implementation', 'Regulatory Compliance'],
  },
  {
    title: 'Fraud & Forensics',
    description: 'Fraud prevention and response strategy development to protect sensitive assets and detect fraud at early stages.',
    href: '/services/fraud-forensics',
    features: ['Accounting Fraud', 'Data Fraud Investigation', 'Corruption Investigation', 'Prevention Strategy'],
  },
  {
    title: 'Enterprise Risk Management',
    description: 'Strategic approach to managing and optimizing risks, including CMA semi-annual reporting requirements.',
    href: '/services/risk-management',
    features: ['Risk Identification', 'Risk Management', 'Risk Control', 'Risk Reporting'],
  },
  {
    title: 'Human Capital Advisory',
    description: 'Establishing HR culture and values as the foundation of organizational success.',
    href: '/services/human-capital-advisory',
    features: ['HR Diagnostic Reviews', 'Organization Structure', 'Compensation Design', 'Performance Appraisal'],
  },
  {
    title: 'IT Advisory',
    description: 'Develop and implement IT best practices and techniques across assessment, due diligence, and strategy.',
    href: '/services/it-advisory',
    features: ['IT Assessment', 'IT Due Diligence', 'IT Strategy', 'SOC Reports'],
  },
  {
    title: 'Training & Development',
    description: 'Professional training programs through our affiliation with the Institute of Commercial Management, UK.',
    href: '/services/training',
    features: ['Corporate Training', 'In-House Training', 'Public Training', 'Certifications'],
  },
];

const transactionAdvisoryServices = [
  {
    title: 'Valuations',
    description: 'Viable solutions and advice based on real experience to help clients grow, build, and realize maximum value.',
    href: '/services/valuations',
    features: ['Commercial Valuations', 'Intangible Valuations', 'Litigation & Dispute', 'Restructuring'],
  },
  {
    title: 'Due Diligence',
    description: 'Integrated, one-stop solution to examine the fine print and uncover detailed answers to complex acquisition questions.',
    href: '/services/due-diligence',
    features: ['Vendor Due Diligence', 'Acquisition Due Diligence', 'Operational Due Diligence', 'Management Assessment'],
  },
  {
    title: 'Mergers & Acquisitions',
    description: 'Full M&A support from target research and identification through negotiation to smooth transaction completion.',
    href: '/services/mergers-acquisitions',
    features: ['Target Research', 'Negotiation Support', 'Sales Strategy', 'Documentation'],
  },
  {
    title: 'Feasibility Study',
    description: 'Comprehensive market research, project costing, and financial modeling including IRR, NPV, and sensitivity analysis.',
    href: '/services/feasibility-study',
    features: ['Market Research', 'Project Costing', 'Financial Modeling', 'Sensitivity Analysis'],
  },
  {
    title: 'Project Finance',
    description: 'Bid and procurement strategies, commercial management, and payment mechanism development.',
    href: '/services/project-finance',
    features: ['Negotiation Strategy', 'Tender Strategy', 'Bid Management', 'Payment Mechanisms'],
  },
  {
    title: 'Business Strategy',
    description: 'Strategic planning and execution support to achieve your business objectives effectively.',
    href: '/services/business-strategy',
    features: ['Strategic Planning', 'Budgeting & Forecasting', 'PMO Services', 'Financial Restatement'],
  },
  {
    title: 'Shariah Compliant Investment',
    description: 'Thorough evaluation ensuring investments comply with Shariah standards and guidelines.',
    href: '/services/shariah-compliant-investment',
    features: ['Shariah Screening', 'Debt-to-Equity Analysis', 'Riba Avoidance', 'Income Purification'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <div className="flex items-center text-sm text-white/70 gap-2">
                <Link href="/" className="hover:text-white transition-colors">
                  <Home className="h-4 w-4" />
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Services</span>
              </div>
            </nav>

            <h1 className="heading-xl md:heading-hero text-white mb-6">
              Our Services
            </h1>
            <p className="body-lg text-white/80 max-w-3xl">
              We deliver comprehensive advisory solutions to dynamic organizations navigating complexity and pursuing growth. Our approach centers on understanding your market—your industry landscape, current challenges, and emerging opportunities.
            </p>
          </div>
        </section>

        {/* Operational Advisory Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-12">
              <span className="label-text text-[#CF2020] mb-2 block">Service Line</span>
              <h2 className="heading-xl text-[#4F2D7F] mb-4">Operational Advisory</h2>
              <p className="body-lg text-gray-600 max-w-3xl">
                Our operational advisory supports your consistent growth by reaffirming client expectations and providing suitable solutions from a value-added management perspective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {operationalAdvisoryServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block p-8 rounded-3xl h-full card-hover bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] focus-visible:ring-offset-2 transition-all duration-500"
                >
                  <h3 className="mb-4">
                    <span className="text-2xl font-normal transition-colors duration-500 group-hover:text-[#CF2020] text-gt-purple">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-[#F2F0EE] text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-[#4F2D7F] group-hover:text-[#CF2020] transition-colors duration-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-500" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Transaction Advisory Section */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-12">
              <span className="label-text text-[#CF2020] mb-2 block">Service Line</span>
              <h2 className="heading-xl text-[#4F2D7F] mb-4">Transaction Advisory</h2>
              <p className="body-lg text-gray-600 max-w-3xl">
                Transaction services advises and supports clients involved in a transaction, be it a sale, an acquisition, the raising of external debt or private equity, or accessing global capital markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {transactionAdvisoryServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block p-8 rounded-3xl h-full card-hover bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] focus-visible:ring-offset-2 transition-all duration-500"
                >
                  <h3 className="mb-4">
                    <span className="text-2xl font-normal transition-colors duration-500 group-hover:text-[#CF2020] text-gt-purple">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-[#4F2D7F]/10 text-[#4F2D7F] px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-[#4F2D7F] group-hover:text-[#CF2020] transition-colors duration-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-500" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] rounded-2xl p-8 md:p-12 text-center">
              <h2 className="heading-lg text-white mb-4">
                Ready to unlock your organization&apos;s potential?
              </h2>
              <p className="body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Connect with our advisory team to start the conversation about how we can help you achieve your goals.
              </p>
              <Link
                href="/advisory/contact"
                className="inline-flex items-center px-8 py-3 bg-[#CF2020] text-white font-medium rounded hover:bg-[#B01B1B] transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
