import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | wayzzo',
  description: 'Clear and simple policy explaining cancellation rules, partner compensation, and refunds.',
};

export default function CancellationPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 py-16 bg-surface-container-low pt-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="mb-8 p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high flex items-start gap-3 text-xs text-on-surface">
            <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary">FAIR CANCELLATION RULES:</span> We want to be fair to both customers and our delivery partners who spend time and fuel riding to your location.
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 sm:p-12 rounded-3xl border border-surface-container-high shadow-sm space-y-6 text-on-surface text-sm leading-relaxed">
            <div className="border-b border-surface-container-high pb-4">
              <span className="text-xs font-mono text-secondary uppercase font-semibold">CUSTOMER POLICY</span>
              <h1 className="text-3xl font-medium text-primary mt-1 font-sans">Cancellation &amp; Refund Policy</h1>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">1. Cancelling Your Delivery</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                <strong>Before a rider accepts:</strong> You can cancel your delivery request anytime for free while the system is looking for a nearby delivery partner. You will receive a 100% full refund.
              </p>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                <strong>After a rider is assigned:</strong> If you cancel after a delivery partner has already started riding toward your pickup point, a small fee (₹25–₹35) is deducted to fairly pay the rider for their travel and fuel.
              </p>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                <strong>After package is picked up:</strong> Once the rider has collected your package, the delivery cannot be cancelled mid-ride. If you need the item returned, you can request a return trip back to the sender.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">2. How Refunds Work</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                If you paid online via UPI, card, or net banking, refunds for eligible cancellations are automatically processed back to your original payment method within 2 to 4 working days.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">3. If a Rider Cannot Reach You</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Our delivery partner will try calling you and the recipient when they arrive. If no one answers for more than 10 minutes, our support team will attempt to reach you to resolve the delivery or arrange a return.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
