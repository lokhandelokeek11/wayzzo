/**
 * Environment configuration reader for Wayzzo Customer App.
 * Client-side variables must start with EXPO_PUBLIC_
 */

declare const process: { env: Record<string, string | undefined> };

export const env = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL || 'https://api.wayzzo.com/v1',
  mapsApiKey: process.env.EXPO_PUBLIC_MAPS_API_KEY || '',
  appEnv: (process.env.EXPO_PUBLIC_APP_ENV || 'development') as 'development' | 'preview' | 'production',
  isDev: (process.env.EXPO_PUBLIC_APP_ENV || 'development') === 'development',
  isProd: process.env.EXPO_PUBLIC_APP_ENV === 'production',
};

