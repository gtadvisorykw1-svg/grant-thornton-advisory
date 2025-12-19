'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Navigation data matching the captured component
const navigationData = {
  services: {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    columns: [
      {
        title: 'Assurance',
        href: '/services/assurance',
        hasExpander: true,
        links: [
          { label: 'Assurance', href: '/services/assurance' },
          { label: 'IFRS', href: '/services/assurance/ifrs' },
          { label: 'Audit quality monitoring', href: '/services/assurance/audit-quality-monitoring' },
          { label: 'Global audit technology', href: '/services/assurance/global-audit-technology' },
        ],
      },
      {
        title: 'Local Content Services',
        href: '/services/local-content',
        hasExpander: false,
      },
      {
        title: 'China Desk',
        href: '/services/china-desk',
        hasExpander: false,
      },
      {
        title: 'Zakat and Tax',
        href: '/services/tax',
        hasExpander: false,
      },
      {
        title: 'Advisory',
        href: '/advisory',
        hasExpander: true,
        links: [
          { label: 'Advisory', href: '/advisory' },
          { label: 'Supply Chain and Operation Services', href: '/advisory/supply-chain' },
          { label: 'Business risk services', href: '/advisory/business-risk-services' },
          { label: 'Marketing and Client Service', href: '/advisory/marketing-client-service' },
          { label: 'Forensic services', href: '/advisory/forensic-services' },
          { label: 'Deal Advisory', href: '/advisory/deal-advisory' },
          { label: 'Growth services', href: '/advisory/growth-services' },
        ],
      },
    ],
  },
  insights: {
    label: 'Insights',
    href: '/insights',
    hasDropdown: false,
  },
  industries: {
    label: 'Industries',
    href: '/industries',
    hasDropdown: true,
    columns: [
      { title: 'Energy & natural resources', href: '/industries/energy-resources' },
      { title: 'Financial services', href: '/industries/financial-services' },
      { title: 'Consumer products', href: '/industries/consumer-products' },
      { title: 'Travel, tourism & leisure', href: '/industries/hospitality-tourism' },
      { title: 'Healthcare', href: '/industries/healthcare' },
      { title: 'Public sector', href: '/industries/public-sector' },
      { title: 'Real estate & construction', href: '/industries/real-estate-construction' },
      { title: 'Technology, media & telecommunications', href: '/industries/technology' },
    ],
  },
  meetOurPeople: {
    label: 'Meet our people',
    href: '/about/leadership',
    hasDropdown: false,
  },
  careers: {
    label: 'Careers',
    href: '/careers',
    hasDropdown: true,
    groupTitle: 'Careers',
    columns: [
      {
        title: 'The Grant Thornton Difference',
        href: '/careers/grant-thornton-difference',
        hasExpander: true,
        links: [
          { label: 'The Grant Thornton Difference', href: '/careers/grant-thornton-difference' },
          { label: 'Our values', href: '/careers/values' },
          { label: 'Global culture', href: '/careers/global-culture' },
          { label: 'Learning & development', href: '/careers/learning-development' },
          { label: 'Global mobility', href: '/careers/mobility' },
          { label: 'Diversity', href: '/careers/diversity' },
        ],
      },
      { title: 'Students', href: '/careers/students' },
      { title: 'Experienced hires', href: '/careers/experienced-hires' },
    ],
  },
  contact: {
    label: 'Contact us',
    href: '/contact',
    hasDropdown: false,
  },
  about: {
    label: 'About Us',
    href: '/about',
    hasDropdown: false,
  },
};

// Dropdown arrow SVG component
const DropdownArrow = ({ isOpen, className = '' }: { isOpen?: boolean; className?: string }) => (
  <svg 
    className={`w-[10px] h-[8px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${className}`}
    viewBox="0 0 10 8" 
    fill="none"
  >
    <path d="M5 8L0 0H10L5 8Z" fill="currentColor" />
  </svg>
);

// Expander arrow for submenu items
const ExpanderArrow = ({ className = '' }: { className?: string }) => (
  <svg 
    className={`w-[10px] h-[8px] -rotate-90 ${className}`}
    viewBox="0 0 10 8" 
    fill="none"
  >
    <path d="M5 8L0 0H10L5 8Z" fill="currentColor" />
  </svg>
);

export function MegaMenuNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMenuEnter = (menuKey: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    const menuData = navigationData[menuKey as keyof typeof navigationData];
    if (menuData.hasDropdown) {
      setActiveMenu(menuKey);
    }
  };

  const handleMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handlePanelEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="mega-menu-nav flex justify-center flex-1 my-[22px]">
      <ul className="flex flex-wrap justify-center items-center gap-0 max-w-[calc(100%-70px)]">
        {Object.entries(navigationData).map(([key, data]) => (
          <li 
            key={key}
            className="flex items-center mr-5 pt-[3.9px]"
            onMouseEnter={() => handleMenuEnter(key)}
            onMouseLeave={handleMenuLeave}
          >
            {data.hasDropdown ? (
              <button
                className={`mega-nav-link relative flex items-center text-base leading-[18px] whitespace-nowrap pb-1 transition-all duration-300 ${
                  activeMenu === key 
                    ? 'text-[#CE2C2C]' 
                    : 'text-[#4F2D7F] hover:text-[#CE2C2C]'
                }`}
                aria-expanded={activeMenu === key}
                aria-label={data.label}
              >
                <span className="mr-3">{data.label}</span>
                <span className={`absolute right-[-12px] top-0 bottom-1 flex items-center transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`}>
                  <DropdownArrow 
                    isOpen={activeMenu === key} 
                    className={activeMenu === key ? 'text-[#CE2C2C]' : 'text-[#A06DFF]'} 
                  />
                </span>
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#CE2C2C] transition-all duration-350 ${
                    activeMenu === key ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    backgroundImage: 'linear-gradient(#CE2C2C, #CE2C2C)',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </button>
            ) : (
              <Link
                href={data.href}
                className="mega-nav-link relative text-base leading-[18px] whitespace-nowrap text-[#4F2D7F] hover:text-[#CE2C2C] pb-1 transition-all duration-300"
              >
                {data.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CE2C2C] hover:w-full transition-all duration-350" />
              </Link>
            )}

            {/* Dropdown Panel */}
            {data.hasDropdown && activeMenu === key && (
              <div 
                className="fixed top-[70px] left-0 right-0 z-10 bg-white rounded-b-3xl shadow-lg overflow-hidden transition-all duration-300"
                onMouseEnter={handlePanelEnter}
                onMouseLeave={handleMenuLeave}
                style={{
                  animation: 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                }}
              >
                <div className="max-h-[530px] overflow-y-auto mb-5">
                  <div className="max-w-[1268px] mx-auto px-8 py-4 pb-20">
                    {/* Group title for Careers */}
                    {'groupTitle' in data && data.groupTitle && (
                      <div className="mt-6 mb-2 text-[#666666] font-light">
                        <Link href={data.href} className="text-[#2B144D] hover:text-[#4F2D7F] transition-colors">
                          {data.groupTitle}
                        </Link>
                      </div>
                    )}
                    
                    <ul className="grid grid-cols-3 gap-x-8">
                      {data.columns?.map((column, idx) => (
                        <li 
                          key={idx} 
                          className="pt-6 transition-all duration-300"
                          style={{
                            animation: `fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${0.035 * (idx + 1)}s forwards`,
                            opacity: 0,
                            transform: 'translateY(-15px)',
                          }}
                        >
                          {/* Column header with optional expander */}
                          {'hasExpander' in column && column.hasExpander ? (
                            <div className="inline-flex items-center">
                              <Link 
                                href={column.href}
                                className="flex items-center text-[#2B144D] font-light hover:text-[#4F2D7F] transition-colors"
                              >
                                <span>{column.title}</span>
                                <ExpanderArrow className="ml-1 text-[#A06DFF]" />
                              </Link>
                            </div>
                          ) : (
                            <Link 
                              href={column.href}
                              className="inline-flex items-center text-[#2B144D] font-light hover:text-[#4F2D7F] transition-colors"
                            >
                              {column.title}
                            </Link>
                          )}

                          {/* Sub-links */}
                          {'links' in column && column.links && (
                            <div className="mt-6 mb-9">
                              <ul className="border-l border-[#A06DFF] pl-4 pt-1">
                                {column.links.map((link, linkIdx) => (
                                  <li 
                                    key={linkIdx} 
                                    className={linkIdx > 0 ? 'mt-4' : ''}
                                  >
                                    <Link
                                      href={link.href}
                                      className="inline-flex items-center text-sm leading-[22px] text-[#4F2D7F] hover:text-[#CE2C2C] transition-colors"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Gradient fade at bottom */}
                <div 
                  className="absolute bottom-5 left-0 right-3 h-10 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(transparent 0%, white 50%)',
                  }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            height: 0;
          }
          to {
            opacity: 1;
            height: auto;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mega-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: transparent;
        }
      `}</style>
    </nav>
  );
}

export default MegaMenuNav;
