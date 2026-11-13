import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ShieldCheck, ArrowRight } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function PickupOtpScreen() {
  const router = useRouter();

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Pickup Handover" />

      <View style={styles.content}>
        <View style={styles.card}>
          <ShieldCheck size={32} color={colors.accent} />
          <Text style={styles.label}>SHARE THIS OTP WITH RIDER</Text>
          <Text style={styles.code}>5824</Text>
          <Text style={styles.desc}>
            Once the rider inputs this 4-digit code into their partner app, your parcel is officially
            sealed and begins transit.
          </Text>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Continue to Live Tracking"
            onPress={() => router.push('/delivery/tracking')}
            size="lg"
            icon={<ArrowRight size={18} color={colors.surface} />}
            iconPosition="right"
          />
        </View>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: spacing.base,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
    borderRadius: radius['2xl'],
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  label: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.secondaryText,
    letterSpacing: 1,
    marginTop: spacing.md,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 44,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: 6,
    marginVertical: spacing.md,
  },
  desc: {
    fontSize: 13,
    color: colors.secondaryText,
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

