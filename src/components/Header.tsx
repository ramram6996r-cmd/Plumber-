import React, { useState } from 'react';
import { Phone, MessageCircle, Wrench, Clock, ShieldCheck, Menu, X } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';

export const Header: React.FC = () => {
  const { config, getWhatsAppLink, getTelLink, openBookingModal } = usePlumber();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Emergency 24/7', href: '#emergency' },
    { label: 'Instant Estimator', href: '#estimator' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Why EasyFix', href: '#why-us' },
    { label: 'Homeowner Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'FAQ', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Emergency Dispatch Notification Ribbon */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span className="font-bold tracking-wide uppercase">24/7 Emergency Dispatch On Call:</span>
            <span className="hidden md:inline text-rose-100">Burst pipes, severe backups & water leaks handled within 45-60 mins.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={getTelLink()}
              className="inline-flex items-center gap-1.5 hover:underline font-bold bg-white/15 px-2.5 py-0.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{config.phoneFormatted}</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <button
              onClick={() => openBookingModal('Emergency Repair')}
              className="text-xs bg-white text-red-700 hover:bg-rose-50 px-2.5 py-0.5 rounded-full font-bold shadow-xs transition-colors"
            >
              Rapid Dispatch
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  Easy<span className="text-cyan-600">Fix</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                  Plumbing
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Master Plumber • {config.ownerName || 'Hemanth'}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Call */}
            <a
              href={getTelLink()}
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 text-sm font-bold transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>{config.phoneFormatted}</span>
            </a>

            {/* WhatsApp Booking CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <a
              href={getTelLink()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              Call Now
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-cyan-600 text-white font-bold text-sm shadow-md"
            >
              Online Booking Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
