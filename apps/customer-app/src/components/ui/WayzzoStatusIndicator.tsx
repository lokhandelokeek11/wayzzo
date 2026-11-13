import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';

export type StatusType = 'idle' | 'searching' | 'active' | 'success' | 'warning' | 'error';

interface WayzzoStatusIndicatorProps {
  status: StatusType;
  label?: string;
  style?: ViewStyle;
}

export const WayzzoStatusIndicator: React.FC<WayzzoStatusIndicatorProps> = ({
  status,
  label,
  style,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return colors.accent;
      case 'searching':
        return colors.info;
      case 'success':
        return colors.success;
      case 'warning':
        return colors.warning;
      case 'error':
        return colors.error;
      default:
        return colors.mutedText;
    }
  };

  const color = getStatusColor();

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      {label && <Text style={[styles.label, { color }]}>{label}</Text>}
    </View>
  );
};

export const MovexaStatusIndicator = WayzzoStatusIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

