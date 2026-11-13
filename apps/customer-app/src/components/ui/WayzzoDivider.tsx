import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '@/theme/colors';

interface WayzzoDividerProps {
  color?: string;
  height?: number;
  marginVertical?: number;
  style?: ViewStyle;
}

export const WayzzoDivider: React.FC<WayzzoDividerProps> = ({
  color = colors.border,
  height = StyleSheet.hairlineWidth,
  marginVertical = 12,
  style,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: color,
          height,
          marginVertical,
          width: '100%',
        },
        style,
      ]}
    />
  );
};

export const MovexaDivider = WayzzoDivider;

