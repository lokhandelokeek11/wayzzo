import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Home, Clock, Navigation, User } from 'lucide-react-native';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { shadows } from '@/theme/shadows';

export type DockTab = 'home' | 'activity' | 'track' | 'profile';

interface DockItem {
  id: DockTab;
  label: string;
  route: string;
  icon: (color: string) => React.ReactNode;
}

export const WayzzoDock: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const dockItems: DockItem[] = [
    {
      id: 'home',
      label: 'Home',
      route: '/(tabs)',
      icon: (color) => <Home size={20} color={color} strokeWidth={2.2} />,
    },
    {
      id: 'activity',
      label: 'Activity',
      route: '/(tabs)/activity',
      icon: (color) => <Clock size={20} color={color} strokeWidth={2.2} />,
    },
    {
      id: 'track',
      label: 'Track',
      route: '/(tabs)/track',
      icon: (color) => <Navigation size={20} color={color} strokeWidth={2.2} />,
    },
    {
      id: 'profile',
      label: 'You',
      route: '/(tabs)/profile',
      icon: (color) => <User size={20} color={color} strokeWidth={2.2} />,
    },
  ];

  const getActiveTab = (): DockTab => {
    if (pathname.includes('/activity')) return 'activity';
    if (pathname.includes('/track')) return 'track';
    if (pathname.includes('/profile')) return 'profile';
    return 'home';
  };

  const activeTab = getActiveTab();

  const handleTabPress = (item: DockItem) => {
    router.replace(item.route as any);
  };

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <View style={styles.dock}>
        {dockItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => handleTabPress(item)}
              style={[styles.item, isActive && styles.activeSegment]}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={item.label}
            >
              {item.icon(isActive ? colors.dockActiveText : colors.dockInactiveText)}
              <Text
                style={[
                  styles.label,
                  { color: isActive ? colors.dockActiveText : colors.dockInactiveText },
                  isActive && styles.activeLabel,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export const MovexaDock = WayzzoDock;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    pointerEvents: 'box-none',
  },
  dock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkBackground, // Obsidian background
    borderRadius: radius.full,
    paddingVertical: 6,
    paddingHorizontal: 8,
    width: '100%',
    maxWidth: 390,
    borderWidth: 1,
    borderColor: colors.darkBorder,
    ...shadows.dock,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: radius.full,
    gap: 6,
  },
  activeSegment: {
    backgroundColor: colors.dockActiveSegment, // White active capsule segment
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '700',
  },
});

