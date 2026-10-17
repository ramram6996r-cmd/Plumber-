import React from 'react';
import { PlumberProvider } from './context/PlumberContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ServicesSection } from './components/ServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { HowItWorks } from './components/HowItWorks';
import { CouponsSection } from './components/CouponsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingFormSection } from './components/BookingFormSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';

export default function App() {
  return (
    <PlumberProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-cyan-500 selection:text-white pb-16 lg:pb-0">
        
        {/* Navigation & Emergency Ribbon */}
        <Header />

        {/* Hero Section with Quick Booking Engine */}
        <Hero />

        {/* 24/7 Immediate Triage & 1-Tap Emergency WhatsApp */}
        <EmergencyBanner />

        {/* Comprehensive Services Grid with Filter & WhatsApp Booking */}
        <ServicesSection />

        {/* Interactive Plumbing Cost Estimator */}
        <CostEstimator />

        {/* Why Homeowners Choose EasyFix */}
        <WhyChooseUs />

        {/* Photographic Before & After Transformations */}
        <BeforeAfterGallery />

        {/* 4-Step Seamless Service Process */}
        <HowItWorks />

        {/* Seasonal Savings & Coupons */}
        <CouponsSection />

        {/* Verified Homeowner Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Online Booking Form with Live WhatsApp Preview */}
        <BookingFormSection />

        {/* Local SEO Service Areas & Zip Code Coverage */}
        <ServiceAreasSection />

        {/* Homeowner FAQ Accordion */}
        <FAQSection />

        {/* Detailed Footer */}
        <Footer />

        {/* Floating WhatsApp & Mobile Sticky Actions */}
        <FloatingActions />

        {/* Dynamic Modals */}
        <BookingModal />

      </div>
    </PlumberProvider>
  );
}
