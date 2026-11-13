import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delivery Partner Terms & Guidelines | wayzzo',
  description: 'Simple rules and expectations for independent delivery partners delivering with wayzzo.',
};

export default function PartnerTermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 py-16 bg-transparent pt-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="mb-8 p-4 rounded-2xl glass-pill flex items-start gap-3 text-xs text-on-surface">
            <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary">COMMUNITY PARTNER GUIDELINES:</span> These terms outline our commitments to you as a delivery partner, and what we expect from you to keep deliveries safe, respectful, and reliable for everyone.
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-12 rounded-3xl space-y-6 text-on-surface text-sm leading-relaxed">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-mono text-secondary uppercase font-semibold px-2.5 py-0.5 rounded-full glass-pill">
                PARTNER AGREEMENT
              </span>
              <h1 className="text-3xl font-medium text-primary mt-2 font-sans">Delivery Partner Guidelines &amp; Terms</h1>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">1. You Work for Yourself (Independent Partner)</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                As a delivery partner, you are your own boss. You choose when you want to log in, which trips you want to accept, and when you want to stop. You are an independent partner, not a permanent salaried employee of wayzzo.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">2. Valid Documents and Road Safety</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                To keep everyone safe, you must hold an active Driving Licence, keep your vehicle registration (RC) up to date, and have valid vehicle insurance. Wearing a certified helmet during all trips is mandatory. You must follow all local traffic laws and ride responsibly.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">3. Transparent Trip Pay and Daily Transfers</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                You get paid for every delivery you complete. The trip amount is displayed clearly on your screen before you accept the order so there are no surprises. Your earnings are transferred directly to your bank account or UPI every day.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">4. Respect and Honest Behavior</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                We expect partners to treat senders, recipients, and fellow riders with courtesy and respect. Any tampering with parcels, asking for extra unauthorized cash, theft, or rude behavior will result in permanent removal from the platform.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-medium text-primary font-sans">5. Safe Delivery PIN Verification</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Always ask the recipient for the 4-digit PIN before handing over the parcel. Entering the PIN in your app protects you by providing instant proof that the customer safely received their item.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
