'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { 
  Home, 
  ChevronRight, 
  ArrowRight, 
  Search,
  MapPin,
  Clock,
  Briefcase,
  Filter,
  X,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { useState, useMemo } from 'react';

// Sample Job Data
const allJobs: {
  id: number;
  title: string;
  department: string;
  category: string;
  location: string;
  type: string;
  level: string;
  posted: string;
  description: string;
  requirements: string[];
}[] = [];

// Filter options
const departments = ['All Departments', 'Business Risk Services', 'Transaction Advisory', 'IT Advisory', 'Human Capital Advisory', 'Multiple Departments'];
const levels = ['All Levels', 'Intern', 'Entry Level', 'Experienced', 'Senior'];
const types = ['All Types', 'Full-time', 'Part-time', 'Internship', 'Contract'];

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return '1 week ago';
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
}

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedType, setSelectedType] = useState('All Types');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      const matchesSearch = searchQuery === '' || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
      const matchesLevel = selectedLevel === 'All Levels' || job.level === selectedLevel;
      const matchesType = selectedType === 'All Types' || job.type === selectedType;
      
      return matchesSearch && matchesDepartment && matchesLevel && matchesType;
    });
  }, [searchQuery, selectedDepartment, selectedLevel, selectedType]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('All Departments');
    setSelectedLevel('All Levels');
    setSelectedType('All Types');
  };

  const hasActiveFilters = searchQuery !== '' || selectedDepartment !== 'All Departments' || selectedLevel !== 'All Levels' || selectedType !== 'All Types';

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main role="main" aria-label="Career opportunities page">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4F2D7F] to-[#281440] text-white" aria-labelledby="opportunities-title">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
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
                  <Link href="/careers" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
                    Careers
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page" className="text-white">Open Positions</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="label-text text-[#CF2020] mb-2 block">OPEN POSITIONS</span>
              <h1 id="opportunities-title" className="heading-xl md:heading-hero text-white mb-6">
                Find Your Opportunity
              </h1>
              <p className="body-lg text-white/90 max-w-2xl">
                Browse our current openings and take the next step in your career with Grant Thornton Kuwait.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-[#F2F0EE] sticky top-20 z-30 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions, departments, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none transition-all"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg border transition-all ${
                  showFilters || hasActiveFilters
                    ? 'bg-[#4F2D7F] text-white border-[#4F2D7F]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#4F2D7F]'
                }`}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 w-5 h-5 bg-[#CF2020] text-white text-xs rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
                    {/* Department Filter */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                      <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none appearance-none bg-white"
                      >
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-9 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Level Filter */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                      <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none appearance-none bg-white"
                      >
                        {levels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-9 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Type Filter */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#4F2D7F] focus:ring-2 focus:ring-[#4F2D7F]/20 outline-none appearance-none bg-white"
                      >
                        {types.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-9 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={clearFilters}
                        className="inline-flex items-center text-sm text-[#CF2020] hover:text-[#B01B1B] transition-colors"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Clear all filters
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12 md:py-16" aria-labelledby="listings-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 id="listings-heading" className="heading-md text-[#4F2D7F]">
                {filteredJobs.length} Position{filteredJobs.length !== 1 ? 's' : ''} Found
              </h2>
            </div>

            {filteredJobs.length > 0 ? (
              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {filteredJobs.map((job) => (
                  <StaggerItem key={job.id}>
                    <div 
                      className={`bg-white rounded-xl border transition-all duration-300 ${
                        expandedJob === job.id 
                          ? 'border-[#4F2D7F] shadow-lg' 
                          : 'border-gray-200 hover:border-[#4F2D7F]/50 hover:shadow-md'
                      }`}
                    >
                      {/* Job Header */}
                      <button
                        onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                        className="w-full text-left p-6"
                        aria-expanded={expandedJob === job.id}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="heading-sm text-[#4F2D7F] mb-2">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm">
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {job.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {formatDate(job.posted)}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-[#F2F0EE] rounded-full text-sm text-gray-700">
                              {job.type}
                            </span>
                            <span className="px-3 py-1 bg-[#4F2D7F]/10 rounded-full text-sm text-[#4F2D7F]">
                              {job.level}
                            </span>
                            <ChevronDown 
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                expandedJob === job.id ? 'rotate-180' : ''
                              }`} 
                            />
                          </div>
                        </div>
                      </button>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedJob === job.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 border-t border-gray-100">
                              <div className="pt-6 grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-2">
                                  <h4 className="font-medium text-[#4F2D7F] mb-2">Description</h4>
                                  <p className="body-md text-gray-600 mb-6">{job.description}</p>
                                  
                                  <h4 className="font-medium text-[#4F2D7F] mb-2">Requirements</h4>
                                  <ul className="space-y-2">
                                    {job.requirements.map((req, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-[#CF2020] rounded-full mt-2 shrink-0" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="bg-[#F2F0EE] rounded-xl p-6">
                                  <h4 className="font-medium text-[#4F2D7F] mb-4">Apply Now</h4>
                                  <p className="body-sm text-gray-600 mb-4">
                                    Interested in this role? Submit your application today.
                                  </p>
                                  <Link
                                    href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#CF2020] text-white font-medium rounded hover:bg-[#B01B1B] transition-all"
                                  >
                                    Apply for this position
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                  <p className="body-sm text-gray-500 mt-4 text-center">
                                    or email{' '}
                                    <a href="mailto:info@advisory.kw.gt.com" className="text-[#4F2D7F] hover:underline">
                                      info@advisory.kw.gt.com
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <ScrollReveal>
                <div className="text-center py-16 bg-[#F2F0EE] rounded-2xl">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="heading-md text-gray-600 mb-2">No positions found</h3>
                  <p className="body-md text-gray-500 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center px-6 py-3 bg-[#4F2D7F] text-white font-medium rounded hover:bg-[#281440] transition-all"
                  >
                    Clear all filters
                  </button>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* Don't See Your Role CTA */}
        <section className="py-16 md:py-24 bg-[#F2F0EE]" aria-labelledby="speculative-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
                <h2 id="speculative-heading" className="heading-lg text-[#4F2D7F] mb-4">
                  Don&apos;t See Your Perfect Role?
                </h2>
                <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  We&apos;re always looking for talented individuals to join our team. Submit your CV for future opportunities, and we&apos;ll reach out when a suitable position becomes available.
                </p>
                <Link
                  href="/careers/apply"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#4F2D7F] text-white font-medium rounded btn-hover-lift hover:bg-[#281440] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2D7F] focus-visible:ring-offset-2"
                >
                  Submit Speculative Application
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
