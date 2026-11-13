import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PackageCheck, MapPin, Receipt, ShieldCheck } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function OrderDetailsScreen() {
  const params = useLocalSearchParams<{ orderId: string }>();

  return (
    <WayzzoScreen scrollable contentContainerStyle={styles.container}>
      <WayzzoHeader title="Delivery Summary" />

      <View style={styles.content}>
        <View style={styles.topCard}>
          <Text style={styles.orderNumber}>{params.orderId || 'WAY-98412'}</Text>
          <Text style={styles.date}>Completed on 11 Nov 2026, 2:45 PM</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>DELIVERED • OTP VERIFIED</Text>
          </View>
        </View>

        {/* Route Details */}
        <View style={styles.card}>
          <View style={styles.routeHeader}>
            <MapPin size={18} color={colors.accent} />
            <Text style={styles.cardTitle}>ROUTE TIMELINE</Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.pointLabel}>Pickup (Picked at 2:18 PM)</Text>
            <Text style={styles.pointText}>Signature Park, BRT Road, Ravet, PCMC</Text>
          </View>
          <WayzzoDivider marginVertical={8} />
          <View style={styles.point}>
            <Text style={styles.pointLabel}>Drop-off (Delivered at 2:45 PM)</Text>
            <Text style={styles.pointText}>Tower 4, Embassy Tech Zone, Hinjawadi Phase 2</Text>
          </View>
        </View>

        {/* Payment Receipt */}
        <View style={styles.card}>
          <View style={styles.routeHeader}>
            <Receipt size={18} color={colors.foreground} />
            <Text style={styles.cardTitle}>BILL RECEIPT</Text>
          </View>

          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Trip Fare (8.4 km)</Text>
            <Text style={styles.billValue}>₹135.00</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Convenience Fee & Taxes</Text>
            <Text style={styles.billValue}>₹10.00</Text>
          </View>
          <WayzzoDivider marginVertical={8} />
          <View style={styles.billRow}>
            <Text style={styles.totalLabel}>Total Paid (Google Pay UPI)</Text>
            <Text style={styles.totalValue}>₹145.00</Text>
          </View>
        </View>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xl,
  },
  content: {
    padding: spacing.base,
  },
  topCard: {
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  orderNumber: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: '800',
    color: colors.foreground,
  },
  date: {
    fontSize: 13,
    color: colors.secondaryText,
    marginTop: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.successLight,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: radius.xs,
    marginTop: spacing.sm,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.success,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: spacing.sm,
  },
  cardTitle: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.secondaryText,
    letterSpacing: 0.8,
  },
  point: {
    marginVertical: 2,
  },
  pointLabel: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  pointText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.foreground,
    marginTop: 2,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  billLabel: {
    fontSize: 13,
    color: colors.secondaryText,
  },
  billValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.foreground,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.foreground,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.foreground,
  },
});

