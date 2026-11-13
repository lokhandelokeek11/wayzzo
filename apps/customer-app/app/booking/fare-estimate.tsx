import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight, ShieldCheck } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { useBookingStore } from '@/store/booking-store';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function FareEstimateScreen() {
  const router = useRouter();
  const { setFareEstimate } = useBookingStore();

  const estimate = {
    baseFare: 60,
    distanceKm: 8.4,
    distanceFare: 75,
    timeFare: 15,
    taxes: 12,
    totalFare: 162,
    currency: '₹',
  };

  const handleContinue = () => {
    setFareEstimate(estimate);
    router.push('/booking/review');
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Fare Breakdown" />

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upfront Guaranteed Price</Text>
          <Text style={styles.fareHighlight}>₹162</Text>
          <Text style={styles.fareNote}>Estimated distance: 8.4 km (~24 mins)</Text>

          <WayzzoDivider marginVertical={16} />

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Base Pickup Fare</Text>
            <Text style={styles.rowValue}>₹60</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Distance Charge (8.4 km)</Text>
            <Text style={styles.rowValue}>₹75</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Traffic & Priority Dispatch</Text>
            <Text style={styles.rowValue}>₹15</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>GST / Service Tax</Text>
            <Text style={styles.rowValue}>₹12</Text>
          </View>

          <WayzzoDivider marginVertical={16} />

          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total Payable</Text>
            <Text style={styles.totalValue}>₹162</Text>
          </View>
        </View>

        <View style={styles.guaranteeBox}>
          <ShieldCheck size={18} color={colors.accent} />
          <Text style={styles.guaranteeText}>
            No surge pricing after booking. The upfront fare is final unless the route is modified.
          </Text>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Review Order Summary"
            onPress={handleContinue}
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
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.secondaryText,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  fareHighlight: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.foreground,
    marginVertical: 4,
  },
  fareNote: {
    fontSize: 13,
    color: colors.secondaryText,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  rowLabel: {
    fontSize: 14,
    color: colors.secondaryText,
  },
  rowValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.foreground,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.foreground,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.foreground,
  },
  guaranteeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  guaranteeText: {
    flex: 1,
    fontSize: 12,
    color: colors.secondaryText,
    lineHeight: 18,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

