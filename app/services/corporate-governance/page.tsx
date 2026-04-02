'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function CorporateGovernancePage() {
  return (
    <ServicePageTemplate
      title="Corporate Governance"
      subtitle="Operational Advisory"
      description="Grant Thornton provides your company with corporate governance services in line with international standards as well as local benchmarks like CMA, CBK etc. We help organizations build robust governance frameworks that enhance transparency, accountability, and stakeholder confidence."
      features={[
        {
          title: 'Gap Analyses',
          description: 'Comprehensive assessment of your current governance framework against regulatory requirements and best practices.',
          items: [
            'Current state assessment',
            'Regulatory compliance gap identification',
            'Best practice benchmarking',
            'Remediation roadmap development',
          ],
        },
        {
          title: 'Board Restructuring',
          description: 'Support in optimizing board composition, structure, and effectiveness to meet governance standards.',
          items: [
            'Board composition review',
            'Committee structure optimization',
            'Board charter development',
            'Independence assessment',
          ],
        },
        {
          title: 'Documentation & Implementation',
          description: 'Full-scale documentation and implementation support for governance frameworks and policies.',
          items: [
            'Policy and procedure development',
            'Governance manual creation',
            'Implementation support',
            'Training and awareness programs',
          ],
        },
        {
          title: 'CMA & CBK Compliance',
          description: 'Specialized support for compliance with Capital Markets Authority and Central Bank of Kuwait requirements.',
          items: [
            'CMA governance requirements',
            'CBK regulatory compliance',
            'Disclosure requirements',
            'Regulatory reporting support',
          ],
        },
        {
          title: 'Audit Committee Support',
          description: 'Assistance in establishing and enhancing audit committee effectiveness and oversight functions.',
          items: [
            'Audit committee charter',
            'Meeting protocols and documentation',
            'Oversight framework development',
            'External auditor coordination',
          ],
        },
        {
          title: 'Risk & Control Governance',
          description: 'Integration of risk management and internal control within the governance framework.',
          items: [
            'Risk governance structure',
            'Internal control framework',
            'Risk appetite definition',
            'Monitoring and reporting mechanisms',
          ],
        },
      ]}
      benefits={[
        'Alignment with international governance standards',
        'Compliance with local regulatory requirements (CMA, CBK)',
        'Enhanced board effectiveness and oversight',
        'Improved stakeholder confidence and transparency',
        'Reduced governance and compliance risks',
        'Sustainable governance practices',
      ]}
    />
  );
}
