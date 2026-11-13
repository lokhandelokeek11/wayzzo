export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Address {
  id?: string;
  label?: 'home' | 'work' | 'other';
  formattedAddress: string;
  street?: string;
  city?: string;
  postalCode?: string;
  landmark?: string;
  coordinates: Coordinates;
}

export interface LocationState {
  currentLocation: Coordinates | null;
  currentAddress: Address | null;
  permissionGranted: boolean;
  isLoading: boolean;
  error: string | null;
}

