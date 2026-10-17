import React, { useState } from 'react';
import { MessageCircle, Phone, X, ShieldAlert, Sparkles } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';
import { generateWhatsAppUrl, createBookingWhatsAppMessage } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const { config, getWhatsAppLink, getTelLink, openBookingModal } = usePlumber();
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        
        {/* Interactive Chat Prompt Bubble */}
        {!tooltipDismissed && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-700/80 max-w-xs animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="font-semibold text-slate-100">
              Plumber Online: Need a fast quote or emergency dispatch?
            </span>
            <button
              onClick={() => setTooltipDismissed(true)}
              className="text-slate-400 hover:text-white p-0.5 rounded-md"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* WhatsApp Round Button */}
        <a
          href={generateWhatsAppUrl(
            config.whatsappNumber,
            createBookingWhatsAppMessage({
              name: '',
              phone: '',
              address: '',
              service: 'Plumbing Service Booking',
              urgency: '⚡ Today (Standard)',
              preferredTime: 'Earliest Available Slot',
              notes: 'Booking inquiry from floating chat button',
              ownerName: config.ownerName || 'Hemanth'
            }, config.businessName)
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          title={`Chat with ${config.ownerName || 'Hemanth'} on WhatsApp`}
        >
          {/* Subtle pulse wave */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>
          
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />

          {/* Unread message badge */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white shadow-md border-2 border-white">
            1
          </span>
        </a>
      </div>

      {/* Sticky Mobile Conversion Bar (Bottom on small screens) */}
      <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl">
        <div className="flex items-center gap-2">
          
          {/* Direct Call Button */}
          <a
            href={getTelLink()}
            className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700 shadow-sm"
          >
            <Phone className="w-4 h-4 text-cyan-400 fill-current" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Direct Button */}
          <a
            href={generateWhatsAppUrl(
              config.whatsappNumber,
              createBookingWhatsAppMessage({
                name: '',
                phone: '',
                address: '',
                service: 'Emergency Plumbing Service',
                urgency: '🚨 Immediate Emergency',
                preferredTime: 'Immediate Dispatch',
                notes: 'Mobile bottom quick dispatch request',
                ownerName: config.ownerName || 'Hemanth'
              }, config.businessName)
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
          </a>

          {/* Book Form Button */}
          <button
            onClick={() => openBookingModal()}
            className="py-3 px-3.5 rounded-xl bg-cyan-600 text-white font-bold text-xs shadow-sm"
            title="Book Online"
          >
            Book
          </button>

        </div>
      </div>
    </>
  );
};
