import { create } from 'zustand';
import { Coordinates, Address } from '@/types/location';
import { APP_CONFIG } from '@/constants/config';

interface LocationStore {
  currentCoordinates: Coordinates | null;
  currentAddress: Address | null;
  permissionGranted: boolean;
  isLocating: boolean;
  error: string | null;

  setCoordinates: (coords: Coordinates) => void;
  setAddress: (address: Address) => void;
  setPermission: (granted: boolean) => void;
  setLocating: (isLocating: boolean) => void;
  setError: (error: string | null) => void;
  resetLocation: () => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  currentCoordinates: APP_CONFIG.defaultCoordinates,
  currentAddress: {
    formattedAddress: 'Ravet, PCMC, Pune, Maharashtra 412101',
    street: 'BRT Road, Ravet',
    city: 'Pune',
    postalCode: '412101',
    coordinates: APP_CONFIG.defaultCoordinates,
  },
  permissionGranted: false,
  isLocating: false,
  error: null,

  setCoordinates: (coords) => set({ currentCoordinates: coords }),
  setAddress: (address) => set({ currentAddress: address, currentCoordinates: address.coordinates }),
  setPermission: (granted) => set({ permissionGranted: granted }),
  setLocating: (isLocating) => set({ isLocating }),
  setError: (error) => set({ error }),
  resetLocation: () =>
    set({
      currentCoordinates: APP_CONFIG.defaultCoordinates,
      currentAddress: null,
      error: null,
    }),
}));

