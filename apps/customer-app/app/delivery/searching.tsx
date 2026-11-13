import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Navigation } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function PartnerSearchingScreen() {
  const router = useRouter();

  useEffect(() => {
    // In dev mode, auto-transition to assigned partner after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/delivery/assigned');
    }, 2800);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Dispatching Partner" showBack={false} />

      <View style={styles.content}>
        <View style={styles.centerBox}>
          <View style={styles.pulseContainer}>
            <ActivityIndicator size="large" color={colors.accent} />
          </View>

          <Text style={styles.title}>Connecting with nearby riders</Text>
          <Text style={styles.subtitle}>
            Broadcasting request to verified 2-wheeler partners near Ravet & PCMC...
          </Text>

          <View style={styles.telemetryCard}>
            <Text style={styles.telemetryText}>MATCHING RADIUS: 3.2 KM</Text>
            <Text style={styles.telemetryText}>ACTIVE RIDERS: 8 AVAILABLE</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Simulate Partner Match Now"
            variant="outline"
            onPress={() => router.replace('/delivery/assigned')}
            size="md"
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
  centerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  pulseContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.foreground,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.secondaryText,
    textAlign: 'center',
    marginTop: spacing.xs,
    lineHeight: 20,
  },
  telemetryCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    marginTop: spacing.xl,
    gap: 4,
  },
  telemetryText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: colors.secondaryText,
    textAlign: 'center',
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

