import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  Send,
  Building2,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FamilySectionProps {
  onOpenBooking: () => void;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();
  const cities = ['Bengaluru', 'Hyderabad', 'Chennai', 'Delhi NCR', 'Mumbai', 'Pune', 'Overseas / NRI'];
  const [selectedMilestone, setSelectedMilestone] = useState<number>(3);

  const milestones = [
    {
      id: 0,
      label: language === 'or' ? 'ସାଥୀ ନିଯୁକ୍ତ' : 'Companion Assigned',
      time: '08:00 AM',
      done: true,
      waMessage: language === 'or' 
        ? 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ: ନମସ୍କାର! ଆପଣଙ୍କ ମାଆ ଶ୍ରୀମତୀ ଅନ୍ନପୂର୍ଣ୍ଣା ଦେବୀଙ୍କ ପାଇଁ କେୟାର୍ ହସ୍ପିଟାଲରେ ରାଜେଶ କୁମାରଙ୍କୁ ସାଥୀ ଭାବେ ନିୟୋଜିତ କରାଯାଇଛି।' 
        : 'Vizag Medical Sathi: Namaste! Your companion Rajesh K. has been assigned for your mother Mrs. Annapurna Devi at CARE Hospitals.',
    },
    {
      id: 1,
      label: language === 'or' ? 'ହସ୍ପିଟାଲ୍ ପହଞ୍ଚିଲେ' : 'Arrived at Hospital',
      time: '09:15 AM',
      done: true,
      waMessage: language === 'or'
        ? 'ସାଥୀ ଅପଡେଟ୍: ରାଜେଶ ବାପା-ମାଆଙ୍କୁ ମୁଖ୍ୟ ଫାଟକରେ ଭେଟିଲେ । ହୁଇଲଚେୟାର୍ ସାହାଯ୍ୟରେ ଓପିଡି ବ୍ଲକକୁ ଯାଉଛନ୍ତି।'
        : 'Update: Rajesh met your parents at the main reception. Wheelchair arranged for comfortable movement to OPD.',
    },
    {
      id: 2,
      label: language === 'or' ? 'ରେଜିଷ୍ଟ୍ରେସନ୍ ସମ୍ପନ୍ନ' : 'Registration & Token Done',
      time: '09:40 AM',
      done: true,
      waMessage: language === 'or'
        ? 'ସାଥୀ ଅପଡେଟ୍: ଓପିଡି ରେଜିଷ୍ଟ୍ରେସନ୍ ଶେଷ । ଟୋକନ୍ #୧୮ ମିଳିଛି । ବାପା-ମାଆ ଏସି ଲବିରେ ଆରାମରେ ବସିଛନ୍ତି।'
        : 'Update: Registration complete. Token #18 generated for Dr. V. Rao. Parents are comfortably seated.',
    },
    {
      id: 3,
      label: language === 'or' ? 'ଡାକ୍ତର ପରାମର୍ଶ' : 'Doctor Consultation',
      time: '10:25 AM',
      done: false,
      active: true,
      waMessage: language === 'or'
        ? 'ସାଥୀ ଅପଡେଟ୍: ଡାକ୍ତରଙ୍କ ସହିତ ପରାମର୍ଶ ଚାଲିଛି । ରାଜେଶ ରୁମ୍ ବାହାରେ ଔଷଧ ସ୍ଲିପ୍ ସହାୟତା ପାଇଁ ଅପେକ୍ଷା କରିଛନ୍ତି।'
        : 'Update: Doctor consultation is now underway. Rajesh is waiting outside to assist with prescription slips immediately.',
    },
    {
      id: 4,
      label: language === 'or' ? 'ଟେଷ୍ଟ ଓ ରିପୋର୍ଟ' : 'Tests & Reports',
      time: '11:15 AM',
      done: false,
      waMessage: language === 'or'
        ? 'ସାଥୀ ଅପଡେଟ୍: ରକ୍ତ ପରୀକ୍ଷା ଏବଂ ସ୍କାନ୍ ଶେଷ ହୋଇଛି । ଡିଜିଟାଲ୍ ରିପୋର୍ଟ ସଂଯୋଜନା କରାଯାଉଛି।'
        : 'Update: Blood investigations and scan completed. Digital report will be coordinated upon release.',
    },
    {
      id: 5,
      label: language === 'or' ? 'ଘରକୁ ଫେରିବା' : 'Returning Home',
      time: '12:30 PM',
      done: false,
      waMessage: language === 'or'
        ? 'ସାଥୀ ଅପଡେଟ୍: ଔଷଧ କିଣା ସରିଲା । ସୁରକ୍ଷିତ ଭାବେ କ୍ୟାବରେ ବସି ରୁମ୍ ଅଭିମୁଖେ ବାହାରିଲେ ।'
        : 'Update: Medicines verified and purchased. Safely boarded cab heading home. Hospital visit completed!',
    },
  ];

  return (
    <section id="for-families" className="py-12 sm:py-20 bg-teal-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800 border border-teal-700 text-teal-200 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>{t.family.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {t.family.heading}
          </h2>

          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto">
            {t.family.subheading}
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-1.5 text-[11px]">
            {cities.map((city) => (
              <span key={city} className="bg-teal-900/90 text-teal-200 px-2.5 py-0.5 rounded-md border border-teal-800">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Live Simulator Card */}
        <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl border border-teal-800/80 p-5 sm:p-7 shadow-xl">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">{t.family.trackerTitle}</h3>
                <p className="text-[11px] text-slate-400">{t.family.trackerSub}</p>
              </div>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold uppercase">
              Live
            </span>
          </div>

          {/* Quick Meta Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 p-3 rounded-xl bg-slate-800/80 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">{t.family.patientLabel}</span>
              <span className="font-bold text-white text-xs truncate block">
                {language === 'or' ? 'ମାଆ (ଅନ୍ନପୂର୍ଣ୍ଣା ଦେବୀ)' : 'Mother (Annapurna Devi)'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">{t.family.locationLabel}</span>
              <span className="font-bold text-teal-300 text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Vizag
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">{t.family.hospitalLabel}</span>
              <span className="font-bold text-white text-xs truncate block">CARE Hospital</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">{t.family.companionLabel}</span>
              <span className="font-bold text-emerald-400 text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Present
              </span>
            </div>
          </div>

          {/* Interactive Steps (Thumb-friendly buttons) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
            {milestones.map((m) => {
              const isSelected = selectedMilestone === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMilestone(m.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer text-xs ${
                    isSelected
                      ? 'bg-teal-700 border-teal-400 text-white'
                      : m.done
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : m.active
                      ? 'bg-amber-950/40 border-amber-500/60 text-amber-200'
                      : 'bg-slate-850 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] mb-0.5">
                    <span>{m.time}</span>
                    {m.done && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                    {m.active && <Clock className="w-3 h-3 text-amber-400 animate-spin" />}
                  </div>
                  <span className="font-bold block truncate">{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* WhatsApp Message Preview */}
          <div className="p-3.5 rounded-xl bg-[#0b141a] border border-slate-800">
            <span className="text-[10px] font-bold text-[#25d366] flex items-center gap-1.5 mb-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.family.waReceived}</span>
            </span>

            <div className="bg-[#202c33] text-slate-200 text-xs p-3 rounded-xl border border-slate-700/60 leading-relaxed flex items-start gap-2">
              <Send className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p>{milestones[selectedMilestone].waMessage}</p>
                <span className="text-[10px] text-slate-400 block text-right mt-1.5">
                  {milestones[selectedMilestone].time} ✓✓ Delivered
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <span>{t.family.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
