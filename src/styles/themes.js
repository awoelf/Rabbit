import { createTheme } from '@sendbird/uikit-react-native-foundation';
import { rabbit, rabbitMessagePalette } from './palette';

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
  palette: rabbitMessagePalette,
  colors: (palette) => ({
    ...palette.colors,
    primary: 'black',
    secondary: 'black',
    background: rabbit.background_color,
    text: 'black',
    ui: {
      ...palette.colors.ui,
      text: {
        none: {
          content: 'black',
          background: 'black'
        }
      },
    }
  }),
  typography: {
    shared: {
      fontFamily: rabbit.font_shared,
      fontSize: rabbit.font_size,
      lineHeight: 24,
    },
    h1: {
      fontFamily: rabbit.font_shared,
      fontSize: rabbit.font_size_header1
    }
  },
});
