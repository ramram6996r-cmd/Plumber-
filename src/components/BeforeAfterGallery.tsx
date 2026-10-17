import React, { useState } from 'react';
import { BEFORE_AFTER_JOBS } from '../data/plumbingData';
import { CheckCircle2, Clock, Sparkles, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';

export const BeforeAfterGallery: React.FC = () => {
  const { openBookingModal, getWhatsAppLink } = usePlumber();
  const [activeJobId, setActiveJobId] = useState<string>(BEFORE_AFTER_JOBS[0].id);
  const [showAfterOnly, setShowAfterOnly] = useState<Record<string, boolean>>({});

  const toggleView = (id: string) => {
    setShowAfterOnly(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="before-after" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Verified Job Site Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Before & After: Real Plumbing Transformations
          </h2>
          <p className="mt-3 text-base text-slate-600">
            See the difference licensed craftsmanship makes. From corroded pipe disasters to clean, high-flow modern installations.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BEFORE_AFTER_JOBS.map((job) => {
            const isShowingAfter = showAfterOnly[job.id] ?? false;

            return (
              <div
                key={job.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Area with Before / After Toggle */}
                <div>
                  <div className="relative h-64 w-full bg-slate-900 overflow-hidden group">
                    <img
                      src={isShowingAfter ? job.afterImg : job.beforeImg}
                      alt={job.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                    {/* Status Pill */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                          isShowingAfter
                            ? 'bg-emerald-500 text-white'
                            : 'bg-red-500 text-white'
                        }`}
                      >
                        {isShowingAfter ? '✓ EasyFix Completed Result' : '⚠ Problem Condition Before'}
                      </span>
                    </div>

                    {/* Interactive Toggle Button */}
                    <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between">
                      <button
                        onClick={() => toggleView(job.id)}
                        className="py-1.5 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold backdrop-blur-xs border border-white/20 flex items-center gap-1.5 shadow-lg transition-transform active:scale-95"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Tap to view {isShowingAfter ? 'Before' : 'After'}</span>
                      </button>

                      <span className="text-[11px] text-white/90 bg-black/60 px-2 py-1 rounded-md">
                        {job.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Completion: <strong>{job.timeSpent}</strong></span>
                      </div>
                      <div className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {job.savingHighlight}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => openBookingModal(job.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Consultation Banner */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-6 max-w-2xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a tricky leak or plumbing headache?</h4>
            <p className="text-xs text-slate-500">Send us 1-2 photos on WhatsApp for an instant visual diagnosis.</p>
          </div>
          <a
            href={getWhatsAppLink('Hi EasyFix! I would like to send a photo of my plumbing issue for a quick evaluation.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Send Photos on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
