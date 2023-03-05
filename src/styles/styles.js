import { StyleSheet } from 'react-native';
import { rabbit } from './palette';

// General styles for the entire app
export const styles = StyleSheet.create({
  header1: {
    fontFamily: rabbit.font_header1,
    fontSize: rabbit.font_size_header1,
  },
  header2: {
    fontFamily: rabbit.font_shared,
    fontSize: rabbit.font_size_header2,
  },
  text: {
    fontFamily: rabbit.font_shared,
    fontSize: rabbit.font_size,
  },
  textField: {
    fontFamily: rabbit.font_shared,
    fontSize: rabbit.font_size,
    backgroundColor: rabbit.box_color,
    marginVertical: rabbit.margin_vertical,
    padding: rabbit.input_padding,
    borderRadius: rabbit.border_radius,
    height: rabbit.box_height,
  },
  button: {
    backgroundColor: rabbit.accent_color,
    borderRadius: rabbit.border_radius,
    marginVertical: rabbit.margin_vertical,
  },
  link: {
    color: rabbit.link_color,
    font: rabbit.font_shared,
    fontSize: rabbit.font_size,
    marginBottom: rabbit.margin_vertical,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  newsHead:{
    fontFamily: rabbit.font_news,
    padding: 5, 
    fontSize: 15, 
    color:'gray'
  },
  news:{
    fontFamily: rabbit.font_news,
    padding: 5, 
    fontSize: 20, 
  }
});

// Styles for the bottom tab bar
export const tabBarStyle = StyleSheet.create({
  backgroundColor: rabbit.accent_color,
});

// Styles for icons and buttons with icons
export const iconStyle = StyleSheet.create({
  icon: { fontSize: rabbit.font_size_header2 },
  button: {
    backgroundColor: rabbit.accent_color,
    width: rabbit.button_height,
    height: rabbit.button_height,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

export const headerStyle = StyleSheet.create({
  marginHorizontal: rabbit.header_padding,
  marginTop: rabbit.header_padding_vertical,
});

export const containerStyle = StyleSheet.create({
  marginHorizontal: rabbit.container_padding,
  marginTop: rabbit.header_padding,
});

export const weatherStyle = StyleSheet.create({
  borderBottom: {
    borderBottomColor: 'black',
    borderBottomWidth: .5
  },
  borderRight: {
    borderRightColor: 'black',
    borderRightWidth: .5
  },
  forecast: {
    flexDirection: 'row',
  }
})

export const cardStyle = StyleSheet.create({
  backgroundColor: rabbit.box_color,
  marginVertical: rabbit.card_margin_vertical,
})