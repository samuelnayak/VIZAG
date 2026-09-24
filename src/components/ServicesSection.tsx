import React from 'react';
import { 
  Check, 
  ArrowRight, 
  HelpCircle,
  MessageCircle,
  Star
} from 'lucide-react';
import { SERVICES_LIST } from '../data/services';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const { t, language } = useLanguage();

  const getServiceData = (service: any) => {
    if (language !== 'or') return service;

    const odiaTranslations: Record<string, { title: string; desc: string; inclusions: string[] }> = {
      'hospital-visit': {
        title: 'ହସ୍ପିଟାଲ୍ ଗସ୍ତ ସହାୟତା',
        desc: 'ହସ୍ପିଟାଲ୍ ରେଜିଷ୍ଟ୍ରେସନ୍, ଲାଇନ୍, ଟୋକନ୍ ଓ ମୌଳିକ ଅଣ-ଚିକିତ୍ସକ ସହାୟତା।',
        inclusions: [
          'ରେଜିଷ୍ଟ୍ରେସନ୍ କାଉଣ୍ଟର ମାର୍ଗଦର୍ଶନ',
          'ଓପିଡି ବିଭାଗ ଲାଇନ୍ ନାଭିଗେସନ୍',
          'ବିଲିଂ ଓ ଟୋକନ୍ ସହାୟତା',
          'ଚଲାବୁଲାରେ ମୌଳିକ ସହାୟତା',
        ],
      },
      'odia-language-support': {
        title: 'ଓଡ଼ିଆ ଭାଷା ସହାୟତା',
        desc: 'ଓଡ଼ିଆ ↔ ତେଲୁଗୁ ↔ ଇଂରାଜୀ ଭାଷାରେ ହସ୍ପିଟାଲ୍ କାଉଣ୍ଟର କଥାବାର୍ତ୍ତା ସହାୟତା।',
        inclusions: [
          'ଓଡ଼ିଆ କହୁଥିବା ସ୍ଥାନୀୟ ସାଥୀ',
          'ତେଲୁଗୁ ଓ ଇଂରାଜୀରେ କାଉଣ୍ଟର କଥାବାର୍ତ୍ତା',
          'ପରୀକ୍ଷା ଓ ଔଷଧ ସୂଚନା ବୁଝାଇବା',
          'ମାତୃଭାଷାରେ ରୋଗୀଙ୍କୁ ସୁରକ୍ଷିତ ଅନୁଭବ',
        ],
      },
      'patient-companion': {
        title: 'ରୋଗୀ ସାଥୀ (୪ ଘଣ୍ଟା)',
        desc: 'ହସ୍ପିଟାଲ୍ ଗସ୍ତ ସମୟରେ ରୋଗୀଙ୍କ ସହିତ ରହି ସମ୍ପୂର୍ଣ୍ଣ ସହାୟତା।',
        inclusions: [
          'ଲଗାତାର ୪ ଘଣ୍ଟା ସମର୍ପିତ ସାଥୀ',
          'ହୁଇଲଚେୟାର୍ ଓ ଧାଡ଼ି ସହାୟତା',
          'ଟେଷ୍ଟ ଲ୍ୟାବ୍ ଓ ଔଷଧ ଦୋକାନ ସହାୟତା',
          'ପରିବାରକୁ ଫୋନ୍ ଓ ହ୍ୱାଟ୍ସଆପ୍ ସୂଚନା',
        ],
      },
      'odisha-vizag-flagship': {
        title: 'ଓଡ଼ିଶା → ଭାଇଜାଗ୍ ରୋଗୀ ସହାୟତା',
        desc: 'ଓଡ଼ିଶାରୁ ଭାଇଜାଗ୍ ଆସୁଥିବା ରୋଗୀଙ୍କ ପାଇଁ ଆମର ପ୍ରମୁଖ ଫ୍ଲାଗସିପ୍ ପ୍ୟାକେଜ୍।',
        inclusions: [
          'ଡାକ୍ତର ଆପଏଣ୍ଟମେଣ୍ଟ ଯାଞ୍ଚ ସହାୟତା',
          'ସମଗ୍ର ଗସ୍ତରେ ଓଡ଼ିଆ ଭାଷା ସହାୟତା',
          'ସମର୍ପିତ ରୋଗୀ ସାଥୀ (୬ ଘଣ୍ଟା)',
          'ପରିବାରକୁ ହ୍ୱାଟ୍ସଆପ୍ ଲାଇଭ୍ ଅପଡେଟ୍',
          'ରେଳ ଷ୍ଟେସନ୍ ସ୍ୱାଗତ ସଂଯୋଜନା',
        ],
      },
      'night-hospital-support': {
        title: 'ରାତ୍ରିକାଳୀନ ହସ୍ପିଟାଲ୍ ସହାୟତା',
        desc: 'ରାତି ସମୟରେ ହସ୍ପିଟାଲ୍ ରହଣି କିମ୍ବା ପରିଦର୍ଶନ ସମୟରେ ଅଣ-ଚିକିତ୍ସକ ସାଥୀ।',
        inclusions: [
          'ରାତ୍ରିକାଳୀନ ସାଥୀ ଉପସ୍ଥିତି (୮ ଘଣ୍ଟା)',
          'ଔଷଧ ଓ କ୍ୟାଣ୍ଟିନ୍ ସହାୟତା',
          'ନର୍ସ ଡାକିବା ପାଇଁ ସାହାଯ୍ୟ',
          'ରାତିରେ ପରିବାର ସହ ଯୋଗାଯୋଗ',
        ],
      },
    };

    const trans = odiaTranslations[service.id];
    if (trans) {
      return {
        ...service,
        title: trans.title,
        description: trans.desc,
        inclusions: trans.inclusions,
      };
    }
    return service;
  };

  return (
    <section id="services" className="py-12 sm:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            {t.services.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.services.subheading}
          </p>
        </div>

        {/* Clean Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_LIST.slice(0, 5).map((srv) => {
            const service = getServiceData(srv);
            const isFlagship = srv.isFlagship;

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                  isFlagship
                    ? 'bg-teal-50/70 border-2 border-teal-600 shadow-sm'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  {isFlagship && (
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-md mb-2">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{language === 'or' ? 'ଓଡ଼ିଶା ରୋଗୀଙ୍କ ପାଇଁ ପସନ୍ଦ' : 'Odisha Flagship Service'}</span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 min-h-[32px] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 pb-4 border-b border-slate-200/70">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / {service.durationLabel}
                    </span>
                  </div>

                  <ul className="py-4 space-y-2 text-xs text-slate-700">
                    {service.inclusions.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 leading-tight">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFlagship
                        ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-xs'
                        : 'bg-slate-900 hover:bg-teal-700 text-white'
                    }`}
                  >
                    <span>{t.services.bookNow}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Assistance */}
          <div className="rounded-2xl p-5 sm:p-6 bg-slate-900 text-white flex flex-col justify-between border border-slate-800 shadow-2xs">
            <div>
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-3">
                <HelpCircle className="w-4 h-4 text-teal-400" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1.5">
                {t.services.customTitle}
              </h3>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {t.services.customDesc}
              </p>

              <div className="space-y-1.5 text-xs text-slate-300 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>{language === 'or' ? 'ଏକାଧିକ ଦିନର ହସ୍ପିଟାଲ୍ ସହାୟତା' : 'Multi-day hospital assistance'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>{language === 'or' ? 'ଷ୍ଟେସନ୍ + ହୋଟେଲ୍ ସଂଯୋଜନା' : 'Station + hotel coordination'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <a
                href={buildWhatsAppUrl(language === 'or' ? 'ନମସ୍କାର ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ, ମୋତେ ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍ ପାଇଁ କଷ୍ଟମ୍ ସହାୟତା ଦରକାର।' : 'Hello Vizag Medical Sathi, I need a custom assistance plan in Vizag.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.services.customBtn}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-2 text-center text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                {language === 'or' ? 'ବା ଅନ୍‌ଲାଇନ୍ ଫର୍ମ ପୂରଣ କରନ୍ତୁ' : 'Or Submit Request Form'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
