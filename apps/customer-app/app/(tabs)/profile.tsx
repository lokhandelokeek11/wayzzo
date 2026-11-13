import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {
  MapPin,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoDivider } from '@/components/ui/WayzzoDivider';
import { useAuthStore } from '@/store/auth-store';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    router.replace('/(auth)/welcome');
  };

  const menuItems = [
    {
      id: 'addresses',
      title: 'Saved Addresses',
      subtitle: 'Home, office, and frequent delivery points',
      icon: <MapPin size={20} color={colors.foreground} />,
      route: '/account/addresses',
    },
    {
      id: 'payments',
      title: 'Payment Methods',
      subtitle: 'UPI, saved cards, and Wayzzo credits',
      icon: <CreditCard size={20} color={colors.foreground} />,
      route: '/account/payments',
    },
    {
      id: 'settings',
      title: 'Preferences & Security',
      subtitle: 'Notifications, haptics, and permissions',
      icon: <Settings size={20} color={colors.foreground} />,
      route: '/account/settings',
    },
    {
      id: 'support',
      title: 'Help & Customer Support',
      subtitle: '24/7 assistance and ticket escalation',
      icon: <HelpCircle size={20} color={colors.foreground} />,
      route: '/support',
    },
  ];

  return (
    <WayzzoScreen scrollable contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>You</Text>
      </View>

      {/* User Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.name?.slice(0, 2).toUpperCase() || 'WZ'}
          </Text>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{user?.name || 'Wayzzo Customer'}</Text>
            <ShieldCheck size={16} color={colors.accent} />
          </View>
          <Text style={styles.phone}>{user?.phoneNumber || '+91 7558527810'}</Text>
          <Text style={styles.email}>{user?.email || 'customer@wayzzo.com'}</Text>
        </View>
      </View>

      {/* Account Settings Menu */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <TouchableOpacity
              style={styles.menuRow}
              activeOpacity={0.7}
              onPress={() => router.push(item.route as any)}
            >
              <View style={styles.iconContainer}>{item.icon}</View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <ChevronRight size={18} color={colors.mutedText} />
            </TouchableOpacity>
            {index < menuItems.length - 1 && <WayzzoDivider marginVertical={6} />}
          </React.Fragment>
        ))}
      </View>

      {/* Log out action */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={18} color={colors.error} />
        <Text style={styles.logoutText}>Sign Out of Wayzzo</Text>
      </TouchableOpacity>

      <Text style={styles.versionInfo}>WAYZZO v1.0.0 (Expo SDK 53) • Ravet, Pune</Text>

      <View style={{ height: 100 }} />
    </WayzzoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.base,
  },
  header: {
    marginBottom: spacing.base,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.foreground,
    letterSpacing: -0.5,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.base,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.darkBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.surface,
    fontWeight: '700',
    fontSize: 18,
  },
  userInfo: {
    marginLeft: spacing.base,
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.foreground,
  },
  phone: {
    fontSize: 13,
    color: colors.secondaryText,
    marginTop: 2,
  },
  email: {
    fontSize: 12,
    color: colors.mutedText,
    marginTop: 1,
  },
  menuContainer: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.foreground,
  },
  menuSubtitle: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    marginTop: spacing.xl,
    gap: 8,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.error,
  },
  versionInfo: {
    textAlign: 'center',
    fontSize: 11,
    fontFamily: 'monospace',
    color: colors.mutedText,
    marginTop: spacing.base,
  },
});
