import { create } from 'zustand';
import { Address } from '@/types/location';
import { VehicleType, ParcelDetails, FareEstimate } from '@/types/booking';

interface BookingStore {
  pickupAddress: Address | null;
  dropAddress: Address | null;
  selectedVehicle: VehicleType | null;
  parcelDetails: ParcelDetails | null;
  fareEstimate: FareEstimate | null;
  paymentMethod: 'upi' | 'card' | 'cash' | 'wallet';
  activeOrderId: string | null;

  setPickupAddress: (address: Address | null) => void;
  setDropAddress: (address: Address | null) => void;
  setSelectedVehicle: (vehicle: VehicleType | null) => void;
  setParcelDetails: (details: ParcelDetails | null) => void;
  setFareEstimate: (estimate: FareEstimate | null) => void;
  setPaymentMethod: (method: 'upi' | 'card' | 'cash' | 'wallet') => void;
  setActiveOrderId: (orderId: string | null) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  pickupAddress: null,
  dropAddress: null,
  selectedVehicle: '2wheeler',
  parcelDetails: null,
  fareEstimate: null,
  paymentMethod: 'upi',
  activeOrderId: null,

  setPickupAddress: (address) => set({ pickupAddress: address }),
  setDropAddress: (address) => set({ dropAddress: address }),
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  setParcelDetails: (details) => set({ parcelDetails: details }),
  setFareEstimate: (estimate) => set({ fareEstimate: estimate }),
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
  setActiveOrderId: (activeOrderId) => set({ activeOrderId }),
  resetBooking: () =>
    set({
      pickupAddress: null,
      dropAddress: null,
      selectedVehicle: '2wheeler',
      parcelDetails: null,
      fareEstimate: null,
      activeOrderId: null,
    }),
}));

