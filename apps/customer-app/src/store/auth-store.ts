import { create } from 'zustand';
import { User } from '@/types/auth';
import { secureStorage } from '@/utils/storage';
import { AUTH_TOKEN_KEY } from '@/services/api/client';

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Development authentication adapter
  initializeAuth: () => Promise<void>;
  loginWithPhone: (phone: string) => Promise<boolean>;
  verifyOtp: (otp: string) => Promise<boolean>;
  loginDevMockUser: () => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,

  initializeAuth: async () => {
    try {
      const storedToken = await secureStorage.getItem(AUTH_TOKEN_KEY);
      if (storedToken) {
        // Hydrate session if token exists
        set({
          token: storedToken,
          isAuthenticated: true,
          user: {
            id: 'usr_dev_01',
            name: 'Wayzzo Customer',
            phoneNumber: '+91 9876543210',
            email: 'customer@wayzzo.com',
            isVerified: true,
            createdAt: new Date().toISOString(),
          },
          isLoading: false,
        });
      } else {
        set({ isLoading: false, isAuthenticated: false, user: null, token: null });
      }
    } catch {
      set({ isLoading: false, isAuthenticated: false });
    }
  },

  loginWithPhone: async (phone: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate network round-trip for SMS OTP dispatch
      await new Promise((resolve) => setTimeout(() => resolve(true), 800));
      set({ isLoading: false });
      return true;
    } catch (err: any) {
      set({ isLoading: false, error: err.message || 'Failed to send OTP' });
      return false;
    }
  },

  verifyOtp: async (otp: string) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise((resolve) => setTimeout(() => resolve(true), 800));
      if (otp === '123456' || otp.length === 6) {
        const mockToken = 'mock_jwt_wayzzo_customer_' + Date.now();
        await secureStorage.setItem(AUTH_TOKEN_KEY, mockToken);

        const mockUser: User = {
          id: 'usr_dev_01',
          name: 'Lokeek Lokhande',
          phoneNumber: '+91 7558527810',
          email: 'lokeek@wayzzo.com',
          isVerified: true,
          createdAt: new Date().toISOString(),
        };

        set({
          user: mockUser,
          token: mockToken,
          isAuthenticated: true,
          isLoading: false,
        });
        return true;
      } else {
        throw new Error('Invalid OTP. Use 123456 in development.');
      }
    } catch (err: any) {
      set({ isLoading: false, error: err.message || 'Verification failed' });
      return false;
    }
  },

  loginDevMockUser: async () => {
    const mockToken = 'mock_jwt_wayzzo_customer_' + Date.now();
    await secureStorage.setItem(AUTH_TOKEN_KEY, mockToken);
    set({
      user: {
        id: 'usr_dev_01',
        name: 'Lokeek Lokhande',
        phoneNumber: '+91 7558527810',
        email: 'lokeek@wayzzo.com',
        isVerified: true,
        createdAt: new Date().toISOString(),
      },
      token: mockToken,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  logout: async () => {
    await secureStorage.removeItem(AUTH_TOKEN_KEY);
    set({ user: null, token: null, isAuthenticated: false });
  },

  clearError: () => set({ error: null }),
}));

