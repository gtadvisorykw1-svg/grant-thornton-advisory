'use client';

import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function FeasibilityStudyPage() {
  return (
    <ServicePageTemplate
      title="Feasibility Study"
      subtitle="Transaction Advisory"
      description="Grant Thornton provides comprehensive feasibility study services including market research, project costing, and financial modeling. We help you make informed investment decisions through rigorous analysis including IRR, NPV, and sensitivity analysis."
      features={[
        {
          title: 'Market Research & Analysis',
          description: 'In-depth market analysis to understand industry dynamics, competitive landscape, and market opportunities.',
          items: [
            'Market size and growth analysis',
            'Competitive landscape assessment',
            'Customer segmentation',
            'Market entry barriers',
          ],
        },
        {
          title: 'Project Costing',
          description: 'Detailed estimation of capital expenditure, operating costs, and working capital requirements.',
          items: [
            'Capital expenditure estimation',
            'Operating cost analysis',
            'Working capital requirements',
            'Cost benchmarking',
          ],
        },
        {
          title: 'Financial Modeling',
          description: 'Development of comprehensive financial models to project revenues, costs, and cash flows.',
          items: [
            'Revenue projections',
            'Cost structure modeling',
            'Cash flow forecasting',
            'Funding requirements',
          ],
        },
        {
          title: 'Investment Analysis',
          description: 'Rigorous investment analysis using industry-standard metrics to evaluate project viability.',
          items: [
            'IRR calculation',
            'NPV analysis',
            'Payback period',
            'Return on investment',
          ],
        },
        {
          title: 'Sensitivity Analysis',
          description: 'Assessment of how changes in key assumptions impact project outcomes and returns.',
          items: [
            'Key variable identification',
            'Scenario modeling',
            'Break-even analysis',
            'Risk factor assessment',
          ],
        },
        {
          title: 'Recommendations & Reporting',
          description: 'Clear recommendations and comprehensive reporting to support investment decision-making.',
          items: [
            'Go/no-go recommendations',
            'Risk mitigation strategies',
            'Implementation roadmap',
            'Investor-ready reports',
          ],
        },
      ]}
      benefits={[
        'Data-driven investment decisions',
        'Comprehensive market and financial analysis',
        'Identification of risks and opportunities',
        'Investor-ready documentation',
        'Independent and objective assessment',
        'Support throughout the investment lifecycle',
      ]}
    />
  );
}
