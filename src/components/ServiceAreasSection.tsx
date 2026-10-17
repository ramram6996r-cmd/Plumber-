import React, { useState } from 'react';
import { SERVICE_AREAS } from '../data/plumbingData';
import { MapPin, Search, CheckCircle2, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';
import { generateWhatsAppUrl, createBookingWhatsAppMessage } from '../utils/whatsapp';

export const ServiceAreasSection: React.FC = () => {
  const { config } = usePlumber();
  const [searchZip, setSearchZip] = useState('');
  const [zipResult, setZipResult] = useState<string | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchZip.trim();
    if (!clean) return;

    // Check if zip matches any area or if it's a 5 digit number
    const matchedArea = SERVICE_AREAS.find(a => 
      a.zipCodes.some(z => z.includes(clean)) || a.name.toLowerCase().includes(clean.toLowerCase())
    );

    if (matchedArea) {
      setZipResult(`✓ Great news! ${matchedArea.name} (Zip ${clean}) is fully covered with standard ${matchedArea.responseTime} emergency arrival.`);
    } else if (/^\d{5}$/.test(clean)) {
      setZipResult(`✓ Zip code ${clean} is within our extended local coverage zone! Typical emergency dispatch is 45-60 minutes.`);
    } else {
      setZipResult(`✓ "${clean}" is within our standard coverage area! Contact us on WhatsApp for rapid technician dispatch.`);
    }
  };

  const handleAreaWhatsApp = (areaName: string) => {
    const text = createBookingWhatsAppMessage({
      name: '',
      phone: '',
      address: `${areaName}`,
      service: 'Local Area Plumbing Service',
      urgency: '⚡ Today (Standard slot)',
      preferredTime: 'Earliest Available Slot',
      notes: `Dispatch requested for neighborhood: ${areaName}`,
      ownerName: config.ownerName || 'Hemanth'
    }, config.businessName);
    const url = generateWhatsAppUrl(config.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="service-areas" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Local SEO Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Local Plumbing Services in {config.city} & Nearby Towns
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Our strategically stationed mobile service trucks ensure rapid 30 to 60-minute emergency arrival across the greater metropolitan area.
          </p>
        </div>

        {/* Interactive Zip Code Checker */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm mb-14">
          <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter your Zip code or neighborhood (e.g. 90210)..."
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:border-cyan-600 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-sm transition-colors whitespace-nowrap"
            >
              Check Availability
            </button>
          </form>

          {zipResult && (
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{zipResult}</span>
            </div>
          )}
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-cyan-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-600 transition-colors">
                    {area.name}
                  </h3>
                  {area.availableNow && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      On Call
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Est. Arrival: <strong>{area.responseTime}</strong></span>
                </div>

                <div className="text-[11px] text-slate-400 mb-4">
                  Zip codes: {area.zipCodes.join(', ')} & adjacent streets
                </div>
              </div>

              <button
                onClick={() => handleAreaWhatsApp(area.name)}
                className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 font-bold text-xs border border-slate-200 hover:border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Dispatch to {area.name.split(' ')[0]}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Local SEO keywords footnote block */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto text-center space-y-2">
          <p>
            <strong>Local Municipal Safety & Quality Standards:</strong> EasyFix complies with rigorous regional plumbing safety protocols and municipal installation standards.
          </p>
          <p className="text-[11px] text-slate-400">
            Emergency Plumber • Clogged Drain Snaking • Hydro Jetting • Burst Pipe Repair • Water Heater Installation • Tankless Conversion • Sewer Line Camera Inspection • Toilet Flange Repair • Garbage Disposal Replacement.
          </p>
        </div>

      </div>
    </section>
  );
};
