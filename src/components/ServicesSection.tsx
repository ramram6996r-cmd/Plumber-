import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/plumbingData';
import { usePlumber } from '../context/PlumberContext';
import { generateWhatsAppUrl, createServiceInquiryWhatsAppMessage } from '../utils/whatsapp';
import { Check, Clock, ShieldCheck, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { PlumbingService } from '../types';

export const ServicesSection: React.FC = () => {
  const { config, openBookingModal } = usePlumber();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: '🚨 Emergency Repairs' },
    { id: 'drain', label: '🚿 Drain & Sewer' },
    { id: 'heaters', label: '🔥 Water Heaters' },
    { id: 'fixtures', label: '🚰 Fixtures & Leaks' },
    { id: 'pipes', label: '🔧 Whole-Home Piping' },
    { id: 'commercial', label: '🏢 Commercial' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  const handleWhatsAppServiceClick = (service: PlumbingService) => {
    const text = createServiceInquiryWhatsAppMessage(service.title, config.ownerName || 'Hemanth');
    const url = generateWhatsAppUrl(config.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Full-Spectrum Residential & Commercial Plumbing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Professional Plumbing Services by {config.ownerName || 'Hemanth'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every job is backed by our upfront written quote and 1-year craftsmanship guarantee. Click any service below to book directly with {config.ownerName || 'Hemanth'} on WhatsApp.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs ${
                activeCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Image & Badges Header */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {service.emergency24_7 && (
                    <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wide shadow-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      24/7 Fast Dispatch
                    </span>
                  )}
                  {service.popular && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wide shadow-md">
                      ★ Popular
                    </span>
                  )}
                </div>

                {/* Price Estimate badge and Duration pill on image bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {service.priceEstimate}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Inclusions */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </div>
                  <ul className="space-y-1.5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Warning Symptoms box */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    Common Warning Signs:
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    {service.symptoms[0]}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsAppServiceClick(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => openBookingModal(service.title)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 transition-colors"
                  >
                    Online Form
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
