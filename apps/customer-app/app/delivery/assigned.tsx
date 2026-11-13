import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ShieldCheck, Phone, Star, ArrowRight } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function PartnerAssignedScreen() {
  const router = useRouter();

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Partner Assigned" showBack={false} />

      <View style={styles.content}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Delivery Partner on the Way</Text>
          <Text style={styles.etaText}>ARRIVING IN 5 MINS</Text>
        </View>

        {/* Partner Details */}
        <View style={styles.partnerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RK</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Ramesh Kadam</Text>
              <ShieldCheck size={16} color={colors.accent} />
            </View>
            <View style={styles.ratingRow}>
              <Star size={14} color="#F59E0B" fill="#F59E0B" />
              <Text style={styles.ratingText}>4.9 (1,240 deliveries)</Text>
            </View>
            <Text style={styles.vehicleNumber}>Hero Splendor • MH 14 EZ 4920</Text>
          </View>

          <TouchableOpacity style={styles.phoneButton}>
            <Phone size={18} color={colors.foreground} />
          </TouchableOpacity>
        </View>

        <WayzzoDivider marginVertical={16} />

        <View style={styles.otpCard}>
          <Text style={styles.otpLabel}>SHARE PICKUP OTP WITH RIDER</Text>
          <Text style={styles.otpCode}>5824</Text>
          <Text style={styles.otpNotice}>
            Do not share this code until the partner arrives at your pickup location.
          </Text>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Track Live Telemetry"
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
  banner: {
    backgroundColor: colors.darkBackground,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.darkBorder,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.surface,
  },
  etaText: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
    marginTop: 4,
    letterSpacing: 1,
  },
  partnerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.foreground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.surface,
    fontWeight: '700',
    fontSize: 18,
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.foreground,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  ratingText: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  vehicleNumber: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: '600',
    color: colors.foreground,
    marginTop: 4,
  },
  phoneButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  otpCard: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  otpLabel: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.secondaryText,
  },
  otpCode: {
    fontFamily: 'monospace',
    fontSize: 36,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: 4,
    marginVertical: spacing.xs,
  },
  otpNotice: {
    fontSize: 12,
    color: colors.secondaryText,
    textAlign: 'center',
    lineHeight: 18,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

