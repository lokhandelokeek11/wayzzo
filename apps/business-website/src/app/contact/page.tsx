import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { GeneralContactForm } from '@/components/forms/general-contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us | wayzzo',
  description:
    'Get in touch with the wayzzo team for store partnerships, delivery partner questions, or customer support.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 pt-16">
        <section className="relative w-full pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center border-b border-white/60">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
              [ GET IN TOUCH ]
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-medium text-primary tracking-tight font-sans px-2 sm:px-0">
            We are here to help you.
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mt-4 font-normal px-2 sm:px-0">
            Whether you want to deliver for your store, join as a rider, or just ask a question — reach out to us anytime.
          </p>
        </section>

        <section className="py-16 sm:py-20 bg-white/20 backdrop-blur-md">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-xl font-medium text-primary font-sans">Contact Details</h2>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Reach the right team directly using the details below.
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl glass-panel space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div className="text-xs space-y-1">
                      <p className="font-medium text-primary">Email Us</p>
                      <p className="font-mono text-on-surface-variant">General: {SITE_CONFIG.contactEmail}</p>
                      <p className="font-mono text-on-surface-variant">Shops: {SITE_CONFIG.businessEmail}</p>
                      <p className="font-mono text-on-surface-variant">Riders: {SITE_CONFIG.supportEmail}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/60 flex items-start gap-3">
                    <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-medium text-primary">Helpline Phone</p>
                      <p className="font-mono text-on-surface-variant">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/60 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-medium text-primary">Office Address</p>
                      <p className="text-on-surface-variant leading-relaxed mt-0.5">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm">
                  <div className="border-b border-white/60 pb-4 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-secondary font-semibold px-2.5 py-0.5 rounded-full glass-pill">
                      DIRECT MESSAGE
                    </span>
                    <h3 className="text-lg font-medium text-primary mt-2 font-sans">Send Us a Message</h3>
                  </div>

                  <GeneralContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
