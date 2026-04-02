'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function AdvisoryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Breadcrumb */}
                <nav className="py-4" aria-label="Breadcrumb">
                    <div className="flex items-center text-sm text-gray-600 gap-2">
                        <Link href="/" className="hover:text-gt-purple transition-colors">
                            <Home className="h-4 w-4" />
                        </Link>
                        <span className="text-gray-400">&gt;</span>
                        <Link href="/services" className="hover:text-gt-purple transition-colors">Services</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-gray-900">Advisory</span>
                    </div>
                </nav>

                {/* Hero Section - Pill shaped */}
                <section className="mb-16">
                    <div className="bg-gt-purple rounded-2xl py-16 md:py-24 px-8 md:px-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Advisory Services
                        </h1>
                    </div>
                </section>

                {/* Intro Content */}
                <section className="pb-12">
                    <p className="text-[#2B2A54] text-lg leading-relaxed">
                        We deliver comprehensive advisory solutions to dynamic organizations navigating complexity and pursuing growth. Our approach centers on understanding your market—your industry landscape, current challenges, and emerging opportunities. Through clear insights, practical solutions, and an unwavering commitment to excellence, we help you solve problems, manage risk, and seize opportunities that unlock your full potential.
                    </p>
                </section>

                {/* Why Partner With Us */}
                <section className="pb-12">
                    <h2>Why Partner With Us</h2>
                    
                    <div className="space-y-6 text-[#2B2A54] text-lg leading-relaxed">
                        <div>
                            <h3>Unmatched Quality, Proven Results</h3>
                            <p>With direct partner access and attention, we build deep relationships that sharpen our understanding of your industry and business. The result: clear communication, superior service, and outcomes that speak for themselves.</p>
                        </div>
                        
                        <div>
                            <h3>Full-Service Capabilities, Seamlessly Delivered</h3>
                            <p>We bring the breadth and depth of a global firm to address your most complex challenges—supporting you at every stage of growth with a comprehensive portfolio of advisory services.</p>
                        </div>
                        
                        <div>
                            <h3>Deep Specialization, Measurable Impact</h3>
                            <p>Our subject matter specialists understand your industry and the regulatory, operational, and market forces shaping it. Combined with rigorous business and financial acumen, we identify root causes and deliver solutions that produce measurable results.</p>
                        </div>
                        
                        <div>
                            <h3>Global Reach, Local Expertise</h3>
                            <p>Through Grant Thornton International Ltd member firms operating in more than 100 countries, you gain access to international insight without sacrificing intimate knowledge of local culture, laws, and regulatory requirements.</p>
                        </div>
                    </div>
                </section>

                {/* Our Advisory Services */}
                <section className="pb-12">
                    <h2>Our Advisory Services</h2>
                    
                    {/* Transaction Advisory */}
                    <div className="mb-10">
                        <h3>Transaction Advisory</h3>
                        
                        <div className="space-y-6 text-[#2B2A54] text-lg leading-relaxed">
                            <div>
                                <h4>Due Diligence</h4>
                                <p>Transaction success depends on more than numbers. We take a holistic approach to due diligence—covering financial, tax, IT, compliance, operations, and HR/culture dimensions. Our integrated, single-source process helps you examine the fine print, uncover critical details, and eliminate surprises, increasing your chances of transaction success.</p>
                            </div>
                            
                            <div>
                                <h4>Capital Markets</h4>
                                <p>When evaluating your portfolio and preparing for a potential transaction, turn to middle-market specialists who deliver insights to optimize your decisions and strategic direction. Our services include outsourced corporate development, business modeling, valuation, sell-side and buy-side investment banking and advisory, capital efficiency reviews, restructuring advisory, and IPO preparation.</p>
                            </div>
                            
                            <div>
                                <h4>Transaction Integration</h4>
                                <p>Successful integration requires a clear plan and experienced guidance. Our transaction integration professionals help you identify critical success factors and develop a roadmap that accelerates integration, increases the likelihood of success, and creates additional value.</p>
                            </div>
                            
                            <div>
                                <h4>M&amp;A Tax</h4>
                                <p>We provide tax structuring services to help you operate within a tax-efficient framework. From analyzing asset versus stock purchase structures to optimizing state and international tax considerations, our M&amp;A tax practitioners guide you through complex tax matters with clarity and precision.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Valuation Services */}
                    <div className="mb-10">
                        <h3>Valuation Services</h3>
                        <p className="text-[#2B2A54] text-lg leading-relaxed mb-6">
                            The ability to identify, understand, manage, and maximize organizational value is essential to sustainable growth. Whether you are buying or selling a business, navigating disputes, or meeting complex reporting and tax requirements, our specialists deliver the insight you need.
                        </p>
                        
                        <div className="space-y-6 text-[#2B2A54] text-lg leading-relaxed">
                            <div>
                                <h4>Bankruptcy</h4>
                                <p>High-quality, defensible valuation analyses for companies facing reorganization, liquidation, or emergence from bankruptcy—providing the foundation for sound decision-making.</p>
                            </div>
                            
                            <div>
                                <h4>Disputes</h4>
                                <p>Comprehensive financial consulting, litigation support, and expert testimony services. We assist with case assessment, expert report preparation, settlement negotiation, alternative dispute resolution, and gathering economic evidence for trial.</p>
                            </div>
                            
                            <div>
                                <h4>Financial Reporting</h4>
                                <p>A full range of fair value services designed to satisfy auditor and regulatory scrutiny. Our combined technical accounting and valuation expertise enhances the transparency, timeliness, and accuracy of your financial reporting.</p>
                            </div>
                            
                            <div>
                                <h4>Intellectual Property</h4>
                                <p>A proven approach to creating, protecting, and maximizing the value of intellectual assets. Our services include value extraction, license and royalty compliance testing, damages calculation, M&amp;A evaluation, and expert testimony in federal and state courts.</p>
                            </div>
                            
                            <div>
                                <h4>Tax Advisory</h4>
                                <p>Robust asset valuations that support tax disputes, transactions, and planning strategies. Our comprehensive approach—spanning a company&apos;s entire capital structure—meets regulatory guidelines and strengthens your tax position.</p>
                            </div>
                            
                            <div>
                                <h4>Transactional Analysis</h4>
                                <p>Integrated services addressing complex financial instruments and asset allocations. We support clients from the early stages of a transaction through ongoing impairment testing—across M&amp;A, distributions, liquidations, reorganizations, spinoffs, and taxable sales of stock or assets.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pb-16">
                    <p className="text-[#2B2A54] text-lg leading-relaxed mb-8">
                        Ready to unlock your organization&apos;s potential? Connect with our advisory team to start the conversation.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="pb-16">
                    <div className="bg-gt-purple rounded-2xl p-8 md:p-12">
                        <h2 className="!text-white !text-2xl md:!text-3xl">
                            Contact
                        </h2>
                        <p className="text-white/80 mb-6">Get in touch</p>
                        <button className="px-6 py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-gt-purple transition-all">
                            Contact us
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
