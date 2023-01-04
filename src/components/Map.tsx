import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect, FC } from 'react';
import * as Location from 'expo-location';
import { firebase } from '../firebase/config';

let text: string;
let userLat: number;
let userLong: number;
let locationType: any = null;
let errorMsgType: string;
let distance: number;
let distanceCalcType: number;

const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  var p = 0.017453292519943295;
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a));
};

const Map = () => {
  const [location, setLocation] = useState(locationType);
  const [errorMsg, setErrorMsg] = useState(errorMsgType);
  const [distanceCalc, setDistanceCalc] = useState(distanceCalcType);

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

  if (location) {
    userLat = location.coords.latitude;
    userLong = location.coords.longitude;
    console.log('location:', userLat, userLong);
    text = JSON.stringify(location);
  }

  useEffect(() => {
    distance = calculateDistance(
      userLat,
      userLong,
      55.59374928440743,
      13.010533057676913
    );
    console.log('fågelväg', distance);
    if (distance < 0.2) {
      console.log('miiiiindre');
    } else {
      console.log('bigger');
    }
  }, [userLat]);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={mapStyle}
      initialRegion={{
        latitude: 55.593749,
        longitude: 13.010533,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      }}
    >
      <Marker
        style={{ width: 60, height: 40 }}
        coordinate={{
          latitude: userLat,
          longitude: userLong,
        }}
        pinColor="blue"
        title="You are here"
      ></Marker>

      <Marker
        style={{ width: 60, height: 40 }}
        coordinate={{
          latitude: 55.59374928440743,
          longitude: 13.010533057676913,
        }}
        title="nr 1"
      ></Marker>

      <Marker
        style={{ width: 60, height: 40 }}
        coordinate={{
          latitude: 55.59583469595808,
          longitude: 13.01491042255252,
        }}
        title="nr 2"
      ></Marker>
    </MapView>
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
