import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        'on-primary': '#ffffff',
        'primary-container': '#1c1b1b',
        'on-primary-container': '#858383',
        'inverse-primary': '#c8c6c5',

        secondary: '#904c21',
        'on-secondary': '#ffffff',
        'secondary-container': '#ffa673',
        'on-secondary-container': '#783a0f',
        'secondary-fixed': '#ffdbc9',
        'secondary-fixed-dim': '#ffb68e',
        'on-secondary-fixed': '#331200',
        'on-secondary-fixed-variant': '#73360b',

        tertiary: '#000000',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#1b1c1c',
        'on-tertiary-container': '#848484',
        'tertiary-fixed': '#e3e2e2',
        'tertiary-fixed-dim': '#c7c6c6',
        'on-tertiary-fixed': '#1b1c1c',
        'on-tertiary-fixed-variant': '#464747',

        surface: '#f9f9f7',
        'surface-dim': '#dadad8',
        'surface-bright': '#f9f9f7',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f4f4f2',
        'surface-container': '#eeeeec',
        'surface-container-high': '#e8e8e6',
        'surface-container-highest': '#e2e3e1',
        'on-surface': '#1a1c1b',
        'on-surface-variant': '#444748',
        'surface-variant': '#e2e3e1',

        'inverse-surface': '#2f3130',
        'inverse-on-surface': '#f1f1ef',
        outline: '#747878',
        'outline-variant': '#c4c7c7',
        'surface-tint': '#5f5e5e',

        background: '#f9f9f7',
        'on-background': '#1a1c1b',

        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.25rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        '3xl': '1rem',
        full: '9999px',
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        gutter: '1.5rem',
        margin: '2rem',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        'display-xl': ['Geist', 'sans-serif'],
        'headline-lg': ['Geist', 'sans-serif'],
        'headline-md': ['Geist', 'sans-serif'],
        'headline-sm': ['Geist', 'sans-serif'],
        'title-md': ['Geist', 'sans-serif'],
        'body-lg': ['Geist', 'sans-serif'],
        'body-md': ['Geist', 'sans-serif'],
        'body-sm': ['Geist', 'sans-serif'],
        'label-caps': ['Geist', 'sans-serif'],
        'code-mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
