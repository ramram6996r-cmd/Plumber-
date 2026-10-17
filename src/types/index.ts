export interface PlumberConfig {
  businessName: string;
  ownerName: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string; // international format without + or spaces e.g. 917411028467
  whatsappFormatted: string;
  licenseNumber: string;
  city: string;
  state: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface PlumbingService {
  id: string;
  title: string;
  category: 'emergency' | 'drain' | 'heaters' | 'pipes' | 'fixtures' | 'commercial';
  shortDesc: string;
  fullDesc: string;
  priceEstimate: string;
  duration: string;
  features: string[];
  symptoms: string[];
  imageUrl: string;
  popular?: boolean;
  emergency24_7?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  serviceDone: string;
  review: string;
  avatarUrl: string;
  verified: boolean;
  emergencyJob?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'emergency' | 'pricing' | 'maintenance';
}

export interface ServiceArea {
  name: string;
  zipCodes: string[];
  responseTime: string;
  availableNow: boolean;
}

export interface Coupon {
  id: string;
  code: string;
  title: string;
  discount: string;
  details: string;
  expiry: string;
  tag: string;
}

export interface BeforeAfterJob {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  timeSpent: string;
  savingHighlight: string;
}
