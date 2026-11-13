import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MapPin, ArrowRight } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoInput } from '@/components/ui/WayzzoInput';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { useBookingStore } from '@/store/booking-store';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function DropScreen() {
  const router = useRouter();
  const { setDropAddress, pickupAddress } = useBookingStore();
  const [addressInput, setAddressInput] = useState('Hinjawadi Phase 1, Highmont Road, Pune');

  const handleContinue = () => {
    setDropAddress({
      formattedAddress: addressInput,
      coordinates: { latitude: 18.5913, longitude: 73.7389 },
    });
    router.push('/booking/parcel-details');
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Drop Location" />

      <View style={styles.content}>
        <Text style={styles.title}>Where are we delivering to?</Text>
        <Text style={styles.description}>
          Pickup from: <Text style={styles.pickupHighlight}>{pickupAddress?.formattedAddress || 'Ravet, PCMC'}</Text>
        </Text>

        <View style={styles.form}>
          <WayzzoInput
            label="Drop Address"
            placeholder="Search destination, building or landmark"
            value={addressInput}
            onChangeText={setAddressInput}
            leftIcon={<MapPin size={18} color={colors.accent} />}
          />

          <TouchableOpacity
            style={styles.mapPickerLink}
            onPress={() => router.push('/booking/map-picker')}
          >
            <Text style={styles.mapPickerText}>Choose on interactive map →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Next: Parcel Details"
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
  pickupHighlight: {
    color: colors.foreground,
    fontWeight: '600',
  },
  form: {
    marginTop: spacing.xl,
    flex: 1,
  },
  mapPickerLink: {
    marginTop: spacing.xs,
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

