'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function HumanCapitalAdvisoryPage() {
  return (
    <ServicePageTemplate
      title="Human Capital Advisory"
      subtitle="Operational Advisory"
      description="Grant Thornton's human capital advisory services help organizations establish HR culture and values as the foundation of organizational success. We provide comprehensive solutions to optimize your workforce and drive business performance."
      features={[
        {
          title: 'HR Diagnostic Reviews',
          description: 'Comprehensive assessment of your HR function, policies, and practices to identify improvement opportunities.',
          items: [
            'HR function assessment',
            'Policy and procedure review',
            'HR technology evaluation',
            'Best practice benchmarking',
          ],
        },
        {
          title: 'Organization Structure Design',
          description: 'Design and optimization of organizational structures to support business strategy and operational efficiency.',
          items: [
            'Organization design',
            'Role clarity and definition',
            'Span of control optimization',
            'Reporting relationships',
          ],
        },
        {
          title: 'Compensation & Benefits',
          description: 'Development of competitive compensation structures and benefits programs to attract and retain talent.',
          items: [
            'Salary structure design',
            'Benefits program development',
            'Market benchmarking',
            'Total rewards strategy',
          ],
        },
        {
          title: 'Performance Management',
          description: 'Design and implementation of performance management systems that drive accountability and results.',
          items: [
            'Performance appraisal systems',
            'KPI development',
            'Goal setting frameworks',
            'Feedback mechanisms',
          ],
        },
        {
          title: 'Talent Management',
          description: 'Strategies for attracting, developing, and retaining top talent to build organizational capability.',
          items: [
            'Talent acquisition strategy',
            'Succession planning',
            'Career development paths',
            'Leadership development',
          ],
        },
        {
          title: 'HR Policies & Compliance',
          description: 'Development of HR policies and procedures that ensure compliance with labor laws and regulations.',
          items: [
            'Policy development',
            'Employee handbook creation',
            'Labor law compliance',
            'HR audit support',
          ],
        },
      ]}
      benefits={[
        'Aligned HR strategy with business objectives',
        'Improved employee engagement and retention',
        'Competitive compensation and benefits',
        'Enhanced organizational effectiveness',
        'Compliance with labor regulations',
        'Data-driven HR decision making',
      ]}
    />
  );
}
