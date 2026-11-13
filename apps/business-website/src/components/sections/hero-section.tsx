'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Navigation, ShieldCheck } from 'lucide-react';
import { LiveRouteGraphic } from '@/components/sections/live-route-graphic';

export function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 flex flex-col items-center">
      {/* Top Friendly Badge - Frosted Glass Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 sm:mb-8 text-center"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse flex-shrink-0" />
        <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-on-surface-variant uppercase font-medium">
          [ FAST LOCAL DELIVERIES • COMMUNITY POWERED ]
        </span>
      </motion.div>

      {/* Monumental Centered Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center text-primary max-w-4xl tracking-tight mb-4 sm:mb-6 leading-[1.12] font-medium font-sans"
      >
        Your city. Your delivery network.
      </motion.h1>

      {/* Editorial Subtext in Simple English */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm sm:text-base lg:text-lg text-on-surface-variant text-center max-w-xl mb-8 sm:mb-10 leading-relaxed font-normal px-2 sm:px-0"
      >
        From everyday personal parcels to local business orders, connect with verified delivery partners nearby and move things across your city quickly and safely.
      </motion.p>

      {/* Centered CTA Group - Mobile Friendly Stack */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto max-w-sm sm:max-w-none px-4 sm:px-0"
      >
        <Link
          href="/how-it-works"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-3 rounded-full bg-primary text-on-primary text-xs sm:text-xs font-semibold hover:bg-inverse-surface transition-all shadow-md group min-h-[44px]"
        >
          <span>See How It Works</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/partners"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full glass-panel-subtle text-primary text-xs sm:text-xs font-semibold hover:bg-white/80 transition-all min-h-[44px]"
        >
          <span>Become a Delivery Partner</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>

      {/* Hero Centerpiece: High-Tech Live Transit Command Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full relative"
      >
        <LiveRouteGraphic />
      </motion.div>
    </section>
  );
}
