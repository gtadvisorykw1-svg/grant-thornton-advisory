'use client';

import { ArrowRight } from 'lucide-react';

export function VisionG20Section() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Doing business in Kuwait */}
      <div className="doing-business-card relative px-8 lg:px-16 py-20 lg:py-24 bg-[#4F2D7F] overflow-hidden">
        {/* Background pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative z-10 max-w-lg">
          {/* Label */}
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white mb-6 bg-[#6B3FA0] border border-white/20">
            Report
          </span>

          {/* Title */}
          <h2 className="text-3xl lg:text-[40px] lg:leading-[48px] font-bold text-white mb-6">
            Doing business in Kuwait
          </h2>

          {/* Description */}
          <p className="text-white/85 text-lg leading-relaxed mb-10">
            Learn more about company structures and tax in Kuwait, and how Grant Thornton Kuwait can help you set up your activity.
          </p>

          {/* Button */}
          <a
            href="https://www.grantthornton.com.kw/globalassets/1.-member-firms/bronze/kuwait/grant-thornton---doing-business-in-kuwait---2021-tax-services-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="doing-business-btn inline-flex items-center gap-3 px-8 py-4 rounded bg-transparent text-white text-base font-medium border-2 border-white transition-all duration-500 hover:bg-white hover:text-[#4F2D7F] group"
          >
            <span>Download our report</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Right Column - Bringing insights to help you grow */}
      <div className="insights-card relative px-8 lg:px-16 py-20 lg:py-24 bg-[#F2F0EE] overflow-hidden">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(79, 45, 127, 0.03) 100%)',
          }}
        />
        
        <div className="relative z-10 max-w-lg">
          {/* Label */}
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-[#4F2D7F] bg-white border border-[#4F2D7F]/20">
            Insights
          </span>

          {/* Title */}
          <h2 className="text-3xl lg:text-[40px] lg:leading-[48px] font-bold text-gray-900 mb-6">
            Bringing insights to help you grow
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            We work with dynamic organisations every day, addressing and understanding the most important issues, gaining a deep understanding and bringing a fresh perspective.
          </p>

          {/* Button */}
          <a
            href="https://www.grantthornton.global/en/insights/"
            target="_blank"
            rel="noopener noreferrer"
            className="insights-btn inline-flex items-center gap-3 px-8 py-4 rounded text-white text-base font-medium bg-[#CF2020] border-2 border-[#CF2020] transition-all duration-500 hover:bg-[#B01B1B] hover:border-[#B01B1B] group"
          >
            <span>Discover more</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
