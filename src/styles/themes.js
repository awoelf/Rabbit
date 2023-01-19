import { createTheme, LightUIKitTheme } from '@sendbird/uikit-react-native-foundation';
import { rabbitPalette } from './palette';

export const rabbitTheme = {
  dark: false,
  colors: {
    background: rabbitPalette.background_color,
    border: rabbitPalette.border_color,
  },
};

export const rabbitMessageTheme = createTheme({
  colorScheme: 'rabbit',
  colors: () => ({
    ...LightUIKitTheme.colors,
    primary: rabbitPalette.accent_color,
    background: rabbitPalette.background_color,
  }),
  typography: {
    shared: {
      fontFamily: rabbitPalette.font_shared,
      fontSize: rabbitPalette.font_size,
    },
    h1: {
      fontFamily: rabbitPalette.font_header,
    },
  },
});
