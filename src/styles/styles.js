import { StyleSheet } from 'react-native';
import { rabbitPalette } from './palette';

export const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: rabbitPalette.accent_color,
  },
});

export const logIn = StyleSheet.create({
  header: {
    fontFamily: rabbitPalette.font_header,
    fontSize: rabbitPalette.font_size_header,
  },
  text: {
    fontFamily: rabbitPalette.font_shared,
    fontSize: rabbitPalette.font_size,
  },
  textField: {
    fontFamily: rabbitPalette.font_shared,
    fontSize: rabbitPalette.font_size,
    backgroundColor: rabbitPalette.box_color,
    marginVertical: rabbitPalette.margin_vertical,
    padding: rabbitPalette.input_padding,
    borderRadius: rabbitPalette.border_radius,
    height: rabbitPalette.box_height,
  },
  button: {
    backgroundColor: rabbitPalette.accent_color,
    borderRadius: rabbitPalette.border_radius,
    width: rabbitPalette.button_width,
    height: rabbitPalette.box_height,
    marginVertical: rabbitPalette.margin_vertical,
  },
  link: {
    color: rabbitPalette.link_color,
    font: rabbitPalette.font_shared,
    fontSize: rabbitPalette.font_size,
    marginBottom: rabbitPalette.margin_vertical
  }
});