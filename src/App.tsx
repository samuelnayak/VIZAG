/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { CoreUspSection } from './components/CoreUspSection';
import { FlagshipOdishaSection } from './components/FlagshipOdishaSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { FamilySection } from './components/FamilySection';
import { LanguageSupportSection } from './components/LanguageSupportSection';
import { TrustSection } from './components/TrustSection';
import { PricingSection } from './components/PricingSection';
import { CompanionRegisterSection } from './components/CompanionRegisterSection';
import { AboutUsSection } from './components/AboutUsSection';
import { FaqSection } from './components/FaqSection';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { StickyWhatsAppButton } from './components/StickyWhatsAppButton';
import { X } from 'lucide-react';

function MainApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const { t } = useLanguage();

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  };

  const handlePlanOdishaTrip = () => {
    setSelectedServiceId('odisha-vizag-flagship');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      
      {/* Sticky Navigation with Language Switcher */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Problem Section (4 cards) */}
        <ProblemSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Core USP Section (Journey flow) */}
        <CoreUspSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Flagship Odisha Patients Section */}
        <FlagshipOdishaSection onPlanTrip={handlePlanOdishaTrip} />

        {/* 5. Services Section */}
        <ServicesSection 
          onSelectService={handleSelectServiceFromCard}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. How It Works (5-step process) */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Family Section (Live WhatsApp Update Simulator for Out-of-town Children) */}
        <FamilySection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Language Support Section (Odia, Telugu, English) */}
        <LanguageSupportSection />

        {/* 9. Trust Section (Honest Principles & Non-Clinical Boundaries) */}
        <TrustSection />

        {/* 10. Pricing Section & Interactive Cost Estimator */}
        <PricingSection 
          onSelectService={handleSelectServiceFromCard}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 11. Companion / Helper Onboarding Section */}
        <CompanionRegisterSection />

        {/* 12. About Us (Why Medical Sathi exists & Mission) */}
        <AboutUsSection />

        {/* 13. FAQ Accordion */}
        <FaqSection />

        {/* 14. In-page Booking Section */}
        <BookingForm initialServiceId={selectedServiceId} />

      </main>

      {/* Footer with Legal Disclaimers & Contact */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <StickyWhatsAppButton />

      {/* Booking Modal Overlay */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50/80">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.booking.heading}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.nav.nonClinicalBadge} · Vizag
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
              <BookingForm 
                initialServiceId={selectedServiceId}
                isModal={true}
                onCloseModal={() => setModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
