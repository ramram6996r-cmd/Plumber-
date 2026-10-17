export function cleanPhoneNumber(phone: string): string {
  // Strip all non-digits
  return phone.replace(/\D/g, '');
}

export function generateWhatsAppUrl(whatsappNumber: string, message: string): string {
  const cleanNumber = cleanPhoneNumber(whatsappNumber);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export interface BookingPayload {
  name: string;
  phone: string;
  address: string;
  service: string;
  urgency: string;
  preferredTime: string;
  notes?: string;
  couponCode?: string;
  ownerName?: string;
}

export function createBookingWhatsAppMessage(booking: BookingPayload, businessName: string): string {
  const owner = booking.ownerName || 'Hemanth';
  const lines = [
    `📋 *SERVICE BOOKING REQUEST*`,
    `*${businessName}*`,
    `*Attention: ${owner}*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Customer Name:* ${booking.name || 'Provided in chat'}`,
    `📞 *Contact Phone:* ${booking.phone || 'Provided in chat'}`,
    `📍 *Service Address:* ${booking.address || 'Local Address'}`,
    `🛠️ *Service Required:* ${booking.service}`,
    `🚨 *Urgency Level:* ${booking.urgency}`,
    `🕒 *Preferred Time:* ${booking.preferredTime}`,
  ];

  if (booking.couponCode) {
    lines.push(`🎟️ *Special Benefit/Offer:* ${booking.couponCode}`);
  }

  if (booking.notes && booking.notes.trim()) {
    lines.push(`📝 *Problem Description:* ${booking.notes.trim()}`);
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`_Hi ${owner}, I am submitting this plumbing service booking via your EasyFix website. Please confirm availability and arrival time._`);

  return lines.join('\n');
}

export function createEmergencyWhatsAppMessage(emergencyType: string, address = '', ownerName = 'Hemanth'): string {
  return [
    `🚨 *URGENT PLUMBING DISPATCH REQUEST*`,
    `*EasyFix Plumbing Services*`,
    `*Attention: ${ownerName}*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `🛠️ *Emergency Issue:* ${emergencyType}`,
    `📍 *Location:* ${address || 'Urgent Home Address'}`,
    `🚨 *Urgency Level:* IMMEDIATE EMERGENCY DISPATCH`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `_Hi ${ownerName}, I have an active plumbing emergency at my home. Please reply with your earliest arrival window._`
  ].join('\n');
}

export function createEstimatorWhatsAppMessage(serviceName: string, duration: string, urgency: string, ownerName = 'Hemanth'): string {
  return [
    `📋 *SERVICE BOOKING & INSPECTION REQUEST*`,
    `*EasyFix Plumbing Services*`,
    `*Attention: ${ownerName}*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `🛠️ *Service:* ${serviceName}`,
    `⏱️ *Expected Scope:* ~${duration}`,
    `🚨 *Urgency Preference:* ${urgency}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `_Hi ${ownerName}, I would like to book a plumbing inspection and service appointment for this issue. Please share your availability._`
  ].join('\n');
}

export function createServiceInquiryWhatsAppMessage(serviceTitle: string, ownerName = 'Hemanth'): string {
  return [
    `📋 *SERVICE BOOKING REQUEST*`,
    `*EasyFix Plumbing Services*`,
    `*Attention: ${ownerName}*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `🛠️ *Requested Service:* ${serviceTitle}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `_Hi ${ownerName}, I would like to book an appointment for this service. Please confirm your available schedule._`
  ].join('\n');
}
