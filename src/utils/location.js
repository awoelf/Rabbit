import * as Location from 'expo-location';

export const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  const location = await Location.getCurrentPositionAsync();
  
  const geocode = await Location.reverseGeocodeAsync(location.coords, false);
  
  return {status: status, location: location, geocode: geocode[0]};
};
