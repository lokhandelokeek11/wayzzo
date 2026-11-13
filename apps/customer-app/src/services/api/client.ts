import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';
import { secureStorage } from '@/utils/storage';

const AUTH_TOKEN_KEY = 'wayzzo_auth_token';

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-App-Platform': 'mobile-customer',
  },
});

// Request interceptor: Inject Bearer token from secure storage
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const token = await secureStorage.getItem(AUTH_TOKEN_KEY);
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch {
      // Ignore token read failures and proceed
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor: Standardize errors and handle session expiry
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Clear token on unauthorized response
      await secureStorage.removeItem(AUTH_TOKEN_KEY);
    }
    const message =
      (error.response?.data as { message?: string })?.message ||
      error.message ||
      'An unexpected network error occurred';
    return Promise.reject(new Error(message));
  }
);

export { AUTH_TOKEN_KEY };

