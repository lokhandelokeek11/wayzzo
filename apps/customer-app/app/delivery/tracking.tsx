import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Phone, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { WayzzoStatusIndicator } from '@/components/ui/WayzzoStatusIndicator';
import { MapViewContainer } from '@/components/maps/MapViewContainer';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function LiveTrackingScreen() {
  const router = useRouter();

  return (
    <WayzzoScreen hideSafeAreaBottom style={styles.container}>
      <WayzzoHeader title="Live Delivery Telemetry" />

      {/* Map */}
      <MapViewContainer style={styles.map}>
        <View style={styles.topTelemetryCard}>
          <WayzzoStatusIndicator status="active" label="In Transit • 42 km/h" />
          <Text style={styles.etaText}>ETA 11 MINS</Text>
        </View>
      </MapViewContainer>

      {/* Rider & Action Panel */}
      <View style={styles.panel}>
        <View style={styles.riderRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RK</Text>
          </View>
          <View style={styles.riderInfo}>
            <Text style={styles.riderName}>Ramesh Kadam</Text>
            <Text style={styles.telemetryTag}>MH 14 EZ 4920 • 2-Wheeler</Text>
          </View>
          <TouchableOpacity style={styles.phoneButton}>
            <Phone size={18} color={colors.foreground} />
          </TouchableOpacity>
        </View>

        <View style={styles.otpBanner}>
          <View style={styles.otpIconRow}>
            <KeyRound size={16} color={colors.accent} />
            <Text style={styles.otpBannerLabel}>Delivery Handover OTP</Text>
          </View>
          <Text style={styles.otpBannerCode}>9142</Text>
        </View>

        <View style={styles.buttonRow}>
          <WayzzoButton
            title="Simulate Delivery Completed"
            variant="primary"
            onPress={() => router.push('/delivery/completed')}
            size="md"
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  topTelemetryCard: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: radius.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  etaText: {
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: 12,
    color: colors.accent,
  },
  panel: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius['2xl'],
    borderTopRightRadius: radius['2xl'],
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border,
  },
  riderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.foreground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.surface,
    fontWeight: '700',
    fontSize: 14,
  },
  riderInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  riderName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.foreground,
  },
  telemetryTag: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: colors.secondaryText,
    marginTop: 2,
  },
  phoneButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  otpBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
  },
  otpIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  otpBannerLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.secondaryText,
  },
  otpBannerCode: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
});

