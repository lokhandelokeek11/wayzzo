import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MapPin } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { MapViewContainer } from '@/components/maps/MapViewContainer';
import { useLocation } from '@/hooks/use-location';
import { useBookingStore } from '@/store/booking-store';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function MapPickerScreen() {
  const router = useRouter();
  const { currentCoordinates, currentAddress } = useLocation();
  const { setPickupAddress } = useBookingStore();
  const [pinnedAddress] = useState(
    currentAddress?.formattedAddress || 'Ravet, Sector 29, PCMC, Pune'
  );

  const handleConfirmPin = () => {
    setPickupAddress({
      formattedAddress: pinnedAddress,
      coordinates: currentCoordinates || { latitude: 18.6496, longitude: 73.7533 },
    });
    router.back();
  };

  return (
    <WayzzoScreen hideSafeAreaBottom style={styles.container}>
      <WayzzoHeader title="Pin Location on Map" />

      <View style={styles.mapWrapper}>
        <MapViewContainer initialCoordinates={currentCoordinates || undefined} style={styles.map}>
          {/* Center Pin Overlay */}
          <View pointerEvents="none" style={styles.centerPin}>
            <MapPin size={36} color={colors.foreground} />
            <View style={styles.pinShadow} />
          </View>
        </MapViewContainer>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Selected Coordinates</Text>
        <Text style={styles.addressText}>{pinnedAddress}</Text>

        <WayzzoButton
          title="Confirm Pin Location"
          onPress={handleConfirmPin}
          size="lg"
          style={styles.confirmButton}
        />
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapWrapper: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  centerPin: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinShadow: {
    width: 8,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: -2,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderTopLeftRadius: radius['2xl'],
    borderTopRightRadius: radius['2xl'],
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: colors.secondaryText,
    fontWeight: '700',
  },
  addressText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.foreground,
    marginTop: 4,
  },
  confirmButton: {
    marginTop: spacing.base,
  },
});

