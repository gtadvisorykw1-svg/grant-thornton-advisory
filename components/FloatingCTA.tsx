'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FloatingCTA() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render anything on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[calc(100vw-2rem)] max-w-[288px] sm:w-72"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#4F2D7F] to-[#281440] p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Get in Touch</h3>
                    <p className="text-white/70 text-sm">We&apos;re here to help</p>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Close contact menu"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Options */}
                <div className="p-4 space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#4F2D7F]/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#4F2D7F]/10 flex items-center justify-center group-hover:bg-[#4F2D7F] transition-colors">
                      <MessageCircle className="w-5 h-5 text-[#4F2D7F] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Contact Form</p>
                      <p className="text-sm text-gray-500">Send us a message</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#4F2D7F] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <a
                    href="tel:+96522055999"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#4F2D7F]/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#CF2020]/10 flex items-center justify-center group-hover:bg-[#CF2020] transition-colors">
                      <Phone className="w-5 h-5 text-[#CF2020] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-500">+965 2205 5999</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#CF2020] group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="mailto:info@advisory.kw.gt.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#4F2D7F]/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#4F2D7F]/10 flex items-center justify-center group-hover:bg-[#4F2D7F] transition-colors">
                      <Mail className="w-5 h-5 text-[#4F2D7F] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-500">info@advisory.kw.gt.com</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#4F2D7F] group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setIsExpanded(true)}
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#CF2020] text-white shadow-lg hover:shadow-xl hover:shadow-[#CF2020]/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Open contact options"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                
                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-[#CF2020] animate-ping opacity-25" />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Contact Us
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
