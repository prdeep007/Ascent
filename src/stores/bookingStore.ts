import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { AddOnItem, BookingState, BookingStep, CoTraveler, TravelerDetails } from '@/types/booking';

interface BookingActions {
  setStep: (step: BookingStep) => void;
  setExpedition: (id: string) => void;
  setDepartureDate: (date: string) => void;
  setSeatType: (seatType: string) => void;
  setLeadTraveler: (traveler: TravelerDetails) => void;
  addCoTraveler: (traveler: CoTraveler) => void;
  toggleAddOn: (id: string) => void;
  setPaymentStatus: (status: BookingState['paymentStatus']) => void;
  setPaymentError: (error: string | null) => void;
  setTransactionId: (id: string | null) => void;
}

const initialAddOns: AddOnItem[] = [
  { id: 'equipment', label: 'Equipment Rental', priceUSD: 150, selected: false },
  { id: 'insurance', label: 'Travel Insurance', priceUSD: 200, selected: false },
  { id: 'single-room', label: 'Single Room Supplement', priceUSD: 300, selected: false }
];

const initialState: BookingState = {
  currentStep: 1,
  expeditionId: null,
  departureDate: null,
  seatType: null,
  leadTraveler: null,
  coTravelers: [],
  addOns: initialAddOns,
  paymentStatus: 'idle',
  paymentError: null,
  transactionId: null,
  sessionSaved: false
};

export const useBookingStore = create<BookingState & BookingActions>()(persist((set) => ({
  ...initialState,
  setStep: (step) => set({ currentStep: step, sessionSaved: true }),
  setExpedition: (id) => set({ expeditionId: id, sessionSaved: true }),
  setDepartureDate: (date) => set({ departureDate: date, sessionSaved: true }),
  setSeatType: (seatType) => set({ seatType, sessionSaved: true }),
  setLeadTraveler: (traveler) => set({ leadTraveler: traveler, sessionSaved: true }),
  addCoTraveler: (traveler) => set((state) => ({ coTravelers: [...state.coTravelers, traveler], sessionSaved: true })),
  toggleAddOn: (id) => set((state) => ({ addOns: state.addOns.map((addon) => addon.id === id ? { ...addon, selected: !addon.selected } : addon), sessionSaved: true })),
  setPaymentStatus: (status) => set({ paymentStatus: status }),
  setPaymentError: (error) => set({ paymentError: error }),
  setTransactionId: (id) => set({ transactionId: id })
}), { name: 'booking-session', storage: createJSONStorage(() => sessionStorage) }));
