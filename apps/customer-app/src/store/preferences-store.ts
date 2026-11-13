import { create } from 'zustand';
import { appStorage } from '@/utils/storage';

interface PreferencesStore {
  notificationsEnabled: boolean;
  hapticFeedbackEnabled: boolean;
  themeMode: 'light' | 'dark' | 'system';
  setNotifications: (enabled: boolean) => Promise<void>;
  setHaptics: (enabled: boolean) => Promise<void>;
  setThemeMode: (mode: 'light' | 'dark' | 'system') => Promise<void>;
  loadPreferences: () => Promise<void>;
}

const PREF_KEY = 'wayzzo_customer_prefs';

export const usePreferencesStore = create<PreferencesStore>((set) => ({
  notificationsEnabled: true,
  hapticFeedbackEnabled: true,
  themeMode: 'light',

  loadPreferences: async () => {
    const saved = await appStorage.getItem<{
      notificationsEnabled?: boolean;
      hapticFeedbackEnabled?: boolean;
      themeMode?: 'light' | 'dark' | 'system';
    }>(PREF_KEY);

    if (saved) {
      set({
        notificationsEnabled: saved.notificationsEnabled ?? true,
        hapticFeedbackEnabled: saved.hapticFeedbackEnabled ?? true,
        themeMode: saved.themeMode ?? 'light',
      });
    }
  },

  setNotifications: async (enabled) => {
    set({ notificationsEnabled: enabled });
    await appStorage.setItem(PREF_KEY, { notificationsEnabled: enabled });
  },

  setHaptics: async (enabled) => {
    set({ hapticFeedbackEnabled: enabled });
    await appStorage.setItem(PREF_KEY, { hapticFeedbackEnabled: enabled });
  },

  setThemeMode: async (mode) => {
    set({ themeMode: mode });
    await appStorage.setItem(PREF_KEY, { themeMode: mode });
  },
}));

