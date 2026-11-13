import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight, MapPin, User, Package } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { useBookingStore } from '@/store/booking-store';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function ReviewBookingScreen() {
  const router = useRouter();
  const { pickupAddress, dropAddress, parcelDetails, fareEstimate } = useBookingStore();

  return (
    <WayzzoScreen scrollable contentContainerStyle={styles.container}>
      <WayzzoHeader title="Review Delivery" />

      <View style={styles.content}>
        <Text style={styles.title}>Confirm details</Text>
        <Text style={styles.description}>
          Please verify route, recipient, and parcel specifications before payment.
        </Text>

        {/* Route Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MapPin size={18} color={colors.accent} />
            <Text style={styles.cardHeading}>ROUTE</Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.pointLabel}>Pickup</Text>
            <Text style={styles.pointAddress}>
              {pickupAddress?.formattedAddress || 'Ravet, Sector 29, PCMC, Pune'}
            </Text>
          </View>
          <WayzzoDivider marginVertical={8} />
          <View style={styles.point}>
            <Text style={styles.pointLabel}>Drop-off</Text>
            <Text style={styles.pointAddress}>
              {dropAddress?.formattedAddress || 'Hinjawadi Phase 1, Highmont Road, Pune'}
            </Text>
          </View>
        </View>

        {/* Parcel Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Package size={18} color={colors.foreground} />
            <Text style={styles.cardHeading}>PARCEL & RECEIVER</Text>
          </View>
          <Text style={styles.infoText}>
            Category: <Text style={styles.bold}>{parcelDetails?.category || 'General'}</Text> (~
            {parcelDetails?.weightKg || 2.5} kg)
          </Text>
          <Text style={styles.infoText}>
            Receiver: <Text style={styles.bold}>{parcelDetails?.receiverName || 'Akash Sharma'}</Text> (+91{' '}
            {parcelDetails?.receiverPhone || '9876501234'})
          </Text>
        </View>

        {/* Fare Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeading}>TOTAL PAYABLE</Text>
          </View>
          <Text style={styles.totalPrice}>
            {fareEstimate?.currency || '₹'}
            {fareEstimate?.totalFare || 162}
          </Text>
          <Text style={styles.taxInclusive}>Inclusive of all local transport taxes</Text>
        </View>

        <WayzzoButton
          title="Proceed to Payment"
          onPress={() => router.push('/booking/payment')}
          size="lg"
          icon={<ArrowRight size={18} color={colors.surface} />}
          iconPosition="right"
          style={{ marginTop: spacing.md }}
        />
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing['2xl'],
  },
  content: {
    paddingHorizontal: spacing.base,
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
    marginBottom: spacing.base,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: spacing.sm,
  },
  cardHeading: {
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
    fontWeight: '600',
  },
  pointAddress: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.foreground,
    marginTop: 2,
  },
  infoText: {
    fontSize: 13,
    color: colors.secondaryText,
    marginVertical: 2,
  },
  bold: {
    fontWeight: '700',
    color: colors.foreground,
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.foreground,
  },
  taxInclusive: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
});

