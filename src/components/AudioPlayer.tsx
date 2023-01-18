import { Audio } from 'expo-av';
import styles from '../assets/styles/styles';
import React, { FC, useContext, useEffect, useState } from 'react';
import { View, Pressable, Text, Button } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';
import soundLibrary from './SoundLibrary';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';

let nextTrack: number = 1;
let i: number = 0;

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const AudioPlayer: FC = (navigation) => {
  const {
    showAudioPlayer,
    setShowAudioPlayer,
    updateMarker,
    setStoryFinished,
  } = useContext(UserLocationContext);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<any>(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const nextMarkerArrayLat: number[] = [
    55.59547471790409, 55.59267028199996, 55.59126244128724, 55.59312389421599,
  ];
  const nextMarkerArrayLong: number[] = [
    13.013606794480863, 13.01421795796289, 13.016510198197121,
    13.019219154211706,
  ];

  const [playbackStatus, setPlaybackStatus] = useState<string>('stopped');

  useEffect(() => {
    const audio = new Audio.Sound();
    setSound(audio);
  }, []);

  const playSound = async (track) => {
    let status = await sound.getStatusAsync();

    if (status.isLoaded !== true) {
      try {
        await sound.loadAsync(track);
        setDuration(status.durationMillis);
        await sound.playAsync();
        setPlaybackStatus('playing');
        setIsPlaying(true);
        let interval = setInterval(() => {
          sound.getStatusAsync().then((status) => {
            setPosition(status.positionMillis);
          });
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const resumeAudio = async () => {
    let status = await sound.getStatusAsync();
    try {
      await sound.stopAsync();
      await sound.playAsync();
      setPlaybackStatus('playing');
    } catch (error) {
      console.log(error);
    }
  };

  const pauseAudio = async () => {
    let status = await sound.getStatusAsync();
    if (status.isLoaded !== true) {
      return;
    }
    try {
      await sound.pauseAsync();
      let newStatus = await sound.getStatusAsync();
      if (newStatus.isPlaying === false) {
        setPlaybackStatus('paused');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const replayAudio = async () => {
    let status = await sound.getStatusAsync();
    if (status.isLoaded == !true) {
      return;
    }
    try {
      await sound.stopAsync();
      await sound.playAsync();
      setPlaybackStatus('playing');
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlaySound = async () => {
    console.log('playing');
    if (nextTrack === 1) {
      playSound(soundLibrary.track1);
    }
    if (nextTrack === 2) {
      playSound(soundLibrary.track2);
    }
    if (nextTrack === 3) {
      playSound(soundLibrary.track3);
    }
    if (nextTrack === 4) {
      playSound(soundLibrary.track4);
    }
    if (nextTrack === 5) {
      playSound(soundLibrary.track5);
      console.log(duration);
    }
  };

  const goNextTrack = async () => {
    nextTrack++;
    setIsPlaying(false);
    await sound.unloadAsync();
    setShowAudioPlayer(false);
    updateMarker(
      nextMarkerArrayLat[i],
      nextMarkerArrayLong[i],
      `Track ${nextTrack}`
    );
    i++;
    if (nextTrack === 6) {
      setStoryFinished(true);
    }
  };

  if (showAudioPlayer) {
    if (!isPlaying) {
      return (
        <View style={styles.containerAudio}>
          <Animatable.View animation="bounce" duration={2000}>
            <Pressable
              style={styles.button}
              disabled={isPlaying}
              onPress={handlePlaySound}
            >
              <Text style={styles.textButton}>Play Sound</Text>
            </Pressable>
          </Animatable.View>
        </View>
      );
    }

    if (isPlaying) {
      return (
        <View style={styles.containerAudio}>
          <Pressable style={styles.buttonBorder} onPress={replayAudio}>
            <MaterialIcons name="replay" size={24} color="#B862B0" />
            <Text style={styles.textButtonBorder}>Replay</Text>
          </Pressable>

          <View>
            {playbackStatus === 'playing' && (
              <Pressable onPress={pauseAudio}>
                <Ionicons style={styles.icons} name="md-pause-circle-outline" />
              </Pressable>
            )}
            {playbackStatus === 'paused' && (
              <Pressable onPress={resumeAudio}>
                <AntDesign name="playcircleo" style={styles.icons} />
              </Pressable>
            )}
          </View>

          <Pressable style={styles.buttonBorder} onPress={goNextTrack}>
            <Feather name="arrow-right" size={24} color="#B862B0" />
            <Text style={styles.textButtonBorder}>Next</Text>
          </Pressable>
        </View>
      );
    }
  }
};

export default AudioPlayer;
