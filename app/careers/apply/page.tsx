'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { 
  Home, 
  ChevronRight, 
  ArrowRight, 
  Upload,
  CheckCircle,
  User,
  Mail,
  Phone,
  Briefcase,
  FileText,
  Linkedin,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

// Department options
const departments = [
  'Business Risk Services',
  'Transaction Advisory',
  'IT Advisory',
  'Human Capital Advisory',
  'General / Open Application',
];

// Experience levels
const experienceLevels = [
  'Student / Intern',
  'Fresh Graduate (0-1 years)',
  'Entry Level (1-3 years)',
  'Experienced (3-6 years)',
  'Senior (6-10 years)',
  'Management (10+ years)',
];

// Referral sources
const referralSources = [
  'LinkedIn',
  'Company Website',
  'Job Board',
  'Employee Referral',
  'University / Career Fair',
  'Recruitment Agency',
  'Other',
];

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const prefilledPosition = searchParams.get('position') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: prefilledPosition,
    department: '',
    experienceLevel: '',
    linkedIn: '',
    expectedSalary: '',
    noticePeriod: '',
    referralSource: '',
    coverLetter: '',
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize position from URL param (using initializer function pattern)
  // Note: Position is already initialized from prefilledPosition in useState

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, cv: 'Please upload a PDF or Word document' }));
        return;
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, cv: 'File size must be less than 5MB' }));
        return;
      }
      setCvFile(file);
      setErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.experienceLevel) newErrors.experienceLevel = 'Please select your experience level';
    if (!cvFile) newErrors.cv = 'Please upload your CV';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main role="main" className="py-24">
          <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="h-10 w-10 text-green-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="heading-xl text-[#4F2D7F] mb-4">Application Submitted!</h1>
              <p className="body-lg text-gray-600 mb-8">
                Thank you for your interest in joining Grant Thornton Kuwait. We have received your application and will review it carefully. If your profile matches our requirements, our recruitment team will contact you within 2-3 weeks.
              </p>
              <div className="bg-[#F2F0EE] rounded-xl p-6 mb-8">
                <h2 className="font-medium text-[#4F2D7F] mb-2">What happens next?</h2>
                <ol className="text-left text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#4F2D7F] text-white rounded-full flex items-center justify-center text-sm shrink-0">1</span>
                    Our team will review your application
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#4F2D7F] text-white rounded-full flex items-center justify-center text-sm shrink-0">2</span>
                    If shortlisted, we&apos;ll contact you for an initial screening
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#4F2D7F] text-white rounded-full flex items-center justify-center text-sm shrink-0">3</span>
                    Successful candidates will be invited for interviews
                  </li>
                </ol>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#4F2D7F] text-white font-medium rounded hover:bg-[#281440] transition-all"
                >
                  Back to Careers
                </Link>
                <Link
                  href="/careers/opportunities"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#4F2D7F] text-[#4F2D7F] font-medium rounded hover:bg-[#4F2D7F]/5 transition-all"
                >
                  View Other Positions
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label="Job application page">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="apply-title">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center text-sm text-white/70 gap-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors" aria-label="Home">
                    <Home className="h-4 w-4" />
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors px-1">
                    Careers
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page" className="text-white">Apply</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-text text-[#CF2020] mb-2 block">APPLY NOW</span>
              <h1 id="apply-title" className="heading-xl md:heading-hero text-white mb-6">
                {prefilledPosition ? `Apply for ${prefilledPosition}` : 'Submit Your Application'}
              </h1>
              <p className="body-lg text-white/90 max-w-2xl">
                Take the first step towards an exciting career at Grant Thornton Kuwait. Complete the form below and our recruitment team will be in touch.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h2 className="heading-md text-[#4F2D7F] mb-6 flex items-center gap-2">
                    <User className="h-6 w-6" />
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-[#CF2020]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-[#CF2020]' : 'border-gray-300'} focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-[#CF2020] flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-[#CF2020]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border ${errors.email ? 'border-[#CF2020]' : 'border-gray-300'} focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-[#CF2020] flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-[#CF2020]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border ${errors.phone ? 'border-[#CF2020]' : 'border-gray-300'} focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all`}
                          placeholder="+965 XXXX XXXX"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-[#CF2020] flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <div className="relative">
                        <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="url"
                          id="linkedIn"
                          name="linkedIn"
                          value={formData.linkedIn}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all"
                          placeholder="linkedin.com/in/yourprofile"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Position Details */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h2 className="heading-md text-[#4F2D7F] mb-6 flex items-center gap-2">
                    <Briefcase className="h-6 w-6" />
                    Position Details
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Position */}
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                        Position Applied For
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all"
                        placeholder="e.g., Senior Consultant - Internal Audit"
                      />
                    </div>

                    {/* Department */}
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department <span className="text-[#CF2020]">*</span>
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.department ? 'border-[#CF2020]' : 'border-gray-300'} focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all bg-white`}
                      >
                        <option value="">Select a department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      {errors.department && (
                        <p className="mt-1 text-sm text-[#CF2020] flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.department}
                        </p>
                      )}
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                        Experience Level <span className="text-[#CF2020]">*</span>
                      </label>
                      <select
                        id="experienceLevel"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.experienceLevel ? 'border-[#CF2020]' : 'border-gray-300'} focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all bg-white`}
                      >
                        <option value="">Select your experience level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                      {errors.experienceLevel && (
                        <p className="mt-1 text-sm text-[#CF2020] flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.experienceLevel}
                        </p>
                      )}
                    </div>

                    {/* Notice Period */}
                    <div>
                      <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-1">
                        Notice Period
                      </label>
                      <input
                        type="text"
                        id="noticePeriod"
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all"
                        placeholder="e.g., 1 month, Immediately available"
                      />
                    </div>

                    {/* Expected Salary */}
                    <div>
                      <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Salary (KWD/month)
                      </label>
                      <input
                        type="text"
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all"
                        placeholder="e.g., 1,500 - 2,000"
                      />
                    </div>

                    {/* Referral Source */}
                    <div>
                      <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select an option</option>
                        {referralSources.map((source) => (
                          <option key={source} value={source}>{source}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h2 className="heading-md text-[#4F2D7F] mb-6 flex items-center gap-2">
                    <FileText className="h-6 w-6" />
                    Documents
                  </h2>
                  
                  {/* CV Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload CV / Resume <span className="text-[#CF2020]">*</span>
                    </label>
                    <div 
                      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                        errors.cv ? 'border-[#CF2020] bg-red-50' : cvFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-[#4F2D7F]'
                      }`}
                    >
                      {cvFile ? (
                        <div className="flex items-center justify-center gap-3">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                          <div className="text-left">
                            <p className="font-medium text-gray-900">{cvFile.name}</p>
                            <p className="text-sm text-gray-500">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCvFile(null)}
                            className="ml-4 text-gray-400 hover:text-[#CF2020]"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 mb-2">
                            Drag and drop your CV here, or{' '}
                            <label className="text-[#4F2D7F] hover:text-[#CF2020] cursor-pointer underline">
                              browse
                              <input
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                              />
                            </label>
                          </p>
                          <p className="text-sm text-gray-400">PDF or Word document, max 5MB</p>
                        </>
                      )}
                    </div>
                    {errors.cv && (
                      <p className="mt-2 text-sm text-[#CF2020] flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.cv}
                      </p>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all resize-none"
                      placeholder="Tell us why you're interested in joining Grant Thornton and what makes you a great fit for this role..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <p className="text-sm text-gray-500">
                    <span className="text-[#CF2020]">*</span> Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#CF2020] text-white font-medium rounded btn-hover-lift hover:bg-[#B01B1B] transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-[#F2F0EE]">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <ScrollReveal>
              <h2 className="heading-md text-[#4F2D7F] mb-4">Need Help?</h2>
              <p className="body-lg text-gray-600 mb-6">
                If you have any questions about the application process or available positions, our recruitment team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:info@advisory.kw.gt.com" 
                  className="flex items-center gap-2 text-[#4F2D7F] hover:text-[#CF2020] transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  info@advisory.kw.gt.com
                </a>
                <a 
                  href="tel:+96522452626" 
                  className="flex items-center gap-2 text-[#4F2D7F] hover:text-[#CF2020] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +965 2245 2626
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
