export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  avatarUrl?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

