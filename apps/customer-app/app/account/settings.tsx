import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { usePreferencesStore } from '@/store/preferences-store';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function SettingsScreen() {
  const {
    notificationsEnabled,
    hapticFeedbackEnabled,
    setNotifications,
    setHaptics,
  } = usePreferencesStore();

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Preferences & Security" />

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Push Notifications</Text>
              <Text style={styles.desc}>Real-time updates on partner arrival & delivery OTPs</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotifications}
              trackColor={{ false: colors.border, true: colors.foreground }}
              thumbColor={colors.surface}
            />
          </View>

          <WayzzoDivider marginVertical={12} />

          <View style={styles.row}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Haptic Feedback</Text>
              <Text style={styles.desc}>Vibrational feedback on milestone transitions</Text>
            </View>
            <Switch
              value={hapticFeedbackEnabled}
              onValueChange={setHaptics}
              trackColor={{ false: colors.border, true: colors.foreground }}
              thumbColor={colors.surface}
            />
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>PRIVACY & DATA RESIDENCY</Text>
          <Text style={styles.infoBody}>
            Wayzzo only accesses your foreground location during pickup selection and live tracking.
            Background location is never tracked on the customer app.
          </Text>
        </View>
      </View>
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.base,
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
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingRight: spacing.md,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.foreground,
  },
  desc: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
  infoCard: {
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.base,
  },
  infoTitle: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.secondaryText,
    letterSpacing: 0.8,
  },
  infoBody: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 6,
    lineHeight: 18,
  },
});

