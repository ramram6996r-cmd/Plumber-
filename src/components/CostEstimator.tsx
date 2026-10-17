import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, MessageCircle, ShieldCheck, Clock, Wrench } from 'lucide-react';
import { ESTIMATOR_ISSUES } from '../data/plumbingData';
import { usePlumber } from '../context/PlumberContext';
import { generateWhatsAppUrl, createEstimatorWhatsAppMessage } from '../utils/whatsapp';

export const CostEstimator: React.FC = () => {
  const { config } = usePlumber();

  const [selectedIssueId, setSelectedIssueId] = useState(ESTIMATOR_ISSUES[0].id);
  const [homeType, setHomeType] = useState<'standard' | 'multistory' | 'commercial'>('standard');
  const [urgency, setUrgency] = useState<'today' | 'emergency' | 'scheduled'>('today');

  const currentIssue = ESTIMATOR_ISSUES.find(i => i.id === selectedIssueId) || ESTIMATOR_ISSUES[0];

  const handleSendToWhatsApp = () => {
    const urgencyLabel = urgency === 'emergency'
      ? 'Emergency 24/7 Dispatch'
      : urgency === 'today'
      ? 'Today Standard'
      : 'Scheduled';

    const msg = createEstimatorWhatsAppMessage(
      currentIssue.name,
      currentIssue.time,
      urgencyLabel,
      config.ownerName || 'Hemanth'
    );
    const url = generateWhatsAppUrl(config.whatsappNumber, msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="estimator" className="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Service Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Check Service Scope & Book Online
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Select your plumbing issue below to see estimated service duration and technical scope, then book directly with {config.ownerName || 'Hemanth'} on WhatsApp for an upfront written quote.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Step Controls (Left) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Step 1: Select issue */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  1. What plumbing issue do you need resolved?
                </label>
                <select
                  value={selectedIssueId}
                  onChange={(e) => setSelectedIssueId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:outline-hidden focus:border-cyan-400"
                >
                  {ESTIMATOR_ISSUES.map((issue) => (
                    <option key={issue.id} value={issue.id} className="bg-slate-900 text-white">
                      {issue.name} ({issue.complexity})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Property Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  2. Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'standard', label: 'Residential Home' },
                    { id: 'multistory', label: 'Apartment / Villa' },
                    { id: 'commercial', label: 'Commercial Office' },
                  ].map((prop) => (
                    <button
                      key={prop.id}
                      type="button"
                      onClick={() => setHomeType(prop.id as any)}
                      className={`text-xs py-2.5 px-2 rounded-xl font-semibold border text-center transition-all ${
                        homeType === prop.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold'
                          : 'bg-slate-900/60 border-slate-700/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {prop.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Urgency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  3. When do you need the technician?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'emergency', label: '🚨 24/7 Emergency (60m)' },
                    { id: 'today', label: '⚡ Today (Standard)' },
                    { id: 'scheduled', label: '🗓️ Flexible Schedule' },
                  ].map((urg) => (
                    <button
                      key={urg.id}
                      type="button"
                      onClick={() => setUrgency(urg.id as any)}
                      className={`text-xs py-2.5 px-2 rounded-xl font-semibold border text-center transition-all ${
                        urgency === urg.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold'
                          : 'bg-slate-900/60 border-slate-700/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {urg.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="pt-2 border-t border-slate-700/60 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Every EasyFix Visit Includes:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Complete System Diagnostics</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>1-Year Labor & Parts Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Spotless Booties & Zero Cleanup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Upfront Written Quote Before Work</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Scope & Booking Card (Right) */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-cyan-950 border border-cyan-500/40 rounded-2xl p-6 text-center shadow-xl space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Service Scope Summary
              </span>

              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {currentIssue.name}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-cyan-300 font-semibold mt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimated Duration: ~{currentIssue.time}</span>
                </div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 text-left space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-100">
                  <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Work Scope:</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  {currentIssue.scope}
                </p>
                <div className="pt-1 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Upfront Written Flat Quote On-Site</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all transform hover:scale-102 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book with {config.ownerName || 'Hemanth'} on WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct WhatsApp Lead • Instant Response</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
