import { Coordinates, Address } from './location';
import { VehicleType, ParcelDetails } from './booking';

export type DeliveryStatus =
  | 'searching'
  | 'assigned'
  | 'arriving_pickup'
  | 'pickup_verified'
  | 'in_transit'
  | 'arrived_drop'
  | 'delivered'
  | 'cancelled';

export interface DeliveryPartner {
  id: string;
  name: string;
  phone: string;
  rating: number;
  vehicleNumber: string;
  vehicleModel: string;
  avatarUrl?: string;
  currentLocation?: Coordinates;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: DeliveryStatus;
  pickupAddress: Address;
  dropAddress: Address;
  vehicleType: VehicleType;
  parcel: ParcelDetails;
  fare: number;
  pickupOtp: string;
  deliveryOtp: string;
  partner?: DeliveryPartner;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

