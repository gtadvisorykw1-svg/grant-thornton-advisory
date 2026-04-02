'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function FraudForensicsPage() {
  return (
    <ServicePageTemplate
      title="Fraud & Forensics"
      subtitle="Operational Advisory"
      description="Grant Thornton's fraud and forensics services help organizations develop fraud prevention and response strategies to protect sensitive assets and detect fraud at early stages. We provide comprehensive investigation and advisory services to safeguard your business."
      features={[
        {
          title: 'Accounting Fraud Investigation',
          description: 'Thorough investigation of suspected accounting irregularities, financial statement fraud, and misappropriation of assets.',
          items: [
            'Financial statement analysis',
            'Asset misappropriation investigation',
            'Revenue recognition fraud',
            'Expense manipulation detection',
          ],
        },
        {
          title: 'Data Fraud Investigation',
          description: 'Advanced data analytics and forensic technology to identify patterns, anomalies, and evidence of fraudulent activities.',
          items: [
            'Data analytics and mining',
            'Digital forensics',
            'E-discovery services',
            'Pattern recognition analysis',
          ],
        },
        {
          title: 'Corruption Investigation',
          description: 'Investigation of bribery, kickbacks, conflicts of interest, and other corrupt practices within organizations.',
          items: [
            'Bribery investigation',
            'Kickback schemes detection',
            'Conflict of interest review',
            'FCPA/anti-corruption compliance',
          ],
        },
        {
          title: 'Fraud Prevention Strategy',
          description: 'Development of comprehensive fraud prevention frameworks and controls to minimize fraud risk.',
          items: [
            'Fraud risk assessment',
            'Control framework design',
            'Whistleblower programs',
            'Fraud awareness training',
          ],
        },
        {
          title: 'Litigation Support',
          description: 'Expert support for legal proceedings including expert witness testimony and damages quantification.',
          items: [
            'Expert witness services',
            'Damages calculation',
            'Evidence gathering and analysis',
            'Report preparation',
          ],
        },
        {
          title: 'Background Investigations',
          description: 'Due diligence investigations on individuals and entities to identify potential risks and red flags.',
          items: [
            'Pre-employment screening',
            'Vendor due diligence',
            'Reputational risk assessment',
            'Asset tracing',
          ],
        },
      ]}
      benefits={[
        'Rapid response to fraud incidents',
        'Experienced forensic accountants and investigators',
        'Advanced data analytics capabilities',
        'Confidential and discreet handling',
        'Comprehensive fraud prevention frameworks',
        'Expert witness and litigation support',
      ]}
    />
  );
}
