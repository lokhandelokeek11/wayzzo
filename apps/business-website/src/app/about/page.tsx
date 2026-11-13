import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Eye, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Our Mission | wayzzo',
  description:
    'Learn why we started wayzzo: making city deliveries fast, affordable for local shops, and rewarding for delivery partners.',
};

export default function AboutPage() {
  const milestones = [
    {
      phase: 'STAGE // 01',
      title: 'Pune City Launch',
      desc: 'Starting operations in key Pune neighborhoods including Kothrud, FC Road, Baner, and Koregaon Park. Setting up simple onboarding for riders and easy delivery tools for local shops.',
    },
    {
      phase: 'STAGE // 02',
      title: 'Expanding Across Greater Pune',
      desc: 'Covering all Pune clusters including Hinjewadi, Wakad, Viman Nagar, Aundh, Hadapsar, and surrounding commercial areas.',
    },
    {
      phase: 'STAGE // 03',
      title: 'Mobile Apps & Live Maps',
      desc: 'Releasing customer and partner apps with one-click bookings, live map tracking, and automated SMS updates for recipients.',
    },
    {
      phase: 'STAGE // 04',
      title: 'Green Electric Deliveries in Pune',
      desc: 'Encouraging electric two-wheelers and battery-swapping partnerships across Pune to make city deliveries cleaner and quieter.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center border-b border-white/60">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
              [ ABOUT WAYZZO • OUR MISSION ]
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-primary tracking-tight max-w-4xl mx-auto leading-tight font-medium font-sans px-2 sm:px-0">
            A smarter way to move things around your city.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-xl mx-auto mt-4 font-normal leading-relaxed px-2 sm:px-0">
            We are building a community-powered delivery network where local businesses thrive, riders earn with dignity, and customers get fast, reliable deliveries.
          </p>
        </section>

        {/* Narrative Section */}
        <section className="py-16 sm:py-20 bg-white/20 backdrop-blur-md border-b border-white/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 max-w-5xl mx-auto items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full glass-pill">
                  WHY WE STARTED
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium text-primary font-sans mt-2">
                  Local Deliveries Were Broken for Shops and Riders
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed font-normal">
                  Big food and delivery apps take 20% to 30% from local stores while cutting rider earnings with confusing deduction schemes.
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed font-normal">
                  wayzzo changes this completely: local businesses keep 100% of their product sales, riders get transparent pay for every trip, and customers get direct doorstep pickup without paying high markups.
                </p>
              </div>

              <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
                <h3 className="font-medium text-primary text-base font-sans">Our Core Promises</h3>
                <div className="space-y-3 text-xs text-on-surface-variant">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-primary font-medium">0% Commissions on Sales:</strong> Sell your products at your own prices. You only pay for the distance of the delivery.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-primary font-medium">Clear Earnings for Riders:</strong> Delivery partners see the trip payout upfront before accepting any order, with daily transfers to UPI or bank.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-primary font-medium">Direct Doorstep Delivery:</strong> Packages go straight from sender to receiver through nearby riders, without getting delayed in central warehouses.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 sm:py-20 bg-transparent border-b border-white/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full glass-pill">
                OUR JOURNEY
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-2 font-sans">How We Are Growing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-secondary tracking-widest block mb-2 font-semibold px-2 py-0.5 rounded glass-pill inline-block">
                      {item.phase}
                    </span>
                    <h3 className="font-medium text-primary text-sm mb-2 font-sans">{item.title}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/60 font-mono text-[10px] text-on-surface-variant uppercase font-medium">
                    Roadmap Phase
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 sm:py-16 bg-primary text-on-primary text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-medium font-sans">Want to Partner with wayzzo?</h2>
            <p className="text-xs sm:text-sm text-on-primary-container mt-2 mb-6 font-normal">
              Whether you are a store owner, a fleet manager, or an investor — we would love to speak with you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-primary text-xs font-semibold hover:bg-surface-bright transition-all"
            >
              <span>Get in Touch with Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
