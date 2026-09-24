import React from 'react';
import { 
  CalendarCheck, 
  MapPin, 
  Building2, 
  MessageSquare, 
  FileText, 
  ArrowRight,
  Train,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';
import { buildWhatsAppUrl, QUICK_WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface FlagshipOdishaSectionProps {
  onPlanTrip: () => void;
}

export const FlagshipOdishaSection: React.FC<FlagshipOdishaSectionProps> = ({ onPlanTrip }) => {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t.odisha.s1Title,
      icon: CalendarCheck,
      desc: t.odisha.s1Desc,
    },
    {
      num: '02',
      title: t.odisha.s2Title,
      icon: MapPin,
      desc: t.odisha.s2Desc,
    },
    {
      num: '03',
      title: t.odisha.s3Title,
      icon: Building2,
      desc: t.odisha.s3Desc,
    },
    {
      num: '04',
      title: t.odisha.s4Title,
      icon: MessageSquare,
      desc: t.odisha.s4Desc,
    },
    {
      num: '05',
      title: t.odisha.s5Title,
      icon: FileText,
      desc: t.odisha.s5Desc,
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold">
            <Train className="w-3.5 h-3.5 text-teal-300" />
            <span>{t.odisha.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {t.odisha.heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            {t.odisha.subheading}
          </p>
        </div>

        {/* 5 Clean Cards Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-800/90 rounded-2xl p-4.5 border border-slate-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-slate-500">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-teal-400 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  <span>Sathi Assistance</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flagship CTA Action Card */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-2xl p-5 sm:p-7 border border-teal-600/70 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200">
              ₹1,499 / 6 Hours
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.odisha.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {t.odisha.ctaSub}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onPlanTrip}
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-teal-950 font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.odisha.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={buildWhatsAppUrl(QUICK_WHATSAPP_MESSAGES.odisha)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-3 bg-teal-950/60 hover:bg-teal-950 text-teal-200 rounded-xl text-xs font-semibold border border-teal-700 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{t.odisha.ctaWa}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
