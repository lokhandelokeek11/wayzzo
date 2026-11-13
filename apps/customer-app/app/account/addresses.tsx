import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, Briefcase, Plus, MapPin } from 'lucide-react-native';
import { WayzzoScreen } from '@/components/ui/WayzzoScreen';
import { WayzzoHeader } from '@/components/ui/WayzzoHeader';
import { WayzzoButton } from '@/components/ui/WayzzoButton';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

export default function SavedAddressesScreen() {
  const addresses = [
    {
      id: '1',
      title: 'Home',
      address: 'Flat 402, Signature Park, BRT Road, Ravet, PCMC, Pune 412101',
      icon: <Home size={18} color={colors.foreground} />,
    },
    {
      id: '2',
      title: 'Work / Office',
      address: 'Tower 4, Embassy Tech Zone, Hinjawadi Phase 2, Pune 411057',
      icon: <Briefcase size={18} color={colors.foreground} />,
    },
  ];

  return (
    <WayzzoScreen>
      <WayzzoHeader title="Saved Addresses" />

      <View style={styles.content}>
        <View style={styles.list}>
          {addresses.map((addr) => (
            <View key={addr.id} style={styles.card}>
              <View style={styles.iconBox}>{addr.icon}</View>
              <View style={styles.info}>
                <Text style={styles.title}>{addr.title}</Text>
                <Text style={styles.address}>{addr.address}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <WayzzoButton
            title="Add New Address"
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
    justifyContent: 'space-between',
  },
  list: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
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
    fontSize: 15,
    fontWeight: '700',
    color: colors.foreground,
  },
  address: {
    fontSize: 13,
    color: colors.secondaryText,
    marginTop: 4,
    lineHeight: 18,
  },
  footer: {
    paddingBottom: spacing.base,
  },
});

