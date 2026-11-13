import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions | wayzzo',
  description: 'Simple and clear terms governing delivery bookings and usage on wayzzo.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 py-16 bg-surface-container-low pt-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="mb-8 p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high flex items-start gap-3 text-xs text-on-surface">
            <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary">CUSTOMER &amp; SENDER TERMS:</span> These terms explain how wayzzo works, your responsibilities as a sender, and how we protect packages and deliveries.
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 sm:p-12 rounded-3xl border border-surface-container-high shadow-sm space-y-6 text-on-surface text-sm leading-relaxed">
            <div className="border-b border-surface-container-high pb-4">
              <span className="text-xs font-mono text-secondary uppercase font-semibold">LEGAL TERMS</span>
              <h1 className="text-3xl font-medium text-primary mt-1 font-sans">Terms and Conditions</h1>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">1. How the Platform Works</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                wayzzo is a technology platform that connects people and local shops with independent, verified delivery partners on two-wheelers. We facilitate on-demand matching, live map tracking, and secure delivery confirmation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">2. What Cannot Be Sent (Prohibited Items)</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                To keep everyone safe and follow Indian law, you must never send dangerous goods, flammable liquids, weapons, illegal substances, high-value unregistered cash, or any prohibited items. Any attempt to send illegal goods will result in immediate cancellation and reporting to authorities.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">3. Packaging Your Items</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Please make sure your parcel is packed securely in a bag, box, or envelope to withstand normal two-wheeler road travel. Food, cakes, and fragile goods should be packed carefully to prevent spills or damage.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">4. Delivery Handover &amp; PIN</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Every delivery generates a unique 4-digit PIN for the recipient. Please make sure the recipient gives this PIN to the delivery partner when they arrive. Handover is marked complete once this PIN is verified.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">5. Pricing &amp; Payments</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Delivery fees are calculated based on travel distance and package weight. The total fare is shown to you before you confirm booking. You can pay securely through UPI, debit/credit cards, net banking, or approved payment methods.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
