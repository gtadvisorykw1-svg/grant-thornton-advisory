'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle,
  ArrowRight, ChevronRight, Building2, FileText, Search, BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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

const initialFormData: FormData = {
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
  receiveUpdates: false,
};

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
  'General Advisory Enquiry',
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
  'Other',
];

const titles = ['Mr', 'Ms', 'Miss', 'Mrs', 'Dr'];

const serviceCards = [
  { title: 'Transaction Advisory', description: 'Strategic support for M&A, due diligence, and deal execution to maximize value.', href: '/services/mergers-acquisitions' },
  { title: 'Business Risk Services', description: 'Internal audit, risk management, and compliance solutions for dynamic businesses.', href: '/services/risk-management' },
  { title: 'Forensic Services', description: 'Investigation, dispute resolution, and litigation support when you need answers.', href: '/services/fraud-forensics' },
  { title: 'Restructuring & Recovery', description: 'Navigate financial challenges with expert turnaround and restructuring guidance.', href: '/services/business-strategy' },
  { title: 'Strategy & Operations', description: 'Transform your business with operational excellence and strategic planning.', href: '/services/business-strategy' },
  { title: 'Valuations', description: 'Independent valuations for transactions, reporting, and strategic decisions.', href: '/services/valuations' },
];

export default function AdvisoryContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const generateReferenceNumber = () => {
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `ADV-${dateStr}-${random}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.advisoryService || formData.advisoryService === 'Select a service area') newErrors.advisoryService = 'Please select a service area';
    if (!formData.title) newErrors.title = 'Please select a title';
    if (!formData.firstName || formData.firstName.length < 2) newErrors.firstName = 'First name must be at least 2 characters';
    if (!formData.surname || formData.surname.length < 2) newErrors.surname = 'Surname must be at least 2 characters';
    if (!formData.companyName || formData.companyName.length < 2) newErrors.companyName = 'Company name must be at least 2 characters';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message || formData.message.length < 20) newErrors.message = 'Message must be at least 20 characters';
    if (!formData.privacyPolicy) newErrors.privacyPolicy = 'You must accept the privacy policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setReferenceNumber(generateReferenceNumber());
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="bg-gradient-to-br from-[#4f2d7f] to-[#2b144d] flex items-center justify-center px-4 py-20 min-h-[80vh]">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white rounded-lg p-12 max-w-2xl w-full text-center shadow-2xl">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          <h1 className="text-3xl font-bold text-[#4f2d7f] mb-4">Thank you for contacting us!</h1>
          <p className="text-lg text-gray-600 mb-8">Your enquiry has been received by our Advisory team. We will respond within 1-2 business days.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Reference Number</p>
            <p className="text-xl text-[#4f2d7f] font-mono font-semibold">{referenceNumber}</p>
          </div>
          <p className="text-gray-600 mb-6">For urgent matters, please contact us directly:</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+96522443900,263" className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f2d7f] text-white rounded-lg hover:bg-[#3d2266] transition-colors">
              <Phone className="w-4 h-4" /> +965 2244 3900 Ext: 263
            </a>
            <a href="https://wa.me/96541021616" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1fb855] transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <Link href="/" className="text-[#4f2d7f] hover:text-[#ce2c2c] font-medium transition-colors">← Return to Home</Link>
        </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-[#4f2d7f] to-[#2b144d] text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/advisory" className="hover:text-white transition-colors">Advisory</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-white">Contact Us</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Our Advisory Team</h1>
            <p className="text-xl text-white/90 leading-relaxed">Get in touch with our Advisory specialists to discuss how we can help your business navigate challenges, manage risk, and unlock growth opportunities.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200 py-4 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-2">
            <a href="tel:+96522443900,263" className="flex flex-col items-center justify-center gap-1 p-3 bg-[#4f2d7f]/10 hover:bg-[#4f2d7f]/20 rounded-lg transition-colors">
              <Phone className="w-6 h-6 text-[#4f2d7f]" /><span className="text-xs text-[#4f2d7f] font-medium">Call</span>
            </a>
            <a href="https://wa.me/96541021616" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-colors">
              <MessageCircle className="w-6 h-6 text-[#25D366]" /><span className="text-xs text-[#25D366] font-medium">WhatsApp</span>
            </a>
            <a href="mailto:info@advisory.kw.gt.com" className="flex flex-col items-center justify-center gap-1 p-3 bg-[#ce2c2c]/10 hover:bg-[#ce2c2c]/20 rounded-lg transition-colors">
              <Mail className="w-5 h-5 text-[#ce2c2c]" /><span className="text-xs text-[#ce2c2c] font-medium">Email</span>
            </a>
            <a href="https://www.google.com/maps?q=Souk+Al+Kabeer+Building,+Kuwait" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <MapPin className="w-6 h-6 text-gray-700" /><span className="text-xs text-gray-700 font-medium">Map</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f1ef] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 lg:order-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                <div className="h-2 bg-[#4f2d7f]" />
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-[#4f2d7f] mb-6 uppercase tracking-wider">Advisory Services</h2>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2"><Phone className="w-5 h-5 text-[#4f2d7f]" /><span className="font-semibold text-gray-800">Phone</span></div>
                    <a href="tel:+96522443900,263" className="text-[#4f2d7f] hover:text-[#ce2c2c] transition-colors text-lg">+965 2244 3900 Ext: 263</a>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2"><MessageCircle className="w-5 h-5 text-[#25D366]" /><span className="font-semibold text-gray-800">WhatsApp Business</span></div>
                    <a href="tel:+96541021616" className="text-[#4f2d7f] hover:text-[#ce2c2c] transition-colors text-lg block mb-2">+965 4102 1616</a>
                    <a href="https://wa.me/96541021616" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1fb855] transition-colors text-sm">
                      <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                  </div>
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-3 mb-2"><Mail className="w-5 h-5 text-[#ce2c2c]" /><span className="font-semibold text-gray-800">Email</span></div>
                    <a href="mailto:info@advisory.kw.gt.com" className="text-[#4f2d7f] hover:text-[#ce2c2c] transition-colors">info@advisory.kw.gt.com</a>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2"><MapPin className="w-5 h-5 text-[#4f2d7f]" /><span className="font-semibold text-gray-800">Visit Us</span></div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3"><strong>AL-AIBAN & AL-QATAMI CO.</strong><br />Grant Thornton<br />Al-Qibla, Fahd Al-Salem Street<br />Souk Al-Kabeer Building<br />Block A, 9th Floor, Kuwait</p>
                    <a href="https://www.google.com/maps?q=Souk+Al+Kabeer+Building,+Kuwait" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4f2d7f] hover:text-[#ce2c2c] font-medium text-sm transition-colors">Get Directions <ArrowRight className="w-4 h-4" /></a>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-2"><Clock className="w-5 h-5 text-[#4f2d7f]" /><span className="font-semibold text-gray-800">Office Hours</span></div>
                    <p className="text-gray-600 text-sm">Sunday - Thursday: 8:00 AM - 5:00 PM<br />Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4f2d7f] mb-2">How can we help you?</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="advisoryService" className="block text-sm font-medium text-gray-700 mb-2">Advisory Service <span className="text-[#ce2c2c]">*</span></label>
                    <select id="advisoryService" name="advisoryService" value={formData.advisoryService} onChange={handleInputChange} className={`w-full px-4 py-3 border rounded-lg text-base focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all ${errors.advisoryService ? 'border-[#ce2c2c]' : 'border-gray-300 focus:border-[#4f2d7f]'}`}>
                      {advisoryServices.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.advisoryService && <p className="mt-2 text-sm text-[#ce2c2c] flex items-center gap-2"><AlertCircle className="w-4 h-4" />{errors.advisoryService}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title <span className="text-[#ce2c2c]">*</span></label>
                      <select id="title" name="title" value={formData.title} onChange={handleInputChange} className={`w-full px-4 py-3 border rounded-lg text-base focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all ${errors.title ? 'border-[#ce2c2c]' : 'border-gray-300 focus:border-[#4f2d7f]'}`}>
                        <option value="">Select</option>
                        {titles.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.title && <p className="mt-2 text-sm text-[#ce2c2c] flex items-center gap-2"><AlertCircle className="w-4 h-4" />{errors.title}</p>}
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-[#ce2c2c]">*</span></label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="John" className={`w-full px-4 py-3 border rounded-lg text-base focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all ${errors.firstName ? 'border-[#ce2c2c]' : 'border-gray-300 focus:border-[#4f2d7f]'}`} />
                      {errors.firstName && <p className="mt-2 text-sm text-[#ce2c2c] flex items-center gap-2"><AlertCircle className="w-4 h-4" />{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">Surname <span className="text-[#ce2c2c]">*</span></label>
                      <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleInputChange} placeholder="Doe" className={`w-full px-4 py-3 border rounded-lg text-base focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all ${errors.surname ? 'border-[#ce2c2c]' : 'border-gray-300 focus:border-[#4f2d7f]'}`} />
                      {errors.surname && <p className="mt-2 text-sm text-[#ce2c2c] flex items-center gap-2"><AlertCircle className="w-4 h-4" />{errors.surname}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">Company Name <span className="text-[#ce2c2c]">*</span></label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Your Company" className={`w-full pl-12 pr-4 py-3 border rounded-lg text-base focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all ${errors.companyName ? 'border-[#ce2c2c]' : 'border-gray-300 focus:border-[#4f2d7f]'}`} />
                    </div>
                    {errors.companyName && <p className="mt-2 text-sm text-[#ce2c2c] flex items-center gap-2"><AlertCircle className="w-4 h-4" />{errors.companyName}</p>}
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select id="industry" name="industry" value={formData.industry} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all">
                      {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-[#ce2c2c]">*</span></label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" className={`w-full pl-12 pr-4 py-3 border rounded-lg text-base focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all ${errors.email ? 'border-[#ce2c2c]' : 'border-gray-300 focus:border-[#4f2d7f]'}`} />
                      </div>
                      {errors.email && <p className="mt-2 text-sm text-[#ce2c2c] flex items-center gap-2"><AlertCircle className="w-4 h-4" />{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+965 XXXX XXXX" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-base focus:border-[#4f2d7f] focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-6">
                      {['email', 'phone', 'whatsapp'].map((m) => (
                        <label key={m} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="preferredContact" value={m} checked={formData.preferredContact === m} onChange={handleInputChange} className="w-4 h-4 text-[#4f2d7f] focus:ring-[#4f2d7f]" />
                          <span className="text-gray-700 capitalize">{m === 'whatsapp' ? 'WhatsApp' : m === 'phone' ? 'Phone Call' : 'Email'}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-[#ce2c2c]">*</span></label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder="Tell us about your business needs..." className={`w-full px-4 py-3 border rounded-lg text-base focus:ring-2 focus:ring-[#4f2d7f]/20 outline-none transition-all resize-none ${errors.message ? 'border-[#ce2c2c]' : 'border-gray-300 focus:border-[#4f2d7f]'}`} />
                    {errors.message && <p className="mt-2 text-sm text-[#ce2c2c] flex items-center gap-2"><AlertCircle className="w-4 h-4" />{errors.message}</p>}
                    <p className="mt-2 text-sm text-gray-500">{formData.message.length} / 20 characters minimum</p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleInputChange} className="mt-1 w-4 h-4 text-[#4f2d7f] focus:ring-[#4f2d7f] rounded" />
                      <span className="text-sm text-gray-700">I have read and understand the <Link href="/privacy" className="text-[#4f2d7f] hover:text-[#ce2c2c] underline">privacy policy</Link> <span className="text-[#ce2c2c]">*</span></span>
                    </label>
                    {errors.privacyPolicy && <p className="text-sm text-[#ce2c2c] flex items-center gap-2 ml-7"><AlertCircle className="w-4 h-4" />{errors.privacyPolicy}</p>}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="receiveUpdates" checked={formData.receiveUpdates} onChange={handleInputChange} className="mt-1 w-4 h-4 text-[#4f2d7f] focus:ring-[#4f2d7f] rounded" />
                      <span className="text-sm text-gray-700">I would like to receive insights and updates from Grant Thornton Kuwait</span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4f2d7f] text-white font-semibold rounded-lg hover:bg-[#3d2266] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Submitting...</>) : (<><Send className="w-5 h-5" />Submit Enquiry</>)}
                    </button>
                    <p className="mt-4 text-sm text-gray-500"><span className="text-[#ce2c2c]">*</span> indicates required fields</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4f2d7f] mb-4">Our Advisory Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our full range of advisory capabilities designed to help your business thrive</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service) => (
              <Link key={service.title} href={service.href} className="group bg-[#f2f1ef] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#4f2d7f] mb-3 group-hover:text-[#ce2c2c] transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-[#ce2c2c] font-medium group-hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f1ef] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <FileText className="w-10 h-10 text-[#4f2d7f] mb-4" />
              <h3 className="text-xl font-bold text-[#4f2d7f] mb-2">Submit RFP</h3>
              <p className="text-gray-600 mb-4">Need a formal proposal? Submit your requirements and our team will respond with a tailored solution.</p>
              <Link href="/advisory/contact" className="inline-flex items-center gap-2 text-[#ce2c2c] font-medium hover:gap-3 transition-all">Submit Request <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <Search className="w-10 h-10 text-[#4f2d7f] mb-4" />
              <h3 className="text-xl font-bold text-[#4f2d7f] mb-2">Advisory Services</h3>
              <p className="text-gray-600 mb-4">Discover our full range of advisory capabilities designed to help your business thrive.</p>
              <Link href="/advisory" className="inline-flex items-center gap-2 text-[#ce2c2c] font-medium hover:gap-3 transition-all">View Services <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="w-10 h-10 text-[#4f2d7f] mb-4" />
              <h3 className="text-xl font-bold text-[#4f2d7f] mb-2">Insights & Articles</h3>
              <p className="text-gray-600 mb-4">Stay informed with the latest thinking from our Advisory experts.</p>
              <a href="https://www.grantthornton.global/en/insights/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#ce2c2c] font-medium hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#4f2d7f] mb-2">Find Us</h2>
            <p className="text-gray-600">Grant Thornton Kuwait - Advisory Services<br />Souk Al-Kabeer Building, Block A, 9th Floor</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.8!2d47.9783!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzMzLjIiTiA0N8KwNTgnNDEuOSJF!5e0!3m2!1sen!2skw!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Grant Thornton Kuwait Location" />
          </div>
        </div>
      </section>

      <section className="bg-[#4f2d7f] py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Looking for other services?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="px-6 py-3 bg-white text-[#4f2d7f] font-semibold rounded-lg hover:bg-gray-100 transition-colors">View All Services</Link>
              <Link href="/about" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4f2d7f] transition-colors">About Us</Link>
              <Link href="/careers" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4f2d7f] transition-colors">Careers</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
