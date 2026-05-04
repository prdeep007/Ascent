import type { ExpeditionSummary } from '@/types/expedition';

export type BookingStep = 1 | 2 | 3 | 4 | 5;

export interface TravelerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  emergencyContact: { name: string; phone: string };
}

export interface CoTraveler { firstName: string; lastName: string; email: string; }
export interface AddOnItem { id: string; label: string; priceUSD: number; selected: boolean; }
export interface PaymentDetails { cardNumber: string; expiry: string; cvc: string; }

export interface BookingState {
  currentStep: BookingStep;
  expeditionId: string | null;
  departureDate: string | null;
  seatType: string | null;
  leadTraveler: TravelerDetails | null;
  coTravelers: CoTraveler[];
  addOns: AddOnItem[];
  paymentStatus: 'idle' | 'processing' | 'success' | 'error';
  paymentError: string | null;
  transactionId: string | null;
  sessionSaved: boolean;
}

export interface BookingConfirmation {
  transactionId: string;
  expedition: ExpeditionSummary;
  departureDate: string;
  totalUSD: number;
  addOns: AddOnItem[];
  travelerCount: number;
}
