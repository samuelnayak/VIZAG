import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';
import { FAQS_LIST } from '../data/faqs';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('medical-treatment');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const getFaqData = (faq: any) => {
    if (language !== 'or') return faq;

    const odiaFaqs: Record<string, { q: string; a: string }> = {
      'medical-treatment': {
        q: 'ଆପଣ କୌଣସି ଡାକ୍ତରୀ ଚିକିତ୍ସା ପ୍ରଦାନ କରନ୍ତି କି?',
        a: 'ନା । ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ସମ୍ପୂର୍ଣ୍ଣ ଅଣ-ଚିକିତ୍ସକ ସହାୟତା ଓ ହସ୍ପିଟାଲ୍ ନାଭିଗେସନ୍ ଯୋଗାଏ । ଚିକିତ୍ସା, ପ୍ରେସକ୍ରିପସନ୍ ଓ ପରୀକ୍ଷା କେବଳ ଯୋଗ୍ୟ ଡାକ୍ତର ଓ ହସ୍ପିଟାଲ୍ ଦ୍ୱାରା କରାଯାଏ ।',
      },
      'book-for-parents': {
        q: 'ମୁଁ ମୋ ବାପା-ମାଆଙ୍କ ପାଇଁ ବୁକ୍ କରିପାରିବି କି?',
        a: 'ହଁ, ନିଶ୍ଚୟ! ଆମର ୬୦% ରୁ ଅଧିକ ବୁକିଂ ବାହାର ସହରରେ (ବେଙ୍ଗାଲୁରୁ, ହାଇଦ୍ରାବାଦ, ଦିଲ୍ଲୀ ଇତ୍ୟାଦି) ରହୁଥିବା ସନ୍ତାନମାନେ ସେମାନଙ୍କ ବାପା-ମାଆଙ୍କ ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍ ଗସ୍ତ ପାଇଁ କରିଥାନ୍ତି।',
      },
      'odisha-pre-booking': {
        q: 'ଓଡ଼ିଶାରୁ ଯାତ୍ରା କରିବା ପୂର୍ବରୁ ବୁକ୍ କରିହେବ କି?',
        a: 'ହଁ, ଆପଣ ଟ୍ରେନ୍ ବା ବସ୍ ଚଢ଼ିବାର ୨୪ ରୁ ୪୮ ଘଣ୍ଟା ପୂର୍ବରୁ ବୁକ୍ କରିବା ଭଲ, ଯାହାଦ୍ୱାରା ଆପଣ ପହଞ୍ଚିବା ପୂର୍ବରୁ ଆମେ ସାଥୀ ନିର୍ଦ୍ଧାରଣ କରିପାରିବୁ।',
      },
      'odia-speaking-companions': {
        q: 'ଓଡ଼ିଆ କହୁଥିବା ସାଥୀ ମିଳିବେ କି?',
        a: 'ହଁ, ଆମର ଅଧିକାଂଶ ସ୍ଥାନୀୟ ସାଥୀ ଓଡ଼ିଆ, ତେଲୁଗୁ ଏବଂ ଇଂରାଜୀ ଭଲ ଭାବରେ କହିପାରନ୍ତି।',
      },
      'book-doctor-appointment': {
        q: 'ଆପଣ ଡାକ୍ତରଙ୍କ ଆପଏଣ୍ଟମେଣ୍ଟ ବୁକ୍ କରିପାରିବେ କି?',
        a: 'ଯେଉଁଠାରେ ହସ୍ପିଟାଲ୍ ନିୟମ ଅନୁମତି ଦିଏ, ଆମେ ଆପଏଣ୍ଟମେଣ୍ଟ ସଂଯୋଜନା ଓ ଓପିଡି ତାରିଖ ଯାଞ୍ଚ କରିବାରେ ସାହାଯ୍ୟ କରୁ।',
      },
      'railway-station-pickup': {
        q: 'ସାଥୀ ରେଳ ଷ୍ଟେସନକୁ ଆସିପାରିବେ କି?',
        a: 'ହଁ, ଭାଇଜାଗ୍ ରେଳ ଷ୍ଟେସନ୍ (VSKP) ବା RTC ବସ୍ ଷ୍ଟାଣ୍ଡରେ ସ୍ୱାଗତ ସହାୟତା ଉପଲବ୍ଧ।',
      },
      'family-updates': {
        q: 'ପରିବାର ଲୋକଙ୍କୁ ହ୍ୱାଟ୍ସଆପ୍ ଅପଡେଟ୍ ମିଳିବ କି?',
        a: 'ହଁ, ରୋଗୀଙ୍କ ସମ୍ମତିରେ ହସ୍ପିଟାଲ୍ ପହଞ୍ଚିବାଠାରୁ ଟୋକନ୍ ଓ ଫେରିବା ପର୍ଯ୍ୟନ୍ତ ସମସ୍ତ ତଥ୍ୟ ହ୍ୱାଟ୍ସଆପରେ ଦିଆଯାଏ।',
      },
      'emergency-medical-services': {
        q: 'ଆପଣ ଜରୁରୀକାଳୀନ ମେଡିକାଲ୍ ସେବା ପ୍ରଦାନ କରନ୍ତି କି?',
        a: 'ନା । ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତିରେ ତୁରନ୍ତ ୧୦୮ ବା ହସ୍ପିଟାଲ୍ ଏମରଜେନ୍ସି ବିଭାଗ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।',
      },
    };

    const trans = odiaFaqs[faq.id];
    if (trans) {
      return { ...faq, question: trans.q, answer: trans.a };
    }
    return faq;
  };

  const filteredFaqs = FAQS_LIST.map(getFaqData).filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.faq.kicker}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.faq.heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            {t.faq.subheading}
          </p>

          {/* Minimal Search Input */}
          <div className="pt-3 max-w-sm mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder={t.faq.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-4 sm:px-5 py-3.5 text-left font-bold text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer text-xs sm:text-sm"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-teal-50/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Strip */}
        <div className="mt-8 text-center text-xs text-slate-600 flex flex-wrap items-center justify-center gap-3">
          <span>{t.faq.contactText}</span>
          <a
            href={buildWhatsAppUrl(language === 'or' ? 'ନମସ୍କାର ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ, ମୋର କିଛି ପ୍ରଶ୍ନ ଥିଲା।' : 'Hello Vizag Medical Sathi, I have a question.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t.faq.askWa}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
