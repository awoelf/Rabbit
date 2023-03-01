import * as Location from 'expo-location';

export const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    console.log("Location is required to use this app's features.");
    return;
  }

  const location = await Location.getCurrentPositionAsync();
  
  const geocode = await Location.reverseGeocodeAsync(location.coords, false);
  
  
  return {location: location, geocode: geocode};
};
