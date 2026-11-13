/**
 * Centralised Wayzzo Design System - Color Tokens
 * Premium hyperlocal logistics & delivery aesthetic.
 */

export const colors = {
  background: '#F7F7F5',
  foreground: '#111111',
  surface: '#FFFFFF',
  primary: '#111111',
  secondaryText: '#777777',
  mutedText: '#999999',
  border: '#E7E7E5',
  darkBorder: '#222222',
  accent: '#C8794A',
  darkBackground: '#111111',

  // Semantic & status accents
  success: '#16A34A',
  successLight: '#DCFCE7',
  warning: '#D97706',
  warningLight: '#FEF3C7',
  error: '#DC2626',
  errorLight: '#FEE2E2',
  info: '#2563EB',
  infoLight: '#DBEAFE',

  // Utility colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  overlay: 'rgba(0, 0, 0, 0.45)',
  dockBackground: '#111111',
  dockActiveSegment: '#FFFFFF',
  dockInactiveText: '#888888',
  dockActiveText: '#111111',
} as const;

export type Colors = typeof colors;

