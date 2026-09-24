import React, { useState } from 'react';
import { 
  Train, 
  MapPin, 
  Building2, 
  Stethoscope, 
  MessageCircle, 
  Check, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CoreUspSectionProps {
  onOpenBooking: () => void;
}

export const CoreUspSection: React.FC<CoreUspSectionProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();
  const [activeStage, setActiveStage] = useState(2);

  const steps = [
    {
      id: 0,
      title: t.usp.step1,
      icon: Train,
      headline: language === 'or' ? 'ଓଡ଼ିଶାରୁ ଟ୍ରେନ୍ ବା ବସ୍ ଯାତ୍ରା' : 'Planning & Departure from Odisha',
      desc: language === 'or' ? 'କଟକ, ଭୁବନେଶ୍ୱର, ବ୍ରହ୍ମପୁର ବା ବାଲେଶ୍ୱରରୁ ଯାତ୍ରା ପୂର୍ବରୁ ଡାକ୍ତର ଓପିଡି ତାରିଖ ଯାଞ୍ଚ।' : 'Pre-trip department timings and doctor schedule verification before boarding.',
      role: language === 'or' ? 'ସାଥୀ ଆପଣଙ୍କ ଆଗମନ ସମୟ ଅନୁଯାୟୀ ପ୍ରସ୍ତୁତ ରହିବେ।' : 'Coordinator verifies doctor OPD days and assigns your local companion.',
    },
    {
      id: 1,
      title: t.usp.step2,
      icon: MapPin,
      headline: language === 'or' ? 'ଭାଇଜାଗ୍ ରେଳ ଷ୍ଟେସନରେ ପହଞ୍ଚିବା' : 'Arrival at Visakhapatnam (VSKP)',
      desc: language === 'or' ? 'ଷ୍ଟେସନରେ ସ୍ୱାଗତ, ଲଗେଜ୍ ସହାୟତା ଏବଂ ହସ୍ପିଟାଲ୍ ଯିବା ପାଇଁ ସୁବିଧା।' : 'Warm welcome at station/bus stand, cab assistance, and safe transit to hospital.',
      role: language === 'or' ? 'ପ୍ରଥମ ମୁହୂର୍ତ୍ତରୁ ଓଡ଼ିଆ ଭାଷାଭାଷୀ ସାଥୀଙ୍କ ଉପସ୍ଥିତି।' : 'Reassuring local presence speaking your native language from minute one.',
    },
    {
      id: 2,
      title: t.usp.step3,
      icon: Building2,
      headline: language === 'or' ? 'ହସ୍ପିଟାଲ୍ ପ୍ରବେଶ ଓ ରେଜିଷ୍ଟ୍ରେସନ୍' : 'Hospital Entry & Registration',
      desc: language === 'or' ? 'ଆପୋଲୋ, କେୟାର୍, ସେଭେନ୍ ହିଲ୍ସ ଆଦି ହସ୍ପିଟାଲରେ ରେଜିଷ୍ଟ୍ରେସନ୍ ଓ ଟୋକନ୍।' : 'OPD registration desk, token queue, and comfortable seating assistance.',
      role: language === 'or' ? 'ତେଲୁଗୁ ଓ ଇଂରାଜୀ କାଉଣ୍ଟରରେ କଥାବାର୍ତ୍ତା ସହଜ କରନ୍ତି।' : 'Speaking to Telugu/English registration staff on behalf of your family.',
    },
    {
      id: 3,
      title: t.usp.step4,
      icon: Stethoscope,
      headline: language === 'or' ? 'ଡାକ୍ତର ପରାମର୍ଶ ଓ ପରୀକ୍ଷା ନାଭିଗେସନ୍' : 'Consultation & Diagnostics',
      desc: language === 'or' ? 'ରକ୍ତ ପରୀକ୍ଷା, ଏକ୍ସ-ରେ, ସ୍କାନ୍ ଓ ଔଷଧ କାଉଣ୍ଟରରେ ସହାୟତା।' : 'Guiding smoothly to blood test labs, ultrasound, billing, and pharmacy.',
      role: language === 'or' ? 'ରୋଗୀଙ୍କ ପାଖରେ ରହି ଧାଡ଼ି ଓ ଫାଇଲ୍ ପରିଚାଳନା କରନ୍ତି।' : 'Accompanying the patient and managing token queues throughout the visit.',
    },
    {
      id: 4,
      title: t.usp.step5,
      icon: MessageCircle,
      headline: language === 'or' ? 'ପରିବାରକୁ ହ୍ୱାଟ୍ସଆପ୍ ସୂଚନା' : 'Live Family WhatsApp Updates',
      desc: language === 'or' ? 'ବାହାର ସହରରେ ଥିବା ସନ୍ତାନମାନଙ୍କୁ ପ୍ରତିଟି ପଦକ୍ଷେପର ତଥ୍ୟ।' : 'Direct updates sent to children in Bengaluru, Hyderabad, or overseas.',
      role: language === 'or' ? 'ଦୂରରେ ଥିବା ପରିବାରକୁ ସମ୍ପୂର୍ଣ୍ଣ ମାନସିକ ଶାନ୍ତି ପ୍ରଦାନ।' : 'Keeping distant loved ones informed and stress-free throughout.',
    },
  ];

  const current = steps[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
            <span>{t.usp.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {t.usp.heading} <br className="hidden sm:inline" />
            <span className="text-teal-700">{t.usp.headingHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.usp.subheading}
          </p>
        </div>

        {/* 5-Step Horizontal Interactive Flow (Mobile Scrollable) */}
        <div className="bg-white rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-xs">
          
          <div className="flex sm:grid sm:grid-cols-5 gap-2.5 overflow-x-auto pb-2 sm:pb-0 mb-6 scrollbar-none">
            {steps.map((st) => {
              const isSelected = activeStage === st.id;
              const Icon = st.icon;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStage(st.id)}
                  className={`min-w-[130px] sm:min-w-0 p-3 rounded-xl text-center border transition-all cursor-pointer flex flex-col items-center ${
                    isSelected
                      ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 ${
                    isSelected ? 'bg-teal-700 text-white' : 'bg-white text-slate-600'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold block truncate max-w-full">
                    {st.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Details */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                Stage {current.id + 1} of 5 · {current.title}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {current.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {current.desc}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-teal-800 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{current.role}</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full md:w-auto shrink-0 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{t.hero.bookBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
