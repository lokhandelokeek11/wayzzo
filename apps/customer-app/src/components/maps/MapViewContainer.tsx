import React from 'react';
import { View, Text, StyleSheet, Platform, ViewStyle } from 'react-native';
import { Coordinates } from '@/types/location';
import { colors } from '@/theme/colors';
import { APP_CONFIG } from '@/constants/config';
import { Navigation } from 'lucide-react-native';

// Dynamically check or require react-native-maps to prevent native crash if run on Web or plain Expo Go without native build
let MapView: any = null;
let Marker: any = null;
let PROVIDER_GOOGLE: any = null;

try {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
  PROVIDER_GOOGLE = Maps.PROVIDER_GOOGLE;
} catch {
  // Graceful fallback for non-native environments
}

export interface MapViewContainerProps {
  initialCoordinates?: Coordinates;
  markers?: Array<{
    id: string;
    coordinates: Coordinates;
    title?: string;
    description?: string;
  }>;
  style?: ViewStyle;
  children?: React.ReactNode;
  interactive?: boolean;
}

export const MapViewContainer: React.FC<MapViewContainerProps> = ({
  initialCoordinates = APP_CONFIG.defaultCoordinates,
  markers = [],
  style,
  children,
  interactive = true,
}) => {
  // If running in an environment without native react-native-maps binaries
  if (!MapView || Platform.OS === 'web') {
    return (
      <View style={[styles.fallbackContainer, style]}>
        <View style={styles.gridOverlay}>
          <Navigation size={32} color={colors.accent} />
          <Text style={styles.fallbackTitle}>Wayzzo Precision Grid</Text>
          <Text style={styles.fallbackSubtitle}>
            {initialCoordinates.latitude.toFixed(4)}, {initialCoordinates.longitude.toFixed(4)}
          </Text>
          <Text style={styles.fallbackNotice}>
            Native map views render on Android & iOS Development Client builds.
          </Text>
        </View>
        {children}
      </View>
    );
  }

  const region = {
    latitude: initialCoordinates.latitude,
    longitude: initialCoordinates.longitude,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  return (
    <View style={[styles.container, style]}>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        style={StyleSheet.absoluteFillObject}
        initialRegion={region}
        scrollEnabled={interactive}
        zoomEnabled={interactive}
        rotateEnabled={interactive}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  fallbackContainer: {
    flex: 1,
    backgroundColor: '#ECECE8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  gridOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  fallbackTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.foreground,
    marginTop: 8,
  },
  fallbackSubtitle: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' }),
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 4,
  },
  fallbackNotice: {
    fontSize: 11,
    color: colors.mutedText,
    marginTop: 12,
    textAlign: 'center',
  },
});

