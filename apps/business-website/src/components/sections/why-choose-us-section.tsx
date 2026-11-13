'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Cpu, Store, ShieldCheck } from 'lucide-react';

export function WhyChooseUsSection() {
  const pillars = [
    {
      code: 'REASON // 01',
      title: 'Nearby Deliveries in Minutes',
      desc: 'Deliveries are assigned to riders in your immediate neighborhood, meaning pickups happen quickly without long cross-city travel.',
    },
    {
      code: 'REASON // 02',
      title: 'Fair Pay & Respect for Riders',
      desc: 'Delivery partners are independent community earners who see their trip fare upfront and get paid daily directly to their accounts.',
    },
    {
      code: 'REASON // 03',
      title: 'Simple Phone-Based Tracking',
      desc: 'No endless phone calls or uncertainty. Watch your delivery move live on the map and confirm delivery with a safe 4-digit PIN.',
    },
    {
      code: 'REASON // 04',
      title: '0% Commissions for Local Shops',
      desc: 'Local businesses keep 100% of what their customers pay for products. You only pay for the actual delivery distance.',
    },
    {
      code: 'REASON // 05',
      title: 'Safety & Verified Documents',
      desc: 'Every delivery partner is verified with a government ID, valid Driving Licence, vehicle RC check, and safety orientation.',
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
          <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold px-3 py-1 rounded-full glass-pill">
            WHY WAYZZO
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-primary tracking-tight mt-3 font-sans">
            A Smarter Way to Move Things Around Your City
          </h2>
          <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
            Built from the ground up to be simple, fair, and completely transparent for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-secondary tracking-widest block mb-3 font-semibold px-2 py-0.5 rounded glass-pill inline-block">
                  {item.code}
                </span>
                <h3 className="text-lg font-medium text-primary mb-2 font-sans">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/60 font-mono text-[10px] text-on-surface-variant uppercase font-medium">
                Our Advantage
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
