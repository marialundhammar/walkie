import { Audio } from 'expo-av';
import styles from '../assets/styles/styles';
import React, { FC, useContext, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';
import ProgressBar from './Progressbar';
import Finished from './Finished';

let nextTrack: number = 1;
let statusDuration: number;
let i: number = 0;

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const AudioPlayer: FC = () => {
  const { showAudioPlayer, setShowAudioPlayer, updateMarker } =
    useContext(UserLocationContext);
  const [status, setStatus] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isWalking, setIsWalking] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const nextMarkerArrayLat: number[] = [
    55.59547471790409, 55.59267028199996, 55.59126244128724, 55.59312389421599,
  ];
  const nextMarkerArrayLong: number[] = [
    13.013606794480863, 13.01421795796289, 13.016510198197121,
    13.019219154211706,
  ];

  const [storyFinised, setStoryFinished] = useState<boolean>(false);

  const player = new Audio.Sound();

  const playLoadedSound = async () => {
    await player.setPositionAsync(0);
    await player.playAsync();
  };

  const handlePlaySound = async () => {
    setStatus(!status);
    setIsPlaying(true);
    console.log('playing');
    if (nextTrack === 1) {
      try {
        const { status } = await Audio.Sound.createAsync(
          require('../assets/tracks/track-1.mp3')
        );
        if (status.isLoaded) {
          statusDuration = status.durationMillis;
          setDuration(statusDuration);
        } else {
          console.error('track not loaded');
        }

        await player.loadAsync(require('../assets/tracks/track-1.mp3'), {
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
          require('../assets/tracks/track-2.mp3')
        );

        if (status.isLoaded) {
          statusDuration = status.durationMillis;
          setDuration(statusDuration);
        } else {
          console.error('track not loaded');
        }
        await player.loadAsync(require('../assets/tracks/track-2.mp3'), {
          shouldPlay: true,
        });
        playLoadedSound();
      } catch (error) {
        console.log(error);
      }
    }
    if (nextTrack === 3) {
      try {
        const { status } = await Audio.Sound.createAsync(
          require('../assets/tracks/track-3.mp3')
        );

        if (status.isLoaded) {
          statusDuration = status.durationMillis;
          setDuration(statusDuration);
        } else {
          console.error('track not loaded');
        }
        await player.loadAsync(require('../assets/tracks/track-3.mp3'), {
          shouldPlay: true,
        });
        playLoadedSound();
      } catch (error) {
        console.log(error);
      }
    }
    if (nextTrack === 4) {
      try {
        const { status } = await Audio.Sound.createAsync(
          require('../assets/tracks/track-4.mp3')
        );

        if (status.isLoaded) {
          statusDuration = status.durationMillis;
          setDuration(statusDuration);
        } else {
          console.error('track not loaded');
        }
        await player.loadAsync(require('../assets/tracks/track-4.mp3'), {
          shouldPlay: true,
        });
        playLoadedSound();
      } catch (error) {
        console.log(error);
      }
    }
    if (nextTrack === 5) {
      try {
        const { status } = await Audio.Sound.createAsync(
          require('../assets/tracks/track-5.mp3')
        );

        if (status.isLoaded) {
          statusDuration = status.durationMillis;
          setDuration(statusDuration);
        } else {
          console.error('track not loaded');
        }
        await player.loadAsync(require('../assets/tracks/track-5.mp3'), {
          shouldPlay: true,
        });
        await playLoadedSound();
        await delay(duration);
        setStoryFinished(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const replaySound = async () => {
    console.log('halloj');
    await player.setPositionAsync(0);
    await player.playAsync();
  };

  const goNextTrack = async () => {
    console.log('next track is', nextTrack);
    nextTrack++;
    setIsPlaying(false);
    await player.unloadAsync();
    setShowAudioPlayer(false);
    updateMarker(
      nextMarkerArrayLat[i],
      nextMarkerArrayLong[i],
      `Track ${nextTrack}`
    );
    i++;
    setIsWalking(true);
  };

  if (showAudioPlayer) {
    if (!isPlaying) {
      return (
        <View style={styles.container}>
          <Pressable
            style={styles.button}
            disabled={isPlaying}
            onPress={handlePlaySound}
          >
            <Text style={styles.textButton}>Play Sound</Text>
          </Pressable>
        </View>
      );
    }
    if (storyFinised) {
      return <Finished />;
    } else {
      return (
        <View style={styles.container}>
          <ProgressBar duration={duration} />
          <View>
            <Pressable style={styles.button} onPress={replaySound}>
              <Text style={styles.textButton}>Replay</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goNextTrack}>
              <Text style={styles.textButton}>Next</Text>
            </Pressable>
          </View>
        </View>
      );
    }
  }
};

export default AudioPlayer;
