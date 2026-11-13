import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Clock, CheckCircle2, ChevronRight, PackageCheck } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoStatusIndicator } from '@/components/ui/WayzzoStatusIndicator';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function ActivityScreen() {
  const router = useRouter();

  const mockPastOrders = [
    {
      id: 'ord_98412',
      orderNumber: 'WAY-98412',
      date: 'Today, 2:45 PM',
      pickup: 'Ravet, PCMC',
      drop: 'Wakad Bridge, Pune',
      vehicle: '2-Wheeler Express',
      fare: '₹145',
      status: 'delivered' as const,
    },
    {
      id: 'ord_97210',
      orderNumber: 'WAY-97210',
      date: 'Yesterday, 11:15 AM',
      pickup: 'Baner High Street',
      drop: 'Hinjawadi Phase 1',
      vehicle: '3-Wheeler Auto',
      fare: '₹280',
      status: 'delivered' as const,
    },
  ];

  return (
    <WayzzoScreen scrollable contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <Text style={styles.subtitle}>Your delivery logs and receipts</Text>
      </View>

      <View style={styles.activeSection}>
        <View style={styles.activeCard}>
          <View style={styles.activeHeader}>
            <WayzzoStatusIndicator status="searching" label="Searching for Partner" />
            <Text style={styles.orderId}>WAY-10928</Text>
          </View>
          <Text style={styles.activeTitle}>Documents & Electronics</Text>
          <Text style={styles.activeRoute}>Ravet → Hinjawadi Phase 2</Text>

          <TouchableOpacity
            style={styles.trackLink}
            onPress={() => router.push('/delivery/tracking')}
          >
            <Text style={styles.trackLinkText}>View Live Telemetry</Text>
            <ChevronRight size={16} color={colors.foreground} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Completed Deliveries</Text>

      {mockPastOrders.map((order) => (
        <TouchableOpacity
          key={order.id}
          style={styles.orderCard}
          activeOpacity={0.7}
          onPress={() =>
            router.push({
              pathname: '/account/order-details',
              params: { orderId: order.id },
            })
          }
        >
          <View style={styles.orderHeader}>
            <View style={styles.orderIdRow}>
              <PackageCheck size={18} color={colors.accent} />
              <Text style={styles.orderNumber}>{order.orderNumber}</Text>
            </View>
            <Text style={styles.orderFare}>{order.fare}</Text>
          </View>

          <WayzzoDivider marginVertical={8} />

          <View style={styles.routeRow}>
            <View style={styles.dotPickup} />
            <Text style={styles.routeText} numberOfLines={1}>
              {order.pickup}
            </Text>
          </View>

          <View style={styles.routeRow}>
            <View style={styles.dotDrop} />
            <Text style={styles.routeText} numberOfLines={1}>
              {order.drop}
            </Text>
          </View>

          <View style={styles.orderFooter}>
            <Text style={styles.orderDate}>{order.date}</Text>
            <Text style={styles.orderVehicle}>{order.vehicle}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={{ height: 100 }} />
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.base,
  },
  header: {
    marginBottom: spacing.base,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.secondaryText,
    marginTop: 2,
  },
  activeSection: {
    marginBottom: spacing.xl,
  },
  activeCard: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radius.xl,
    padding: spacing.base,
  },
  activeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  orderId: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: '700',
    color: colors.secondaryText,
  },
  activeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.foreground,
    marginTop: spacing.xs,
  },
  activeRoute: {
    fontSize: 13,
    color: colors.secondaryText,
    marginTop: 2,
  },
  trackLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
  },
  trackLinkText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.foreground,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: colors.secondaryText,
    marginBottom: spacing.sm,
  },
  orderCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.md,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderIdRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  orderNumber: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'monospace',
    color: colors.foreground,
  },
  orderFare: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.foreground,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 2,
  },
  dotPickup: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.foreground,
  },
  dotDrop: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
  },
  routeText: {
    fontSize: 13,
    color: colors.foreground,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingTop: spacing.xs,
  },
  orderDate: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  orderVehicle: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.secondaryText,
  },
});

