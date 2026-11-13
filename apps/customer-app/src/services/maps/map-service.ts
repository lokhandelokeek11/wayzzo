import { Coordinates } from '@/types/location';

export class MapService {
  /**
   * Calculate haversine distance between two coordinates in kilometers
   */
  calculateDistanceKm(origin: Coordinates, destination: Coordinates): number {
    const R = 6371; // Earth radius in km
    const dLat = this.deg2rad(destination.latitude - origin.latitude);
    const dLon = this.deg2rad(destination.longitude - origin.longitude);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(origin.latitude)) *
        Math.cos(this.deg2rad(destination.latitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}

export const mapService = new MapService();

