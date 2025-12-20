import { ArrowRight } from 'lucide-react';

export function CareerSection() {
  return (
    <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/career.jpg")',
          backgroundPosition: '100% 30%',
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-white/80 mb-3 sm:mb-4">
            CAREERS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Go beyond in your career
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
            Are you ready for a new challenge? Traditional and cutting-edge. Join our team of talented and committed professionals in Kuwait.
          </p>

          {/* CTA Button with Arrow */}
          <a
            href="/Careers/"
            className="inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 border border-white rounded text-white text-sm sm:text-base bg-transparent hover:bg-white/10 transition-all duration-500 group"
          >
            <span className="text-base transition-transform duration-500 group-hover:-translate-x-1">
              Find out more here
            </span>
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
