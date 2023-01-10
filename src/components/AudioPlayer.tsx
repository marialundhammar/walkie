import { Audio } from 'expo-av';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';

let nextTrack: number = 1;

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
const AudioPlayer: FC = () => {
  const player = new Audio.Sound();

  const { userLocation, showAudioPlayer, updateUserLocationOnce } =
    useContext(UserLocationContext);

  async function playSoundAsync() {
    console.log('nextTrack before', nextTrack);

    if (nextTrack === 1) {
      try {
        await player.loadAsync(require('./sample.mp3'), {
          shouldPlay: true,
        });
        await player.setPositionAsync(0);
        await player.playAsync();
        await delay(4000);
        //await updateUserLocationOnce(55.59338, 13.01635, 55.59238, 13.01091);
      } catch (error) {
        // An error occurred!
        console.log(error);
      }
    }
    if (nextTrack === 2) {
      unloadSound();
      try {
        await player.loadAsync(require('./file_example.mp3'), {
          shouldPlay: true,
        });
        await player.setPositionAsync(0);
        await player.playAsync();
        await delay(4000);
        //await updateUserLocationOnce(55.59187, 13.01528, 55.59145, 13.01266);
      } catch (error) {
        // An error occurred!
        console.log(error);
      }
    }
    if (nextTrack === 3) {
      console.log('finished');
      nextTrack = 0;
    }

    nextTrack++;
    console.log('next track is', nextTrack);
  }

  const unloadSound = async () => {
    await player.unloadAsync();
  };

  return (
    showAudioPlayer && (
      <>
        <Button title="Play Sound" onPress={playSoundAsync} />
      </>
    )
  );
};

export default AudioPlayer;
