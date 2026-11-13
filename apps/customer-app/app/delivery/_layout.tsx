import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/theme/colors';

export default function DeliveryLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="searching" />
      <Stack.Screen name="assigned" />
      <Stack.Screen name="tracking" />
      <Stack.Screen name="pickup-otp" />
      <Stack.Screen name="completed" />
      <Stack.Screen name="rating" />
    </Stack>
  );
}

