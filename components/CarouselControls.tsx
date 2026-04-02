import React from 'react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string; // Allow custom positioning classes
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrev,
  onNext,
  className = ''
}) => {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-transparent hover:bg-gt-purple hover:border-gt-purple transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gt-purple-light focus:ring-offset-2 focus:ring-offset-gray-900"
        title="Move back"
        aria-label="Previous slide"
      >
        <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
          {/* Left Arrow Icon */}
          <svg
            className="w-5 h-5 text-white fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M14 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-transparent hover:bg-gt-purple hover:border-gt-purple transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gt-purple-light focus:ring-offset-2 focus:ring-offset-gray-900"
        title="Move forward"
        aria-label="Next slide"
      >
        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
          {/* Right Arrow Icon */}
          <svg
            className="w-5 h-5 text-white fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
             <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
