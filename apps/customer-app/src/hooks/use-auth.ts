import { useAuthStore } from '@/store/auth-store';

export function useAuth() {
  const {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    loginWithPhone,
    verifyOtp,
    loginDevMockUser,
    logout,
    clearError,
    initializeAuth,
  } = useAuthStore();

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    loginWithPhone,
    verifyOtp,
    loginDevMockUser,
    logout,
    clearError,
    initializeAuth,
  };
}

