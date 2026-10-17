import React, { useState } from 'react';
import { FAQS } from '../data/plumbingData';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';

export const FAQSection: React.FC = () => {
  const { config, getWhatsAppLink, getTelLink } = usePlumber();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'emergency', label: '🚨 Emergency Response' },
    { id: 'pricing', label: '📋 Upfront Quotes' },
    { id: 'maintenance', label: '🛠️ Repairs & Maintenance' },
    { id: 'general', label: '🛡️ Guarantees & Booking' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            Homeowner Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Plumbing Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about pricing, response times, or emergency procedures? Here are direct answers from our master plumbers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-cyan-600 text-white' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Ask Callout */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold">Still have a specific question about your home's plumbing?</h4>
            <p className="text-xs text-slate-300 mt-1">Master Plumber {config.ownerName || 'Hemanth'} will answer your questions directly via WhatsApp or phone call.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink(`Hi ${config.ownerName || 'Hemanth'}! I have a question about a plumbing issue at my home:`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask {config.ownerName || 'Hemanth'} on WhatsApp</span>
            </a>
            <a
              href={getTelLink()}
              className="px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
