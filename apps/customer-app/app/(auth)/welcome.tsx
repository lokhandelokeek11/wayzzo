import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoLogo } from '@/components/ui/WayzzoLogo';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { useAuthStore } from '@/store/auth-store';

export default function WelcomeScreen() {
  const router = useRouter();
  const loginDevMockUser = useAuthStore((state) => state.loginDevMockUser);

  const handleDevBypass = async () => {
    await loginDevMockUser();
    router.replace('/(tabs)');
  };

  return (
    <WayzzoScreen style={styles.container}>
      <View style={styles.header}>
        <WayzzoLogo size="lg" />
        <Text style={styles.badge}>PRECISION ON-DEMAND DELIVERY</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Deliver anything across your city in minutes.</Text>
        <Text style={styles.subheading}>
          Two-wheelers, 3-wheelers, and mini-trucks. Real-time telemetry, verified riders, and
          upfront transparent fares.
        </Text>
      </View>

      <View style={styles.actions}>
        <WayzzoButton
          title="Get Started with Phone Number"
          onPress={() => router.push('/(auth)/login')}
          size="lg"
        />

        <WayzzoButton
          title="Quick Dev Preview (Skip Auth)"
          variant="outline"
          onPress={handleDevBypass}
          size="md"
          style={styles.devButton}
        />

        <Text style={styles.terms}>
          By continuing, you agree to Wayzzo Terms of Service and Privacy Policy.
        </Text>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: spacing.xl,
  },
  header: {
    paddingTop: spacing.xl,
  },
  badge: {
    marginTop: spacing.sm,
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.accent,
    letterSpacing: 1,
  },
  content: {
    marginVertical: spacing['2xl'],
  },
  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.foreground,
    lineHeight: 38,
    letterSpacing: -0.5,
  },
  subheading: {
    fontSize: 15,
    color: colors.secondaryText,
    lineHeight: 22,
    marginTop: spacing.md,
  },
  actions: {
    paddingBottom: spacing.base,
  },
  devButton: {
    marginTop: spacing.md,
  },
  terms: {
    fontSize: 11,
    color: colors.mutedText,
    textAlign: 'center',
    marginTop: spacing.base,
    lineHeight: 16,
  },
});

