'use client';

import { Button } from '@/components/ui/button';

export function G20Section() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div></div>
          <div>
            <p className="label-text text-gt-purple mb-4">Global reach</p>
          <h2 className="heading-xl mb-6">G20 and global access</h2>
          <p className="body-md text-foreground mb-8">
            We are a network of independent assurance, tax and consulting firms, made up of over 73,000 people in 135 countries. We&apos;ve got goals, combined with local market understanding. That means wherever you want to be. With Kuwait&apos;s strategic position in the Gulf, we have representation across the G20 countries.
          </p>
            <Button
              size="lg"
              className="bg-gt-red hover:bg-gt-red/90 text-white"
            >
              Our global reach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
