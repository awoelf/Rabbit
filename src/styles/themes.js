import { createTheme, LightUIKitTheme } from '@sendbird/uikit-react-native-foundation';
import { rabbit } from './palette';

// Theme used by the navigation container
export const rabbitTheme = {
  dark: false,
  colors: {
    background: rabbit.background_color,
    border: rabbit.border_color,
  },
};

// Theme used by the sendbird fragments
export const rabbitMessageTheme = createTheme({
  colorScheme: 'rabbit',
  colors: () => ({
    ...LightUIKitTheme.colors,
    primary: rabbit.accent_color,
    background: rabbit.background_color,
    onBackground01: rabbit.background_color
  }),
  typography: {
    shared: {
      fontFamily: rabbit.font_shared,
      fontSize: rabbit.font_size,
    },
    h1: {
      fontFamily: rabbit.font_header,
    },
  },
});
