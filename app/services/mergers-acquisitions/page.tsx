'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function MergersAcquisitionsPage() {
  return (
    <ServicePageTemplate
      title="Mergers & Acquisitions"
      subtitle="Transaction Advisory"
      description="Grant Thornton's M&A advisory services provide comprehensive support throughout the entire transaction lifecycle. From strategy development to deal execution and post-merger integration, we help you navigate complex transactions and maximize value creation."
      features={[
        {
          title: 'Sell-Side Advisory',
          description: 'Comprehensive support for business owners and shareholders looking to divest or exit their investments.',
          items: [
            'Business preparation and positioning',
            'Buyer identification and outreach',
            'Information memorandum preparation',
            'Negotiation and deal structuring',
          ],
        },
        {
          title: 'Buy-Side Advisory',
          description: 'Strategic guidance for acquirers seeking to identify, evaluate, and execute acquisition opportunities.',
          items: [
            'Target identification and screening',
            'Valuation and deal structuring',
            'Negotiation support',
            'Transaction execution',
          ],
        },
        {
          title: 'Merger Advisory',
          description: 'Expert guidance on merger transactions including strategic rationale, structure optimization, and integration planning.',
          items: [
            'Strategic fit assessment',
            'Merger structure optimization',
            'Synergy identification',
            'Integration planning support',
          ],
        },
        {
          title: 'Capital Raising',
          description: 'Support in raising equity and debt capital to fund growth initiatives, acquisitions, or refinancing needs.',
          items: [
            'Equity capital raising',
            'Debt financing advisory',
            'Investor presentation preparation',
            'Financial modeling and projections',
          ],
        },
        {
          title: 'Strategic Advisory',
          description: 'High-level strategic advice on corporate development, portfolio optimization, and growth strategies.',
          items: [
            'Corporate strategy development',
            'Portfolio review and optimization',
            'Market entry strategies',
            'Joint venture structuring',
          ],
        },
        {
          title: 'Post-Merger Integration',
          description: 'Support in realizing deal value through effective integration planning and execution.',
          items: [
            'Integration planning and execution',
            'Synergy realization tracking',
            'Change management support',
            'Performance monitoring',
          ],
        },
      ]}
      benefits={[
        'End-to-end transaction support from strategy to execution',
        'Deep sector expertise across multiple industries',
        'Access to global network for cross-border transactions',
        'Experienced deal professionals with proven track record',
        'Independent and objective advice focused on your interests',
        'Local market knowledge with international best practices',
      ]}
    />
  );
}
