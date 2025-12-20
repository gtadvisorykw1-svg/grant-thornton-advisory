export function VisionG20Section() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Kuwait Vision 2035 */}
      <div
        className="px-8 lg:px-16 py-20 lg:py-24 bg-gt-purple-dark"
      >
        <div className="max-w-lg">
          {/* Label */}
          <span
            className="inline-block px-4 py-1 rounded-full text-sm text-white mb-6 bg-gt-purple"
          >
            Local Insight
          </span>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Kuwait Vision 2035
          </h2>

          {/* Description */}
          <p className="text-white/80 leading-relaxed mb-10">
            We are delighted to support Kuwait&apos;s vision for the future, by enabling dynamic businesses to diversify and develop key industries in the country. Our local team are well versed with Kuwait Vision 2035, along with the local and global opportunities this unlocks.
          </p>

          {/* Button */}
          <a
            href="/advisory/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded bg-transparent text-white text-base transition-all duration-500 hover:bg-white/10 group"
            style={{ 
              border: '2px solid rgb(255, 255, 255)',
            }}
          >
            <span className="transition-transform duration-700 group-hover:translate-x-1">
              Connect with our team
            </span>
          </a>
        </div>
      </div>

      {/* Right Column - G20 and global access */}
      <div
        className="px-8 lg:px-16 py-20 lg:py-24 bg-gt-gray-light"
      >
        <div className="max-w-lg">
          {/* Label */}
          <span
            className="inline-block px-4 py-1 rounded-full text-sm mb-6 border text-gt-purple border-gt-purple"
          >
            Global Insight
          </span>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            G20 and global access
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-10">
            We are a network of independent assurance, tax and advisory firms, made up of over 53,000 people in 135 countries. We&apos;ve got scale, combined with local market understanding. That means we&apos;re everywhere you are, as well as where you want to be. With Kuwait&apos;s strategic position in the Gulf, we have representation across the GCC and G20 countries.
          </p>

          {/* Button */}
          <a
            href="/about/"
            className="inline-flex items-center justify-center px-10 py-4 rounded text-white text-base transition-all duration-500 bg-gt-red border-2 border-gt-red hover:bg-gt-red/90 group"
          >
            <span className="transition-transform duration-700 group-hover:translate-x-1">
              Our global reach
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
