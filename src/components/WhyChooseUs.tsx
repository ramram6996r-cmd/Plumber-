import React from 'react';
import { FileText, Clock, ShieldCheck, Truck, Sparkles, Award, CheckCircle, ThumbsUp } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';

export const WhyChooseUs: React.FC = () => {
  const { config, openBookingModal } = usePlumber();

  const benefits = [
    {
      icon: FileText,
      title: '100% Upfront Written Quotes',
      description: 'You approve the exact quote in writing before our technician picks up a tool. No ticking clock anxiety, no hidden travel charges, and no surprise add-ons.',
      tag: 'Zero Surprises'
    },
    {
      icon: Clock,
      title: '60-Minute Rapid Response',
      description: 'Plumbing disasters don’t wait. Our mobile units are stationed locally to reach your doorstep quickly and stop water damage before it spreads.',
      tag: '24/7 Dispatch'
    },
    {
      icon: ShieldCheck,
      title: 'Licensed, Bonded & Insured',
      description: `All technicians hold active plumbing credentials (${config.licenseNumber}), pass strict background checks, and are backed by comprehensive liability coverage.`,
      tag: 'Fully Protected'
    },
    {
      icon: Truck,
      title: 'Stocked Mobile Warehouses',
      description: 'Our vans carry hundreds of high-grade copper/PEX fittings, water heater parts, toilet rebuild kits, and diagnostic cameras—allowing 95% of repairs to finish on the first visit.',
      tag: 'Same-Day Fix'
    },
    {
      icon: Sparkles,
      title: 'Spotless Cleanliness Guarantee',
      description: 'We respect your home. Technicians slip on clean protective shoe covers before entering and lay down floor runners. We leave your kitchen or bathroom cleaner than we found it.',
      tag: 'White Glove Care'
    },
    {
      icon: Award,
      title: '1-Year Ironclad Warranty',
      description: 'Every pipe joint, valve replacement, and drain repair is covered by our full 1-Year Craftsmanship Guarantee. If it drips or leaks within 365 days, we fix it 100% free.',
      tag: 'Guaranteed Work'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
            The EasyFix Standard of Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Local Homeowners Choose EasyFix Plumbing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We built EasyFix on old-fashioned honesty, rapid modern communication, and surgical plumbing craftsmanship.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/10 group-hover:bg-cyan-600 text-cyan-600 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-slate-200/80 group-hover:bg-cyan-100 text-slate-700 group-hover:text-cyan-800 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified EasyFix Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stat Bar Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-cyan-400">480+</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">5-Star Homeowner Reviews</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400">45 Min</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Average Emergency Arrival</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">100%</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Upfront Written Quotes</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-blue-400">365 Days</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Labor & Parts Warranty</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
