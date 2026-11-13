import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PartnerApplicationForm } from '@/components/forms/partner-application-form';
import { Accordion } from '@/components/ui/accordion';
import { ShieldCheck, Clock, Wallet, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Become a Delivery Partner | wayzzo',
  description:
    'Deliver parcels on your bike, scooter, or EV. Work on your own schedule with transparent trip pay and direct daily transfers to your UPI or bank account.',
};

export default function PartnersPage() {
  const criteria = [
    {
      title: 'Valid Driving Licence (DL)',
      desc: 'Required for all motorcycles and scooters. Bicycle riders only need a valid government photo ID.',
    },
    {
      title: 'Vehicle Registration (RC)',
      desc: 'Valid registration document for the two-wheeler you will use for deliveries.',
    },
    {
      title: 'Active Vehicle Insurance',
      desc: 'Current third-party or comprehensive insurance for your two-wheeler.',
    },
    {
      title: 'Government ID (Aadhaar or PAN)',
      desc: 'Used for quick identity check and to connect your bank account for daily payouts.',
    },
    {
      title: 'Eligible Two-Wheeler',
      desc: 'Any motorcycle, scooter, electric bike, or bicycle in safe, working condition.',
    },
    {
      title: 'Smartphone with Internet',
      desc: 'Any Android phone or iPhone to receive delivery orders and follow maps.',
    },
  ];

  const faqs = [
    {
      question: 'Is there a fixed monthly salary?',
      answer:
        'No. Delivery partners are independent earners who get paid for every delivery they complete. You see the exact pay on your screen before you decide to accept any delivery.',
    },
    {
      question: 'How long does it take to get started?',
      answer:
        'Once you upload photos of your Driving Licence, RC, and Aadhaar, our team verifies them within 24 to 48 hours so you can start delivering quickly.',
    },
    {
      question: 'Can I deliver using an electric scooter or bicycle?',
      answer:
        'Yes! We encourage electric scooters and bicycles, especially for quick deliveries within nearby neighborhood areas.',
    },
    {
      question: 'How and when do I get paid?',
      answer:
        'Your earnings are transferred directly into your bank account or UPI every day without any hidden platform cuts.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full bg-primary text-on-primary py-20 lg:py-28 overflow-hidden border-b border-surface-container-high">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,166,115,0.25),rgba(28,27,27,0))]" />
          
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container border border-surface-container-high/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="font-mono text-xs text-secondary-fixed-dim uppercase tracking-wider font-semibold">
                [ PARTNER REGISTRATION OPEN ]
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-on-primary max-w-4xl tracking-tight leading-[1.12] font-medium font-sans px-2 sm:px-0">
              Your bike. Your time.<br />Your opportunity.
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-on-primary-container max-w-xl font-normal leading-relaxed px-2 sm:px-0">
              Earn money on your two-wheeler with clear pay for every trip, zero commission cuts, and daily payouts to your account.
            </p>

            <div className="mt-8 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#apply"
                className="inline-flex items-center justify-center bg-surface text-primary px-8 py-3.5 rounded-full text-xs font-semibold shadow-xl hover:bg-surface-bright transition-all min-h-[44px] w-full sm:w-auto"
              >
                Apply as a Delivery Partner →
              </a>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 sm:py-20 bg-surface-container-lowest border-b border-surface-container-high">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
                WHAT YOU NEED
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-1 font-sans">
                Requirements to Join
              </h2>
              <p className="text-sm text-on-surface-variant mt-2">
                Simple onboarding requirements to keep deliveries safe and trustworthy for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {criteria.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface border border-surface-container-high space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <h3 className="font-medium text-primary text-sm font-sans">{item.title}</h3>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high font-mono text-[10px] text-on-surface-variant uppercase font-medium">
                    Required Document
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 sm:py-20 bg-surface border-b border-surface-container-high">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
                APPLY TODAY
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-1 font-sans">
                Register as a Delivery Partner
              </h2>
              <p className="text-sm text-on-surface-variant mt-2">
                Submit your details below and our team will get in touch to complete your registration.
              </p>
            </div>

            <PartnerApplicationForm />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
                HAVE QUESTIONS?
              </span>
              <h2 className="text-3xl font-medium text-primary mt-1 font-sans">Partner FAQs</h2>
            </div>

            <Accordion items={faqs} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
