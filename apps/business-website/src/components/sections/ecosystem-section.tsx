'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Bike, Building2, ArrowRight } from 'lucide-react';

export function EcosystemSection() {
  const nodes = [
    {
      badge: 'FOR CUSTOMERS',
      icon: <User className="w-5 h-5 text-secondary" />,
      title: 'Send Anything, Anywhere in Town',
      description:
        'Forgot your keys at home, need to send office documents, or want to surprise a friend with a gift? Book a rider in seconds and track your parcel live on your phone.',
      specs: [
        'Direct doorstep pickup and drop',
        'Safe delivery with a 4-digit PIN',
        'Clear prices with no hidden charges',
      ],
      ctaLabel: 'Learn How It Works',
      ctaHref: '/how-it-works',
    },
    {
      badge: 'FOR LOCAL SHOPS & BUSINESSES',
      icon: <Building2 className="w-5 h-5 text-secondary" />,
      title: 'Deliver to Customers Without Your Own Fleet',
      description:
        'Running a bakery, pharmacy, grocery store, or boutique? Send customer orders quickly across your city without the hassle of hiring and managing your own delivery staff.',
      specs: [
        'Keep 100% of your product profits (0% commissions)',
        'Simple web dashboard to book and track deliveries',
        'Automatic GST tax invoices for your accounts',
      ],
      ctaLabel: 'See Business Solutions',
      ctaHref: '/business',
    },
    {
      badge: 'FOR DELIVERY PARTNERS',
      icon: <Bike className="w-5 h-5 text-secondary" />,
      title: 'Earn Extra Income on Your Two-Wheeler',
      description:
        'Own a bike, scooter, or electric vehicle? Make good money delivering items in your neighborhood whenever you are free. Work on your own schedule.',
      specs: [
        'Total flexibility — work when you want',
        'Fair pay calculated transparently for every trip',
        'Direct daily payouts to your UPI or bank account',
      ],
      ctaLabel: 'Apply to Become a Partner',
      ctaHref: '/partners',
    },
  ];

  return (
    <section id="ecosystem" className="w-full bg-white/30 backdrop-blur-md py-16 sm:py-24 border-b border-white/60 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-widest font-medium px-3 py-1 rounded-full glass-pill">
            WHO IS WAYZZO FOR?
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-primary tracking-tight mt-3 font-sans">
            Built for Everyone in Your City
          </h2>
          <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
            Whether you want to send a parcel, deliver orders for your local shop, or earn money by riding your bike — wayzzo makes it simple for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {nodes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-secondary tracking-wider block font-semibold px-2.5 py-0.5 rounded-full glass-pill">
                    {item.badge}
                  </span>
                  <div className="w-9 h-9 rounded-xl glass-panel-subtle flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-primary mb-3 font-sans leading-snug">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/60">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/60">
                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-secondary transition-colors group"
                >
                  <span>{item.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
