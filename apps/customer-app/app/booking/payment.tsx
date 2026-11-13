import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Check, CreditCard, Wallet, Banknote, ShieldCheck } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { useBookingStore } from '@/store/booking-store';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function PaymentScreen() {
  const router = useRouter();
  const { setPaymentMethod, setActiveOrderId } = useBookingStore();
  const [method, setMethod] = useState<'upi' | 'card' | 'cash' | 'wallet'>('upi');
  const [processing, setProcessing] = useState(false);

  const paymentOptions = [
    {
      id: 'upi' as const,
      title: 'UPI Instant (Google Pay, PhonePe, Paytm)',
      icon: <Wallet size={20} color={colors.foreground} />,
    },
    {
      id: 'card' as const,
      title: 'Credit / Debit Card',
      icon: <CreditCard size={20} color={colors.foreground} />,
    },
    {
      id: 'cash' as const,
      title: 'Pay on Delivery (Cash to Rider)',
      icon: <Banknote size={20} color={colors.foreground} />,
    },
  ];

  const handlePay = async () => {
    setProcessing(true);
    setPaymentMethod(method);
    // Simulate payment transaction
    setTimeout(() => {
      setProcessing(false);
      const newOrderId = 'WAY-' + Math.floor(10000 + Math.random() * 90000);
      setActiveOrderId(newOrderId);
      router.replace('/delivery/searching');
    }, 900);
  };

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Payment" />

      <View style={styles.content}>
        <Text style={styles.title}>Select Payment Method</Text>
        <Text style={styles.description}>Amount to be authorized: ₹162</Text>

        <View style={styles.optionsList}>
          {paymentOptions.map((opt) => {
            const isSelected = method === opt.id;
            return (
              <TouchableOpacity
                key={opt.id}
                style={[styles.optionCard, isSelected && styles.optionSelected]}
                onPress={() => setMethod(opt.id)}
                activeOpacity={0.8}
              >
                <View style={styles.optionLeft}>
                  {opt.icon}
                  <Text style={styles.optionTitle}>{opt.title}</Text>
                </View>
                {isSelected && (
                  <View style={styles.checkCircle}>
                    <Check size={14} color={colors.surface} />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.securityBox}>
          <ShieldCheck size={18} color={colors.accent} />
          <Text style={styles.securityText}>
            256-bit encrypted checkout. Funds are escrowed until delivery confirmation.
          </Text>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Pay ₹162 & Dispatch Partner"
            loading={processing}
            onPress={handlePay}
            size="lg"
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
  },
  optionsList: {
    marginTop: spacing.xl,
    gap: 12,
    flex: 1,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  optionSelected: {
    borderColor: colors.primary,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.foreground,
    flex: 1,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  securityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
    marginBottom: spacing.base,
  },
  securityText: {
    flex: 1,
    fontSize: 12,
    color: colors.secondaryText,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

