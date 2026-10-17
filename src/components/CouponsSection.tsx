import React, { useState } from 'react';
import { COUPONS } from '../data/plumbingData';
import { Tag, Check, Copy, MessageCircle, Sparkles } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';
import { generateWhatsAppUrl, createBookingWhatsAppMessage } from '../utils/whatsapp';

export const CouponsSection: React.FC = () => {
  const { config } = usePlumber();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const handleClaimWhatsApp = (couponCode: string, couponTitle: string) => {
    const text = createBookingWhatsAppMessage({
      name: '',
      phone: '',
      address: '',
      service: couponTitle,
      urgency: 'Scheduled Appointment',
      preferredTime: 'Earliest Available Slot',
      couponCode: couponCode,
      notes: `Claiming special promotional offer: ${couponTitle} (${couponCode})`,
      ownerName: config.ownerName || 'Hemanth'
    }, config.businessName);

    const url = generateWhatsAppUrl(config.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Special Homeowner Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Exclusive Service Privileges & Inspections
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Mention these offer codes when contacting {config.ownerName || 'Hemanth'} on WhatsApp to apply priority dispatch, complimentary inspections, and guarantees to your booking.
          </p>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COUPONS.map((coupon) => (
            <div
              key={coupon.id}
              className="relative bg-gradient-to-b from-slate-800 to-slate-850 rounded-2xl border-2 border-dashed border-slate-700 hover:border-cyan-400/80 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-xl"
            >
              {/* Tag Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md bg-amber-400 text-slate-950">
                    {coupon.tag}
                  </span>
                  <span className="text-xs text-slate-400">{coupon.expiry}</span>
                </div>

                <div className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {coupon.discount}
                </div>

                <h3 className="text-base font-bold text-slate-200 mt-1">
                  {coupon.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {coupon.details}
                </p>
              </div>

              {/* Code Box & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-700">
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-300">
                    {coupon.code}
                  </span>
                  <button
                    onClick={() => copyToClipboard(coupon.code)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {copiedCode === coupon.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => handleClaimWhatsApp(coupon.code, coupon.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Book with Offer on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
