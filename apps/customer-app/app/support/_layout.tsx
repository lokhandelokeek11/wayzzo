import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/theme/colors';

export default function SupportLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="report-issue" />
    </Stack>
  );
}

