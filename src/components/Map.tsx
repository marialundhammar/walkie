import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  CalloutSubview,
} from 'react-native-maps';
import { Text, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';
import { UserLocationContext } from '../context/userLocationContext';
import mapStyle from '../assets/styles/mapStyle';
import styles from '../assets/styles/styles';

const Map = () => {
  let location: any;
  let i: number = 0;
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [updateUserLocationDelay, setUpdateUserLocationDelay] = useState<any>();
  const {
    updateUserLocation,
    userLocation,
    nextMarkerLat,
    nextMarkerLong,
    nextMarkerTitle,
  } = useContext(UserLocationContext);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const delayOfUserPosition = async () => {
    await delay(1000);
    setUpdateUserLocationDelay(i);
    i++;
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      location = await Location.getCurrentPositionAsync({});

      updateUserLocation(location.coords.latitude, location.coords.longitude);
      delayOfUserPosition();
    })();
  }, []);

  return (
    <>
      <MapView.Animated
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: nextMarkerLat,
          longitude: nextMarkerLong,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
        showsCompass={true}
      >
        <Marker
          style={{ width: 60, height: 40 }}
          coordinate={{
            latitude: userLocation.lat,
            longitude: userLocation.long,
          }}
          pinColor="blue"
          title="You are here"
        ></Marker>

        <Marker
          style={{ width: 60, height: 40 }}
          coordinate={{
            latitude: nextMarkerLat,
            longitude: nextMarkerLong,
          }}
          title={nextMarkerTitle}
        ></Marker>
      </MapView.Animated>
    </>
  );
};

export default Map;
