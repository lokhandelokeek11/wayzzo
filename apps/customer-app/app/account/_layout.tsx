import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/theme/colors';

export default function AccountLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="addresses" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="payments" />
      <Stack.Screen name="order-details" />
    </Stack>
  );
}

