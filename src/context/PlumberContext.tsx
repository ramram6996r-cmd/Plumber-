import React, { createContext, useContext, useState, useEffect } from 'react';
import { PlumberConfig } from '../types';
import { DEFAULT_PLUMBER_CONFIG } from '../data/plumbingData';
import { generateWhatsAppUrl, createBookingWhatsAppMessage } from '../utils/whatsapp';

interface PlumberContextType {
  config: PlumberConfig;
  updateConfig: (newConfig: Partial<PlumberConfig>) => void;
  resetConfig: () => void;
  getWhatsAppLink: (customMessage?: string) => string;
  getTelLink: () => string;
  openBookingModal: (preselectedService?: string, coupon?: string) => void;
  closeBookingModal: () => void;
  bookingModalOpen: boolean;
  preselectedService: string;
  appliedCoupon: string;
  setAppliedCoupon: (coupon: string) => void;
}

const PlumberContext = createContext<PlumberContextType | undefined>(undefined);

const STORAGE_KEY = 'easyfix_plumber_config_v2';

export const PlumberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<PlumberConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.whatsappNumber && parsed.whatsappNumber !== '18003279349') {
          return { ...DEFAULT_PLUMBER_CONFIG, ...parsed };
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_PLUMBER_CONFIG;
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // ignore
    }
  }, [config]);

  const updateConfig = (newConfig: Partial<PlumberConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_PLUMBER_CONFIG);
  };

  const getWhatsAppLink = (customMessage?: string) => {
    if (customMessage) {
      return generateWhatsAppUrl(config.whatsappNumber, customMessage);
    }
    const defaultBookingMsg = createBookingWhatsAppMessage({
      name: '',
      phone: '',
      address: '',
      service: 'General Plumbing Service & Inspection',
      urgency: '⚡ Today (Standard slot)',
      preferredTime: 'Earliest Available Slot',
      notes: 'Direct inquiry from website header/navigation',
      ownerName: config.ownerName || 'Hemanth'
    }, config.businessName);
    return generateWhatsAppUrl(config.whatsappNumber, defaultBookingMsg);
  };

  const getTelLink = () => {
    return `tel:${config.phone.replace(/[^0-9+]/g, '')}`;
  };

  const openBookingModal = (service?: string, coupon?: string) => {
    if (service) setPreselectedService(service);
    if (coupon) setAppliedCoupon(coupon);
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  return (
    <PlumberContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        getWhatsAppLink,
        getTelLink,
        openBookingModal,
        closeBookingModal,
        bookingModalOpen,
        preselectedService,
        appliedCoupon,
        setAppliedCoupon,
      }}
    >
      {children}
    </PlumberContext.Provider>
  );
};

export const usePlumber = (): PlumberContextType => {
  const context = useContext(PlumberContext);
  if (!context) {
    throw new Error('usePlumber must be used within a PlumberProvider');
  }
  return context;
};
