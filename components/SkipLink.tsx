'use client';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] px-4 py-2 bg-[#4F2D7F] text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#CF2020] focus:ring-offset-2 transition-transform duration-200 -translate-y-16 focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
