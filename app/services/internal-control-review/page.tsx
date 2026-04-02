'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function InternalControlReviewPage() {
  return (
    <ServicePageTemplate
      title="Internal Control Review"
      subtitle="Operational Advisory"
      description="Grant Thornton's internal control review services help organizations assess, design, and strengthen their internal control environment. We provide independent evaluation of control effectiveness to ensure your business processes are properly safeguarded against risks."
      features={[
        {
          title: 'Control Environment Assessment',
          description: 'Comprehensive evaluation of your organization\'s overall control environment and governance structure.',
          items: [
            'Control environment evaluation',
            'Tone at the top assessment',
            'Organizational structure review',
            'Policies and procedures analysis',
          ],
        },
        {
          title: 'Process Control Reviews',
          description: 'Detailed review of controls within key business processes to identify gaps and improvement opportunities.',
          items: [
            'Financial process controls',
            'Operational process controls',
            'Compliance process controls',
            'IT general controls',
          ],
        },
        {
          title: 'Control Design & Implementation',
          description: 'Support in designing and implementing effective controls tailored to your organization\'s risk profile.',
          items: [
            'Control framework design',
            'Control documentation',
            'Implementation support',
            'Control testing procedures',
          ],
        },
        {
          title: 'SOX & Regulatory Compliance',
          description: 'Assessment of internal controls for compliance with SOX, regulatory requirements, and industry standards.',
          items: [
            'SOX compliance assessment',
            'Regulatory control requirements',
            'Control deficiency remediation',
            'Management testing support',
          ],
        },
        {
          title: 'Fraud Risk Assessment',
          description: 'Evaluation of controls designed to prevent, detect, and respond to fraud risks.',
          items: [
            'Fraud risk identification',
            'Anti-fraud control assessment',
            'Segregation of duties review',
            'Fraud response procedures',
          ],
        },
        {
          title: 'Continuous Monitoring',
          description: 'Development of ongoing monitoring mechanisms to ensure sustained control effectiveness.',
          items: [
            'Key control indicators',
            'Automated monitoring tools',
            'Exception reporting',
            'Periodic control testing',
          ],
        },
      ]}
      benefits={[
        'Independent and objective control assessment',
        'Identification of control gaps and weaknesses',
        'Enhanced risk mitigation and fraud prevention',
        'Improved operational efficiency and effectiveness',
        'Regulatory compliance assurance',
        'Strengthened stakeholder confidence',
      ]}
    />
  );
}
