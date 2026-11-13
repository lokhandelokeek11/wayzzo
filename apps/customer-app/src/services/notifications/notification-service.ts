export class NotificationService {
  /**
   * Request permissions and initialize push notifications
   */
  async requestPermissions(): Promise<boolean> {
    // In production, configure expo-notifications with APNs / FCM credentials
    return true;
  }
}

export const notificationService = new NotificationService();

