import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Accordion } from '@/components/ui/accordion';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | wayzzo',
  description:
    'Got questions about how wayzzo works, how much it costs, or how to become a delivery partner? Find answers here.',
};

export default function FaqPage() {
  const faqs = [
    {
      question: 'What is wayzzo basically?',
      answer:
        'wayzzo is a community delivery network that connects people who need things delivered with nearby delivery partners on bikes and scooters. Whether you are sending a parcel to a friend or delivering an order from your shop, wayzzo makes it fast, easy, and affordable.',
    },
    {
      question: 'Who can use wayzzo to send packages?',
      answer:
        'Anyone can use wayzzo! Individual customers can send items like keys, documents, home-cooked food, clothes, or gifts. Local businesses like bakeries, medical stores, boutiques, and restaurants can also use wayzzo to deliver orders to their customers.',
    },
    {
      question: 'How much does a delivery cost?',
      answer:
        'Our pricing is simple and based on actual distance. You pay a standard base fare for the first 2 km, plus a fair rate per kilometer after that. You always see the total price on your screen before you book.',
    },
    {
      question: 'Who will deliver my package?',
      answer:
        'Your package is delivered by a verified local delivery partner on an eligible two-wheeler. Every partner undergoes government ID verification, Driving Licence check, and vehicle registration (RC) approval before they can deliver on wayzzo.',
    },
    {
      question: 'How do I know my package is safe?',
      answer:
        'Every delivery requires a 4-digit PIN. The delivery partner cannot mark the order as complete without entering this PIN from the recipient. You can also watch the rider move live on the map from pickup to drop-off.',
    },
    {
      question: 'How can local shops partner with wayzzo?',
      answer:
        'Shop owners can register on our website in just a few minutes. You get an easy website to book orders whenever you need them. We never take any commission cut from your product sales — you keep 100% of your customer bill.',
    },
    {
      question: 'How and when do delivery partners get paid?',
      answer:
        'Delivery partners earn money for every delivery they finish. Payouts are sent directly to their registered bank account or UPI every day with zero hidden deductions.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 pt-16">
        <section className="relative w-full pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center border-b border-white/60">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
              [ HELP &amp; ANSWERS ]
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-medium text-primary tracking-tight font-sans px-2 sm:px-0">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mt-4 font-normal px-2 sm:px-0">
            Everything you need to know about how wayzzo works for customers, local shops, and delivery partners.
          </p>
        </section>

        <section className="py-16 sm:py-20 bg-white/20 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion items={faqs} />

            <div className="mt-14 p-8 rounded-3xl glass-panel text-center space-y-3">
              <h3 className="font-medium text-primary text-base font-sans">Still have questions?</h3>
              <p className="text-xs text-on-surface-variant max-w-md mx-auto">
                Our support team is always happy to help you with any questions about bookings, shop integrations, or rider onboarding.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface transition-colors shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
