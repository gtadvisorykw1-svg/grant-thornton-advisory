'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function DueDiligencePage() {
  return (
    <ServicePageTemplate
      title="Due Diligence"
      subtitle="Transaction Advisory"
      description="We'll help improve your understanding of the business you are buying and clearly identify the key issues that affect the deal. Our due diligence process can be your integrated, one-stop solution to help you examine the fine print and uncover all of the detailed answers to the complex questions you have about your acquisition."
      features={[
        {
          title: 'Vendor Due Diligence',
          description: 'Comprehensive vendor due diligence reports to support the sale process and enhance transaction value.',
          items: [
            'Financial due diligence reports',
            'Quality of earnings analysis',
            'Working capital assessment',
            'Vendor assist services',
          ],
        },
        {
          title: 'Acquisition Due Diligence',
          description: 'Thorough analysis of target companies to identify risks, opportunities, and deal considerations.',
          items: [
            'Financial statement analysis',
            'Earnings quality review',
            'Balance sheet verification',
            'Cash flow analysis',
          ],
        },
        {
          title: 'Operational Due Diligence',
          description: 'Assessment of operational aspects including processes, systems, and organizational capabilities.',
          items: [
            'Operations review',
            'Process efficiency analysis',
            'Systems and IT assessment',
            'Supply chain evaluation',
          ],
        },
        {
          title: 'Management Assessment',
          description: 'Evaluation of management team capabilities, organizational structure, and human capital considerations.',
          items: [
            'Leadership assessment',
            'Organizational structure review',
            'Key personnel evaluation',
            'Culture alignment analysis',
          ],
        },
        {
          title: 'Tax Due Diligence',
          description: 'Comprehensive review of tax positions, exposures, and planning opportunities.',
          items: [
            'Tax compliance review',
            'Tax risk identification',
            'Transfer pricing analysis',
            'Tax structuring opportunities',
          ],
        },
        {
          title: 'IT Due Diligence',
          description: 'Assessment of technology infrastructure, systems, and digital capabilities.',
          items: [
            'IT infrastructure review',
            'Cybersecurity assessment',
            'Systems integration planning',
            'Technology roadmap evaluation',
          ],
        },
      ]}
      benefits={[
        'Integrated, one-stop solution for comprehensive due diligence',
        'Experienced team with deep transaction expertise',
        'Industry-specific knowledge and insights',
        'Risk identification and mitigation strategies',
        'Support throughout the entire transaction lifecycle',
        'Clear and actionable reporting',
      ]}
    />
  );
}
