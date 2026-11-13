import { useState, useCallback, useEffect } from 'react';
import { useLocationStore } from '@/store/location-store';
import { locationService } from '@/services/location/location-service';
import { Coordinates } from '@/types/location';

export function useLocation() {
  const {
    currentCoordinates,
    currentAddress,
    permissionGranted,
    isLocating,
    error,
    setCoordinates,
    setAddress,
    setPermission,
    setLocating,
    setError,
  } = useLocationStore();

  const [refreshing, setRefreshing] = useState(false);

  const fetchCurrentLocation = useCallback(async () => {
    setLocating(true);
    setError(null);
    try {
      const coords = await locationService.getCurrentLocation();
      setCoordinates(coords);
      const address = await locationService.reverseGeocode(coords);
      setAddress(address);
      setPermission(true);
    } catch (err: any) {
      setError(err?.message || 'Could not fetch current location');
    } finally {
      setLocating(false);
      setRefreshing(false);
    }
  }, [setCoordinates, setAddress, setPermission, setLocating, setError]);

  const selectCustomLocation = useCallback(
    async (coords: Coordinates) => {
      setCoordinates(coords);
      try {
        const address = await locationService.reverseGeocode(coords);
        setAddress(address);
      } catch (err: any) {
        setError(err?.message || 'Failed to resolve address');
      }
    },
    [setCoordinates, setAddress, setError]
  );

  return {
    currentCoordinates,
    currentAddress,
    permissionGranted,
    isLocating,
    refreshing,
    error,
    fetchCurrentLocation,
    selectCustomLocation,
  };
}

