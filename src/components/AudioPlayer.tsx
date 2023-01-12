import { Audio } from 'expo-av';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text, Dimensions } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';
import ProgressBar from './Progressbar';

let nextTrack: number = 1;
let statusDuration: number;
let positionDuration: number;

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const { width } = Dimensions.get('screen');

const AudioPlayer: FC = () => {
  const {
    userLocation,
    showAudioPlayer,
    setShowAudioPlayer,
    updateUserLocationOnce,
    updateMarker,
  } = useContext(UserLocationContext);

  const [status, setStatus] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(5000);

  const player = new Audio.Sound();

  async function playSound() {
    setStatus(!status);

    setIsPlaying(true);

    console.info('this is duration in audioplayer', isPlaying);
    if (nextTrack === 1) {
      try {
        const { status } = await Audio.Sound.createAsync(
          require('./file_example.mp3')
        );

        console.log('before is laoding', status);
        if (status.isLoaded) {
          console.info('AFTER', status.durationMillis);
          statusDuration = status.durationMillis;
          positionDuration = status.positionMillis;

          setDuration(5000);
        } else {
          console.error('track not loaded');
        }

        await player.loadAsync(require('./sample.mp3'), {
          shouldPlay: true,
        });

        await player.setPositionAsync(0);
        await player.playAsync();
      } catch (error) {
        console.log(error);
      }
    }

    if (nextTrack === 2) {
      try {
        await player.loadAsync(require('./sample.mp3'), {
          shouldPlay: true,
        });
        await player.setPositionAsync(0);
        await player.playAsync();
      } catch (error) {
        console.log(error);
      }
    }
    if (nextTrack === 3) {
      console.log('finished');
      nextTrack = 0;
    }
    nextTrack++;
    console.log('next track is', nextTrack);
    await player.unloadAsync();
  }

  const pauseSound = async () => {
    setStatus(false);
    player.stopAsync();
  };

  let title: string = 'Play Sound ▶️';

  if (showAudioPlayer) {
    if (!isPlaying) {
      return (
        <View style={styles.container}>
          <Pressable onPress={playSound}>
            <Text style={styles.textButton}>{title}</Text>
          </Pressable>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ProgressBar duration={duration} />
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#83F8A4',
    height: 200,
    zIndex: 100,
    marginBottom: 20,
  },

  textButton: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    margin: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
});

export default AudioPlayer;
