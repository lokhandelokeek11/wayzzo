import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { CheckCircle2, ArrowRight } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function DeliveryCompletedScreen() {
  const router = useRouter();

  return (
    <WayzzoScreen>
      <View style={styles.content}>
        <View style={styles.center}>
          <View style={styles.checkCircle}>
            <CheckCircle2 size={48} color={colors.success} />
          </View>

          <Text style={styles.title}>Delivered Successfully</Text>
          <Text style={styles.orderId}>WAY-98412 • RAVET → HINJAWADI</Text>
          <Text style={styles.timestamp}>Delivered today at 3:12 PM</Text>

          <View style={styles.summaryCard}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Receiver</Text>
              <Text style={styles.rowValue}>Akash Sharma</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Handover OTP</Text>
              <Text style={styles.rowValue}>9142 (Verified)</Text>
            </View>
            <WayzzoDivider marginVertical={8} />
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Total Fare Paid</Text>
              <Text style={styles.totalValue}>₹162</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Rate Delivery Experience"
            onPress={() => router.push('/delivery/rating')}
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.successLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.base,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: -0.5,
  },
  orderId: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: '700',
    color: colors.secondaryText,
    marginTop: spacing.xs,
    letterSpacing: 0.5,
  },
  timestamp: {
    fontSize: 13,
    color: colors.mutedText,
    marginTop: 2,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border,
    width: '100%',
    marginTop: spacing.xl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  rowLabel: {
    fontSize: 13,
    color: colors.secondaryText,
  },
  rowValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.foreground,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.foreground,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

