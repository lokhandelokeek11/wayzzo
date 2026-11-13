'use client';

import { motion } from 'framer-motion';
import { Compass, Tag, MapPin, ShieldCheck, LayoutDashboard, Store, CreditCard, Clock } from 'lucide-react';

export function FeaturesSection() {
  const capabilities = [
    {
      code: 'FEATURE // 01',
      title: 'Smart Partner Matching',
      desc: 'Quickly finds the closest verified delivery partner on a bike or scooter to pick up your package.',
    },
    {
      code: 'FEATURE // 02',
      title: 'Clear Upfront Pricing',
      desc: 'Prices are based on distance and package weight. You always know what you will pay before booking.',
    },
    {
      code: 'FEATURE // 03',
      title: 'Live Location Tracking',
      desc: 'Watch your delivery move on a live map in real time from the moment it is picked up until it reaches the door.',
    },
    {
      code: 'FEATURE // 04',
      title: 'Safe 4-Digit Delivery PIN',
      desc: 'Deliveries are completed only after the recipient gives the 4-digit PIN, so packages never get lost.',
    },
    {
      code: 'FEATURE // 05',
      title: 'Daily Payouts for Riders',
      desc: 'Delivery partners can view earnings clearly for every single trip and receive money directly into their bank or UPI.',
    },
    {
      code: 'FEATURE // 06',
      title: 'Simple Dashboard for Shops',
      desc: 'Local stores can easily book customer deliveries, upload multiple orders, and check past delivery history.',
    },
    {
      code: 'FEATURE // 07',
      title: 'Easy Digital Payments',
      desc: 'Pay seamlessly using UPI, credit/debit cards, net banking, or cash-on-delivery where available.',
    },
    {
      code: 'FEATURE // 08',
      title: 'Automatic GST Bills',
      desc: 'Download proper GST invoices anytime for business expense claims and clean bookkeeping.',
    },
  ];

  return (
    <section className="w-full bg-white/20 backdrop-blur-md py-16 sm:py-24 border-b border-white/60 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-widest font-medium px-3 py-1 rounded-full glass-pill">
            PLATFORM FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-primary tracking-tight mt-3 font-sans">
            Built for Reliable, Stress-Free Deliveries
          </h2>
          <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
            Every feature is designed to be easy to use, fair for everyone, and completely transparent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-secondary tracking-widest block mb-3 font-semibold px-2 py-0.5 rounded glass-pill inline-block">
                  {cap.code}
                </span>
                <h3 className="font-medium text-primary text-base mb-2 font-sans">{cap.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/60 font-mono text-[10px] text-on-surface-variant uppercase font-medium">
                Wayzzo Feature
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
