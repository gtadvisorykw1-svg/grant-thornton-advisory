'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function InternalAuditPage() {
  return (
    <ServicePageTemplate
      title="Internal Audit"
      subtitle="Operational Advisory"
      description="Grant Thornton's internal audit services, including co-sourced and outsourced internal audit and effectiveness reviews, provide you with independent, objective support in the design, implementation and operating effectiveness of controls."
      features={[
        {
          title: 'Outsourced Internal Audit',
          description: 'Our outsourced internal audit solutions help running your full internal audit function, developing your Internal Audit Charter, undertaking an assessment of audit needs and delivering and reporting on internal audit reviews.',
          items: [
            'Full internal audit function management',
            'Internal Audit Charter development',
            'Assessment of audit needs',
            'Delivering and reporting on internal audit reviews',
          ],
        },
        {
          title: 'Co-sourced Internal Audit',
          description: 'With our co-sourced internal audit review you get project management expertise and access to specialist internal audit skills including IT, treasury, tax, pensions, PFI and Financial Services compliance.',
          items: [
            'Project management expertise',
            'IT audit specialists',
            'Treasury and tax specialists',
            'Financial Services compliance',
          ],
        },
        {
          title: 'Internal Audit Effectiveness Reviews',
          description: 'We help evaluate and enhance the effectiveness of your internal audit function to ensure it meets best practices and regulatory requirements.',
          items: [
            'Function assessment and benchmarking',
            'Quality assurance reviews',
            'Best practice implementation',
            'Regulatory compliance alignment',
          ],
        },
        {
          title: 'Internal Audit Charter Development',
          description: 'Development of comprehensive Internal Audit Charters that define the purpose, authority, and responsibility of the internal audit function.',
          items: [
            'Purpose and scope definition',
            'Authority and responsibilities',
            'Reporting relationships',
            'Standards compliance',
          ],
        },
      ]}
      benefits={[
        'Independent and objective assessment of controls',
        'Access to specialist skills and industry expertise',
        'Cost-effective alternative to full in-house teams',
        'Flexibility to scale resources based on needs',
        'Fresh perspective on risk and control environment',
        'Alignment with international auditing standards',
      ]}
    />
  );
}
