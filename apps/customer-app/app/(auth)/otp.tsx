import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoInput } from '@/components/ui/WayzzoInput';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { useAuthStore } from '@/store/auth-store';
import { otpVerificationSchema } from '@/schemas/auth.schema';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function OtpScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ phone: string }>();
  const { verifyOtp, isLoading, error, clearError } = useAuthStore();
  const [otp, setOtp] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleVerify = async () => {
    clearError();
    const result = otpVerificationSchema.safeParse({ otp });
    if (!result.success) {
      setValidationError(result.error.issues[0]?.message || 'Enter valid 6-digit code');
      return;
    }
    setValidationError(null);

    const success = await verifyOtp(otp);
    if (success) {
      router.replace('/(tabs)');
    }
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Verification" />

      <View style={styles.content}>
        <Text style={styles.title}>Enter 6-digit code</Text>
        <Text style={styles.description}>
          Sent to +91 {params.phone || '9876543210'}. Use{' '}
          <Text style={styles.highlight}>123456</Text> for dev testing.
        </Text>

        <View style={styles.form}>
          <WayzzoInput
            label="One-Time Password"
            placeholder="123456"
            keyboardType="number-pad"
            value={otp}
            onChangeText={(val) => {
              setOtp(val);
              if (validationError) setValidationError(null);
            }}
            maxLength={6}
            error={validationError || error || undefined}
          />

          <WayzzoButton
            title="Verify & Proceed"
            onPress={handleVerify}
            loading={isLoading}
            size="lg"
            style={styles.submitButton}
          />
        </View>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: -0.4,
  },
  description: {
    fontSize: 14,
    color: colors.secondaryText,
    marginTop: spacing.xs,
    lineHeight: 20,
  },
  highlight: {
    fontWeight: '700',
    color: colors.foreground,
    fontFamily: 'monospace',
  },
  form: {
    marginTop: spacing['2xl'],
  },
  submitButton: {
    marginTop: spacing.md,
  },
});

