import { Audio } from 'expo-av';
import React, { FC, useContext, useState } from 'react';
import { View, StyleSheet, Pressable, Text, Dimensions } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';
import ProgressBar from './Progressbar';

let nextTrack: number = 1;
let statusDuration: number;
let i: number = 0;

const AudioPlayer: FC = () => {
  const { showAudioPlayer, setShowAudioPlayer, updateMarker } =
    useContext(UserLocationContext);
  const [status, setStatus] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const nextMarkerArrayLat: number[] = [55.59338, 55.59265, 55.594414555409784];
  const nextMarkerArrayLong: number[] = [
    13.01635, 13.01743, 13.013334916142806,
  ];

  const player = new Audio.Sound();

  const playLoadedSound = async () => {
    await player.setPositionAsync(0);
    await player.playAsync();
  };

  const playSound = async () => {
    setStatus(!status);
    setIsPlaying(true);
    if (nextTrack === 1) {
      try {
        const { status } = await Audio.Sound.createAsync(
          require('../assets/sample.mp3')
        );
        if (status.isLoaded) {
          statusDuration = status.durationMillis;
          setDuration(statusDuration);
        } else {
          console.error('track not loaded');
        }

        await player.loadAsync(require('../assets/sample.mp3'), {
          shouldPlay: true,
        });

        playLoadedSound();
      } catch (error) {
        console.log(error);
      }
    }

    if (nextTrack === 2) {
      try {
        const { status } = await Audio.Sound.createAsync(
          require('../assets/file_example.mp3')
        );

        if (status.isLoaded) {
          statusDuration = status.durationMillis;
          setDuration(statusDuration);
        } else {
          console.error('track not loaded');
        }
        await player.loadAsync(require('../assets/file_example.mp3'), {
          shouldPlay: true,
        });
        playLoadedSound();
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
  };

  const replay = async () => {
    setIsPlaying(false);
    await player.playAsync();
  };

  const goNextTrack = async () => {
    setIsPlaying(false);
    await player.unloadAsync();
    setShowAudioPlayer(false);
    updateMarker(
      nextMarkerArrayLat[i],
      nextMarkerArrayLong[i],
      `Track ${nextTrack}`
    );
    i++;
  };

  let titlePlay: string = 'Play Sound';
  let titleReplay: string = 'Replay';
  let titleNext: string = 'Next';

  if (showAudioPlayer) {
    if (!isPlaying) {
      return (
        <View style={styles.container}>
          <Pressable style={styles.button} onPress={playSound}>
            <Text style={styles.textButton}>{titlePlay}</Text>
          </Pressable>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ProgressBar duration={duration} />
          <View>
            <Pressable style={styles.button} onPress={replay}>
              <Text style={styles.textButton}>{titleReplay}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goNextTrack}>
              <Text style={styles.textButton}>{titleNext}</Text>
            </Pressable>
          </View>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 100,
    zIndex: 100,
    marginBottom: 20,
  },

  button: {
    borderRadius: 10,
    backgroundColor: '#83F8A4',
    margin: 8,
    borderWidth: 1,
    borderColor: '#65C37F',
  },

  textButton: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 12,
  },
});

export default AudioPlayer;
