import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ShieldCheck, Phone, Navigation2, KeyRound } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { MapViewContainer } from '@/components/maps/MapViewContainer';
import { WayzzoStatusIndicator } from '@/components/ui/WayzzoStatusIndicator';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function TrackTabScreen() {
  const router = useRouter();

  return (
    <WayzzoScreen hideSafeAreaBottom style={styles.container}>
      {/* Map View */}
      <MapViewContainer style={styles.map}>
        {/* Floating Top Status Card */}
        <View style={styles.topCard}>
          <View style={styles.topCardRow}>
            <WayzzoStatusIndicator status="active" label="In Transit • Live Telemetry" />
            <Text style={styles.etaText}>ETA 14 MINS</Text>
          </View>
          <Text style={styles.destinationText}>To: Wakad Hinjawadi Bridge, Pune</Text>
        </View>
      </MapViewContainer>

      {/* Floating Bottom Live Tracking Card */}
      <View style={styles.bottomCard}>
        <View style={styles.partnerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RK</Text>
          </View>
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerName}>Ramesh Kadam</Text>
            <Text style={styles.partnerVehicle}>Hero Splendor • MH 14 EZ 4920</Text>
          </View>
          <TouchableOpacity style={styles.phoneButton}>
            <Phone size={18} color={colors.foreground} />
          </TouchableOpacity>
        </View>

        <View style={styles.otpBanner}>
          <View style={styles.otpLeft}>
            <KeyRound size={16} color={colors.accent} />
            <Text style={styles.otpLabel}>Pickup Verification OTP</Text>
          </View>
          <Text style={styles.otpCode}>5824</Text>
        </View>

        <WayzzoButton
          title="Open Full Delivery Details"
          variant="outline"
          size="sm"
          onPress={() => router.push('/delivery/tracking')}
          style={{ marginTop: spacing.sm }}
        />
      </View>

      {/* Spacing for WayzzoDock */}
      <View style={{ height: 90 }} />
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
  topCard: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  topCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etaText: {
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: 12,
    color: colors.accent,
  },
  destinationText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.foreground,
    marginTop: 6,
  },
  bottomCard: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius['2xl'],
    borderTopRightRadius: radius['2xl'],
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border,
  },
  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.darkBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.surface,
    fontWeight: '700',
    fontSize: 14,
  },
  partnerInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  partnerName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.foreground,
  },
  partnerVehicle: {
    fontSize: 12,
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
  otpLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  otpLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.secondaryText,
  },
  otpCode: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: 2,
  },
});
