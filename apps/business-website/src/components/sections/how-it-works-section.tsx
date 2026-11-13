'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Navigation, CheckCircle2 } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      code: 'STEP // 01',
      title: 'Book a Delivery',
      description:
        'Enter where to pick up, where to drop off, and what you are sending. You immediately see the exact price before you confirm.',
      concept: 'CLEAR PRICE BEFORE BOOKING • NO SURPRISES',
    },
    {
      code: 'STEP // 02',
      title: 'Get Matched with a Nearby Rider',
      description:
        'The platform finds a verified delivery partner on a two-wheeler close to the pickup location who accepts the trip and arrives quickly.',
      concept: 'VERIFIED LOCAL PARTNERS • FAST PICKUP',
    },
    {
      code: 'STEP // 03',
      title: 'Track Live & Safe Handover',
      description:
        'Follow your package in real time on the map. The delivery partner hands it over safely only after entering the 4-digit PIN you share.',
      concept: 'LIVE MAP TRACKING • SECURE 4-DIGIT PIN',
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
      {/* Ambient background light orb */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden"
      >
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                HOW IT WORKS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-primary tracking-tight font-sans">
              Three Simple Steps from Pickup to Doorstep
            </h2>
          </div>
          <div className="font-mono text-xs text-on-surface-variant flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>HOW DELIVERIES HAPPEN</span>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass-panel-subtle glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-secondary font-semibold">{step.code}</span>
                  <Compass className="w-4 h-4 text-on-surface-variant" />
                </div>
                <h3 className="text-base font-medium text-primary mb-2 font-sans">{step.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="glass-pill p-3 rounded-xl font-mono text-[10px] text-on-surface-variant font-medium">
                {step.concept}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-secondary transition-colors"
          >
            <span>Learn more about how deliveries work &amp; read common questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </motion.div>
    </section>
  );
}
