import React, { useState, useEffect } from 'react';
import { 
  User, 
  Phone, 
  Building2, 
  Calendar, 
  Languages, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import { VIZAG_HOSPITALS } from '../data/hospitals';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface BookingFormProps {
  initialServiceId?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  initialServiceId, 
  isModal = false,
  onCloseModal 
}) => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    bookingFor: language === 'or' ? 'ବାପା-ମାଆ' : 'Elderly Parents',
    patientLocation: language === 'or' ? 'ଓଡ଼ିଶା (ଭୁବନେଶ୍ୱର / କଟକ / ବ୍ରହ୍ମପୁର)' : 'Odisha (Bhubaneswar/Cuttack/Berhampur)',
    hospital: 'Apollo Health City',
    customHospital: '',
    appointmentDate: '',
    requiredService: 'Odisha → Vizag Patient Support',
    preferredLanguage: 'Odia',
    emergencyContact: '',
    additionalRequirements: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      const map: Record<string, string> = {
        'hospital-visit': 'Hospital Companion (2 hrs)',
        'odia-language-support': 'Odia Language Support',
        'patient-companion': 'Hospital Companion Plus (4 hrs)',
        'odisha-vizag-flagship': 'Odisha → Vizag Patient Support',
        'night-hospital-support': 'Night Hospital Support (8 hrs)',
        'appointment-assist': 'Appointment Assistance',
      };
      if (map[initialServiceId]) {
        setFormData((prev) => ({ ...prev, requiredService: map[initialServiceId] }));
      }
    }
  }, [initialServiceId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const getWhatsAppText = () => {
    const greeting = language === 'or'
      ? 'ନମସ୍କାର ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ, ମୋତେ ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍ ସହାୟତା ଆବଶ୍ୟକ:'
      : 'Hello Vizag Medical Sathi, I need hospital assistance in Vizag:';
    return `${greeting}
• Patient: ${formData.patientName || 'N/A'}
• Booking For: ${formData.bookingFor}
• Location: ${formData.patientLocation}
• Hospital: ${formData.hospital === 'Other' ? formData.customHospital : formData.hospital}
• Date: ${formData.appointmentDate || 'Upcoming'}
• Service: ${formData.requiredService}
• Language: ${formData.preferredLanguage}
• Emergency Contact: ${formData.emergencyContact || 'Provided on phone'}`;
  };

  return (
    <div id="booking-section" className={`w-full ${isModal ? 'p-1' : 'py-12 sm:py-20 bg-slate-50 border-b border-slate-200/60'}`}>
      <div className={`${isModal ? 'w-full' : 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {!isModal && (
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
              {t.booking.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.booking.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.booking.subheading}
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">
                  {t.booking.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {t.booking.successSub}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildWhatsAppUrl(getWhatsAppText())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-950" />
                  <span>{t.booking.waContinueBtn}</span>
                </a>

                {isModal && onCloseModal && (
                  <button
                    onClick={onCloseModal}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.patientName}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Mishra"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.phone}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Booking For & Origin */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.bookingFor}
                  </label>
                  <select
                    value={formData.bookingFor}
                    onChange={(e) => setFormData({ ...formData, bookingFor: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="Elderly Parents">{language === 'or' ? 'ବାପା-ମାଆ' : 'My Elderly Parents'}</option>
                    <option value="Myself">{language === 'or' ? 'ନିଜେ (ରୋଗୀ)' : 'Myself'}</option>
                    <option value="Relative">{language === 'or' ? 'ଅନ୍ୟ ସମ୍ପର୍କୀୟ' : 'Relative / Family Member'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.location}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cuttack, Bhubaneswar, Berhampur..."
                    value={formData.patientLocation}
                    onChange={(e) => setFormData({ ...formData, patientLocation: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Hospital & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.hospital}
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.hospital}
                      onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    >
                      {VIZAG_HOSPITALS.map((h) => (
                        <option key={h.id} value={h.name}>
                          {h.name} ({h.area})
                        </option>
                      ))}
                      <option value="Other">Other Clinic in Vizag</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.date}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.appointmentDate}
                      onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Service & Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.service}
                  </label>
                  <select
                    value={formData.requiredService}
                    onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                  >
                    <option value="Odisha → Vizag Patient Support">Odisha → Vizag Patient Support (₹1,499 / 6 hrs)</option>
                    <option value="Hospital Companion (4 hrs)">Hospital Companion Plus (₹899 / 4 hrs)</option>
                    <option value="Hospital Companion (2 hrs)">Hospital Companion (₹499 / 2 hrs)</option>
                    <option value="Odia Language Support">Odia Language Support (₹299/hr)</option>
                    <option value="Night Hospital Support">Night Hospital Support (₹1,499 / 8 hrs)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.booking.lang}
                  </label>
                  <div className="relative">
                    <Languages className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredLanguage}
                      onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                    >
                      <option value="Odia">Odia (ଓଡ଼ିଆ)</option>
                      <option value="Telugu">Telugu (తెలుగు)</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200/80 text-[11px] text-teal-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <p>{t.booking.notice}</p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 disabled:opacity-50 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{submitting ? 'Submitting...' : t.booking.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
