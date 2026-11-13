import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | wayzzo',
  description: 'How wayzzo protects and respects your personal details and location data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 py-16 bg-surface-container-low pt-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="mb-8 p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high flex items-start gap-3 text-xs text-on-surface">
            <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary">YOUR PRIVACY MATTERS:</span> We only collect what is strictly necessary to pick up, route, and deliver your orders safely. We never sell your personal data.
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 sm:p-12 rounded-3xl border border-surface-container-high shadow-sm space-y-6 text-on-surface text-sm leading-relaxed">
            <div className="border-b border-surface-container-high pb-4">
              <span className="text-xs font-mono text-secondary uppercase font-semibold">DATA PRIVACY</span>
              <h1 className="text-3xl font-medium text-primary mt-1 font-sans">Privacy Policy</h1>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">1. What Information We Collect</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                We collect your name, phone number, pickup and delivery addresses, and location data only while an active delivery is taking place so you can see live tracking on the map. For delivery partners, we also verify Driving Licence and vehicle RC documents for safety.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-on-surface-variant">
                <li>To find nearby delivery partners and calculate delivery fares.</li>
                <li>To show live tracking maps to the sender and receiver.</li>
                <li>To verify delivery partner identity and vehicle eligibility.</li>
                <li>To generate clear GST tax invoices and daily payment receipts.</li>
                <li>To help you through our customer support team whenever you need assistance.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">3. Keeping Your Data Safe</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Your payment details are processed through encrypted, certified banking and UPI gateways. We never store your full card numbers or banking passwords.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
