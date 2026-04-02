export interface IndustryData {
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  whyGrantThornton: {
    title: string;
    content: string;
  };
  readMore?: string;
  heroImage?: string;
}

export const industriesData: IndustryData[] = [
  {
    slug: 'energy-resources',
    title: 'Energy & resources',
    tagline: 'The changing landscape',
    description: 'Our teams advise clients across the full breadth of the energy sector, including upstream and downstream oil and gas, power and utilities, mining and metals, and renewable energy.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'The energy and resources sector is undergoing significant transformation. From traditional oil and gas to renewable energy sources, companies face complex challenges including regulatory changes, technological disruption, and evolving market dynamics. Our experienced professionals understand these challenges and provide tailored solutions to help you navigate this changing landscape.',
    },
    readMore: 'We work with energy companies of all sizes, from emerging players to established multinationals. Our services span the entire value chain, including strategic planning, operational improvement, transaction support, and regulatory compliance. We help clients optimize their operations, manage risks, and capitalize on new opportunities in the evolving energy market.',
  },
  {
    slug: 'financial-services',
    title: 'Financial services',
    description: 'We provide pragmatic, commercially focused solutions for the financial services sector, helping institutions navigate regulatory complexity and drive sustainable growth.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'Financial services organizations face unprecedented challenges from regulatory pressures, digital disruption, and changing customer expectations. Our dedicated financial services team combines deep industry knowledge with practical experience to deliver solutions that address your specific needs. We work with banks, insurance companies, asset managers, and fintech firms across the region.',
    },
    readMore: 'Our services include regulatory compliance, risk management, internal audit, digital transformation, and transaction advisory. We help financial institutions strengthen their governance frameworks, optimize operations, and prepare for the future of finance.',
  },
  {
    slug: 'food-beverage',
    title: 'Food & beverage',
    tagline: 'An industry poised for growth',
    description: 'We help food and beverage companies optimize their operations, navigate M&A opportunities, and take advantage of tax incentives to drive growth.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'The food and beverage industry is experiencing significant growth driven by changing consumer preferences, health consciousness, and regional expansion. Our team understands the unique challenges facing this sector, from supply chain optimization to regulatory compliance and market entry strategies.',
    },
    readMore: 'We support food and beverage companies through every stage of their growth journey. Our services include operational improvement, M&A advisory, tax planning, and market expansion support. We help clients identify opportunities, manage risks, and build sustainable competitive advantages.',
  },
  {
    slug: 'hospitality-tourism',
    title: 'Hospitality & tourism',
    tagline: 'A welcome return to growth',
    description: 'We help hospitality and tourism businesses navigate the changing business environment through strategic planning, scenario analysis, and operational optimization.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'The hospitality and tourism sector is experiencing a dynamic recovery and transformation. Our team helps businesses adapt to new market realities, optimize their operations, and position themselves for sustainable growth. We understand the unique challenges facing hotels, restaurants, travel companies, and entertainment venues.',
    },
    readMore: 'Our services include strategic planning, financial restructuring, operational improvement, and transaction support. We help hospitality businesses develop resilient business models, enhance guest experiences, and maximize returns on investment.',
  },
  {
    slug: 'not-for-profit',
    title: 'Not for profit',
    tagline: 'Overcoming pressures to achieve aims',
    description: 'Our specialists work with charities, housing associations, educational institutions, and trade unions to help them achieve their missions while maintaining financial sustainability.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'Not-for-profit organizations face unique challenges in balancing mission delivery with financial sustainability. Our dedicated team understands the regulatory environment, governance requirements, and operational complexities facing the sector. We help organizations strengthen their foundations while maximizing their impact.',
    },
    readMore: 'We provide audit, tax, and advisory services tailored to the not-for-profit sector. Our services include governance reviews, financial management, regulatory compliance, and strategic planning. We help organizations demonstrate accountability to stakeholders while achieving their charitable objectives.',
  },
  {
    slug: 'public-sector',
    title: 'Public sector',
    tagline: 'An industry poised for growth',
    description: 'We support government entities and public sector organizations in delivering efficient services, managing public resources, and implementing transformational initiatives.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'Public sector organizations are under increasing pressure to deliver more with less while meeting rising citizen expectations. Our team brings extensive experience working with government entities, helping them improve efficiency, strengthen governance, and implement successful transformation programs.',
    },
    readMore: 'Our public sector services include performance improvement, financial management, risk advisory, and digital transformation. We help government organizations modernize their operations, enhance transparency, and deliver better outcomes for citizens.',
  },
  {
    slug: 'real-estate-construction',
    title: 'Real estate & construction',
    tagline: 'Investment starts to flow again',
    description: 'Our sector specialists help real estate and construction companies identify funding sources, reduce risk, and optimize their project portfolios.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'The real estate and construction sector is seeing renewed investment activity and evolving market dynamics. Our experienced team helps clients navigate complex transactions, manage project risks, and optimize their real estate portfolios. We work with developers, investors, contractors, and property managers across the region.',
    },
    readMore: 'Our services include transaction advisory, valuations, project finance, and operational improvement. We help clients structure deals, secure financing, manage construction risks, and maximize returns on their real estate investments.',
  },
  {
    slug: 'technology',
    title: 'Technology',
    tagline: 'The architecture revolution',
    description: 'We help technology companies enter new markets, scale their operations, secure funding, and navigate compliance requirements.',
    whyGrantThornton: {
      title: 'Why Grant Thornton?',
      content: 'Technology companies operate in a fast-paced environment where agility and innovation are essential for success. Our team understands the unique challenges facing tech businesses, from early-stage startups to established enterprises. We help clients scale their operations, manage rapid growth, and navigate complex regulatory landscapes.',
    },
    readMore: 'Our technology sector services include growth advisory, transaction support, tax planning, and compliance. We help tech companies optimize their business models, prepare for funding rounds, and expand into new markets while managing risks effectively.',
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industriesData.map((industry) => industry.slug);
}
