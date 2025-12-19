'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function RiskManagementPage() {
  return (
    <ServicePageTemplate
      title="Enterprise Risk Management"
      subtitle="Operational Advisory"
      description="Grant Thornton provides a strategic approach to managing and optimizing risks across your organization. Our enterprise risk management services help you identify, assess, and mitigate risks while meeting regulatory requirements including CMA semi-annual reporting."
      features={[
        {
          title: 'Risk Identification',
          description: 'Comprehensive identification of strategic, operational, financial, and compliance risks facing your organization.',
          items: [
            'Risk universe development',
            'Risk workshops and interviews',
            'Industry risk benchmarking',
            'Emerging risk identification',
          ],
        },
        {
          title: 'Risk Assessment',
          description: 'Evaluation of identified risks based on likelihood, impact, and velocity to prioritize risk response efforts.',
          items: [
            'Risk scoring methodology',
            'Heat map development',
            'Scenario analysis',
            'Risk appetite alignment',
          ],
        },
        {
          title: 'Risk Management Framework',
          description: 'Design and implementation of comprehensive risk management frameworks aligned with international standards.',
          items: [
            'ERM framework design',
            'Policy and procedure development',
            'Roles and responsibilities',
            'COSO/ISO 31000 alignment',
          ],
        },
        {
          title: 'Risk Control & Mitigation',
          description: 'Development of risk response strategies and control mechanisms to manage identified risks.',
          items: [
            'Control design and implementation',
            'Risk mitigation strategies',
            'Risk transfer mechanisms',
            'Business continuity planning',
          ],
        },
        {
          title: 'Risk Reporting',
          description: 'Establishment of risk reporting mechanisms including CMA semi-annual reporting requirements.',
          items: [
            'Risk dashboard development',
            'Board reporting frameworks',
            'CMA regulatory reporting',
            'Key risk indicators (KRIs)',
          ],
        },
        {
          title: 'Risk Culture & Training',
          description: 'Building a risk-aware culture through training, communication, and embedding risk management in decision-making.',
          items: [
            'Risk awareness training',
            'Risk culture assessment',
            'Communication programs',
            'Risk champion networks',
          ],
        },
      ]}
      benefits={[
        'Proactive identification and management of risks',
        'Alignment with regulatory requirements (CMA, CBK)',
        'Enhanced decision-making through risk insights',
        'Improved organizational resilience',
        'Stakeholder confidence and transparency',
        'Integration of risk management into strategy',
      ]}
    />
  );
}
