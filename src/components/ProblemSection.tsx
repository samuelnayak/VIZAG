import React from 'react';
import { 
  Languages, 
  Compass, 
  Train, 
  Users, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProblemSectionProps {
  onOpenBooking: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();

  const problems = [
    {
      icon: Languages,
      title: t.problem.card1Title,
      solution: t.problem.card1Desc,
      color: 'text-teal-700 bg-teal-50 border-teal-200',
    },
    {
      icon: Compass,
      title: t.problem.card2Title,
      solution: t.problem.card2Desc,
      color: 'text-sky-700 bg-sky-50 border-sky-200',
    },
    {
      icon: Train,
      title: t.problem.card3Title,
      solution: t.problem.card3Desc,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Users,
      title: t.problem.card4Title,
      solution: t.problem.card4Desc,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            {t.problem.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.problem.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.problem.subheading}
          </p>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-teal-300 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3.5 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-teal-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{language === 'or' ? 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ' : 'Vizag Medical Sathi'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Reassurance Banner */}
        <div className="mt-8 sm:mt-10 bg-teal-50 rounded-2xl p-5 sm:p-6 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-teal-950">
              {t.problem.ctaBannerTitle}
            </h4>
            <p className="text-xs sm:text-sm text-teal-800 mt-0.5">
              {t.problem.ctaBannerSub}
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-all cursor-pointer"
          >
            <span>{t.problem.ctaBannerBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
