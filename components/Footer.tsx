import { Youtube, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  connect: [
    { label: 'About us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Complaints', href: '/contact' },
  ],
  about: [
    { label: 'About us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Insights', href: '/insights' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Cookie Preferences', href: '/cookies' },
  ],
};

export function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="pt-12 pb-14 bg-gt-purple"
    >
      <div className="max-w-[1172px] mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Connect Column */}
          <nav aria-labelledby="footer-connect">
            <h2 id="footer-connect" className="text-white text-sm uppercase tracking-widest mb-6">
              CONNECT
            </h2>
            <ul className="space-y-3" role="list">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-base hover:underline transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F] rounded px-1 -mx-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* About Column */}
          <nav aria-labelledby="footer-about">
            <h2 id="footer-about" className="text-white text-sm uppercase tracking-widest mb-6">
              ABOUT
            </h2>
            <ul className="space-y-3" role="list">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-base hover:underline transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F] rounded px-1 -mx-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Column */}
          <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="text-white text-sm uppercase tracking-widest mb-6">
              LEGAL
            </h2>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-base hover:underline transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F] rounded px-1 -mx-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Follow Us Column */}
          <div>
            <h2 id="footer-social" className="text-white text-sm uppercase tracking-widest mb-6">
              FOLLOW US
            </h2>
            <ul className="flex items-center gap-3" role="list" aria-labelledby="footer-social">
              <li>
                <a
                  href="https://www.youtube.com/user/grantthorntontv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on YouTube (opens in new tab)"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F]"
                >
                  <Youtube className="w-5 h-5 text-gt-purple transition-all duration-500" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/grant-thornton-kuwait"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn (opens in new tab)"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F]"
                >
                  <Linkedin className="w-5 h-5 text-gt-purple" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/grant_ksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X (Twitter) (opens in new tab)"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4F2D7F]"
                >
                  <Twitter className="w-5 h-5 text-gt-purple" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <p className="text-white text-sm leading-relaxed">
            © 2025 Grant Thornton Kuwait - All rights reserved. &quot;Grant Thornton&quot; refers to the brand under which the Grant Thornton member firms provide assurance, tax and advisory services to their clients and/or refers to one or more member firms, as the context requires. GTIL and the member firms are not a worldwide partnership. GTIL and each member firm is a separate legal entity. Services are delivered by the member firms. GTIL does not provide services to clients. GTIL and its member firms are not agents of, and do not obligate, one another and are not liable for one another&apos;s acts or omissions.
          </p>
        </div>
      </div>
    </footer>
  );
}
