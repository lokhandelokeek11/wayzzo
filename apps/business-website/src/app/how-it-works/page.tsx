'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Accordion } from '@/components/ui/accordion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, CheckCircle2, ShieldCheck, Database, Navigation, MapPin } from 'lucide-react';

export default function HowItWorksPage() {
  const faqItems = [
    {
      question: 'How do you find a delivery partner for my order?',
      answer:
        'When you place a delivery request, our system immediately checks for verified delivery partners who are close to your pickup location. The nearest available partner accepts the request and heads over to collect your package.',
    },
    {
      question: 'What kinds of items can I send?',
      answer:
        'You can send almost anything that fits safely on a two-wheeler up to 20kg. Popular items include documents, keys, clothes, food, medicines, gifts, electronics, and store orders. Hazardous, illegal, or dangerous items are strictly prohibited.',
    },
    {
      question: 'How do I know my package is safe?',
      answer:
        'Every delivery requires a 4-digit PIN. Only the person receiving the parcel has the PIN. The delivery partner cannot complete the trip in the app until they enter this correct PIN, guaranteeing it reaches the right hands.',
    },
    {
      question: 'How is the delivery fee calculated?',
      answer:
        'Our pricing is transparent and based on actual travel distance. You pay a simple base fare for the first 2 kilometers, plus a fair rate for each additional kilometer. There are no surprise surges or hidden fees.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center border-b border-white/60">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest font-medium">
              [ SIMPLE, TRANSPARENT LOGISTICS ]
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl text-primary tracking-tight max-w-4xl mx-auto leading-tight font-medium font-sans"
          >
            How deliveries work on wayzzo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-xl mx-auto mt-4 mb-8 sm:mb-10 leading-relaxed font-normal"
          >
            We connect people who need items delivered with friendly nearby riders. Simple, fast, and completely trackable.
          </motion.p>

          {/* Simple Concept Telemetry Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-4xl glass-panel rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 px-4 sm:px-8"
          >
            <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-start">
              <span className="font-mono text-[10px] sm:text-[11px] text-on-surface-variant uppercase">DELIVERY METHOD</span>
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-primary glass-pill px-2.5 py-0.5 rounded-full">
                DIRECT DOORSTEP PICKUP &amp; DROP
              </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/60" />
            <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-start">
              <span className="font-mono text-[10px] sm:text-[11px] text-on-surface-variant uppercase">RIDERS</span>
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-secondary glass-pill px-2.5 py-0.5 rounded-full">
                NEARBY VERIFIED PARTNERS
              </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/60" />
            <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-start">
              <span className="font-mono text-[10px] sm:text-[11px] text-on-surface-variant uppercase">SAFETY</span>
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-primary glass-pill px-2.5 py-0.5 rounded-full">
                SAFE 4-DIGIT PIN CONFIRMATION
              </span>
            </div>
          </motion.div>
        </section>

        {/* 3 Step Breakdown */}
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden"
          >
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="font-mono text-xs text-secondary uppercase tracking-wider block mb-1 font-semibold px-2.5 py-0.5 rounded-full glass-pill inline-block">
                  STEP-BY-STEP PROCESS
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium text-primary font-sans mt-2">
                  From Booking to Handover in 3 Easy Steps
                </h2>
              </div>
              <div className="font-mono text-xs text-on-surface-variant flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>DIRECT NEIGHBORHOOD DELIVERIES</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Step 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-panel-subtle glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-secondary font-semibold">STEP // 01</span>
                    <Database className="w-4 h-4 text-on-surface-variant" />
                  </div>
                  <h3 className="text-base font-medium text-primary mb-2 font-sans">Book Your Delivery</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-normal">
                    Enter the pickup location, delivery address, and a brief description of the package. You immediately see the exact price before you pay.
                  </p>
                </div>
                <div className="glass-pill p-3.5 rounded-xl space-y-1 font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>ROUTE:</span>
                    <span className="text-primary font-medium">Door-to-Door Direct</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PRICE:</span>
                    <span className="text-secondary font-medium">Upfront Distance Fare</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-panel-subtle glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-secondary font-semibold">STEP // 02</span>
                    <Navigation className="w-4 h-4 text-on-surface-variant" />
                  </div>
                  <h3 className="text-base font-medium text-primary mb-2 font-sans">A Nearby Rider Picks It Up</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-normal">
                    A verified delivery partner on a bike or scooter close to your location accepts the job and arrives quickly to collect the parcel.
                  </p>
                </div>
                <div className="glass-pill p-3.5 rounded-xl space-y-1 font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>MATCHING:</span>
                    <span className="text-primary font-medium">Nearest Available Rider</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VEHICLE:</span>
                    <span className="text-secondary font-medium">Motorcycle, Scooter or EV</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-panel-subtle glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-secondary font-semibold">STEP // 03</span>
                    <CheckCircle2 className="w-4 h-4 text-on-surface-variant" />
                  </div>
                  <h3 className="text-base font-medium text-primary mb-2 font-sans">Live Tracking &amp; PIN Handover</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-normal">
                    Track the trip live on the map. When the rider arrives at the destination, they verify the 4-digit PIN to ensure safe and successful delivery.
                  </p>
                </div>
                <div className="glass-pill p-3.5 rounded-xl space-y-1 font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>VERIFICATION:</span>
                    <span className="text-emerald-600 font-medium">4-Digit PIN Handover</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PAYOUT:</span>
                    <span className="text-primary font-medium">Direct Daily Payout to Rider</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-white/30 backdrop-blur-md border-t border-white/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl font-medium text-primary mt-1 font-sans">Frequently Asked Questions</h2>
            </div>

            <Accordion items={faqItems} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
