import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MessageSquare, Phone, AlertCircle, ChevronRight, Mail } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { APP_CONFIG } from '@/constants/config';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function SupportHomeScreen() {
  const router = useRouter();

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Help & Support" />

      <View style={styles.content}>
        <View style={styles.heroBox}>
          <Text style={styles.heroTitle}>How can we assist you?</Text>
          <Text style={styles.heroSubtitle}>
            Direct line to Wayzzo Operations Team in Pune
          </Text>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.7}
            onPress={() => router.push('/support/report-issue')}
          >
            <View style={styles.iconBox}>
              <AlertCircle size={18} color={colors.accent} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Report an Issue with an Order</Text>
              <Text style={styles.desc}>Delayed rider, parcel damage or billing queries</Text>
            </View>
            <ChevronRight size={18} color={colors.mutedText} />
          </TouchableOpacity>

          <WayzzoDivider marginVertical={10} />

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Phone size={18} color={colors.foreground} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Emergency Priority Hotline</Text>
              <Text style={styles.desc}>{APP_CONFIG.supportPhone} (24/7)</Text>
            </View>
          </View>

          <WayzzoDivider marginVertical={10} />

          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Mail size={18} color={colors.foreground} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Email Support Desk</Text>
              <Text style={styles.desc}>{APP_CONFIG.supportEmail}</Text>
            </View>
          </View>
        </View>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.base,
  },
  heroBox: {
    marginBottom: spacing.base,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.foreground,
  },
  heroSubtitle: {
    fontSize: 13,
    color: colors.secondaryText,
    marginTop: 2,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
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
  desc: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
});

