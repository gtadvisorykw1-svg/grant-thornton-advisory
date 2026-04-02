'use client';

import { HeroSkeleton, ServiceCardSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white" aria-busy="true" aria-label="Loading page content">
      {/* Header skeleton */}
      <div className="h-20 bg-white border-b border-gray-100 animate-pulse" />
      
      {/* Hero skeleton */}
      <HeroSkeleton />
      
      {/* Content skeleton */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
