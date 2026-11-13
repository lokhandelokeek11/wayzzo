import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight, FileText, ShoppingBag, Box, Laptop, ShieldAlert } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoInput } from '@/components/ui/WayzzoInput';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { useBookingStore } from '@/store/booking-store';
import { ParcelDetails } from '@/types/booking';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function ParcelDetailsScreen() {
  const router = useRouter();
  const { setParcelDetails } = useBookingStore();

  const [category, setCategory] = useState<ParcelDetails['category']>('general');
  const [weightKg, setWeightKg] = useState('2.5');
  const [receiverName, setReceiverName] = useState('Akash Sharma');
  const [receiverPhone, setReceiverPhone] = useState('9876501234');
  const [notes, setNotes] = useState('Please call when near the building gate.');

  const categories = [
    { id: 'documents', label: 'Documents', icon: <FileText size={16} color={colors.foreground} /> },
    { id: 'food', label: 'Food & Meals', icon: <ShoppingBag size={16} color={colors.foreground} /> },
    { id: 'electronics', label: 'Electronics', icon: <Laptop size={16} color={colors.foreground} /> },
    { id: 'general', label: 'Box / Goods', icon: <Box size={16} color={colors.foreground} /> },
  ];

  const handleContinue = () => {
    setParcelDetails({
      category,
      weightKg: parseFloat(weightKg) || 1,
      senderName: 'Lokeek',
      senderPhone: '7558527810',
      receiverName,
      receiverPhone,
      requiresOtpOnDelivery: true,
      notes,
    });
    router.push('/booking/service-selection');
  };

  return (
    <WayzzoScreen scrollable contentContainerStyle={styles.container}>
      <WayzzoHeader title="Parcel Details" />

      <View style={styles.content}>
        <Text style={styles.title}>What are we carrying?</Text>
        <Text style={styles.description}>
          Select item category and recipient contact information.
        </Text>

        <Text style={styles.fieldLabel}>CATEGORY</Text>
        <View style={styles.categoryGrid}>
          {categories.map((cat) => {
            const isSelected = category === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                onPress={() => setCategory(cat.id as any)}
                style={[styles.categoryCard, isSelected && styles.categorySelected]}
              >
                {cat.icon}
                <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <WayzzoInput
          label="Estimated Weight (kg)"
          placeholder="e.g. 3.5"
          keyboardType="numeric"
          value={weightKg}
          onChangeText={setWeightKg}
        />

        <WayzzoInput
          label="Receiver Name"
          placeholder="Full name of receiver"
          value={receiverName}
          onChangeText={setReceiverName}
        />

        <WayzzoInput
          label="Receiver Phone Number"
          placeholder="10-digit mobile number"
          keyboardType="phone-pad"
          value={receiverPhone}
          onChangeText={setReceiverPhone}
          maxLength={10}
        />

        <WayzzoInput
          label="Delivery Instructions / Notes"
          placeholder="e.g. Leave with security guard if not available"
          value={notes}
          onChangeText={setNotes}
        />

        <WayzzoButton
          title="Select Vehicle & Service"
          onPress={handleContinue}
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
    lineHeight: 20,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.foreground,
    letterSpacing: 0.5,
    marginBottom: spacing.xs,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: spacing.base,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  categorySelected: {
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },
  categoryText: {
    fontSize: 13,
    color: colors.secondaryText,
    fontWeight: '600',
  },
  categoryTextSelected: {
    color: colors.foreground,
  },
});

