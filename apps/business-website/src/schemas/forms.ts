import { z } from 'zod';

export const phoneRegex = /^[6-9]\d{9}$/;

export const businessInquirySchema = z.object({
  businessName: z.string().min(2, 'Business name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  mobileNumber: z.string().regex(phoneRegex, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid business email address'),
  businessCategory: z.enum([
    'RETAIL',
    'RESTAURANT_FOOD',
    'PHARMACY_HEALTHCARE',
    'GROCERY_SUPERMARKET',
    'E_COMMERCE_D2C',
    'FLORIST_GIFT',
    'OTHER',
  ], { errorMap: () => ({ message: 'Please select a business category' }) }),
  city: z.string().min(2, 'City is required'),
  estimatedDailyDeliveries: z.enum([
    '1_TO_10',
    '11_TO_30',
    '31_TO_100',
    '100_PLUS',
  ], { errorMap: () => ({ message: 'Please select daily delivery volume' }) }),
  additionalMessage: z.string().max(1000).optional(),
});

export const partnerApplicationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  mobileNumber: z.string().regex(phoneRegex, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email address'),
  city: z.string().min(2, 'City is required'),
  vehicleType: z.enum([
    'MOTORCYCLE',
    'SCOOTER',
    'EV_TWO_WHEELER',
    'BICYCLE',
  ], { errorMap: () => ({ message: 'Please select an eligible vehicle type' }) }),
  availability: z.enum([
    'FULL_TIME',
    'PART_TIME_WEEKDAYS',
    'PART_TIME_WEEKENDS',
    'FLEXIBLE_HOURS',
  ], { errorMap: () => ({ message: 'Please select your preferred availability' }) }),
  consentToContact: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to being contacted for verification' }),
  }),
});

export const generalContactSchema = z.object({
  name: z.string().min(2, 'Your name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(phoneRegex, 'Enter a valid 10-digit mobile number'),
  inquiryType: z.enum([
    'GENERAL',
    'MERCHANT_PARTNERSHIP',
    'DELIVERY_PARTNER',
    'INVESTOR_COLLABORATION',
  ], { errorMap: () => ({ message: 'Please select an inquiry type' }) }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type BusinessInquiryInput = z.infer<typeof businessInquirySchema>;
export type PartnerApplicationInput = z.infer<typeof partnerApplicationSchema>;
export type GeneralContactInput = z.infer<typeof generalContactSchema>;

