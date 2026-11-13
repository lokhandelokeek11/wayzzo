import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Bike, Package, Truck, ArrowRight, Zap, Check } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { useBookingStore } from '@/store/booking-store';
import { VehicleType } from '@/types/booking';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function ServiceSelectionScreen() {
  const router = useRouter();
  const { setSelectedVehicle, selectedVehicle } = useBookingStore();
  const [vehicle, setVehicle] = useState<VehicleType>(selectedVehicle || '2wheeler');

  const options = [
    {
      id: '2wheeler' as VehicleType,
      name: '2-Wheeler Express',
      desc: 'Small items, docs, food packages up to 20kg',
      eta: '4 mins',
      rate: '₹60 base fare',
      icon: <Bike size={24} color={colors.foreground} />,
    },
    {
      id: '3wheeler' as VehicleType,
      name: '3-Wheeler Auto',
      desc: 'Medium boxes & bulky parcels up to 300kg',
      eta: '7 mins',
      rate: '₹140 base fare',
      icon: <Package size={24} color={colors.foreground} />,
    },
    {
      id: 'truck_mini' as VehicleType,
      name: 'Tata Ace Mini-Truck',
      desc: 'Heavy cargo, appliances & supplies up to 750kg',
      eta: '12 mins',
      rate: '₹280 base fare',
      icon: <Truck size={24} color={colors.foreground} />,
    },
  ];

  const handleContinue = () => {
    setSelectedVehicle(vehicle);
    router.push('/booking/fare-estimate');
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Vehicle Selection" />

      <View style={styles.content}>
        <Text style={styles.title}>Choose vehicle tier</Text>
        <Text style={styles.description}>
          Select the vehicle capacity matched to your package weight.
        </Text>

        <View style={styles.list}>
          {options.map((opt) => {
            const isSelected = vehicle === opt.id;
            return (
              <TouchableOpacity
                key={opt.id}
                style={[styles.card, isSelected && styles.cardSelected]}
                onPress={() => setVehicle(opt.id)}
                activeOpacity={0.8}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.iconBox}>{opt.icon}</View>
                  <View style={styles.info}>
                    <Text style={styles.name}>{opt.name}</Text>
                    <Text style={styles.desc}>{opt.desc}</Text>
                  </View>
                  {isSelected && (
                    <View style={styles.checkCircle}>
                      <Check size={14} color={colors.surface} />
                    </View>
                  )}
                </View>

                <View style={styles.cardFooter}>
                  <Text style={styles.etaText}>⚡ {opt.eta}</Text>
                  <Text style={styles.rateText}>{opt.rate}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="View Transparent Fare Estimate"
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
  list: {
    marginTop: spacing.base,
    gap: 12,
    flex: 1,
  },
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.base,
  },
  cardSelected: {
    borderColor: colors.primary,
    backgroundColor: '#FAF9F6',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.foreground,
  },
  desc: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
    paddingTop: spacing.xs,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  etaText: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.accent,
  },
  rateText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.foreground,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

