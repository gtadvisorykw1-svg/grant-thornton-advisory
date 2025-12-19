'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function ShariahCompliantInvestmentPage() {
  return (
    <ServicePageTemplate
      title="Shariah Compliant Investment"
      subtitle="Transaction Advisory"
      description="Grant Thornton provides thorough evaluation services ensuring investments comply with Shariah standards and guidelines. We help investors and institutions navigate Islamic finance principles to make compliant investment decisions."
      features={[
        {
          title: 'Shariah Screening',
          description: 'Comprehensive screening of investments against Shariah compliance criteria and standards.',
          items: [
            'Business activity screening',
            'Financial ratio analysis',
            'Compliance certification',
            'Ongoing monitoring',
          ],
        },
        {
          title: 'Debt-to-Equity Analysis',
          description: 'Assessment of capital structure to ensure compliance with Shariah debt-to-equity thresholds.',
          items: [
            'Leverage ratio analysis',
            'Debt composition review',
            'Threshold compliance',
            'Remediation guidance',
          ],
        },
        {
          title: 'Riba Avoidance',
          description: 'Evaluation and structuring of transactions to avoid interest-based (riba) elements.',
          items: [
            'Interest income analysis',
            'Transaction structuring',
            'Alternative financing structures',
            'Compliance documentation',
          ],
        },
        {
          title: 'Income Purification',
          description: 'Calculation and guidance on purification of non-compliant income elements.',
          items: [
            'Non-compliant income identification',
            'Purification calculation',
            'Charitable distribution guidance',
            'Documentation and reporting',
          ],
        },
        {
          title: 'Sukuk Advisory',
          description: 'Advisory services for Sukuk (Islamic bonds) structuring and compliance.',
          items: [
            'Sukuk structure review',
            'Shariah compliance assessment',
            'Documentation review',
            'Ongoing compliance monitoring',
          ],
        },
        {
          title: 'Islamic Fund Advisory',
          description: 'Support for Islamic investment funds in maintaining Shariah compliance.',
          items: [
            'Fund structure review',
            'Investment screening',
            'Compliance framework',
            'Shariah board support',
          ],
        },
      ]}
      benefits={[
        'Assurance of Shariah compliance',
        'Expert knowledge of Islamic finance principles',
        'Comprehensive screening and analysis',
        'Support for Shariah board requirements',
        'Ongoing compliance monitoring',
        'Guidance on remediation and purification',
      ]}
    />
  );
}
