import type { DeliveryOrder, UserProfile } from '@delivery/types';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface ApiClientConfig {
  baseUrl: string;
  authToken?: () => string | null;
}

export class DeliveryApiClient {
  private baseUrl: string;
  private getAuthToken?: () => string | null;

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl;
    this.getAuthToken = config.authToken;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const token = this.getAuthToken ? this.getAuthToken() : null;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) || {}),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await response.json();
      if (!response.ok) {
        return {
          success: false,
          error: data.message || `HTTP ${response.status}: Request failed`,
        };
      }

      return {
        success: true,
        data,
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || 'Network error or server unavailable',
      };
    }
  }

  // Auth endpoints
  async getProfile(): Promise<ApiResponse<UserProfile>> {
    return this.request<UserProfile>('/auth/me');
  }

  // Delivery Orders
  async getOrders(): Promise<ApiResponse<DeliveryOrder[]>> {
    return this.request<DeliveryOrder[]>('/orders');
  }

  async getOrderById(id: string): Promise<ApiResponse<DeliveryOrder>> {
    return this.request<DeliveryOrder>(`/orders/${id}`);
  }

  async createOrder(orderPayload: any): Promise<ApiResponse<DeliveryOrder>> {
    return this.request<DeliveryOrder>('/orders', {
      method: 'POST',
      body: JSON.stringify(orderPayload),
    });
  }

  async cancelOrder(id: string, reason: string): Promise<ApiResponse<DeliveryOrder>> {
    return this.request<DeliveryOrder>(`/orders/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason }),
    });
  }
}
