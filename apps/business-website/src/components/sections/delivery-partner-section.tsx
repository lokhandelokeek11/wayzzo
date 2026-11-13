'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Wallet, Clock, Bike, CheckCircle } from 'lucide-react';

export function DeliveryPartnerSection() {
  return (
    <section className="relative w-full bg-primary text-on-primary py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-surface-container-high">
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,166,115,0.25),rgba(28,27,27,0))]" />
      
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-dark mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse flex-shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs text-secondary-fixed-dim uppercase tracking-wider font-semibold">
            [ EARN WITH YOUR BIKE • BE YOUR OWN BOSS ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-on-primary max-w-4xl tracking-tight leading-[1.12] font-medium font-sans px-2 sm:px-0"
        >
          Your bike. Your time. Your opportunity.
        </motion.h2>

        {/* Subtext in clear English */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base lg:text-lg text-on-primary-container max-w-xl font-normal leading-relaxed px-2 sm:px-0"
        >
          Use your motorcycle, scooter, or EV to earn good money delivering items nearby. Log in whenever you want, accept delivery requests in your area, and get paid directly every day.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/partners"
            className="inline-flex items-center justify-center bg-surface text-primary px-8 py-3.5 rounded-full text-xs font-semibold shadow-xl hover:bg-surface-bright transition-all transform hover:-translate-y-0.5 group min-h-[44px]"
          >
            <span>Join as a Delivery Partner</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/partner-terms"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-panel-dark-subtle text-on-primary text-xs font-semibold hover:bg-white/10 transition-all min-h-[44px]"
          >
            <ShieldCheck className="w-4 h-4 text-secondary-container" />
            <span>Read Partner Guidelines</span>
          </Link>
        </motion.div>

        {/* Visual Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 sm:mt-14 relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden glass-panel-dark"
        >
          <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmVj7AAUfxOE_046Tz8vKryvpWPj0p3-zhNOGQzf72FOfdmzX_EXbYl_yBWlWPN5TpFEgPE44DBiFZHOi0O9vy8yxC7kKwMTVyB1B8583qDUfWn55bS8yBJgSKXFdri101iRR170Q4-LnGWYYsfXLBwd3-IlofEm7wZ5Ve-i7jRPZocb7YXDjQnb8Zl9kyryjU7-RVTtGuHkgbzb9hSbjiyo-C00GUWpXOpqAnELQ"
              alt="Friendly delivery partner on a bike"
              className="w-full h-full object-cover object-center filter grayscale-[10%] brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

            {/* Floating Earnings Card - Dark Frosted Glass */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 p-4 glass-panel-dark rounded-2xl flex items-center justify-between gap-4 max-w-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-container/20 border border-secondary-container/30 flex items-center justify-center text-secondary-container flex-shrink-0">
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase text-on-primary-container tracking-wider block font-semibold">
                    HOW YOU EARN
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg text-on-primary tracking-tight font-medium font-sans">
                    Clear Pay Per Trip
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-[11px] text-secondary-container font-medium px-2 py-0.5 rounded-full glass-pill-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
                  DAILY PAYOUTS
                </span>
                <span className="block text-[11px] sm:text-xs text-on-primary-container mt-1">Straight to UPI / Bank</span>
              </div>
            </motion.div>

            {/* Watermark Tag */}
            <div className="hidden sm:flex absolute top-4 sm:top-6 left-4 sm:left-6 items-center gap-2 font-mono text-[10px] sm:text-[11px] text-white/90 glass-pill-dark px-3.5 py-1.5 rounded-full font-medium">
              <span>ELIGIBLE: MOTORCYCLES, SCOOTERS &amp; EV</span>
              <span>•</span>
              <span>REQUIREMENTS: DRIVING LICENCE &amp; RC</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
