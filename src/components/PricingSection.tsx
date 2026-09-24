import React, { useState } from 'react';
import { 
  Check, 
  Calculator, 
  ArrowRight,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricingSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const { t, language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<'499' | '899' | '1499' | 'night'>('899');
  const [extraHours, setExtraHours] = useState<number>(0);
  const [stationPickup, setStationPickup] = useState<boolean>(true);

  const planBaseCosts = {
    '499': { 
      name: language === 'or' ? 'ହସ୍ପିଟାଲ୍ ସାଥୀ (୨ ଘଣ୍ଟା)' : 'Hospital Companion (2 hrs)', 
      base: 499, 
      defaultHours: 2 
    },
    '899': { 
      name: language === 'or' ? 'ହସ୍ପିଟାଲ୍ ସାଥୀ ପ୍ଲସ୍ (୪ ଘଣ୍ଟା)' : 'Hospital Companion Plus (4 hrs)', 
      base: 899, 
      defaultHours: 4 
    },
    '1499': { 
      name: language === 'or' ? 'ଓଡ଼ିଶା ଫ୍ଲାଗସିପ୍ ସହାୟତା (୬ ଘଣ୍ଟା)' : 'Odisha Flagship Support (6 hrs)', 
      base: 1499, 
      defaultHours: 6 
    },
    'night': { 
      name: language === 'or' ? 'ରାତ୍ରିକାଳୀନ ସହାୟତା (୮ ଘଣ୍ଟା)' : 'Night Hospital Support (8 hrs)', 
      base: 1499, 
      defaultHours: 8 
    },
  };

  const currentPlan = planBaseCosts[selectedPlan];
  const extraHourRate = 249;
  const stationPickupCost = stationPickup ? 200 : 0;
  const estimatedTotal = currentPlan.base + (extraHours * extraHourRate) + stationPickupCost;

  const pricingCards = [
    {
      id: 'hospital-companion',
      name: language === 'or' ? 'ହସ୍ପିଟାଲ୍ ସାଥୀ' : 'Hospital Companion',
      price: '₹499',
      duration: language === 'or' ? '୨ ଘଣ୍ଟା' : '2 hours',
      desc: language === 'or' ? 'ରେଜିଷ୍ଟ୍ରେସନ୍, ବିଭାଗ ଓ ଟୋକନ୍ ଲାଇନ୍ ସହାୟତା।' : 'Registration, department & token queue support.',
      serviceId: 'hospital-visit',
    },
    {
      id: 'hospital-companion-plus',
      name: language === 'or' ? 'ହସ୍ପିଟାଲ୍ ସାଥୀ ପ୍ଲସ୍' : 'Hospital Companion Plus',
      price: '₹899',
      duration: language === 'or' ? '୪ ଘଣ୍ଟା' : '4 hours',
      popular: true,
      desc: language === 'or' ? 'ସମ୍ପୂର୍ଣ୍ଣ ଓପିଡି ଓ ଟେଷ୍ଟ ଗସ୍ତ ସମୟରେ ଉପସ୍ଥିତି।' : 'Continuous presence through OPD and diagnostics.',
      serviceId: 'patient-companion',
    },
    {
      id: 'odisha-vizag-flagship',
      name: language === 'or' ? 'ଓଡ଼ିଶା → ଭାଇଜାଗ୍ ରୋଗୀ ସହାୟତା' : 'Odisha → Vizag Flagship',
      price: '₹1,499',
      duration: language === 'or' ? '୬ ଘଣ୍ଟା' : '6 hours',
      flagship: true,
      desc: language === 'or' ? 'ଓଡ଼ିଆ ଭାଷା, ହସ୍ପିଟାଲ୍ ସହାୟତା ଓ ପରିବାର ଅପଡେଟ୍।' : 'Odia support, hospital queues & family WhatsApp alerts.',
      serviceId: 'odisha-vizag-flagship',
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            {t.pricing.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.pricing.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.pricing.subheading}
          </p>
        </div>

        {/* 3 Core Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {pricingCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                card.flagship
                  ? 'bg-teal-50/70 border-2 border-teal-600 shadow-sm'
                  : card.popular
                  ? 'bg-white border-2 border-slate-700 shadow-2xs'
                  : 'bg-white border border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">{card.name}</h3>
                  {card.flagship && (
                    <span className="text-[10px] font-bold uppercase bg-teal-700 text-white px-2 py-0.5 rounded-full">
                      Flagship
                    </span>
                  )}
                  {card.popular && (
                    <span className="text-[10px] font-bold uppercase bg-slate-900 text-white px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {card.price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    / {card.duration}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(card.serviceId)}
                  className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                    card.flagship
                      ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {t.services.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Notes */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-600 mb-10 flex items-start gap-2.5 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p>{t.pricing.extraHourNote}</p>
            <p className="text-slate-500">{t.pricing.thirdPartyNote}</p>
          </div>
        </div>

        {/* Clean Estimator */}
        <div className="bg-gradient-to-r from-teal-50 via-white to-emerald-50 rounded-2xl p-5 sm:p-7 border border-teal-200 max-w-3xl mx-auto shadow-2xs">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">{t.pricing.estimatorTitle}</h3>
              <p className="text-xs text-slate-500">{t.pricing.estimatorSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1.5">
                {t.pricing.planSelectLabel}
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value as any)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800"
              >
                <option value="499">Hospital Companion (2 hrs) – ₹499</option>
                <option value="899">Companion Plus (4 hrs) – ₹899</option>
                <option value="1499">Odisha Flagship (6 hrs) – ₹1,499</option>
                <option value="night">Night Support (8 hrs) – ₹1,499</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1.5">
                {t.pricing.extraHoursLabel}
              </label>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((hrs) => (
                  <button
                    key={hrs}
                    onClick={() => setExtraHours(hrs)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      extraHours === hrs
                        ? 'bg-teal-700 text-white border-teal-700'
                        : 'bg-white text-slate-700 border-slate-300'
                    }`}
                  >
                    {hrs === 0 ? '0' : `+${hrs}h`}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1.5">
                {t.pricing.stationPickupLabel}
              </label>
              <button
                onClick={() => setStationPickup(!stationPickup)}
                className={`w-full py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                  stationPickup
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                    : 'bg-white text-slate-600 border-slate-300'
                }`}
              >
                <span>Station Pickup</span>
                <span className="font-bold">{stationPickup ? '✓ ₹200' : 'No'}</span>
              </button>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-500 block">{t.pricing.estimatedFee}</span>
              <span className="text-2xl font-black text-teal-800">
                ₹{estimatedTotal.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.pricing.bookWithEstimate}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
