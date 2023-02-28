import { useState } from 'react';
import * as Location from 'expo-location';

const [location, setLocation] = useState(null);
const [geocode, setGeocode] = useState(null);
const [units, setUnits] = useState('imperial');

export default GetLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    console.log("Location is required to use this app's features.");
    return;
  }

  const locationResponse = await Location.getCurrentPositionAsync();
  setLocation(locationResponse);

  const geocodeResponse = await Location.reverseGeocodeAsync(location.coords, false);
  setGeocode(geocodeResponse[0]);

  return { location, geocode, units };
};
