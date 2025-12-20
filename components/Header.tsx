'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Globe, ChevronDown, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation data structure - based on Grant Thornton Kuwait website
const navigationData = {
  services: {
    label: 'Services',
    columns: [
      {
        title: 'Operational Advisory',
        links: [
          { label: 'Internal Audit', href: '/services/internal-audit' },
          { label: 'Internal Control Review', href: '/services/internal-control-review' },
          { label: 'Corporate Governance', href: '/services/corporate-governance' },
          { label: 'Fraud & Forensics', href: '/services/fraud-forensics' },
          { label: 'Enterprise Risk Management', href: '/services/risk-management' },
          { label: 'Human Capital Advisory', href: '/services/human-capital-advisory' },
          { label: 'IT Advisory', href: '/services/it-advisory' },
          { label: 'Training & Development', href: '/services/training' },
        ],
      },
      {
        title: 'Transaction Advisory',
        links: [
          { label: 'Valuations', href: '/services/valuations' },
          { label: 'Due Diligence', href: '/services/due-diligence' },
          { label: 'Mergers & Acquisitions', href: '/services/mergers-acquisitions' },
          { label: 'Feasibility Study', href: '/services/feasibility-study' },
          { label: 'Project Finance', href: '/services/project-finance' },
          { label: 'Business Strategy', href: '/services/business-strategy' },
          { label: 'Shariah Compliant Investment', href: '/services/shariah-compliant-investment' },
        ],
      },
      {
        title: 'Quick Links',
        links: [
          { label: 'All Services Overview', href: '/services' },
          { label: 'Advisory Services', href: '/advisory' },
          { label: 'Industries We Serve', href: '/industries' },
          { label: 'Contact Advisory', href: '/advisory/contact' },
        ],
      },
    ],
  },
  industries: {
    label: 'Industries',
    columns: [
      {
        title: 'Industries',
        links: [
          { label: 'Energy & resources', href: '/industries/energy-resources' },
          { label: 'Financial services', href: '/industries/financial-services' },
          { label: 'Food & beverage', href: '/industries/food-beverage' },
          { label: 'Hospitality & tourism', href: '/industries/hospitality-tourism' },
          { label: 'Not for profit', href: '/industries/not-for-profit' },
          { label: 'Public sector', href: '/industries/public-sector' },
          { label: 'Real estate & construction', href: '/industries/real-estate-construction' },
          { label: 'Technology', href: '/industries/technology' },
        ],
      },
    ],
  },

  about: {
    label: 'About us',
    columns: [
      {
        title: 'About Grant Thornton',
        links: [
          { label: 'Who We Are', href: '/about' },
          { label: 'Our Mission & Values', href: '/about/mission-values' },
          { label: 'Our Leadership', href: '/about/leadership' },
        ],
      },
      {
        title: 'Our Network',
        links: [
          { label: 'Global Network', href: 'https://www.grantthornton.global/en/about/' },
          { label: 'GCC Region', href: 'https://www.grantthornton.global/en/regions/gcc/' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Contact Us', href: '/advisory/contact' },
          { label: 'Careers', href: '/careers' },
        ],
      },
    ],
  },
};

// Simple nav items without mega menu
const simpleNavItems = [
  { label: 'Insights', href: 'https://www.grantthornton.global/en/insights/', external: true },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/advisory/contact' },
];

// Services detail data for expanded view
const servicesDetailData = {
  'Operational Advisory': {
    'Internal Audit': [
      'Co-sourced Internal Audit',
      'Outsourced Internal Audit',
      'Internal Audit Effectiveness Reviews',
      'Internal Audit Charter Development',
    ],
    'Internal Control Review': [
      'Board Level Review',
      'Execution Level Review',
      'Compliance Framework',
      'Financial & Operational Control',
    ],
    'Corporate Governance': [
      'Gap Analyses',
      'Board Restructuring',
      'Documentation & Implementation',
      'CMA & CBK Compliance',
    ],
    'Fraud & Forensics': [
      'Accounting Fraud Investigation',
      'Sensitive Data Fraud',
      'Corruption Investigation',
      'Fraud Prevention Strategy',
    ],
    'Enterprise Risk Management': [
      'Risk Identification',
      'Risk Management',
      'Risk Control',
      'Risk Reporting (CMA)',
    ],
    'Human Capital Advisory': [
      'HR Diagnostic Reviews',
      'Organization Structure',
      'Compensation Structuring',
      'Performance Appraisal Design',
    ],
    'IT Advisory': [
      'IT Assessment',
      'IT Due Diligence',
      'IT Strategy',
      'SOC Reports',
    ],
    'Training & Development': [
      'Corporate Training',
      'In-House Training',
      'Public Training Programs',
    ],
  },
  'Transaction Advisory': {
    'Valuations': [
      'Commercial Valuations',
      'Intangible Valuations',
      'Litigation & Dispute',
      'Regulatory Valuations',
      'Purchase Price Allocation',
      'Restructuring',
    ],
    'Due Diligence': [
      'Vendor Due Diligence',
      'Acquisition Due Diligence',
      'Operational Due Diligence',
      'Management Assessment',
    ],
    'Mergers & Acquisitions': [
      'Target Research & Identification',
      'Negotiation Support',
      'Sales Strategy Development',
      'Transaction Documentation',
    ],
    'Feasibility Study': [
      'Market Research',
      'Financial Modeling',
      'Project Costing',
      'Sensitivity Analysis',
    ],
    'Project Finance': [
      'Bid & Procurement Strategy',
      'Negotiation Strategy',
      'Commercial Management',
      'Payment Mechanisms',
    ],
    'Business Strategy': [
      'Strategic Planning',
      'Planning & Budgeting',
      'Project Management Office',
      'Financial Restatement',
    ],
    'Shariah Compliant Investment': [
      'Shariah Screening',
      'Debt-to-Equity Analysis',
      'Riba Avoidance',
      'Income Purification',
    ],
  },
};

// Region data
const regions = [
  { id: 'africa', label: 'Africa' },
  { id: 'americas', label: 'Americas' },
  { id: 'asia-pacific', label: 'Asia Pacific' },
  { id: 'europe', label: 'Europe' },
  { id: 'middle-east', label: 'Middle East' },
];

const countriesByRegion: Record<string, { name: string; href: string }[]> = {
  'middle-east': [
    { name: 'Bahrain', href: 'https://www.grantthornton.bh/' },
    { name: 'Kuwait', href: '/' },
    { name: 'Lebanon', href: 'https://www.grantthornton-lb.com/' },
    { name: 'Oman', href: 'https://www.grantthornton.om/' },
    { name: 'Qatar', href: 'https://www.grantthornton.qa/' },
    { name: 'United Arab Emirates', href: 'https://www.grantthornton.ae/' },
    { name: 'Yemen', href: 'https://www.grantthornton-yemen.com/' },
  ],
  'africa': [
    { name: 'Egypt', href: 'https://www.grantthornton.eg/' },
    { name: 'Kenya', href: 'https://www.grantthornton.co.ke/' },
    { name: 'Morocco', href: 'https://www.grantthornton.ma/' },
    { name: 'Nigeria', href: 'https://www.grantthornton.ng/' },
    { name: 'South Africa', href: 'https://www.grantthornton.co.za/' },
    { name: 'Tunisia', href: 'https://www.grantthornton.tn/' },
  ],
  'americas': [
    { name: 'Argentina', href: 'https://www.grantthornton.com.ar/' },
    { name: 'Brazil', href: 'https://www.grantthornton.com.br/' },
    { name: 'Canada', href: 'https://www.grantthornton.ca/' },
    { name: 'Chile', href: 'https://www.grantthornton.cl/' },
    { name: 'Mexico', href: 'https://www.grantthornton.mx/' },
    { name: 'United States', href: 'https://www.grantthornton.com/' },
  ],
  'asia-pacific': [
    { name: 'Australia', href: 'https://www.grantthornton.com.au/' },
    { name: 'China', href: 'https://www.grantthornton.cn/' },
    { name: 'India', href: 'https://www.grantthornton.in/' },
    { name: 'Japan', href: 'https://www.grantthornton.jp/' },
    { name: 'Singapore', href: 'https://www.grantthornton.sg/' },
    { name: 'South Korea', href: 'https://www.grantthornton.kr/' },
  ],
  'europe': [
    { name: 'France', href: 'https://www.grantthornton.fr/' },
    { name: 'Germany', href: 'https://www.grantthornton.de/' },
    { name: 'Ireland', href: 'https://www.grantthornton.ie/' },
    { name: 'Netherlands', href: 'https://www.grantthornton.nl/' },
    { name: 'Spain', href: 'https://www.grantthornton.es/' },
    { name: 'United Kingdom', href: 'https://www.grantthornton.co.uk/' },
  ],
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState('middle-east');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timeout ref for delayed close
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter on menu item
  const handleMenuEnter = (menuKey: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menuKey);
    setSearchOpen(false);
    setRegionOpen(false);
  };

  // Handle mouse leave - delayed close for smooth UX
  const handleMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // Handle mouse enter on dropdown panel
  const handlePanelEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const openSearch = () => {
    setSearchOpen(true);
    setActiveMenu(null);
    setRegionOpen(false);
    setMobileMenuOpen(false);
  };

  const openRegion = () => {
    setRegionOpen(true);
    setActiveMenu(null);
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSearchOpen(false);
    setRegionOpen(false);
    setActiveMenu(null);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          isScrolled || activeMenu ? 'shadow-md' : ''
        }`}
      >
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" onClick={() => setActiveMenu(null)}>
              <div className="relative h-10 sm:h-12 md:h-16 w-auto">
                <Image
                  src="/logo.png"
                  alt="Grant Thornton"
                  width={320}
                  height={128}
                  className="h-10 sm:h-12 md:h-16 w-auto"
                  quality={100}
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 ml-16">
              {/* Mega menu items - hover triggered */}
              {Object.entries(navigationData).map(([key, data]) => (
                <button
                  key={key}
                  onMouseEnter={() => handleMenuEnter(key)}
                  onMouseLeave={handleMenuLeave}
                  className={`flex items-center text-[15px] font-medium transition-all duration-500 relative pb-1 ${
                    activeMenu === key ? 'text-[#4F2D7F]' : 'text-[#4F2D7F] hover:text-[#CF2020]'
                  }`}
                >
                  <span>{data.label}</span>
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeMenu === key ? 'rotate-180' : ''
                    }`}
                  />
                  {/* Dark Coral underline for active - per brand guidelines */}
                  {activeMenu === key && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CF2020]" />
                  )}
                </button>
              ))}

              {/* Simple nav items */}
              {simpleNavItems.map((item) => (
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-[#4F2D7F] hover:text-[#4F2D7F]/70 transition-colors pb-1"
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[15px] font-medium text-[#4F2D7F] hover:text-[#4F2D7F]/70 transition-all duration-500 pb-1"
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={openSearch}
                className="p-1.5 sm:p-2 text-[#4F2D7F] hover:text-[#CF2020] transition-all duration-500"
                aria-label="Search"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={openRegion}
                className="p-1.5 sm:p-2 text-[#4F2D7F] hover:text-[#CF2020] transition-all duration-500"
                aria-label="Select region"
              >
                <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-1.5 sm:p-2 text-[#4F2D7F] hover:text-[#CF2020] transition-all duration-500"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Panel */}
        {activeMenu && navigationData[activeMenu as keyof typeof navigationData] && (
          <div 
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl hidden lg:block transition-all duration-500 ease-in-out"
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-16 py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {navigationData[activeMenu as keyof typeof navigationData].columns.map((column, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold text-[#CF2020] mb-5 uppercase tracking-wide">
                      {column.title}
                    </h3>
                    <ul className="space-y-4">
                      {column.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link
                            href={link.href}
                            className="group flex items-center text-sm text-[#333333] hover:text-[#CF2020] transition-all duration-500"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span>{link.label}</span>
                            <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-500 ease-in-out">
            <div className="px-4 sm:px-6 py-4 sm:py-6">
              {Object.entries(navigationData).map(([key, data]) => (
                <div key={key} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setExpandedMobileSection(expandedMobileSection === key ? null : key)}
                    className="flex items-center justify-between w-full py-3 sm:py-4 text-[15px] sm:text-[16px] font-medium text-[#4F2D7F] transition-all duration-500"
                  >
                    <span>{data.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                        expandedMobileSection === key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedMobileSection === key && (
                    <div className="pb-4 sm:pb-6 pl-4 sm:pl-6">
                      {data.columns.map((column, idx) => (
                        <div key={idx} className="mb-4 sm:mb-6">
                          <h3 className="text-[11px] sm:text-xs font-bold text-[#CF2020] mb-2 sm:mb-3 uppercase tracking-wide">
                            {column.title}
                          </h3>
                          <ul className="space-y-2 sm:space-y-3">
                            {column.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <Link
                                  href={link.href}
                                  className="text-sm sm:text-base text-[#333333] hover:text-[#CF2020] transition-all duration-500"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setExpandedMobileSection(null);
                                  }}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Simple nav items in mobile */}
              {simpleNavItems.map((item) => (
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 sm:py-4 text-[15px] sm:text-[16px] font-medium text-[#4F2D7F] border-b border-gray-200 transition-all duration-300 hover:text-[#CF2020]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block py-3 sm:py-4 text-[15px] sm:text-[16px] font-medium text-[#4F2D7F] border-b border-gray-200 transition-all duration-500 hover:text-[#CF2020]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-x-0 top-0 z-[60] bg-white shadow-2xl transition-all duration-500 ease-in-out" style={{ height: '30vh', minHeight: '200px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-full flex flex-col">
            <div className="flex justify-end pt-4 sm:pt-6 md:pt-8">
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 sm:p-3 text-[#4F2D7F] hover:text-[#CF2020] transition-all duration-500"
                aria-label="Close search"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center pb-8 sm:pb-12 md:pb-16">
              <input
                type="text"
                placeholder="Search"
                autoFocus
                className="w-full max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-[#4F2D7F] placeholder-gray-400 border-b-2 border-gray-300 focus:border-[#CF2020] outline-none pb-3 sm:pb-4 md:pb-5 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Region Selector Full-Screen Overlay */}
      {regionOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-auto transition-all duration-500 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            {/* Header */}
            <div className="flex justify-between items-center py-4 sm:py-6 md:py-8 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4F2D7F]">Select your location</h2>
              <button
                onClick={() => setRegionOpen(false)}
                className="p-2 sm:p-3 text-[#4F2D7F] hover:text-[#CF2020] transition-all duration-300"
                aria-label="Close region selector"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </button>
            </div>

            {/* Region Tabs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-10 mt-6 sm:mt-8 md:mt-10 border-b border-gray-200">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base font-medium transition-all duration-500 relative ${
                    activeRegion === region.id
                      ? 'text-[#4F2D7F]'
                      : 'text-gray-500 hover:text-[#CF2020]'
                  }`}
                >
                  {region.label}
                  {activeRegion === region.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CF2020]" />
                  )}
                </button>
              ))}
            </div>

            {/* Countries Grid */}
            <div className="py-8 sm:py-12 md:py-16">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                {countriesByRegion[activeRegion]?.map((country) => (
                  <a
                    key={country.name}
                    href={country.href}
                    target={country.href.startsWith('http') ? '_blank' : '_self'}
                    rel={country.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`text-sm sm:text-base font-medium transition-all duration-500 ${
                      country.name === 'Kuwait' 
                        ? 'text-[#CF2020] font-bold' 
                        : 'text-[#4F2D7F] hover:text-[#CF2020]'
                    }`}
                    onClick={() => country.href === '/' && setRegionOpen(false)}
                  >
                    {country.name}
                    {country.name === 'Kuwait' && (
                      <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs bg-[#4F2D7F] text-white px-1.5 sm:px-2 py-0.5 rounded">Current</span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Global Site Link */}
            <div className="pb-8 sm:pb-12 md:pb-16 border-t border-gray-200 pt-6 sm:pt-8 md:pt-10">
              <a
                href="https://www.grantthornton.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm sm:text-base text-[#4F2D7F] hover:text-[#CF2020] font-medium transition-all duration-500"
              >
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                Visit Grant Thornton Global
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-18 md:h-20" />
    </>
  );
}
