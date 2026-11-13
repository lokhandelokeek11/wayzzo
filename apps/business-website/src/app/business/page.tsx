import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BusinessInquiryForm } from '@/components/forms/business-inquiry-form';
import { Store, Terminal, CheckCircle2, FileText, Code, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Local Businesses & Shops | wayzzo',
  description:
    'Deliver products directly to your neighborhood customers. Zero food-app commission cuts, transparent distance pricing, and reliable nearby riders.',
};

export default function BusinessPage() {
  const painPoints = [
    {
      problem: 'Delivery apps take 20% to 30% commission on every order',
      solution: 'Pay only for the delivery distance. Keep 100% of your retail product prices.',
    },
    {
      problem: 'Buying delivery bikes and paying monthly salaries is too costly',
      solution: 'Zero vehicle investment or fixed staff costs. Pay only when you actually have an order.',
    },
    {
      problem: 'In-house delivery staff take leave or arrive late',
      solution: 'Tap into a large pool of verified nearby riders ready to pick up whenever you need.',
    },
    {
      problem: 'Customers keep calling your shop asking where their order is',
      solution: 'Customers get a live tracking link to watch the rider arrive in real time.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center justify-center text-center overflow-hidden border-b border-surface-container-high">
          <div className="max-w-[1240px] mx-auto w-full flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs text-on-surface-variant tracking-wider uppercase font-semibold">
                [ EASY LOCAL DELIVERIES FOR BUSINESSES ]
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight text-primary max-w-4xl font-medium leading-[1.12] mb-4 sm:mb-6 font-sans px-2 sm:px-0">
              Deliver directly to your customers. Keep all your profits.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2 sm:px-0">
              Running a retail store, bakery, restaurant, or chemist? Send your orders anywhere in your city with reliable, on-demand two-wheeler delivery partners.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#inquiry"
                className="h-11 sm:h-10 px-6 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface transition-all shadow-sm flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Start Delivering Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#inquiry"
                className="h-11 sm:h-10 px-6 rounded-full glass-panel-subtle text-on-surface text-xs font-semibold hover:bg-white/90 transition-all shadow-sm flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Store className="w-3.5 h-3.5 text-on-surface-variant" />
                <span>Talk with Our Team</span>
              </a>
            </div>

          </div>
        </section>

        {/* Comparison Grid */}
        <section className="py-16 sm:py-20 bg-white/30 backdrop-blur-md border-b border-white/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold px-3 py-1 rounded-full glass-pill">
                WHY IT MAKES SENSE
              </span>
              <h2 className="text-3xl font-medium text-primary mt-3 font-sans">
                Keep 100% of Your Store Margins
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl glass-panel-subtle glass-panel-hover space-y-3"
                >
                  <div className="flex items-start gap-2.5 text-xs text-error font-medium">
                    <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container uppercase text-[10px] font-mono font-semibold">
                      The Old Problem
                    </span>
                    <span className="leading-relaxed">{item.problem}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-primary font-medium pt-2 border-t border-white/60">
                    <span className="px-2 py-0.5 rounded-full glass-pill text-primary uppercase text-[10px] font-mono font-semibold">
                      The Wayzzo Way
                    </span>
                    <span className="leading-relaxed">{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Options */}
        <section className="py-16 sm:py-20 bg-transparent border-b border-white/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold px-3 py-1 rounded-full glass-pill">
                HOW YOU CAN USE IT
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-3 font-sans">
                Simple Options for Every Kind of Business
              </h2>
              <p className="text-sm text-on-surface-variant mt-2">
                No compulsory monthly contracts. Pick the plan that best fits how many orders you send.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Option 1 */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full glass-pill text-primary font-semibold">
                    OPTION 01 // PAY-AS-YOU-GO
                  </span>
                  <h3 className="text-xl font-medium text-primary mt-4 mb-2 font-sans">Occasional Deliveries</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-normal">
                    Perfect for standalone cafes, cake shops, and local boutiques who want to book a rider whenever an order comes in.
                  </p>
                  <div className="text-lg font-medium text-primary mb-4 font-mono">Standard Distance Fare</div>
                  <ul className="space-y-2 text-xs text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Zero monthly minimum fees
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Simple website to book rides
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Instant digital invoice
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-white/60">
                  <a
                    href="#inquiry"
                    className="block text-center py-3 px-4 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface min-h-[44px] flex items-center justify-center shadow-sm"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Option 2 */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel-dark glass-panel-dark-hover text-on-primary flex flex-col justify-between relative">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full glass-pill-dark text-secondary-container font-semibold">
                    OPTION 02 // DAILY BATCHES
                  </span>
                  <h3 className="text-xl font-medium text-on-primary mt-4 mb-2 font-sans">Busy Local Stores</h3>
                  <p className="text-xs text-on-primary-container leading-relaxed mb-6 font-normal">
                    For grocery shops, pharmacies, and busy retail stores that send 15+ deliveries to neighborhood customers every day.
                  </p>
                  <div className="text-lg font-medium text-on-primary mb-4 font-mono">Discounted Volume Rates</div>
                  <ul className="space-y-2 text-xs text-on-primary">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" /> Lower per-kilometer rates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" /> Upload multiple orders at once
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" /> Priority rider assignment
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10">
                  <a
                    href="#inquiry"
                    className="block text-center py-3 px-4 rounded-full bg-surface text-primary text-xs font-semibold hover:bg-surface-bright min-h-[44px] flex items-center justify-center shadow-lg"
                  >
                    Talk About Daily Rates
                  </a>
                </div>
              </div>

              {/* Option 3 */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full glass-pill text-primary font-semibold">
                    OPTION 03 // MULTI-OUTLET
                  </span>
                  <h3 className="text-xl font-medium text-primary mt-4 mb-2 font-sans">Brands &amp; Chains</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-normal">
                    For multi-store chains, diagnostic labs, and online brands needing automatic system integration and monthly invoicing.
                  </p>
                  <div className="text-lg font-medium text-primary mb-4 font-mono">Custom Business Plan</div>
                  <ul className="space-y-2 text-xs text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Connect your website or billing POS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Dedicated support manager
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Monthly billing &amp; GST tax bills
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-white/60">
                  <a
                    href="#inquiry"
                    className="block text-center py-3 px-4 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface min-h-[44px] flex items-center justify-center shadow-sm"
                  >
                    Talk with Solutions Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Form Section */}
        <section id="inquiry" className="py-16 sm:py-20 bg-white/30 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold px-3 py-1 rounded-full glass-pill">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl font-medium text-primary mt-3 font-sans">
                Start Delivering with wayzzo
              </h2>
              <p className="text-sm text-on-surface-variant mt-2">
                Fill in the short form below and our team will get your shop ready to deliver within 24 hours.
              </p>
            </div>

            <BusinessInquiryForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
