import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/theme/colors';

export default function BookingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="pickup" />
      <Stack.Screen name="drop" />
      <Stack.Screen name="map-picker" />
      <Stack.Screen name="parcel-details" />
      <Stack.Screen name="service-selection" />
      <Stack.Screen name="fare-estimate" />
      <Stack.Screen name="review" />
      <Stack.Screen name="payment" />
    </Stack>
  );
}

