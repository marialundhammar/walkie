import { Audio } from 'expo-av';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';

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

const AudioPlayer: FC = () => {
  const player = new Audio.Sound();
  const [showAudioPlayer, setShowAudioPlayer] = useState<boolean>(false);
  const [text, onChangeText] = useState<string>('Useless Text');

  const { userLocation } = useContext(UserLocationContext);

  useEffect(() => {
    distance = calculateDistance(
      userLocation.lat,
      userLocation.long,
      55.59336365493582,
      13.016401156813284
    );

    console.log('fågelväg', distance);
    if (distance < 0.2) {
      console.log('miiiiindre');
      setShowAudioPlayer(true);
      console.log(showAudioPlayer);
    } else {
      console.log('bigger');
      setShowAudioPlayer(false);
    }
  }, [userLocation]);

  async function onPlay() {
    try {
      await player.loadAsync(require('../assets/sample.mp3'), {
        shouldPlay: false,
      });
      await player.setPositionAsync(0);
      await player.playAsync();
      console.log(' Your sound is playing!', userLocation);
    } catch (error) {
      // An error occurred!
      console.log(error);
    }
  }

  async function unloadSound() {
    await player.stopAsync();
    await player.unloadAsync();
  }

  return (
    showAudioPlayer && (
      <>
        <Button title="Play Sound" onPress={onPlay} />
        <Button title="unload Sound" onPress={unloadSound} />
      </>
    )
  );
};

export default AudioPlayer;
