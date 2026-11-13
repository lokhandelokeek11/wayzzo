'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Bike, Store } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-primary text-on-primary relative overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(255,166,115,0.3),rgba(28,27,27,0))]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container border border-surface-container-high/20 text-xs font-mono text-secondary-container font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
            <span>[ READY TO GET STARTED? ]</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight font-sans">
            Let&apos;s make local deliveries easy and affordable.
          </h2>

          <p className="text-base sm:text-lg text-on-primary-container leading-relaxed max-w-xl mx-auto font-normal">
            Whether you want to send a parcel across town, deliver orders for your store, or earn extra income on your bike — we are here to help.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/business"
                className="px-7 py-3 rounded-full bg-surface text-primary text-xs font-semibold hover:bg-surface-bright transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>For Local Businesses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/partners"
                className="px-7 py-3 rounded-full bg-primary-container text-on-primary text-xs font-semibold hover:bg-surface-container-highest/20 transition-all border border-surface-container-high/20 inline-flex items-center gap-2"
              >
                <span>Earn as a Delivery Partner</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-transparent text-on-primary text-xs font-semibold hover:text-secondary-container transition-colors inline-flex items-center gap-2"
              >
                <span>Contact Our Team</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
