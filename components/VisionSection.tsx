'use client';

import { Button } from '@/components/ui/button';

export function VisionSection() {
  return (
    <section className="py-20 lg:py-28 bg-gt-purple-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          {/* Refined pill tag - smaller text and reduced padding */}
          <span className="inline-block px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 bg-white/15 rounded-full mb-6">
            Local Insight
          </span>
          <h2 className="heading-xl text-white mb-6">Kuwait Vision 2035</h2>
          <p className="body-lg text-white/90 mb-8">
            We are delighted to support Kuwait&apos;s vision for future. We are an agile and dynamic team to develop and transform Kuwait in line with Kuwait Vision 2035, along with the bold and global opportunities this unlocks.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gt-purple transition-colors"
          >
            Connect with our team
          </Button>
        </div>
      </div>
    </section>
  );
}
