import { Address } from './location';

export type VehicleType = '2wheeler' | '3wheeler' | 'truck_mini' | 'truck_pickup';

export interface VehicleOption {
  id: VehicleType;
  name: string;
  description: string;
  capacityKg: number;
  baseFare: number;
  perKmRate: number;
  estimatedEtaMins: number;
}

export interface ParcelDetails {
  category: 'documents' | 'food' | 'groceries' | 'electronics' | 'fragile' | 'general';
  weightKg: number;
  description?: string;
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  requiresOtpOnDelivery: boolean;
  notes?: string;
}

export interface FareEstimate {
  baseFare: number;
  distanceKm: number;
  distanceFare: number;
  timeFare: number;
  taxes: number;
  totalFare: number;
  currency: string;
}

export interface BookingState {
  pickupAddress: Address | null;
  dropAddress: Address | null;
  selectedVehicle: VehicleType | null;
  parcelDetails: ParcelDetails | null;
  fareEstimate: FareEstimate | null;
  paymentMethod: 'upi' | 'card' | 'cash' | 'wallet';
  activeOrderId: string | null;
}

