import { z } from 'zod';

export const phoneLoginSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(13, 'Invalid phone number')
    .regex(/^[0-9+\s]+$/, 'Phone number must contain digits only'),
});

export const otpVerificationSchema = z.object({
  otp: z
    .string()
    .length(6, 'Verification code must be exactly 6 digits')
    .regex(/^[0-9]+$/, 'OTP must be digits only'),
});

export type PhoneLoginInput = z.infer<typeof phoneLoginSchema>;
export type OtpVerificationInput = z.infer<typeof otpVerificationSchema>;

