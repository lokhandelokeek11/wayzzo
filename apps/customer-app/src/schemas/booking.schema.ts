import { z } from 'zod';

export const parcelDetailsSchema = z.object({
  category: z.enum(['documents', 'food', 'groceries', 'electronics', 'fragile', 'general'], {
    required_error: 'Please select a parcel category',
  }),
  weightKg: z
    .number({ invalid_type_error: 'Weight must be a number' })
    .min(0.1, 'Weight must be at least 100 grams')
    .max(500, 'Weight exceeds maximum transportable threshold'),
  description: z.string().optional(),
  senderName: z.string().min(2, 'Sender name is required'),
  senderPhone: z.string().min(10, 'Valid 10-digit sender phone required'),
  receiverName: z.string().min(2, 'Receiver name is required'),
  receiverPhone: z.string().min(10, 'Valid 10-digit receiver phone required'),
  requiresOtpOnDelivery: z.boolean().default(true),
  notes: z.string().optional(),
});

export type ParcelDetailsInput = z.infer<typeof parcelDetailsSchema>;

