'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function ProjectFinancePage() {
  return (
    <ServicePageTemplate
      title="Project Finance"
      subtitle="Transaction Advisory"
      description="Grant Thornton's project finance services provide comprehensive support for bid and procurement strategies, commercial management, and payment mechanism development. We help you structure and execute complex project financing arrangements."
      features={[
        {
          title: 'Negotiation Strategy',
          description: 'Development of effective negotiation strategies to achieve optimal terms and conditions.',
          items: [
            'Negotiation planning',
            'Term sheet development',
            'Stakeholder management',
            'Deal structuring advice',
          ],
        },
        {
          title: 'Tender Strategy',
          description: 'Strategic approach to tender processes to maximize success rates and value.',
          items: [
            'Tender analysis',
            'Bid strategy development',
            'Compliance review',
            'Competitive positioning',
          ],
        },
        {
          title: 'Bid Management',
          description: 'End-to-end bid management support from preparation through submission and evaluation.',
          items: [
            'Bid preparation',
            'Documentation management',
            'Response coordination',
            'Post-bid support',
          ],
        },
        {
          title: 'Payment Mechanisms',
          description: 'Design and implementation of payment mechanisms that align incentives and manage risk.',
          items: [
            'Payment structure design',
            'Performance metrics',
            'Risk allocation',
            'Milestone-based payments',
          ],
        },
        {
          title: 'Financial Structuring',
          description: 'Optimization of project financial structure including debt, equity, and hybrid instruments.',
          items: [
            'Capital structure optimization',
            'Debt sizing and terms',
            'Equity requirements',
            'Risk allocation mechanisms',
          ],
        },
        {
          title: 'Commercial Management',
          description: 'Ongoing commercial management support throughout the project lifecycle.',
          items: [
            'Contract management',
            'Variation management',
            'Dispute resolution',
            'Performance monitoring',
          ],
        },
      ]}
      benefits={[
        'Optimized project financing structures',
        'Enhanced bid success rates',
        'Effective risk allocation',
        'Strong negotiation outcomes',
        'Comprehensive commercial support',
        'Experienced project finance professionals',
      ]}
    />
  );
}
