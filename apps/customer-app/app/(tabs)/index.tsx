import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import {
  MapPin,
  Package,
  Bike,
  Truck,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Bell,
} from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoLogo } from '@/components/ui/WayzzoLogo';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { WayzzoStatusIndicator } from '@/components/ui/WayzzoStatusIndicator';
import { useLocation } from '@/hooks/use-location';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function HomeScreen() {
  const router = useRouter();
  const { currentAddress, fetchCurrentLocation } = useLocation();

  useEffect(() => {
    fetchCurrentLocation();
  }, [fetchCurrentLocation]);

  return (
    <WayzzoScreen scrollable contentContainerStyle={styles.scrollContent}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.brandRow}>
          <WayzzoLogo size="md" />
          <TouchableOpacity
            style={styles.bellButton}
            onPress={() => router.push('/support')}
            accessibilityLabel="Notifications"
          >
            <Bell size={20} color={colors.foreground} />
          </TouchableOpacity>
        </View>

        {/* Location selector */}
        <TouchableOpacity
          style={styles.locationSelector}
          onPress={() => router.push('/booking/map-picker')}
          activeOpacity={0.7}
        >
          <MapPin size={16} color={colors.accent} />
          <Text style={styles.locationText} numberOfLines={1}>
            {currentAddress?.formattedAddress || 'Locating address...'}
          </Text>
          <ChevronDown size={14} color={colors.secondaryText} />
        </TouchableOpacity>
      </View>

      {/* Hero Booking Card */}
      <View style={styles.heroCard}>
        <View style={styles.heroHeader}>
          <WayzzoStatusIndicator status="active" label="Instant Dispatch" />
          <Text style={styles.heroTelemetry}>PCMC • PUNE</Text>
        </View>

        <Text style={styles.heroTitle}>Send parcels across the city</Text>
        <Text style={styles.heroSubtitle}>
          From urgent documents to heavy freight. Door-to-door verified delivery.
        </Text>

        <View style={styles.heroActions}>
          <WayzzoButton
            title="Book a Delivery"
            onPress={() => router.push('/booking/pickup')}
            size="lg"
            icon={<ArrowRight size={18} color={colors.surface} />}
            iconPosition="right"
          />
        </View>
      </View>

      {/* Fleet Overview */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Fleet Capabilities</Text>
        <Text style={styles.sectionBadge}>4 TIERS</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.fleetScroll}>
        <TouchableOpacity
          style={styles.fleetCard}
          activeOpacity={0.8}
          onPress={() => router.push('/booking/pickup')}
        >
          <View style={styles.fleetIconContainer}>
            <Bike size={24} color={colors.foreground} />
          </View>
          <Text style={styles.fleetName}>2-Wheeler</Text>
          <Text style={styles.fleetCapacity}>Up to 20 kg</Text>
          <Text style={styles.fleetEta}>ETA ~4 mins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fleetCard}
          activeOpacity={0.8}
          onPress={() => router.push('/booking/pickup')}
        >
          <View style={styles.fleetIconContainer}>
            <Package size={24} color={colors.foreground} />
          </View>
          <Text style={styles.fleetName}>3-Wheeler Auto</Text>
          <Text style={styles.fleetCapacity}>Up to 300 kg</Text>
          <Text style={styles.fleetEta}>ETA ~8 mins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fleetCard}
          activeOpacity={0.8}
          onPress={() => router.push('/booking/pickup')}
        >
          <View style={styles.fleetIconContainer}>
            <Truck size={24} color={colors.foreground} />
          </View>
          <Text style={styles.fleetName}>Tata Ace Mini</Text>
          <Text style={styles.fleetCapacity}>Up to 750 kg</Text>
          <Text style={styles.fleetEta}>ETA ~12 mins</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Assurance Tag */}
      <View style={styles.trustBadge}>
        <ShieldCheck size={18} color={colors.accent} />
        <Text style={styles.trustText}>
          Every delivery is sealed with OTP verification & live precision tracking.
        </Text>
      </View>

      {/* Space for WayzzoDock */}
      <View style={{ height: 100 }} />
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: spacing.base,
  },
  topBar: {
    paddingVertical: spacing.sm,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bellButton: {
    padding: spacing.xs,
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
    gap: 6,
  },
  locationText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    color: colors.foreground,
  },
  heroCard: {
    backgroundColor: colors.darkBackground,
    borderRadius: radius['2xl'],
    padding: spacing.xl,
    marginTop: spacing.base,
    borderWidth: 1,
    borderColor: colors.darkBorder,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  heroTelemetry: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: colors.mutedText,
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.surface,
    lineHeight: 30,
    letterSpacing: -0.3,
  },
  heroSubtitle: {
    fontSize: 14,
    color: colors.mutedText,
    marginTop: spacing.xs,
    lineHeight: 20,
  },
  heroActions: {
    marginTop: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing['2xl'],
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.foreground,
  },
  sectionBadge: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: colors.secondaryText,
    letterSpacing: 1,
  },
  fleetScroll: {
    flexDirection: 'row',
    marginHorizontal: -spacing.base,
    paddingHorizontal: spacing.base,
  },
  fleetCard: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.base,
    width: 140,
    marginRight: spacing.md,
  },
  fleetIconContainer: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  fleetName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.foreground,
  },
  fleetCapacity: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
  fleetEta: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.accent,
    marginTop: spacing.xs,
    fontFamily: 'monospace',
  },
  trustBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  trustText: {
    flex: 1,
    fontSize: 12,
    color: colors.secondaryText,
    lineHeight: 18,
  },
});
