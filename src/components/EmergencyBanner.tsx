import React from 'react';
import { AlertTriangle, Droplets, Flame, RotateCw, PhoneCall, MessageCircle, HelpCircle } from 'lucide-react';
import { usePlumber } from '../context/PlumberContext';
import { generateWhatsAppUrl, createEmergencyWhatsAppMessage } from '../utils/whatsapp';

export const EmergencyBanner: React.FC = () => {
  const { config, getTelLink } = usePlumber();

  const emergencyQuickActions = [
    { label: 'Burst Pipe Flooding', icon: Droplets, color: 'bg-blue-600 hover:bg-blue-700' },
    { label: 'Sewage / Drain Backup', icon: AlertTriangle, color: 'bg-amber-600 hover:bg-amber-700' },
    { label: 'Water Heater Rupture', icon: Flame, color: 'bg-red-600 hover:bg-red-700' },
    { label: 'Clogged Toilet Overflow', icon: RotateCw, color: 'bg-purple-600 hover:bg-purple-700' },
  ];

  const handleQuickEmergency = (type: string) => {
    const msg = createEmergencyWhatsAppMessage(type, '', config.ownerName || 'Hemanth');
    const url = generateWhatsAppUrl(config.whatsappNumber, msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="emergency" className="bg-slate-900 border-y border-red-500/30 py-10 relative overflow-hidden">
      {/* Subtle emergency background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-red-950/80 via-slate-900 to-red-950/80 border border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Title & Quick Guidance */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                Emergency Rapid Triage
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Plumbing Emergency Right Now?
              </h2>

              <p className="text-sm text-slate-300 max-w-xl">
                Don't panic. Tap below to send an emergency ping to our active on-call plumber or call our direct emergency hotline.
              </p>

              {/* 3 Step immediate Homeowner safety instruction */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <div className="text-xs font-bold text-red-400">Step 1: Shut Off Water</div>
                  <p className="text-[11px] text-slate-300">Turn main street valve or meter gate clockwise until snug.</p>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <div className="text-xs font-bold text-amber-400">Step 2: Relieve Pressure</div>
                  <p className="text-[11px] text-slate-300">Open an outdoor hose spigot to drain trapped line pressure.</p>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <div className="text-xs font-bold text-emerald-400">Step 3: Call EasyFix</div>
                  <p className="text-[11px] text-slate-300">We dispatch within 10 mins with fully stocked tools.</p>
                </div>
              </div>
            </div>

            {/* Quick 1-Tap Emergency WhatsApp Options */}
            <div className="w-full lg:w-auto shrink-0 space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center lg:text-right">
                1-Tap Instant WhatsApp Triage:
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:w-80">
                {emergencyQuickActions.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleQuickEmergency(item.label)}
                    className={`${item.color} text-white font-bold text-xs p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 shadow-md transition-transform hover:scale-102 active:scale-98`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-center leading-tight">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-center lg:justify-end gap-3">
                <a
                  href={getTelLink()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-lg shadow-red-600/30 transition-all"
                >
                  <PhoneCall className="w-4 h-4 fill-current" />
                  <span>Call {config.phoneFormatted}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
