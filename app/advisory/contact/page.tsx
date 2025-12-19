'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import {
  Home,
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  Building,
  Briefcase,
  ArrowRight,
  Send,
  FileText,
  TrendingUp,
  Shield
} from 'lucide-react';

interface FormData {
  advisoryService: string;
  title: string;
  firstName: string;
  surname: string;
  companyName: string;
  industry: string;
  email: string;
  phone: string;
  preferredContact: string;
  message: string;
  privacyPolicy: boolean;
  receiveUpdates: boolean;
}

const advisoryServices = [
  'Select a service area',
  'Transaction Advisory',
  'Business Risk Services',
  'Internal Audit & Risk Management',
  'Forensic & Investigation Services',
  'Valuations & Business Modelling',
  'Restructuring & Recovery',
  'Strategy & Operations Consulting',
  'IT Advisory & Digital Transformation',
  'Due Diligence Services',
  'General Advisory Enquiry'
];

const industries = [
  'Select your industry (optional)',
  'Energy & Resources',
  'Financial Services',
  'Food & Beverage',
  'Hospitality & Tourism',
  'Real Estate & Construction',
  'Technology',
  'Public Sector',
  'Not for Profit',
  'Healthcare',
  'Manufacturing',
  'Retail & Consumer',
  'Other'
];

const titles = ['Mr', 'Ms', 'Miss', 'Mrs', 'Dr'];

export default function ContactAdvisoryPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    advisoryService: '',
    title: '',
    firstName: '',
    surname: '',
    companyName: '',
    industry: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    message: '',
    privacyPolicy: false,
    receiveUpdates: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  // Ensure client-side only rendering for interactive elements
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.advisoryService || formData.advisoryService === 'Select a service area') {
      newErrors.advisoryService = 'Please select a service area';
    }

    if (!formData.title) {
      newErrors.title = 'Please select a title';
    }

    if (!formData.firstName || formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.surname || formData.surname.length < 2) {
      newErrors.surname = 'Surname must be at least 2 characters';
    }

    if (!formData.companyName || formData.companyName.length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = 'You must accept the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const refNum = `ADV-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceNumber(refNum);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main role="main">
          <div className="min-h-screen bg-gradient-to-br from-[#4f2d7f] to-[#2b144d] flex items-center justify-center px-4 py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded p-12 max-w-2xl w-full text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>

              <h1 style={{ fontSize: '3.4rem', lineHeight: '1.2', marginBottom: '2.4rem' }} className="font-normal text-[#4f2d7f]">
                Thank you for contacting us!
              </h1>

              <p style={{ fontSize: '2rem', lineHeight: '2' }} className="text-gray-600 mb-8">
                Your enquiry has been received by our Advisory team. We will respond within 1-2 business days.
              </p>

              <div className="bg-[#f2f1ef] border border-gray-200 p-8 mb-8">
                <p style={{ fontSize: '1.4rem', letterSpacing: '0.2em' }} className="text-gray-500 mb-3 uppercase">
                  Reference Number
                </p>
                <p className="text-xl text-[#4f2d7f] font-mono font-semibold">
                  {referenceNumber}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p style={{ fontSize: '1.6rem', lineHeight: '1.5' }} className="text-gray-600 mb-6">
                  For urgent matters, please contact us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+96522443900,263"
                    style={{ fontSize: '1.6rem', lineHeight: '2.2rem' }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4f2d7f] text-white hover:bg-[#ce2c2c] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/96541021616"
                    style={{ fontSize: '1.6rem', lineHeight: '2.2rem' }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    advisoryService: '',
                    title: '',
                    firstName: '',
                    surname: '',
                    companyName: '',
                    industry: '',
                    email: '',
                    phone: '',
                    preferredContact: 'email',
                    message: '',
                    privacyPolicy: false,
                    receiveUpdates: false
                  });
                }}
                style={{ fontSize: '1.6rem', lineHeight: '2.2rem' }}
                className="mt-8 px-8 py-4 border-2 border-[#4f2d7f] text-[#4f2d7f] hover:bg-[#4f2d7f] hover:text-white transition-all duration-300"
              >
                Submit Another Enquiry
              </button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main role="main" className="bg-[#f2f1ef]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4f2d7f] to-[#2b144d] text-white" style={{ paddingTop: '6.4rem', paddingBottom: '6.4rem' }}>
          <div className="container mx-auto" style={{ maxWidth: '1172px', paddingLeft: '1.6rem', paddingRight: '1.6rem' }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6 text-white/80 text-xs tracking-wider" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white transition-colors flex items-center gap-2 uppercase">
                <Home className="w-4 h-4" />
                Home
              </a>
              <ChevronRight className="w-4 h-4" />
              <a href="/services" className="hover:text-white transition-colors uppercase">Services</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/advisory" className="hover:text-white transition-colors uppercase">Advisory</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white uppercase">Contact Us</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-normal mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
                Contact Our Advisory Team
              </h1>
              <p className="font-semibold text-lg md:text-xl max-w-3xl">
                Get in touch with our Advisory specialists to discuss how we can help your
                business navigate challenges, manage risk, and unlock growth opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Connect Buttons - Mobile */}
        <section className="bg-white border-b border-gray-200 md:hidden sticky top-20 z-30 shadow-sm" style={{ padding: '1.6rem 0' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-2">
              <a
                href="tel:+96522443900,263"
                className="flex flex-col items-center justify-center gap-1 p-2 bg-[#4f2d7f]/10 hover:bg-[#4f2d7f]/20 transition-colors"
              >
                <Phone className="w-6 h-6 text-[#4f2d7f] text-xl" />
                <span className="text-xs text-[#4f2d7f] font-medium" style={{ fontSize: '1.2rem' }}>Call</span>
              </a>
              <a
                href="https://wa.me/96541021616?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Grant%20Thornton%20Advisory%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 p-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366] text-xl" />
                <span className="text-xs text-[#25D366] font-medium" style={{ fontSize: '1.2rem' }}>WhatsApp</span>
              </a>
              <a
                href="mailto:info@advisory.kw.gt.com?subject=Advisory%20Services%20Enquiry"
                className="flex flex-col items-center justify-center gap-1 p-2 bg-[#ce2c2c]/10 hover:bg-[#ce2c2c]/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#ce2c2c] text-lg" />
                <span className="text-xs text-[#ce2c2c] font-medium" style={{ fontSize: '1.2rem' }}>Email</span>
              </a>
              <a
                href="https://www.google.com/maps?q=Souk+Al+Kabeer+Building,+Fahad+Al+Salem+Street,+Kuwait"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <MapPin className="w-6 h-6 text-gray-700 text-xl" />
                <span className="text-xs text-gray-700 font-medium" style={{ fontSize: '1.2rem' }}>Map</span>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content - Form and Contact Info */}
        <section style={{ paddingTop: '9.6rem', paddingBottom: '9.6rem' }}>
          <div className="container mx-auto" style={{ maxWidth: '1172px', paddingLeft: '1.6rem', paddingRight: '1.6rem' }}>
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Contact Information Card - Left */}
              <div className="lg:col-span-4">
                <ScrollReveal variant="fadeUp">
                  <div className="bg-white p-8 lg:sticky lg:top-28">
                    <div className="text-center pb-6 border-b border-gray-200 mb-8">
                      <h3 className="font-semibold text-[#4f2d7f] mb-2 text-xl">
                        ADVISORY SERVICES
                      </h3>
                      <p className="text-gray-600 text-sm">Get in touch with us</p>
                    </div>

                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Phone className="w-5 h-5 text-[#4f2d7f]" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-500 uppercase mb-1 text-xs tracking-wider">Phone</p>
                          <a
                            href="tel:+96522443900,263"
                            className="text-[#4f2d7f] hover:text-[#ce2c2c] transition-colors duration-300 font-medium text-sm"
                          >
                            +965 2244 3900 Ext: 263
                          </a>
                        </div>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      {/* WhatsApp */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <MessageCircle className="w-5 h-5 text-[#25D366]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-500 uppercase mb-1 text-xs tracking-wider">WhatsApp Business</p>
                          <a
                            href="https://wa.me/96541021616?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Grant%20Thornton%20Advisory%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] hover:text-[#20BA5A] transition-colors duration-300 font-medium block mb-2 text-sm"
                          >
                            +965 4102 1616
                          </a>
                          <a
                            href="https://wa.me/96541021616?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Grant%20Thornton%20Advisory%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 text-xs rounded"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Chat with us
                          </a>
                        </div>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#ce2c2c]" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-500 uppercase mb-1 text-xs tracking-wider">Email</p>
                          <a
                            href="mailto:info@advisory.kw.gt.com"
                            className="text-[#ce2c2c] hover:text-[#4f2d7f] transition-colors duration-300 font-medium break-all text-sm"
                          >
                            info@advisory.kw.gt.com
                          </a>
                        </div>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#4f2d7f]" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-500 uppercase mb-2 text-xs tracking-wider">Visit Us</p>
                          <p className="font-semibold text-gray-900 mb-2 text-sm leading-snug">
                            AL-AIBAN & AL-QATAMI CO.<br />
                            FOR INTELLECTUAL PROPERTY<br />
                            CONSULTANTS W.L.L
                          </p>
                          <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                            Grant Thornton<br />
                            Al-Qibla, Fahd Al-Salem Street<br />
                            Souk Al-Kabeer Building<br />
                            Block A, 9th Floor<br />
                            Kuwait
                          </p>
                          <a
                            href="https://www.google.com/maps?q=Souk+Al+Kabeer+Building,+Fahad+Al+Salem+Street,+Kuwait"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2f1ef] text-gray-700 hover:bg-gray-300 transition-all duration-300 text-xs rounded"
                          >
                            <MapPin className="w-4 h-4" />
                            Get Directions
                          </a>
                        </div>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      {/* Office Hours */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#4f2d7f]" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-500 uppercase mb-2 text-xs tracking-wider">Office Hours</p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Sunday - Thursday: 8:00 AM - 5:00 PM<br />
                            Friday - Saturday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form - Right */}
              <div className="lg:col-span-8">
                <ScrollReveal variant="fadeUp" delay={0.1}>
                  <div className="bg-white p-6 md:p-10">
                    <h2 className="font-normal text-[#4f2d7f] mb-2 text-2xl md:text-3xl">
                      How can we help you?
                    </h2>
                    <p className="text-gray-600 mb-8 text-base">
                      Fill out the form below and our team will get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Advisory Service Dropdown */}
                      <div>
                        <label htmlFor="advisoryService" className="block font-medium text-gray-700 mb-2 text-sm">
                          Advisory Service <span className="text-[#ce2c2c]">*</span>
                        </label>
                        <select
                          id="advisoryService"
                          name="advisoryService"
                          value={formData.advisoryService}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border text-base ${
                            errors.advisoryService ? 'border-[#ce2c2c]' : 'border-gray-300'
                          } focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all rounded`}
                        >
                          {advisoryServices.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.advisoryService && (
                          <p className="mt-1.5 text-[#ce2c2c] flex items-center gap-1 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.advisoryService}
                          </p>
                        )}
                      </div>

                        {/* Title and Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '3.2rem' }}>
                          <div>
                            <label htmlFor="title" className="block font-medium text-gray-700 mb-2 text-base">
                              Title <span className="text-[#ce2c2c]">*</span>
                            </label>
                            <select
                              id="title"
                              name="title"
                              value={formData.title}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-4 border ${
                                errors.title ? 'border-[#ce2c2c]' : 'border-gray-300'
                              } focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all`}
                              className="text-base"
                            >
                              <option value="">Select</option>
                              {titles.map((title) => (
                                <option key={title} value={title}>
                                  {title}
                                </option>
                              ))}
                            </select>
                            {errors.title && (
                              <p className="mt-2 text-[#ce2c2c] flex items-center gap-2 text-sm">
                                <AlertCircle style={{ width: '1.6rem', height: '1.6rem' }} />
                                {errors.title}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="firstName" className="block font-medium text-gray-700 mb-2 text-base">
                              First Name <span className="text-[#ce2c2c]">*</span>
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-4 border ${
                                errors.firstName ? 'border-[#ce2c2c]' : 'border-gray-300'
                              } focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all`}
                              className="text-base"
                              placeholder="John"
                            />
                            {errors.firstName && (
                              <p className="mt-2 text-[#ce2c2c] flex items-center gap-2 text-sm">
                                <AlertCircle style={{ width: '1.6rem', height: '1.6rem' }} />
                                {errors.firstName}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="surname" className="block font-medium text-gray-700 mb-2 text-base">
                              Surname <span className="text-[#ce2c2c]">*</span>
                            </label>
                            <input
                              type="text"
                              id="surname"
                              name="surname"
                              value={formData.surname}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-4 border ${
                                errors.surname ? 'border-[#ce2c2c]' : 'border-gray-300'
                              } focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all`}
                              className="text-base"
                              placeholder="Doe"
                            />
                            {errors.surname && (
                              <p className="mt-2 text-[#ce2c2c] flex items-center gap-2 text-sm">
                                <AlertCircle style={{ width: '1.6rem', height: '1.6rem' }} />
                                {errors.surname}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Company Name */}
                        <div style={{ marginBottom: '3.2rem' }}>
                          <label htmlFor="companyName" className="block font-medium text-gray-700 mb-2 text-base">
                            Company Name <span className="text-[#ce2c2c]">*</span>
                          </label>
                          <div className="relative">
                            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" style={{ width: '2rem', height: '2rem' }} />
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              className={`w-full pl-14 pr-4 py-4 border ${
                                errors.companyName ? 'border-[#ce2c2c]' : 'border-gray-300'
                              } focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all`}
                              className="text-base"
                              placeholder="Your Company"
                            />
                          </div>
                          {errors.companyName && (
                            <p className="mt-2 text-[#ce2c2c] flex items-center gap-2 text-sm">
                              <AlertCircle style={{ width: '1.6rem', height: '1.6rem' }} />
                              {errors.companyName}
                            </p>
                          )}
                        </div>

                        {/* Industry Dropdown */}
                        <div style={{ marginBottom: '3.2rem' }}>
                          <label htmlFor="industry" className="block font-medium text-gray-700 mb-2 text-base">
                            Industry
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border border-gray-300 focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all"
                            className="text-base"
                          >
                            {industries.map((industry) => (
                              <option key={industry} value={industry}>
                                {industry}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: '3.2rem' }}>
                          <div>
                            <label htmlFor="email" className="block font-medium text-gray-700 mb-2 text-base">
                              Email Address <span className="text-[#ce2c2c]">*</span>
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" style={{ width: '2rem', height: '2rem' }} />
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full pl-14 pr-4 py-4 border ${
                                  errors.email ? 'border-[#ce2c2c]' : 'border-gray-300'
                                } focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all`}
                                className="text-base"
                                placeholder="john.doe@example.com"
                              />
                            </div>
                            {errors.email && (
                              <p className="mt-2 text-[#ce2c2c] flex items-center gap-2 text-sm">
                                <AlertCircle style={{ width: '1.6rem', height: '1.6rem' }} />
                                {errors.email}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="phone" className="block font-medium text-gray-700 mb-2 text-base">
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" style={{ width: '2rem', height: '2rem' }} />
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full pl-14 pr-4 py-4 border border-gray-300 focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all"
                                className="text-base"
                                placeholder="+965 XXXX XXXX"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Preferred Contact Method */}
                        <div style={{ marginBottom: '3.2rem' }}>
                          <label className="block font-medium text-gray-700 mb-4 text-base">
                            Preferred Contact Method
                          </label>
                          <div className="flex flex-wrap gap-6">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                name="preferredContact"
                                value="email"
                                checked={formData.preferredContact === 'email'}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-[#4f2d7f] focus:ring-[#4f2d7f]"
                              />
                              <span className="text-gray-700 text-base">Email</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                name="preferredContact"
                                value="phone"
                                checked={formData.preferredContact === 'phone'}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-[#4f2d7f] focus:ring-[#4f2d7f]"
                              />
                              <span className="text-gray-700 text-base">Phone Call</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                name="preferredContact"
                                value="whatsapp"
                                checked={formData.preferredContact === 'whatsapp'}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-[#4f2d7f] focus:ring-[#4f2d7f]"
                              />
                              <span className="text-gray-700 text-base">WhatsApp</span>
                            </label>
                          </div>
                        </div>

                        {/* Message */}
                        <div style={{ marginBottom: '3.2rem' }}>
                          <label htmlFor="message" className="block font-medium text-gray-700 mb-2 text-base">
                            Message <span className="text-[#ce2c2c]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            className={`w-full px-4 py-4 border ${
                              errors.message ? 'border-[#ce2c2c]' : 'border-gray-300'
                            } focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all resize-none`}
                            style={{ fontSize: '1.6rem', lineHeight: '1.5' }}
                            placeholder="Tell us about your business needs and how we can help..."
                          />
                          {errors.message && (
                            <p className="mt-2 text-[#ce2c2c] flex items-center gap-2 text-sm">
                              <AlertCircle style={{ width: '1.6rem', height: '1.6rem' }} />
                              {errors.message}
                            </p>
                          )}
                          <p className="mt-2 text-gray-500 text-sm">
                            {formData.message.length} / 20 characters minimum
                          </p>
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div style={{ marginTop: '3.2rem', paddingTop: '3.2rem', borderTop: '1px solid #e5e7eb' }}>
                          <label className="flex items-start gap-4 cursor-pointer mb-4">
                            <input
                              type="checkbox"
                              name="privacyPolicy"
                              checked={formData.privacyPolicy}
                              onChange={handleInputChange}
                              className="mt-1 w-5 h-5 text-[#4f2d7f] focus:ring-[#4f2d7f]"
                            />
                            <span className="text-gray-700" style={{ fontSize: '1.6rem', lineHeight: '1.5' }}>
                              I have read and understand the{' '}
                              <a href="/privacy-policy" className="text-[#4f2d7f] hover:text-[#ce2c2c] font-medium underline transition-colors duration-300">
                                privacy policy
                              </a>{' '}
                              <span className="text-[#ce2c2c]">*</span>
                            </span>
                          </label>
                          {errors.privacyPolicy && (
                            <p className="text-[#ce2c2c] flex items-center gap-2 ml-9 mb-4 text-sm">
                              <AlertCircle style={{ width: '1.6rem', height: '1.6rem' }} />
                              {errors.privacyPolicy}
                            </p>
                          )}

                          <label className="flex items-start gap-4 cursor-pointer">
                            <input
                              type="checkbox"
                              name="receiveUpdates"
                              checked={formData.receiveUpdates}
                              onChange={handleInputChange}
                              className="mt-1 w-5 h-5 text-[#4f2d7f] focus:ring-[#4f2d7f]"
                            />
                            <span className="text-gray-700" style={{ fontSize: '1.6rem', lineHeight: '1.5' }}>
                              I would like to receive insights and updates from Grant Thornton Kuwait
                            </span>
                          </label>
                        </div>

                        {/* Submit Button */}
                        <div style={{ marginTop: '4.8rem' }}>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#4f2d7f] text-white hover:bg-[#ce2c2c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ fontSize: '1.6rem', lineHeight: '2.2rem' }}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Send style={{ width: '2rem', height: '2rem' }} />
                                Submit Enquiry
                              </>
                            )}
                          </button>
                          <p className="mt-4 text-sm text-gray-500">
                            <span className="text-[#ce2c2c]">*</span> indicates required fields
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Services Overview Section */}
        <section className="bg-white" style={{ paddingTop: '9.6rem', paddingBottom: '9.6rem' }}>
          <div className="container mx-auto" style={{ maxWidth: '1172px', paddingLeft: '1.6rem', paddingRight: '1.6rem' }}>
            <ScrollReveal variant="fadeUp">
              <div className="text-center" style={{ marginBottom: '6.4rem' }}>
                <h2 className="font-normal text-[#4f2d7f] mb-4" style={{ fontSize: '3.4rem', lineHeight: '1.2' }}>
                  Our Advisory Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '2rem', lineHeight: '2' }}>
                  Discover our full range of advisory capabilities designed to help your business thrive
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Transaction Advisory',
                  description: 'Strategic support for M&A, due diligence, and deal execution to maximize value.',
                  icon: TrendingUp,
                  href: '/advisory'
                },
                {
                  title: 'Business Risk Services',
                  description: 'Internal audit, risk management, and compliance solutions for dynamic businesses.',
                  icon: Shield,
                  href: '/advisory'
                },
                {
                  title: 'Forensic Services',
                  description: 'Investigation, dispute resolution, and litigation support when you need answers.',
                  icon: AlertCircle,
                  href: '/advisory'
                },
                {
                  title: 'Restructuring & Recovery',
                  description: 'Navigate financial challenges with expert turnaround and restructuring guidance.',
                  icon: ArrowRight,
                  href: '/advisory'
                },
                {
                  title: 'Strategy & Operations',
                  description: 'Transform your business with operational excellence and strategic planning.',
                  icon: Briefcase,
                  href: '/advisory'
                },
                {
                  title: 'Valuations',
                  description: 'Independent valuations for transactions, reporting, and strategic decisions.',
                  icon: FileText,
                  href: '/advisory'
                }
              ].map((service, index) => (
                <StaggerItem key={index}>
                  <a
                    href={service.href}
                    className="block border border-gray-200 bg-white p-8 hover:border-[#4f2d7f] hover:shadow-lg transition-all duration-300 group h-full"
                  >
                    <service.icon className="text-[#4f2d7f] mb-6 group-hover:scale-110 transition-transform duration-300" style={{ fontSize: '4.8rem', width: '4.8rem', height: '4.8rem' }} />
                    <h3 className="font-semibold text-[#4f2d7f] mb-4" style={{ fontSize: '2.4rem', lineHeight: '1.5' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4" style={{ fontSize: '1.6rem', lineHeight: '1.5' }}>
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#ce2c2c] font-medium group-hover:gap-4 transition-all duration-300 text-base">
                      Learn More
                      <ArrowRight style={{ width: '1.6rem', height: '1.6rem' }} />
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Google Maps Section */}
        <section style={{ paddingTop: '9.6rem', paddingBottom: '9.6rem' }}>
          <div className="container mx-auto" style={{ maxWidth: '1172px', paddingLeft: '1.6rem', paddingRight: '1.6rem' }}>
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-normal text-[#4f2d7f] mb-4" style={{ fontSize: '3.4rem', lineHeight: '1.2' }}>
                  Find Us
                </h2>
                <p className="text-gray-600" style={{ fontSize: '1.6rem', lineHeight: '1.5' }}>
                  Grant Thornton Kuwait - Advisory Services<br />
                  Souk Al-Kabeer Building, Block A, 9th Floor
                </p>
              </div>
              <div className="overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps?q=Souk+Al+Kabeer+Building,+Fahad+Al+Salem+Street,+Kuwait&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grant Thornton Kuwait Office Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer CTA Bar */}
        <section className="bg-gradient-to-r from-[#4f2d7f] to-[#2b144d] text-white" style={{ paddingTop: '9.6rem', paddingBottom: '9.6rem' }}>
          <div className="container mx-auto" style={{ maxWidth: '1172px', paddingLeft: '1.6rem', paddingRight: '1.6rem' }}>
            <ScrollReveal variant="fadeUp">
              <div className="text-center">
                <h3 className="font-normal mb-12" style={{ fontSize: '3.4rem', lineHeight: '1.2' }}>
                  Looking for other services?
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="/contact"
                    className="px-10 py-5 bg-white text-[#4f2d7f] hover:bg-[#f2f1ef] transition-all duration-300 font-medium"
                    style={{ fontSize: '1.6rem', lineHeight: '2.2rem' }}
                  >
                    Contact Assurance Team
                  </a>
                  <a
                    href="/contact"
                    className="px-10 py-5 bg-white text-[#4f2d7f] hover:bg-[#f2f1ef] transition-all duration-300 font-medium"
                    style={{ fontSize: '1.6rem', lineHeight: '2.2rem' }}
                  >
                    Contact Tax Team
                  </a>
                  <a
                    href="/contact"
                    className="px-10 py-5 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 font-medium"
                    style={{ fontSize: '1.6rem', lineHeight: '2.2rem' }}
                  >
                    General Enquiries
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
