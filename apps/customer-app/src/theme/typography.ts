import { Platform, TextStyle } from 'react-native';

const sansFontFamily = Platform.select({
  ios: 'System',
  android: 'sans-serif',
  default: 'System',
});

const monoFontFamily = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  default: 'monospace',
});

export const typography = {
  fonts: {
    sans: sansFontFamily,
    mono: monoFontFamily,
  },
  sizes: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 34,
  },
  lineHeights: {
    tight: 1.15,
    normal: 1.35,
    relaxed: 1.5,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const textStyles: Record<string, TextStyle> = {
  h1: {
    fontFamily: typography.fonts.sans,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: typography.fonts.sans,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: typography.fonts.sans,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  body: {
    fontFamily: typography.fonts.sans,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
  },
  bodyMedium: {
    fontFamily: typography.fonts.sans,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  caption: {
    fontFamily: typography.fonts.sans,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
  },
  telemetry: {
    fontFamily: typography.fonts.mono,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  telemetryBold: {
    fontFamily: typography.fonts.mono,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
};

