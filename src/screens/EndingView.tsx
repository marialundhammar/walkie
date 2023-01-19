import React, { useContext } from 'react';
import { SafeAreaView, Text, Image, View, Pressable } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';
import { Audio } from 'expo-av';

const EndingView = ({ navigation }) => {
  const {
    setStoryFinished,
    storyFinished,
    showFinishedModal,
    setShowFinishedModal,
    updateMarker,
  } = useContext(UserLocationContext);

  let player: any = new Audio.Sound();

  const endGame = () => {
    navigation.navigate('HomeView');
    setStoryFinished(false);
    setShowFinishedModal(false);
    updateMarker(55.59422981350562, 13.01321370453578, 'Start Position');
    player.unloadAsync();
  };

  const playExtra = async () => {
    await player.loadAsync(require('../assets/tracks/instruction.mp3'), {
      shouldPlay: true,
    });
    await player.setPositionAsync(0);
    await player.playAsync();
  };

  return (
    <SafeAreaView style={styles.storyContainer}>
      <Text style={styles.h2}>Extramaterial</Text>

      <Image style={styles.image} source={require('../assets/prisonImg.jpg')} />
      <View style={styles.storyContent}>
        <Text style={styles.storyBodyText}>
          Efter att vi spelat in dokumentären hörde den nu dömde mördaren av sig
          och ville ge sin berättelse. Vi åkte till Kumlafängelset där han
          redogjorde för oss vad han ansåg hade hänt.
        </Text>
      </View>
      <View style={styles.storyButtonContainer}>
        <Pressable style={styles.button} onPress={playExtra}>
          <Text style={styles.textButton}>Lyssna</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={endGame}>
          <Text style={styles.textButton}>Avsluta</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EndingView;
