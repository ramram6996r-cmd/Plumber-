import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/plumbingData';
import { Star, ShieldCheck, CheckCircle2, MessageCircle, ThumbsUp, MapPin } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';

export const TestimonialsSection: React.FC = () => {
  const { openBookingModal } = usePlumber();
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'emergency'
    ? TESTIMONIALS.filter(t => t.emergencyJob)
    : TESTIMONIALS;

  return (
    <section id="reviews" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            Verified Local Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by 480+ Homeowners in Your Neighborhood
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read real stories from local homeowners who experienced our rapid arrival, honest pricing, and spotless work ethic.
          </p>
        </div>

        {/* Aggregate Ratings Scoreboard */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md max-w-4xl mx-auto mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Big Star Score */}
            <div className="flex flex-col items-center justify-center p-2">
              <div className="text-5xl font-black text-slate-900">4.9</div>
              <div className="flex text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Overall Homeowner Rating
              </div>
            </div>

            {/* Breakdown Stats */}
            <div className="space-y-2 p-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>5-Star Service</span>
                <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[96%]"></div>
                </div>
                <span>96%</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>4-Star Service</span>
                <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[4%]"></div>
                </div>
                <span>4%</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>Under 4 Stars</span>
                <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[0%]"></div>
                </div>
                <span>0%</span>
              </div>
            </div>

            {/* Third-Party Trust Badges */}
            <div className="flex flex-col items-center justify-center space-y-2 p-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Google Verified Local Business</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>100% Verified Customer Invoices</span>
              </div>
              <div className="text-slate-400 text-[11px]">
                Updated weekly from public review feeds
              </div>
            </div>

          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Reviews ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setFilter('emergency')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'emergency'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Emergency 24/7 Calls
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with avatar, name & rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-xs"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-1">
                        {item.name}
                        {item.verified && (
                          <span title="Verified Customer" className="inline-flex items-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 inline" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400">{item.date}</span>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-100 text-cyan-800 text-[11px] font-bold mb-3">
                  Job: {item.serviceDone}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Verified Badge Footer */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Homeowner
                </span>
                <span>EasyFix Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Ready to experience 5-star plumbing with zero stress?
          </p>
          <button
            onClick={() => openBookingModal()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>Schedule Your Service Today</span>
          </button>
        </div>

      </div>
    </section>
  );
};
