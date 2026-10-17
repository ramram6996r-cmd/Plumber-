import React from 'react';
import { Wrench, Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';
import { SERVICES_LIST, SERVICE_AREAS } from '../data/plumbingData';

export const Footer: React.FC = () => {
  const { config, getWhatsAppLink, getTelLink } = usePlumber();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-md">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Easy<span className="text-cyan-400">Fix</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your local licensed plumbing specialists. Providing upfront flat-rate pricing, 24/7 rapid emergency dispatch, and guaranteed mess-free repairs for residential and commercial homeowners.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Master Plumber: {config.ownerName || 'Hemanth'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Operating Hours: 24/7/365 Emergency Dispatch</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>Headquarters: {config.address}, {config.city}</span>
              </div>
            </div>
          </div>

          {/* Quick Services Links (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Plumbing Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title.split('&')[0]}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-cyan-400">{service.priceEstimate}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_AREAS.slice(0, 6).map((area, idx) => (
                <li key={idx}>
                  <a href="#service-areas" className="hover:text-cyan-400 transition-colors">
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Emergency Contact (Cols 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Emergency Contact & Dispatch
            </h4>
            <p className="text-xs text-slate-400">
              Need immediate service? Contact us 24 hours a day for direct technician communication.
            </p>

            <div className="space-y-2.5">
              <a
                href={getTelLink()}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-white text-xs font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {config.phoneFormatted}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {config.whatsappFormatted}</span>
              </a>

              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{config.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} EasyFix Plumbing Services. All rights reserved. Trusted local plumbing.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="#booking" className="hover:text-slate-300">Online Booking</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
