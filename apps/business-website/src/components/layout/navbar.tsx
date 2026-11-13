'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu automatically when path changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open on iOS / Android
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-2xl border-b border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all">
      <div className="h-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo: Clean, constrained Next.js image */}
        <Link href="/" className="flex items-center group py-2 flex-shrink-0" aria-label="wayzzo home">
          <div className="relative h-7 sm:h-8 w-24 sm:w-32 flex items-center">
            <Image
              src="/wayzzo-logo.png"
              alt="wayzzo"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 96px, 128px"
            />
          </div>
        </Link>

        {/* Desktop Navigation Pill - Frosted Glass Container with sliding tab */}
        <nav className="hidden md:flex items-center p-1 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] gap-1 relative">
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors z-10 ${
                  isActive
                    ? 'text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Group */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/business"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] text-xs text-on-surface hover:bg-white/90 hover:border-primary/40 transition-all font-semibold"
          >
            For Business
          </Link>
          <Link
            href="/partners"
            className="hidden xs:inline-flex sm:inline-flex items-center justify-center px-3 sm:px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface shadow-sm transition-colors"
          >
            Become a Partner
          </Link>
          <div className="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center text-on-primary shadow-sm">
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full text-primary hover:bg-white/60 active:bg-white/80 focus:outline-none transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Frosted Glass Animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/70 bg-white/85 backdrop-blur-2xl px-5 pt-3 pb-8 shadow-2xl overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <ul className="flex flex-col gap-1.5">
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'text-on-surface hover:bg-white/60'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTAs with large tap targets */}
            <div className="mt-5 pt-5 border-t border-white/60 flex flex-col gap-2.5">
              <Link
                href="/business"
                className="w-full text-center py-3 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-xs font-semibold text-on-surface hover:bg-white/90 active:scale-[0.98] transition-transform min-h-[44px] flex items-center justify-center shadow-sm"
              >
                For Local Shops &amp; Businesses
              </Link>
              <Link
                href="/partners"
                className="w-full text-center py-3 px-4 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface active:scale-[0.98] transition-transform min-h-[44px] flex items-center justify-center shadow-md"
              >
                Become a Delivery Partner
              </Link>

              <div className="mt-3 pt-3 border-t border-white/60 flex items-center justify-center gap-2 text-xs text-on-surface-variant font-mono">
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>Helpline: {SITE_CONFIG.phone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
