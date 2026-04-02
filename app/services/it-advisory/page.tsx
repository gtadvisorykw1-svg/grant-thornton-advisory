'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function ITAdvisoryPage() {
  return (
    <ServicePageTemplate
      title="IT Advisory"
      subtitle="Operational Advisory"
      description="Grant Thornton's IT advisory services help organizations develop and implement IT best practices and techniques across assessment, due diligence, and strategy. We bridge the gap between technology and business to drive digital transformation."
      features={[
        {
          title: 'IT Assessment',
          description: 'Comprehensive evaluation of your IT environment, capabilities, and alignment with business objectives.',
          items: [
            'IT infrastructure assessment',
            'Application portfolio review',
            'IT governance evaluation',
            'Capability maturity assessment',
          ],
        },
        {
          title: 'IT Due Diligence',
          description: 'Technology-focused due diligence for mergers, acquisitions, and investments.',
          items: [
            'Technology stack evaluation',
            'IT cost analysis',
            'Integration complexity assessment',
            'Technical debt identification',
          ],
        },
        {
          title: 'IT Strategy',
          description: 'Development of IT strategies aligned with business goals and digital transformation objectives.',
          items: [
            'IT roadmap development',
            'Digital transformation strategy',
            'Technology investment planning',
            'Vendor strategy',
          ],
        },
        {
          title: 'SOC Reports',
          description: 'System and Organization Controls (SOC) reporting services for service organizations.',
          items: [
            'SOC 1 reports',
            'SOC 2 reports',
            'SOC readiness assessment',
            'Control gap remediation',
          ],
        },
        {
          title: 'Cybersecurity Advisory',
          description: 'Assessment and enhancement of cybersecurity posture to protect against evolving threats.',
          items: [
            'Security assessment',
            'Vulnerability management',
            'Security architecture review',
            'Incident response planning',
          ],
        },
        {
          title: 'IT Governance & Risk',
          description: 'Establishment of IT governance frameworks and risk management practices.',
          items: [
            'IT governance framework',
            'IT risk assessment',
            'Policy development',
            'Compliance management',
          ],
        },
      ]}
      benefits={[
        'Alignment of IT with business strategy',
        'Optimized IT investments and costs',
        'Enhanced cybersecurity posture',
        'Improved IT governance and controls',
        'Support for digital transformation',
        'Independent and objective IT assessment',
      ]}
    />
  );
}
