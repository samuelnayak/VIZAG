import React from 'react';
import { Heart, Compass, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutUsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about-us" className="py-12 sm:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.about.heading}
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>

        {/* Clean Mission Banner */}
        <div className="mt-8 p-5 sm:p-6 bg-teal-50/80 rounded-2xl border border-teal-200 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block mb-1">
            {t.about.missionKicker}
          </span>
          <p className="text-base sm:text-lg font-bold text-teal-950 font-serif italic">
            {t.about.missionText}
          </p>
        </div>

      </div>
    </section>
  );
};
