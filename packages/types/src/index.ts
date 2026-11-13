export type UserRole = 'CUSTOMER' | 'PARTNER' | 'MERCHANT' | 'ADMIN' | 'SUPER_ADMIN';

export type DeliveryStatus =
  | 'DRAFT'
  | 'ORDER_CREATED'
  | 'SEARCHING_FOR_PARTNER'
  | 'PARTNER_ASSIGNED'
  | 'PARTNER_ARRIVED_PICKUP'
  | 'PICKED_UP'
  | 'IN_TRANSIT'
  | 'PARTNER_ARRIVED_DROPOFF'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'FAILED';

export type VehicleType = 'BICYCLE' | 'MOTORCYCLE' | 'SCOOTER' | 'EV_TWO_WHEELER';

export type PaymentMethod = 'CASH' | 'WALLET' | 'UPI' | 'CARD' | 'NET_BANKING';

export type PaymentStatus = 'PENDING' | 'AUTHORIZED' | 'PAID' | 'FAILED' | 'REFUNDED';

export interface GeoLocation {
  latitude: number;
  longitude: number;
  address: string;
  landmark?: string;
  postalCode?: string;
  city: string;
  contactName: string;
  contactPhone: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DeliveryPartnerProfile extends UserProfile {
  role: 'PARTNER';
  vehicleType: VehicleType;
  vehicleNumber: string;
  drivingLicenseNumber: string;
  isVerified: boolean;
  isOnline: boolean;
  currentLocation?: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  totalDeliveriesCompleted: number;
}

export interface MerchantBusinessProfile extends UserProfile {
  role: 'MERCHANT';
  businessName: string;
  businessType: string;
  gstin?: string;
  storeAddress: GeoLocation;
  isVerified: boolean;
}

export interface DeliveryItemPackage {
  title: string;
  description?: string;
  weightKg: number;
  packageCategory: 'FOOD' | 'GROCERY' | 'DOCUMENT' | 'ELECTRONICS' | 'MEDICINE' | 'PARCEL';
  isFragile: boolean;
  specialInstructions?: string;
}

export interface DeliveryOrder {
  id: string;
  orderNumber: string;
  customerId: string;
  merchantId?: string;
  partnerId?: string;
  status: DeliveryStatus;
  pickupLocation: GeoLocation;
  dropoffLocation: GeoLocation;
  items: DeliveryItemPackage[];
  fareBreakdown: {
    baseFare: number;
    distanceFare: number;
    timeFare: number;
    surgeMultiplier: number;
    tax: number;
    discount: number;
    totalAmount: number;
  };
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  estimatedDistanceKm: number;
  estimatedDurationMins: number;
  createdAt: string;
  updatedAt: string;
}
