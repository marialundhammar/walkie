import { createContext, useEffect, useState } from 'react';

export const UserLocationContext = createContext<{
  updateUserLocation: (lat: number, long: number) => void;
  userLocation: { lat: number; long: number };
  nextMarkerLat: number;
  nextMarkerLong: number;
  distance: number;
  showAudioPlayer: boolean;
  updateUserLocationOnce: any;
}>(null);

let userLocationArrayLat: number[];
let userLocationArrayLong: number[];
let nextTrack: number = 1;
let distance: number;

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

  console.log(12742 * Math.asin(Math.sqrt(a)));
  return 12742 * Math.asin(Math.sqrt(a));
};

const UserLocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    long: 0,
  });

  const [showAudioPlayer, setShowAudioPlayer] = useState<boolean>(false);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const [nextMarkerLat, setNextMarkerLat] = useState<number>(55.5942);
  const [nextMarkerLong, setNextMarkerLong] = useState<number>(13.01213);
  userLocationArrayLat = [55.59338, 55.59265, 55.5942];
  userLocationArrayLong = [13.01635, 13.01743, 13.01213];

  const updateUserLocation = async (lat: any, long: any) => {
    /*     for (let i = 0; i < userLocationArrayLat.length; i++) {
      await delay(2000); */
    /*       setUserLocation({
        lat: lat,
        long: long,
      });
    } */
    setUserLocation({
      lat: lat,
      long: long,
    });

    console.log(userLocation);
  };

  const updateUserLocationOnce = async (
    lat: number,
    long: number,
    markerLat: number,
    markerLong: number
  ) => {
    setUserLocation({
      lat: userLocation.lat,
      long: userLocation.long,
    });

    setNextMarkerLat(markerLat);
    setNextMarkerLong(markerLong);
  };

  distance = calculateDistance(
    userLocation.lat,
    userLocation.long,
    nextMarkerLat,
    nextMarkerLong
  );

  useEffect(() => {
    if (distance < 0.15) {
      setShowAudioPlayer(true);
    } else {
      console.log('bigger');
      setShowAudioPlayer(false);
    }
  }, [distance]);

  /*   const updateMarker = async () => {
    await delay(4000);
    setNextMarkerLat(55.59073);
    setNextMarkerLong(13.01482);
  }; */

  return (
    <UserLocationContext.Provider
      value={{
        updateUserLocation,
        userLocation,
        nextMarkerLat,
        nextMarkerLong,
        distance,
        showAudioPlayer,
        updateUserLocationOnce,
      }}
    >
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
