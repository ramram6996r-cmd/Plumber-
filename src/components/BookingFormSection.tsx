import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/plumbingData';
import { usePlumber } from '../context/PlumberContext';
import { generateWhatsAppUrl, createBookingWhatsAppMessage } from '../utils/whatsapp';
import { MessageCircle, Phone, Calendar, Clock, MapPin, Wrench, ShieldCheck, Sparkles, Send, Eye } from 'lucide-react';

export const BookingFormSection: React.FC = () => {
  const { config, getTelLink, appliedCoupon } = usePlumber();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('24/7 Emergency Burst Pipe & Leak Repair');
  const [urgency, setUrgency] = useState('🚨 Emergency (Under 60 mins)');
  const [preferredDate, setPreferredDate] = useState('Today / Earliest Available');
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [couponCode, setCouponCode] = useState(appliedCoupon || '');
  const [showLivePreview, setShowLivePreview] = useState(true);

  // Generate real-time preview text
  const previewMessage = createBookingWhatsAppMessage({
    name: fullName || 'Your Name',
    phone: phone || 'Your Phone Number',
    address: address || 'Your Street Address & Neighborhood',
    service: service,
    urgency: urgency,
    preferredTime: `${preferredDate} • ${preferredTime}`,
    notes: notes,
    couponCode: couponCode,
    ownerName: config.ownerName || 'Hemanth',
  }, config.businessName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = createBookingWhatsAppMessage({
      name: fullName,
      phone: phone,
      address: address,
      service: service,
      urgency: urgency,
      preferredTime: `${preferredDate} • ${preferredTime}`,
      notes: notes,
      couponCode: couponCode,
      ownerName: config.ownerName || 'Hemanth',
    }, config.businessName);

    const url = generateWhatsAppUrl(config.whatsappNumber, finalMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            Seamless Online Lead Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Book Online with Direct WhatsApp Confirmation
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Submit your appointment details below. You will be redirected straight to our active technician WhatsApp chat for immediate confirmation and live technician updates.
          </p>
        </div>

        {/* Main Form + Live Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-md">
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  Service Required *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:outline-hidden focus:border-cyan-400"
                  required
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                      {s.title} ({s.priceEstimate})
                    </option>
                  ))}
                  <option value="General Inspection / Other Plumbing Service" className="bg-slate-900 text-white">
                    General Plumbing Check / Other
                  </option>
                </select>
              </div>

              {/* Urgency Level Buttons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Urgency Level *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    '🚨 Emergency (Under 60 mins)',
                    '⚡ Today (Standard slot)',
                    '🗓️ Scheduled Appointment'
                  ].map((level) => (
                    <button
                      type="button"
                      key={level}
                      onClick={() => setUrgency(level)}
                      className={`text-xs py-2.5 px-3 rounded-xl font-semibold border text-center transition-all ${
                        urgency === level
                          ? 'bg-cyan-500/25 border-cyan-400 text-cyan-200 font-bold shadow-xs'
                          : 'bg-slate-900/60 border-slate-700/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (555) 321-9876"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Service Address & Zip */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Service Street Address & Neighborhood / Zip Code *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 742 Evergreen Terrace, Springfield, 97477"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
                />
              </div>

              {/* Date & Time Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    Preferred Date
                  </label>
                  <select
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400"
                  >
                    <option value="Today / Earliest Available">Today (ASAP Dispatch)</option>
                    <option value="Tomorrow Morning">Tomorrow</option>
                    <option value="This Weekend">This Weekend</option>
                    <option value="Flexible Next Week">Flexible / Next Week</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="24/7 Immediate Emergency Window">24/7 Immediate Emergency Window</option>
                  </select>
                </div>
              </div>

              {/* Problem Description & Photo Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Describe the Issue (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Dripping under kitchen cabinet, started 2 hours ago. Can send photo in WhatsApp."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
                ></textarea>
                <p className="text-[11px] text-slate-400 mt-1">
                  💡 Tip: Once WhatsApp opens, you can tap the paperclip/camera icon to attach a quick photo or video!
                </p>
              </div>

              {/* Coupon Code Input */}
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code (e.g. EASY50)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  className="w-1/2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs uppercase tracking-wider focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500 font-mono"
                />
                <span className="text-xs text-slate-400">
                  {couponCode ? `Coupon applied: ${couponCode}` : 'Have a discount coupon? Enter it here.'}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-base shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit & Open WhatsApp Chat Now</span>
                <Send className="w-4 h-4 ml-1" />
              </button>

              {/* Fallback Call Button */}
              <div className="text-center pt-2">
                <span className="text-xs text-slate-400">Prefer speaking directly on the phone? </span>
                <a
                  href={getTelLink()}
                  className="text-xs text-cyan-400 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  Call {config.phoneFormatted}
                </a>
              </div>

            </form>

          </div>

          {/* WhatsApp Live Preview Box (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live WhatsApp Simulation Card */}
            <div className="bg-[#0b141a] rounded-3xl border border-slate-700/80 p-5 shadow-2xl relative overflow-hidden">
              
              {/* WhatsApp chat header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    EF
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      {config.businessName}
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="text-[11px] text-emerald-400">Online • Typically replies in 4m</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Live Preview</span>
                </div>
              </div>

              {/* Chat Message Bubble */}
              <div className="py-5">
                <div className="bg-[#005c4b] text-[#e9edef] rounded-2xl rounded-tr-xs p-4 shadow-md text-xs font-sans leading-relaxed whitespace-pre-wrap select-all">
                  {previewMessage}
                  <div className="text-[10px] text-emerald-200/70 text-right mt-2 flex items-center justify-end gap-1">
                    <span>Just now</span>
                    <span>✓✓</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp explanation */}
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="font-bold text-slate-200">How WhatsApp Booking Works:</div>
                <p>1. Clicking submit automatically opens WhatsApp with this structured message ready to send.</p>
                <p>2. Our on-duty plumber acknowledges receipt and sends technician profile & arrival window.</p>
                <p>3. You can attach pictures or short videos directly in the chat.</p>
              </div>

            </div>

            {/* Homeowner Trust Guarantees */}
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/60 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>The EasyFix Service Guarantee</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Zero surprise charges:</strong> Written flat quotes prior to any work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Cleanliness promise:</strong> Neoprene floor guards and protective shoe covers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>1-Year warranty:</strong> Complete coverage on all parts & labor.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
