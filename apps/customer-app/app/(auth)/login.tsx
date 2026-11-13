import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoInput } from '@/components/ui/WayzzoInput';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { useAuthStore } from '@/store/auth-store';
import { phoneLoginSchema } from '@/schemas/auth.schema';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function LoginScreen() {
  const router = useRouter();
  const { loginWithPhone, isLoading, error, clearError } = useAuthStore();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSendOtp = async () => {
    clearError();
    const result = phoneLoginSchema.safeParse({ phoneNumber });
    if (!result.success) {
      setValidationError(result.error.issues[0]?.message || 'Invalid phone number');
      return;
    }
    setValidationError(null);

    const success = await loginWithPhone(phoneNumber);
    if (success) {
      router.push({
        pathname: '/(auth)/otp',
        params: { phone: phoneNumber },
      });
    }
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Enter your mobile" />

      <View style={styles.content}>
        <Text style={styles.title}>What's your phone number?</Text>
        <Text style={styles.description}>
          We will send a 6-digit verification code to log in or create your Wayzzo account.
        </Text>

        <View style={styles.form}>
          <WayzzoInput
            label="Phone Number"
            placeholder="9876543210"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(val) => {
              setPhoneNumber(val);
              if (validationError) setValidationError(null);
            }}
            error={validationError || error || undefined}
            maxLength={10}
            leftIcon={<Text style={styles.prefix}>+91</Text>}
          />

          <WayzzoButton
            title="Continue"
            onPress={handleSendOtp}
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
  form: {
    marginTop: spacing['2xl'],
  },
  prefix: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.foreground,
  },
  submitButton: {
    marginTop: spacing.md,
  },
});

