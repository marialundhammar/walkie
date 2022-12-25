import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Map from './src/components/Map';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let lat;
  let long;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);

    lat = location.coords.latitude;
    long = location.coords.longitude;

    text = JSON.stringify(location);
  }
  return (
    <SafeAreaView>
      <Text>
        {lat} {long}
      </Text>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
