import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MapPin, Navigation, ArrowRight } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoInput } from '@/components/ui/WayzzoInput';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { useBookingStore } from '@/store/booking-store';
import { useLocation } from '@/hooks/use-location';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function PickupScreen() {
  const router = useRouter();
  const { setPickupAddress } = useBookingStore();
  const { currentAddress, fetchCurrentLocation } = useLocation();
  const [addressInput, setAddressInput] = useState(
    currentAddress?.formattedAddress || 'Ravet, PCMC, Pune'
  );

  const handleUseCurrentLocation = async () => {
    await fetchCurrentLocation();
    if (currentAddress) {
      setAddressInput(currentAddress.formattedAddress);
    }
  };

  const handleContinue = () => {
    setPickupAddress({
      formattedAddress: addressInput,
      coordinates: currentAddress?.coordinates || { latitude: 18.6496, longitude: 73.7533 },
    });
    router.push('/booking/drop');
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Pickup Location" />

      <View style={styles.content}>
        <Text style={styles.title}>Where should we pick up?</Text>
        <Text style={styles.description}>
          Enter building name, flat number, street or choose on the map.
        </Text>

        <View style={styles.form}>
          <WayzzoInput
            label="Pickup Address"
            placeholder="Search address or area"
            value={addressInput}
            onChangeText={setAddressInput}
            leftIcon={<MapPin size={18} color={colors.foreground} />}
          />

          <TouchableOpacity
            style={styles.gpsRow}
            activeOpacity={0.7}
            onPress={handleUseCurrentLocation}
          >
            <View style={styles.gpsIcon}>
              <Navigation size={16} color={colors.accent} />
            </View>
            <View style={styles.gpsText}>
              <Text style={styles.gpsTitle}>Use Current GPS Location</Text>
              <Text style={styles.gpsSubtitle}>
                {currentAddress?.formattedAddress || 'Tap to locate automatically'}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mapPickerLink}
            onPress={() => router.push('/booking/map-picker')}
          >
            <Text style={styles.mapPickerText}>Locate & pin on interactive map →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Next: Set Drop Location"
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
    lineHeight: 20,
  },
  form: {
    marginTop: spacing.xl,
    flex: 1,
  },
  gpsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  gpsIcon: {
    width: 32,
    height: 32,
    borderRadius: radius.md,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  gpsText: {
    flex: 1,
  },
  gpsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.foreground,
  },
  gpsSubtitle: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
  mapPickerLink: {
    marginTop: spacing.base,
    alignSelf: 'flex-start',
  },
  mapPickerText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.accent,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

