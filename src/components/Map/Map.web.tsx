import MapView, { PROVIDER_GOOGLE } from 'react-native-web-maps';
import React, { useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../context/userLocationContext';
import mapStyle from '../../assets/styles/mapStyle';
import styles from '../../assets/styles/styles';
import API_KEY from 'expo-constants';

const Map = () => {
  let location: any;
  let i: number = 0;

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [updateUserLocationDelay, setUpdateUserLocationDelay] =
    useState<number>();
  const {
    updateUserLocation,
    userLocation,
    nextMarkerLat,
    nextMarkerLong,
    nextMarkerTitle,
    setLocationLoaded,
    showFakeButtons,
    showAudioPlayer,
  } = useContext(UserLocationContext);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      location = await Location.getCurrentPositionAsync({});

      setLocationLoaded(true);

      if (!showFakeButtons && !showAudioPlayer) {
        await delay(1000);
        updateUserLocation(location.coords.latitude, location.coords.longitude);
      }
    })();
  }, [userLocation]);

  let pinColor = '#B862B0';
  const createMarker = (color) => {
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(20, 20, 10, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    return canvas.toDataURL();
  };

  const nextMarkerStyle = createMarker('#B862B0');
  const userMarkerStyle = createMarker('#03b6fc');

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        apiKey={API_KEY}
        style={styles.map}
        options={{ styles: mapStyle, disableDefaultUI: true }}
        initialRegion={{
          latitude: nextMarkerLat,
          longitude: nextMarkerLong,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
        showsCompass={true}
      >
        <MapView.Marker
          icon={nextMarkerStyle}
          style={{ width: 60, height: 40 }}
          coordinate={{
            latitude: nextMarkerLat,
            longitude: nextMarkerLong,
          }}
          title={nextMarkerTitle}
        ></MapView.Marker>

        <MapView.Marker
          icon={userMarkerStyle}
          style={{ width: 60, height: 40 }}
          coordinate={{
            latitude: userLocation.lat,
            longitude: userLocation.long,
          }}
          title={nextMarkerTitle}
          animation={1}
        ></MapView.Marker>
      </MapView>
    </>
  );
};

export default Map;