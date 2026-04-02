'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseStyles = 'bg-gray-200 relative overflow-hidden';

  const variantStyles = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: '',
    rounded: 'rounded-lg',
  };

  const animationStyles = {
    pulse: 'animate-pulse',
    wave: `
      after:absolute after:inset-0
      after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent
      after:animate-[shimmer_1.5s_infinite]
    `,
    none: '',
  };

  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], animationStyles[animation], className)}
      style={style}
      aria-hidden="true"
    />
  );
}

// Pre-built skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-6 space-y-4">
      <Skeleton variant="rounded" height={200} className="w-full" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rounded" width={80} height={24} />
        <Skeleton variant="rounded" width={80} height={24} />
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden h-[530px] flex flex-col">
      <Skeleton variant="rectangular" className="h-[47%] w-full" />
      <div className="flex-1 p-8 space-y-4">
        <Skeleton variant="text" className="w-1/4" />
        <Skeleton variant="text" className="w-full h-6" />
        <Skeleton variant="text" className="w-3/4 h-6" />
        <div className="pt-8">
          <Skeleton variant="text" className="w-1/3" />
        </div>
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
      <Skeleton variant="text" className="w-2/3 h-6" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-4/5" />
      <div className="flex flex-wrap gap-2 pt-2">
        <Skeleton variant="rounded" width={60} height={20} />
        <Skeleton variant="rounded" width={80} height={20} />
        <Skeleton variant="rounded" width={70} height={20} />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative h-[600px] lg:h-[700px] w-full bg-gray-200 animate-pulse">
      <div className="absolute inset-0 flex flex-col justify-end pb-64 md:pb-80">
        <div className="container mx-auto px-4 md:px-12">
          <Skeleton variant="text" className="w-2/3 h-12 mb-4" />
          <Skeleton variant="rounded" width={300} height={40} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gray-300/50" />
    </div>
  );
}
