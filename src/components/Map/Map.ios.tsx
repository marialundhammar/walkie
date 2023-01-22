import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../context/userLocationContext';
import mapStyle from '../../assets/styles/mapStyle';
import styles from '../../assets/styles/styles';

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

      console.log(showFakeButtons, userLocation);

      if (!showFakeButtons && !showAudioPlayer) {
        await delay(1000);
        updateUserLocation(location.coords.latitude, location.coords.longitude);
      }
    })();
  }, [userLocation]);

  let pinColor = '#B862B0';

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
        {showFakeButtons && (
          <Marker
            style={{ width: 60, height: 40 }}
            coordinate={{
              latitude: userLocation.lat,
              longitude: userLocation.long,
            }}
            pinColor="blue"
            title="You are here"
          ></Marker>
        )}

        <Marker
          style={{ width: 60, height: 40 }}
          coordinate={{
            latitude: nextMarkerLat,
            longitude: nextMarkerLong,
          }}
          pinColor="#B862B0"
          title={nextMarkerTitle}
        ></Marker>
      </MapView.Animated>
    </>
  );
};

export default Map;
function componentWillUnmount() {
  throw new Error('Function not implemented.');
}
