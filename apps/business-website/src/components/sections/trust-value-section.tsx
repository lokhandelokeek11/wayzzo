'use client';

import { motion } from 'framer-motion';
import { Package, Bike, Store, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import Link from 'next/link';

export function TrustValueSection() {
  const pillars = [
    {
      icon: <Package className="w-5 h-5 text-secondary" />,
      title: 'Everyday Deliveries',
      badge: 'For Senders',
      description:
        'Send home-cooked meals, documents, clothes, keys, or gifts to anywhere in your city with fast, direct doorstep pickup and delivery.',
    },
    {
      icon: <Bike className="w-5 h-5 text-secondary" />,
      title: 'Flexible Earning',
      badge: 'For Riders',
      description:
        'Verified delivery partners use their own bikes or scooters to earn money whenever they want, with clear pay for every trip.',
    },
    {
      icon: <Store className="w-5 h-5 text-secondary" />,
      title: 'Help for Local Shops',
      badge: 'For Businesses',
      description:
        'Local bakeries, pharmacies, and retail shops can deliver products to customers quickly without hiring their own permanent delivery staff.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
      title: 'Honest & Transparent',
      badge: 'Our Standard',
      description:
        'Zero surprise fees, no hidden commissions. You get fair distance-based prices and verified background checks on every partner.',
    },
  ];

  return (
    <section className="w-full bg-white/40 backdrop-blur-md py-16 sm:py-24 lg:py-32 border-y border-white/60 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading in Simple English */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto text-center flex flex-col items-center mb-16"
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-widest mb-4 font-medium px-3 py-1 rounded-full glass-pill">
            WHY WE ARE BUILDING WAYZZO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] lg:leading-[48px] text-primary tracking-tight font-medium mb-6 font-sans">
            &ldquo;Connecting people who need deliveries with nearby riders, making deliveries easy for customers and earning flexible for partners.&rdquo;
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed font-normal">
            wayzzo is a community-powered delivery network. Instead of sending packages to distant warehouses where they sit for days, your package goes straight from the sender to the receiver through nearby riders.
          </p>
        </motion.div>

        {/* 4 Pillars in Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl glass-panel-subtle flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full glass-pill text-on-surface-variant font-medium">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-medium text-primary mb-2 font-sans">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container-high font-mono text-[10px] text-secondary uppercase font-medium">
                Core Principle
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
