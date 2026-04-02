'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function BusinessStrategyPage() {
  return (
    <ServicePageTemplate
      title="Business Strategy"
      subtitle="Transaction Advisory"
      description="Grant Thornton's business strategy services provide strategic planning and execution support to help you achieve your business objectives effectively. We partner with you to develop actionable strategies that drive sustainable growth."
      features={[
        {
          title: 'Strategic Planning',
          description: 'Development of comprehensive strategic plans aligned with your vision and market opportunities.',
          items: [
            'Vision and mission development',
            'Strategic objective setting',
            'Market positioning strategy',
            'Growth strategy development',
          ],
        },
        {
          title: 'Budgeting & Forecasting',
          description: 'Development of robust budgeting and forecasting processes to support strategic decision-making.',
          items: [
            'Annual budget development',
            'Rolling forecasts',
            'Variance analysis',
            'Performance tracking',
          ],
        },
        {
          title: 'PMO Services',
          description: 'Project Management Office services to ensure successful execution of strategic initiatives.',
          items: [
            'PMO setup and design',
            'Project governance',
            'Portfolio management',
            'Progress monitoring and reporting',
          ],
        },
        {
          title: 'Financial Restatement',
          description: 'Support in restating financial information for strategic purposes, transactions, or compliance.',
          items: [
            'Historical financial analysis',
            'Pro forma financials',
            'Carve-out financials',
            'IFRS conversion support',
          ],
        },
        {
          title: 'Business Transformation',
          description: 'Support for major business transformation initiatives to improve performance and competitiveness.',
          items: [
            'Operating model design',
            'Process optimization',
            'Change management',
            'Performance improvement',
          ],
        },
        {
          title: 'Market Entry Strategy',
          description: 'Strategic advice on entering new markets, including market assessment and entry mode selection.',
          items: [
            'Market opportunity assessment',
            'Entry mode analysis',
            'Partner identification',
            'Go-to-market planning',
          ],
        },
      ]}
      benefits={[
        'Clear strategic direction and priorities',
        'Actionable and implementable strategies',
        'Improved financial planning and control',
        'Successful execution of strategic initiatives',
        'Enhanced organizational performance',
        'Experienced strategy professionals',
      ]}
    />
  );
}
