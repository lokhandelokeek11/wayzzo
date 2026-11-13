import React from 'react';
import { WayzzoInput, WayzzoInputProps } from '../ui/WayzzoInput';

export const FormField: React.FC<WayzzoInputProps> = (props) => {
  return <WayzzoInput {...props} />;
};

