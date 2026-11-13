import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  dockHeight: 64,
  headerHeight: 56,
  bottomSheetHandleHeight: 24,
};

