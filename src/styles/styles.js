import { StyleSheet } from 'react-native';

// Colors
const background_color = '#ECE5D8';
const box_color = '#D9CCC1';
const accent_color = '#D7B16C';
const link_color = '#900';

// Fonts
const header_font = 'CreteRound_400Regular';
const header_font_size = 40;
const font = 'Mukta_400Regular';
const font_size = 18;

// Border
const border_radius = 15;

// Height and Width
const box_height = 50;



export const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: accent_color,
  },
});

export const logIn = StyleSheet.create({
  header: {
    fontFamily: header_font,
    fontSize: header_font_size,
  },
  text: {
    fontFamily: font,
    fontSize: font_size,
  },
  textField: {
    fontFamily: font,
    fontSize: font_size,
    backgroundColor: box_color,
    marginVertical: 5,
    padding: 20,
    borderRadius: border_radius,
    height: box_height,
  },
  button: {
    backgroundColor: accent_color,
    borderRadius: border_radius,
    width: 100,
    height: box_height,
    marginVertical: 5,
  },
  link: {
    color: link_color,
    font: font,
    fontSize: font_size,
    marginBottom: '5%'
  }
});

export const chat = StyleSheet.create({
  
})