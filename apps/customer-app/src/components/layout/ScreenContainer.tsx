import React from 'react';
import { WayzzoScreen, WayzzoScreenProps } from '../ui/WayzzoScreen';

export const ScreenContainer: React.FC<WayzzoScreenProps> = (props) => {
  return <WayzzoScreen {...props} />;
};

