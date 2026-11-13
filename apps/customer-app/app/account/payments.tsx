import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CreditCard, Wallet, Plus, ShieldCheck } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function AccountPaymentsScreen() {
  return (
    <WayzzoScreen>
      <WayzzoHeader title="Payment Methods" />

      <View style={styles.content}>
        <View style={styles.walletCard}>
          <Text style={styles.walletLabel}>WAYZZO CREDITS</Text>
          <Text style={styles.walletBalance}>₹350.00</Text>
          <Text style={styles.walletDesc}>Applicable automatically on your next parcel delivery</Text>
        </View>

        <Text style={styles.sectionTitle}>SAVED METHODS</Text>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Wallet size={18} color={colors.foreground} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Google Pay (UPI)</Text>
            <Text style={styles.subtitle}>lokeek@oksbi • Default</Text>
          </View>
        </View>

        <View style={[styles.card, { marginTop: 10 }]}>
          <View style={styles.iconBox}>
            <CreditCard size={18} color={colors.foreground} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>HDFC Millennia Credit Card</Text>
            <Text style={styles.subtitle}>•••• 8102 • Exp 09/28</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Add New Card or UPI ID"
            variant="outline"
            icon={<Plus size={18} color={colors.foreground} />}
            iconPosition="left"
            onPress={() => {}}
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
  },
  walletCard: {
    backgroundColor: colors.darkBackground,
    padding: spacing.xl,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.darkBorder,
    marginBottom: spacing.xl,
  },
  walletLabel: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.accent,
    letterSpacing: 1,
  },
  walletBalance: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.surface,
    marginVertical: 4,
  },
  walletDesc: {
    fontSize: 12,
    color: colors.mutedText,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: colors.secondaryText,
    marginBottom: spacing.sm,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.foreground,
  },
  subtitle: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: spacing.base,
  },
});

