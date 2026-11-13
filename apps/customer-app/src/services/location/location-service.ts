import * as Location from 'expo-location';
import { Coordinates, Address } from '@/types/location';
import { APP_CONFIG } from '@/constants/config';

export interface LocationResult {
  coordinates: Coordinates;
  address?: Address;
}

class LocationService {
  /**
   * Request foreground location permission with user-friendly handling
   */
  async requestForegroundPermissions(): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      return status === Location.PermissionStatus.GRANTED;
    } catch (error) {
      console.warn('[LocationService] Permission request failed:', error);
      return false;
    }
  }

  /**
   * Check if location services are enabled on device
   */
  async isLocationServicesEnabled(): Promise<boolean> {
    try {
      return await Location.hasServicesEnabledAsync();
    } catch {
      return false;
    }
  }

  /**
   * Get user's current GPS location, or fallback to default coordinates
   */
  async getCurrentLocation(): Promise<Coordinates> {
    try {
      const isEnabled = await this.isLocationServicesEnabled();
      if (!isEnabled) {
        console.warn('[LocationService] Location services disabled. Returning default.');
        return APP_CONFIG.defaultCoordinates;
      }

      const hasPermission = await this.requestForegroundPermissions();
      if (!hasPermission) {
        console.warn('[LocationService] Permission not granted. Returning default.');
        return APP_CONFIG.defaultCoordinates;
      }

      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.warn('[LocationService] Failed to acquire GPS position:', error);
      return APP_CONFIG.defaultCoordinates;
    }
  }

  /**
   * Reverse-geocode coordinates into a human-readable street address
   */
  async reverseGeocode(coordinates: Coordinates): Promise<Address> {
    try {
      const results = await Location.reverseGeocodeAsync(coordinates);
      if (results && results.length > 0) {
        const item = results[0];
        const formatted = [
          item.name,
          item.street,
          item.district || item.subregion,
          item.city,
          item.region,
          item.postalCode,
        ]
          .filter(Boolean)
          .join(', ');

        return {
          formattedAddress: formatted || 'Current Location',
          street: item.street || item.name || '',
          city: item.city || '',
          postalCode: item.postalCode || '',
          landmark: item.district || '',
          coordinates,
        };
      }
    } catch (error) {
      console.warn('[LocationService] Reverse geocode failed:', error);
    }

    return {
      formattedAddress: `${coordinates.latitude.toFixed(4)}, ${coordinates.longitude.toFixed(4)}`,
      coordinates,
    };
  }
}

export const locationService = new LocationService();

