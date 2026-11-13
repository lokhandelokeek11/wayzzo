'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, CheckCircle2, Store, MapPin, ShieldCheck } from 'lucide-react';

export function BusinessDeliverySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 py-16 sm:py-24 bg-surface flex flex-col items-center justify-center text-center overflow-hidden border-b border-surface-container-high">
      <div className="max-w-[1240px] mx-auto w-full flex flex-col items-center">
        
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="font-mono text-xs text-on-surface-variant tracking-wider uppercase font-medium">
            [ FOR LOCAL SHOPS &amp; BUSINESSES ]
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary max-w-4xl font-medium leading-[1.12] mb-4 sm:mb-6 font-sans px-2 sm:px-0"
        >
          Local businesses deserve better delivery support.
        </motion.h2>

        {/* Subtext in simple English */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2 sm:px-0"
        >
          Stop losing 20% to 30% on food and delivery app commissions. Deliver directly to your neighborhood customers using verified nearby riders whenever you have an order ready.
        </motion.p>

        {/* Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10 sm:mb-14 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/business"
            className="h-11 sm:h-10 px-6 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface transition-all shadow-sm flex items-center justify-center gap-2 group min-h-[44px]"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="h-11 sm:h-10 px-6 rounded-full glass-panel-subtle text-on-surface text-xs font-semibold hover:bg-white/90 transition-all shadow-sm flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Store className="w-3.5 h-3.5 text-on-surface-variant" />
            <span>Talk to Our Team</span>
          </Link>
        </motion.div>

        {/* Dispatch Console Mockup - Frosted Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-5xl rounded-3xl glass-panel overflow-hidden text-left relative"
        >
          {/* Top Window Header */}
          <div className="px-4 sm:px-6 py-3.5 bg-white/60 backdrop-blur-md border-b border-white/70 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-on-surface-variant ml-1 sm:ml-2 font-medium">
                MERCHANT DASHBOARD // LOCAL DISPATCH
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-on-surface-variant">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> DIRECT PICKUP &amp; DROP
              </span>
            </div>
          </div>

          {/* Visual Grid */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-transparent">
            
            {/* Main Area */}
            <div className="lg:col-span-8 relative bg-white/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 min-h-[280px] sm:min-h-[300px] flex flex-col justify-between overflow-hidden border border-white/70">
              {/* Origin */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full sm:max-w-xs self-start glass-panel p-4 rounded-2xl"
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-secondary font-semibold">
                    PICKUP • YOUR SHOP
                  </span>
                  <span className="font-mono text-[10px] text-on-surface-variant">READY</span>
                </div>
                <p className="text-sm text-primary font-medium">Local Retail Store / Bakery / Chemist</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Order packed and awaiting nearby rider</p>
                <div className="mt-2.5 pt-2 border-t border-white/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-on-surface-variant">CUSTOMER PARCEL</span>
                  <span className="glass-pill px-2 py-0.5 rounded text-primary font-medium">DOORSTEP HANDOVER</span>
                </div>
              </motion.div>

              {/* Connecting Line */}
              <div className="my-3 sm:my-4 flex items-center gap-2 px-2 text-on-surface-variant/70 font-mono text-xs">
                <span className="h-px bg-white/60 flex-1" />
                <span className="px-3 py-1 rounded-full glass-pill text-[9px] sm:text-[10px] font-medium text-center">
                  DIRECT DELIVERY • NO WAREHOUSE DETOURS
                </span>
                <span className="h-px bg-white/60 flex-1" />
              </div>

              {/* Destination */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full sm:max-w-xs self-start sm:self-end glass-panel p-4 rounded-2xl"
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-secondary font-semibold">
                    DELIVERY • CUSTOMER HOME
                  </span>
                  <span className="font-mono text-[10px] text-emerald-600 font-semibold">DIRECT DROP</span>
                </div>
                <p className="text-sm text-primary font-medium">Customer Doorstep in Your Area</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Safe delivery confirmed with 4-digit PIN</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-3 sm:space-y-4">
              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 rounded-2xl glass-panel-subtle glass-panel-hover space-y-2"
              >
                <span className="font-mono text-[10px] uppercase text-secondary tracking-wider block font-semibold">
                  FAIR PRICING
                </span>
                <p className="text-xs text-primary font-medium">Pay Only for the Distance Traveled</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  We charge a straightforward distance fare. You keep 100% of whatever your customer paid for your products.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 rounded-2xl glass-panel-subtle glass-panel-hover space-y-2"
              >
                <span className="font-mono text-[10px] uppercase text-secondary tracking-wider block font-semibold">
                  TAX BILLS
                </span>
                <p className="text-xs text-primary font-medium">Automatic GST Invoices</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Every delivery comes with a clear GST-compliant tax bill so you can easily claim business tax credits.
                </p>
              </motion.div>

              <Link
                href="/business"
                className="w-full text-center py-3 px-4 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface transition-colors min-h-[44px] flex items-center justify-center shadow-sm"
              >
                Learn More for Businesses →
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
