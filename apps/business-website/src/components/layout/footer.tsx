import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white/40 backdrop-blur-2xl border-t border-white/60 pt-16 pb-12 pb-safe text-on-surface relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-surface-container-high">
          
          {/* Brand Info with clean logo image */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-8 w-32 sm:h-9 sm:w-36 flex items-center">
                <Image
                  src="/wayzzo-logo.png"
                  alt="wayzzo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">
              A fast, community-powered delivery network connecting you with nearby verified riders to deliver anything across your city.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-on-surface-variant font-mono">
              <p>Office: {SITE_CONFIG.address}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-primary hover:underline font-sans">
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
              <p>
                Contact:{' '}
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} className="text-primary hover:underline font-sans">
                  {SITE_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 font-mono">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Platform Overview</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-on-surface-variant hover:text-primary transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/business" className="text-on-surface-variant hover:text-primary transition-colors">For Local Businesses</Link>
              </li>
              <li>
                <Link href="/partners" className="text-on-surface-variant hover:text-primary transition-colors">Become a Partner</Link>
              </li>
              <li>
                <Link href="/faq" className="text-on-surface-variant hover:text-primary transition-colors">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 font-mono">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                  <span>Business Inquiries</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-variant" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 font-mono">Legal &amp; Policy</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/partner-terms" className="text-on-surface-variant hover:text-primary transition-colors">Partner Guidelines</Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-on-surface-variant hover:text-primary transition-colors">Cancellation Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Operating Cities, Creator Attribution & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {currentYear} wayzzo Technologies. All rights reserved.</p>
            <span className="hidden sm:inline text-outline/40">•</span>
            <p className="font-medium text-on-surface">
              Created by <span className="text-primary font-semibold">Lokeek Lokhande</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono">
            <span>OPERATIONAL IN:</span>
            <span className="text-primary font-semibold">Pune, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
