import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '@/theme/colors';

interface WayzzoLogoProps {
  variant?: 'light' | 'dark' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
  style?: ViewStyle;
}

export const WayzzoLogo: React.FC<WayzzoLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showDot = true,
  style,
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? colors.surface : colors.foreground;

  const fontSizes = {
    sm: 18,
    md: 24,
    lg: 32,
  };

  const dotSizes = {
    sm: 5,
    md: 6,
    lg: 8,
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, { fontSize: fontSizes[size], color: textColor }]}>
        WAYZZO
      </Text>
      {showDot && (
        <View
          style={[
            styles.dot,
            {
              width: dotSizes[size],
              height: dotSizes[size],
              borderRadius: dotSizes[size] / 2,
              backgroundColor: colors.accent,
            },
          ]}
        />
      )}
    </View>
  );
};

// Backwards-compatible alias for prompt specifications
export const MovexaLogo = WayzzoLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  text: {
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  dot: {
    marginLeft: 3,
    marginBottom: 2,
  },
});

