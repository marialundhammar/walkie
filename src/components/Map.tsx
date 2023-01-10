import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';
import { UserLocationContext } from '../context/userLocationContext';

const Map = () => {
  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const { updateUserLocation, userLocation, nextMarkerLat, nextMarkerLong } =
    useContext(UserLocationContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const getLocation = await Location.getCurrentPositionAsync({});

      await setLocation(getLocation);

      updateUserLocation(location.coords.latitude, location.coords.longitude);
    })();
  }, [location]);

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: nextMarkerLat,
          longitude: nextMarkerLong,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
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
          title="nr 1"
        ></Marker>
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9E9E9E',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#BDBDBD',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1B1B1B',
      },
    ],
  },
  {
    featureType: 'road',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2C2C2C',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8A8A8A',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3C3C3C',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4E4E4E',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3D3D3D',
      },
    ],
  },
];

export default Map;
