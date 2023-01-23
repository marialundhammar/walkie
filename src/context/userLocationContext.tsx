import { createContext, useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { LocationContextType } from '../types/types';

export const UserLocationContext = createContext<LocationContextType>(null);

let userLocationArrayLat: number[];
let userLocationArrayLong: number[];
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

  return 12742 * Math.asin(Math.sqrt(a));
};

const UserLocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState({ lat: 0, long: 0 });
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [storyFinished, setStoryFinished] = useState(false);
  const [showFinishedModal, setShowFinishedModal] = useState(false);
  const [navigateToHome, setNavigateToHome] = useState(false);
  const [showFakeButtons, setShowFakeButtons] = useState(false);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const [nextMarkerLat, setNextMarkerLat] = useState<number>(55.59435538950568);
  const [nextMarkerLong, setNextMarkerLong] =
    useState<number>(13.013241100411376);
  const [nextMarkerTitle, setNextMarkerTitle] = useState<string>('Del 1');
  userLocationArrayLat = [55.59338, 55.59265, 55.5942];
  userLocationArrayLong = [13.01635, 13.01743, 13.01213];
  const [isPlayingIntro, setIsPlayingIntro] = useState<boolean>(false);

  const updateUserLocation = async (lat: any, long: any) => {
    setUserLocation({
      lat: lat,
      long: long,
    });
  };

  distance = calculateDistance(
    userLocation.lat,
    userLocation.long,
    nextMarkerLat,
    nextMarkerLong
  );

  let sound: any = new Audio.Sound();
  const playAlertSound = async () => {
    await sound.loadAsync(require('../assets/tracks/alert.mp3'));
    await sound.setVolumeAsync(0.2);
    await sound.setPositionAsync(0);
    await sound.playAsync();
  };

  useEffect(() => {
    if (distance < 0.05) {
      playAlertSound();
      setShowAudioPlayer(true);
    } else {
      setShowAudioPlayer(false);
    }
  }, [distance]);

  const updateMarker = async (lat: number, long: number, title: string) => {
    setNextMarkerLat(lat);
    setNextMarkerLong(long);
    setNextMarkerTitle(title);
  };

  return (
    <UserLocationContext.Provider
      value={{
        updateUserLocation,
        userLocation,
        nextMarkerLat,
        nextMarkerLong,
        nextMarkerTitle,
        distance,
        showAudioPlayer,
        showFakeButtons,
        setShowFakeButtons,
        setShowAudioPlayer,
        updateMarker,
        setShowModal,
        setLocationLoaded,
        showModal,
        locationLoaded,
        setStoryFinished,
        storyFinished,
        showFinishedModal,
        navigateToHome,
        isPlayingIntro,
        setShowFinishedModal,
        setNavigateToHome,
        setIsPlayingIntro,
      }}
    >
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
