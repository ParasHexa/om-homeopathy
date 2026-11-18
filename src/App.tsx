import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoctorSection } from './components/DoctorSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { ConsultationProcess } from './components/ConsultationProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PatientReviews } from './components/PatientReviews';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { AppointmentSection } from './components/AppointmentSection';
import { DirectContact } from './components/DirectContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Chatbot } from './components/Chatbot';
import { BrandIdentityModal } from './components/BrandIdentityModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('om_homeopathy_lang');
    if (saved === 'hi' || saved === 'gu' || saved === 'en') {
      return saved as Language;
    }
    return 'en';
  });

  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState<string | undefined>(undefined);
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('om_homeopathy_lang', lang);
  };

  const scrollToAppointment = (treatmentId?: string) => {
    if (treatmentId) {
      setPreselectedTreatmentId(treatmentId);
    }
    const element = document.getElementById('appointment');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTreatments = () => {
    const element = document.getElementById('treatments');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#162534] selection:bg-[#5C8A74]/20 selection:text-[#0B2545] font-sans antialiased">
      {/* Top Main Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenBrandModal={() => setBrandModalOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          currentLang={currentLang}
          onBookClick={() => scrollToAppointment()}
          onExploreTreatments={scrollToTreatments}
        />

        {/* 2. Doctor Section */}
        <DoctorSection
          currentLang={currentLang}
          onBookClick={() => scrollToAppointment()}
        />

        {/* 3. Treatments & Conditions Section (11 conditions, multilingual cards, detailed modal) */}
        <TreatmentsSection
          currentLang={currentLang}
          onBookTreatment={(treatmentId) => scrollToAppointment(treatmentId)}
        />

        {/* 4. How Consultation Works (4-Step process + 100% Online Telehealth) */}
        <ConsultationProcess
          currentLang={currentLang}
          onBookClick={() => scrollToAppointment()}
        />

        {/* 5. Trust / Why Patients Choose Personalised Care */}
        <WhyChooseUs currentLang={currentLang} />

        {/* 6. Patient Experiences / Reviews */}
        <PatientReviews currentLang={currentLang} />

        {/* 7. Patient Journey & Telehealth Care Photo Gallery */}
        <GallerySection currentLang={currentLang} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection currentLang={currentLang} />

        {/* 9. Appointment Booking Form (WhatsApp & Email automated formatting) */}
        <AppointmentSection
          currentLang={currentLang}
          preselectedTreatmentId={preselectedTreatmentId}
        />

        {/* 10. Direct Telehealth Contact & Communication Centre */}
        <DirectContact currentLang={currentLang} />
      </main>

      {/* 11. Footer with Required Medical Disclaimer */}
      <Footer
        currentLang={currentLang}
        onOpenBrandModal={() => setBrandModalOpen(true)}
      />

      {/* Floating Interactive Elements */}
      {/* Bottom Right: Persistent Floating WhatsApp */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Bottom Left: Interactive OM Care Assistant Chatbot */}
      <Chatbot
        currentLang={currentLang}
        onBookClick={() => scrollToAppointment()}
      />

      {/* Brand Identity Showcase Modal */}
      <BrandIdentityModal
        isOpen={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
      />
    </div>
  );
}
