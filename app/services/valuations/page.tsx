'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function ValuationsPage() {
  return (
    <ServicePageTemplate
      title="Valuations"
      subtitle="Transaction Advisory"
      description="Within our valuations group, we provide viable solutions and advice based on real experience to add value to our clients business, to help them grow, build and realize their maximum value."
      features={[
        {
          title: 'Commercial Valuations',
          description: 'Comprehensive business valuations for transactions, strategic planning, and corporate restructuring purposes.',
          items: [
            'Business enterprise valuations',
            'Equity and debt valuations',
            'Fair market value assessments',
            'Strategic transaction support',
          ],
        },
        {
          title: 'Intangible Valuations',
          description: 'Specialized valuation of intangible assets including intellectual property, brands, and customer relationships.',
          items: [
            'Intellectual property valuation',
            'Brand and trademark valuation',
            'Customer relationship valuation',
            'Technology and software valuation',
          ],
        },
        {
          title: 'Litigation & Dispute',
          description: 'Expert valuation services for litigation support, arbitration, and dispute resolution matters.',
          items: [
            'Expert witness testimony',
            'Damages quantification',
            'Shareholder disputes',
            'Contract disputes',
          ],
        },
        {
          title: 'Regulatory Valuations',
          description: 'Valuations that meet regulatory requirements and standards for compliance and reporting purposes.',
          items: [
            'Regulatory compliance valuations',
            'Central Bank requirements',
            'CMA compliance',
            'Tax authority requirements',
          ],
        },
        {
          title: 'Purchase Price Allocation',
          description: 'Allocation of purchase consideration to acquired assets and liabilities for financial reporting purposes.',
          items: [
            'Tangible asset valuation',
            'Intangible asset identification',
            'Goodwill calculation',
            'IFRS 3 compliance',
          ],
        },
        {
          title: 'Restructuring Valuations',
          description: 'Valuation support for corporate restructuring, reorganization, and turnaround situations.',
          items: [
            'Distressed asset valuations',
            'Reorganization support',
            'Solvency opinions',
            'Fairness opinions',
          ],
        },
      ]}
      benefits={[
        'Deep industry expertise across multiple sectors',
        'Internationally recognized valuation standards (IFRS, IVS)',
        'Experienced team with cross-border transaction experience',
        'Independent and objective assessments',
        'Robust and defensible valuation methodologies',
        'Local market knowledge with global perspective',
      ]}
    />
  );
}
