import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/auth-store';
import { WayzzoLogo } from '@/components/ui/WayzzoLogo';
import { colors } from '@/theme/colors';
import { APP_CONFIG } from '@/constants/config';

export default function SplashScreen() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        if (isAuthenticated) {
          router.replace('/(tabs)');
        } else {
          router.replace('/(auth)/welcome');
        }
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [isLoading, isAuthenticated, router]);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <WayzzoLogo size="lg" variant="light" />
        <Text style={styles.tagline}>{APP_CONFIG.tagline}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>HYPERLOCAL PRECISION LOGISTICS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
  },
  tagline: {
    color: colors.mutedText,
    fontSize: 13,
    marginTop: 12,
    letterSpacing: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 48,
  },
  footerText: {
    color: '#444444',
    fontSize: 11,
    fontFamily: 'monospace',
    letterSpacing: 1.5,
  },
});

