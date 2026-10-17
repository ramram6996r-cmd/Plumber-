import React, { useState } from 'react';
import { Shield, Clock, Award, Star, CheckCircle2, MessageCircle, Phone, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';
import { SERVICES_LIST } from '../data/plumbingData';
import { generateWhatsAppUrl, createBookingWhatsAppMessage } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const { config, getTelLink } = usePlumber();
  
  // Interactive Hero Quick-Booking State
  const [selectedService, setSelectedService] = useState('24/7 Emergency Burst Pipe & Leak Repair');
  const [urgency, setUrgency] = useState('Emergency (Within 60 mins)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = createBookingWhatsAppMessage({
      name: name || 'Homeowner',
      phone: phone || 'Provided via WhatsApp chat',
      address: zip ? `Area/Zip: ${zip}` : 'Local service address',
      service: selectedService,
      urgency: urgency,
      preferredTime: urgency.includes('Emergency') ? 'Immediate Emergency Dispatch' : 'Earliest Available Slot',
      notes: 'Quick lead generated from EasyFix Hero section',
      ownerName: config.ownerName || 'Hemanth'
    }, config.businessName);

    const url = generateWhatsAppUrl(config.whatsappNumber, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background ambient lighting and subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 shadow-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-200">
                4.9/5 Rating (480+ Local Homeowners)
              </span>
              <span className="text-xs text-cyan-400 font-bold hidden sm:inline">• Master Plumber {config.ownerName || 'Hemanth'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
              Trusted Local Plumbing Experts.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                60-Min Emergency Response
              </span>{' '}
              & 100% Upfront Pricing.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              No hidden fees. No messy surprises. From emergency burst pipes and stubborn clogs to water heater installations and repiping—<strong className="text-white font-semibold">EasyFix</strong> delivers guaranteed, professional plumbing with direct WhatsApp updates.
            </p>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 p-2.5 rounded-xl">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200 leading-tight">60-Min Dispatch</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 p-2.5 rounded-xl">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200 leading-tight">Upfront Flat Rate</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 p-2.5 rounded-xl">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200 leading-tight">Insured & Trusted</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200 leading-tight">1-Yr Warranty</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={generateWhatsAppUrl(
                  config.whatsappNumber,
                  createBookingWhatsAppMessage({
                    name: '',
                    phone: '',
                    address: '',
                    service: 'Plumbing Service Dispatch',
                    urgency: '🚨 Immediate Emergency (Under 60 mins)',
                    preferredTime: 'Earliest Available Window',
                    notes: 'Direct booking request from website hero',
                    ownerName: config.ownerName || 'Hemanth'
                  }, config.businessName)
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book Directly with {config.ownerName || 'Hemanth'} on WhatsApp</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 animate-pulse"></span>
              </a>

              <a
                href={getTelLink()}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-600 text-white font-bold text-base shadow-md transition-all text-center"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>Call {config.phoneFormatted}</span>
              </a>
            </div>

            {/* Homeowner guarantee reassurance */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>We arrive with protective floor runners & boot covers • Zero cleanup required</span>
            </div>

          </div>

          {/* Right Hero Interactive Lead Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl">
              
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                ⚡ Instant WhatsApp Dispatch
              </div>

              <div className="mb-5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                  Fast Online Plumbing Booking
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fill details below to open a pre-formatted chat with our on-duty master plumber.
                </p>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    What plumbing issue do you have?
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-hidden focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                        {srv.title} ({srv.priceEstimate})
                      </option>
                    ))}
                    <option value="Other Plumbing Repair" className="bg-slate-900 text-white">
                      Other / Unsure (Send Photo via WhatsApp)
                    </option>
                  </select>
                </div>

                {/* Urgency Level */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    How urgent is this?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: '🚨 Emergency', val: 'Emergency (Within 60 mins)' },
                      { label: '📅 Today', val: 'Today (Within 3-4 hours)' },
                      { label: '🗓️ Flexible', val: 'Scheduled (This Week)' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.val}
                        onClick={() => setUrgency(item.val)}
                        className={`text-xs py-2 px-2 rounded-lg font-medium border text-center transition-all ${
                          urgency === item.val
                            ? 'bg-cyan-600/30 border-cyan-400 text-cyan-200 font-bold'
                            : 'bg-slate-900/60 border-slate-700/80 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-hidden focus:border-cyan-500 placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-hidden focus:border-cyan-500 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Zip Code */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Neighborhood / Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 90210 or Oakridge Suburb"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-hidden focus:border-cyan-500 placeholder:text-slate-500"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>Send to WhatsApp & Get Fast Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 Direct WhatsApp connection. You can send photos of your leak directly.
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
