'use client';

import { useState } from 'react';

const services = [
  {
    id: 'services',
    title: 'Services',
    description: 'We are a different kind of accounting and advisory firm, ready to meet the very diverse demands of today\'s business. Delivering fresh perspectives, practical solutions, and consistent high quality.',
  },
  {
    id: 'advisory',
    title: 'Advisory',
    description: 'We offer a comprehensive range of advisory services to help you create, transform and protect value. Our advisory team brings deep expertise across strategy, transactions, risk, and operations to help you navigate complex business challenges.',
  },
  {
    id: 'assurance',
    title: 'Assurance',
    description: 'We have the vision, depth, and global reach to serve businesses who are positioned to thrive in Kuwait. Our assurance services deliver real value through independent audit, risk advisory, and regulatory compliance support.',
  },
  {
    id: 'zakat-tax',
    title: 'Zakat and Tax',
    description: 'Our experienced tax team can support core compliance and are at the leading edge of transformation and tax landscape across Kuwait. We help businesses navigate complex regulatory requirements while optimizing their tax position.',
  },
  {
    id: 'outsourcing',
    title: 'Outsourcing',
    description: 'Our outsourcing services help you focus on your core business while we handle the complexities of finance, accounting, and payroll operations with precision and efficiency.',
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState('services');

  const activeContent = services.find(s => s.id === activeService);

  return (
    <section className="py-20 lg:py-28 bg-gt-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <p className="label-text text-gt-purple mb-4">About us</p>
        </div>

        {/* Tab Layout - Sidebar on left, Content on right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Vertical Tab Menu */}
          <div className="lg:w-1/3">
            <nav className="flex flex-col space-y-1">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`text-left px-5 py-4 text-lg font-medium transition-all duration-500 border-l-4 ${
                    activeService === service.id
                      ? 'border-l-gt-purple bg-white text-gt-purple shadow-sm'
                      : 'border-l-transparent text-foreground hover:bg-white/50 hover:border-l-gt-purple/30'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side - Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-sm min-h-[300px]">
              <h2 className="heading-xl mb-6">{activeContent?.title}</h2>
              <p className="body-lg text-muted-foreground leading-relaxed">
                {activeContent?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
