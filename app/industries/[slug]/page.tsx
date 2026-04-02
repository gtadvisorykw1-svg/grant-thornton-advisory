import { IndustryPageTemplate } from '@/components/IndustryPageTemplate';
import { getIndustryBySlug, getAllIndustrySlugs } from '@/lib/industries-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found | Grant Thornton Kuwait',
    };
  }

  return {
    title: `${industry.title} | Industries | Grant Thornton Kuwait`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <IndustryPageTemplate
      title={industry.title}
      tagline={industry.tagline}
      description={industry.description}
      whyGrantThornton={industry.whyGrantThornton}
      readMore={industry.readMore}
      heroImage={industry.heroImage}
    />
  );
}
