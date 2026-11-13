import { z } from 'zod';

export const phoneSchema = z
  .string()
  .regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile phone number (10 digits starting with 6-9)');

export const locationSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  landmark: z.string().optional(),
  postalCode: z.string().regex(/^\d{6}$/, 'Must be a valid 6-digit postal code').optional(),
  city: z.string().min(2, 'City name is required'),
  contactName: z.string().min(2, 'Contact person name is required'),
  contactPhone: phoneSchema,
});

export const createOrderSchema = z.object({
  pickupLocation: locationSchema,
  dropoffLocation: locationSchema,
  packageCategory: z.enum(['FOOD', 'GROCERY', 'DOCUMENT', 'ELECTRONICS', 'MEDICINE', 'PARCEL']),
  weightKg: z.number().positive().max(20, 'Maximum allowed weight for two-wheeler is 20kg'),
  isFragile: z.boolean().default(false),
  specialInstructions: z.string().max(500).optional(),
  paymentMethod: z.enum(['CASH', 'WALLET', 'UPI', 'CARD', 'NET_BANKING']),
});

export const partnerOnboardingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: phoneSchema,
  email: z.string().email('Invalid email address'),
  vehicleType: z.enum(['BICYCLE', 'MOTORCYCLE', 'SCOOTER', 'EV_TWO_WHEELER']),
  vehicleNumber: z.string().min(6, 'Valid registration plate number required'),
  drivingLicenseNumber: z.string().min(8, 'Driving license number is required'),
  city: z.string().min(2, 'City is required'),
});

export const merchantOnboardingSchema = z.object({
  businessName: z.string().min(2, 'Business name is required'),
  businessType: z.string().min(2, 'Business type is required'),
  ownerName: z.string().min(2, 'Contact owner name is required'),
  phone: phoneSchema,
  email: z.string().email('Invalid business email'),
  gstin: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GSTIN format').optional(),
  city: z.string().min(2, 'Operating city is required'),
});

export const contactInquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: phoneSchema,
  companyName: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  estimatedMonthlyDeliveries: z.string().optional(),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type PartnerOnboardingInput = z.infer<typeof partnerOnboardingSchema>;
export type MerchantOnboardingInput = z.infer<typeof merchantOnboardingSchema>;
export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
