'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function TrainingPage() {
  return (
    <ServicePageTemplate
      title="Training & Development"
      subtitle="Operational Advisory"
      description="Grant Thornton provides professional training programs through our affiliation with the Institute of Commercial Management, UK. We offer comprehensive training solutions to develop your workforce and enhance organizational capabilities."
      features={[
        {
          title: 'Corporate Training',
          description: 'Customized training programs designed to address specific organizational needs and objectives.',
          items: [
            'Needs assessment',
            'Custom curriculum design',
            'Delivery and facilitation',
            'Impact measurement',
          ],
        },
        {
          title: 'In-House Training',
          description: 'On-site training programs delivered at your premises for convenience and team cohesion.',
          items: [
            'On-site delivery',
            'Team-based learning',
            'Flexible scheduling',
            'Customized content',
          ],
        },
        {
          title: 'Public Training',
          description: 'Open enrollment programs covering a wide range of professional development topics.',
          items: [
            'Scheduled programs',
            'Networking opportunities',
            'Industry best practices',
            'Professional certification prep',
          ],
        },
        {
          title: 'Professional Certifications',
          description: 'Preparation programs for internationally recognized professional certifications.',
          items: [
            'ICM certifications',
            'Finance certifications',
            'Management certifications',
            'Exam preparation',
          ],
        },
        {
          title: 'Leadership Development',
          description: 'Programs designed to develop leadership capabilities at all organizational levels.',
          items: [
            'Executive coaching',
            'Leadership workshops',
            'Management development',
            'Succession planning support',
          ],
        },
        {
          title: 'Technical Training',
          description: 'Specialized training in technical areas including finance, audit, and compliance.',
          items: [
            'Financial reporting (IFRS)',
            'Internal audit techniques',
            'Risk management',
            'Corporate governance',
          ],
        },
      ]}
      benefits={[
        'Affiliation with Institute of Commercial Management, UK',
        'Experienced and qualified trainers',
        'Customized programs for your needs',
        'Practical and applicable content',
        'Internationally recognized certifications',
        'Flexible delivery options',
      ]}
    />
  );
}
