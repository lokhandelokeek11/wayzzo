import { colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { typography, textStyles } from './typography';

export const theme = {
  colors,
  spacing,
  radius,
  shadows,
  typography,
  textStyles,
  icons: {
    xs: 14,
    sm: 18,
    md: 22,
    lg: 26,
    xl: 32,
  },
} as const;

export type Theme = typeof theme;

export { colors } from './colors';
export { spacing } from './spacing';
export { radius } from './radius';
export { shadows } from './shadows';
export { typography, textStyles } from './typography';

