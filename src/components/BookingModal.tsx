import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, Wrench, Calendar, Clock, MapPin, Sparkles, Phone } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';
import { SERVICES_LIST } from '../data/plumbingData';
import { generateWhatsAppUrl, createBookingWhatsAppMessage } from '../utils/whatsapp';

export const BookingModal: React.FC = () => {
  const {
    config,
    bookingModalOpen,
    closeBookingModal,
    preselectedService,
    appliedCoupon,
    getTelLink,
  } = usePlumber();

  const [service, setService] = useState(preselectedService || SERVICES_LIST[0].title);
  const [urgency, setUrgency] = useState('🚨 Emergency (Within 60 mins)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [timePreference, setTimePreference] = useState('ASAP Today');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!bookingModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = createBookingWhatsAppMessage({
      name: fullName,
      phone: phone,
      address: address,
      service: service,
      urgency: urgency,
      preferredTime: timePreference,
      notes: notes,
      couponCode: appliedCoupon || undefined,
      ownerName: config.ownerName || 'Hemanth',
    }, config.businessName);

    const url = generateWhatsAppUrl(config.whatsappNumber, message);
    window.open(url, '_blank', 'noopener,noreferrer');
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-7 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Online WhatsApp Dispatch
          </div>
          <h3 className="text-xl font-black text-white">
            Schedule Your EasyFix Plumber
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Complete this quick form to launch your pre-filled WhatsApp service ticket.
          </p>
        </div>

        {appliedCoupon && (
          <div className="mb-4 p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Coupon <strong>{appliedCoupon}</strong> will be included with your booking!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Service selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Service Needed
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400"
            >
              {SERVICES_LIST.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.priceEstimate})
                </option>
              ))}
              <option value="Emergency Inspection / Other">Other Plumbing Repair</option>
            </select>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Urgency
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                '🚨 Emergency (Under 60 mins)',
                '⚡ Today Standard',
                '🗓️ Flexible This Week'
              ].map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setUrgency(lvl)}
                  className={`text-xs py-2 px-1.5 rounded-lg border text-center font-medium transition-all ${
                    urgency === lvl
                      ? 'bg-cyan-600/30 border-cyan-400 text-cyan-200 font-bold'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400'
                  }`}
                >
                  {lvl.split(' ')[0]} {lvl.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Home Street Address & Zip Code *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 123 Maple St, 90210"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
            />
          </div>

          {/* Time preference */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Time Window Preference
            </label>
            <select
              value={timePreference}
              onChange={(e) => setTimePreference(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400"
            >
              <option value="ASAP Today (Earliest Available)">ASAP Today (Earliest Available)</option>
              <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Brief Description of Leak / Issue
            </label>
            <textarea
              rows={2}
              placeholder="Optional notes or instructions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-cyan-400 placeholder:text-slate-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Open in WhatsApp & Send Ticket</span>
            <Send className="w-3.5 h-3.5" />
          </button>

          <div className="text-center">
            <a
              href={getTelLink()}
              className="text-xs text-slate-400 hover:text-cyan-400 inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              Prefer to call? {config.phoneFormatted}
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};
