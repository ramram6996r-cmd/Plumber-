import React from 'react';
import { MessageSquare, Navigation, FileCheck, Sparkles, ArrowRight } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';

export const HowItWorks: React.FC = () => {
  const { openBookingModal } = usePlumber();

  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'Quick WhatsApp or Call',
      description: 'Send your issue details, neighborhood address, and optional leak photo directly via WhatsApp or phone. We respond in under 5 minutes.',
      highlight: 'Direct Lead Response'
    },
    {
      step: '02',
      icon: Navigation,
      title: 'GPS-Tracked Rapid Dispatch',
      description: 'We assign our nearest licensed master plumber. You receive technician details and an accurate arrival window (typically 45-60 mins for emergencies).',
      highlight: 'Live ETA'
    },
    {
      step: '03',
      icon: FileCheck,
      title: 'Diagnostic & Firm Flat Quote',
      description: 'Our technician inspects the system, explains the root cause in plain English, and provides a 100% upfront flat-rate price. You approve first.',
      highlight: 'No Surprises'
    },
    {
      step: '04',
      icon: Sparkles,
      title: 'Flawless Repair & Clean Home',
      description: 'We complete the fix using commercial-grade parts, conduct multi-point pressure testing, clean the entire work zone, and activate your 1-Year Warranty.',
      highlight: '100% Guaranteed'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How EasyFix Delivers Hassle-Free Service
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From the moment you message us on WhatsApp to the final spotless cleanup, here is what you can expect.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200/90 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black shadow-md shadow-cyan-600/20 group-hover:scale-105 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-300 group-hover:text-cyan-500 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-100/70 text-cyan-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  {item.highlight}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-400 font-semibold flex items-center gap-1">
                <span>Phase {item.step}</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openBookingModal()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md shadow-cyan-600/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Book Your Service in 30 Seconds</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
