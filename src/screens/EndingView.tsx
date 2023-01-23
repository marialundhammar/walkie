import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, Image, View, Pressable } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';
import { Audio } from 'expo-av';
import * as Animatable from 'react-native-animatable';

let sound = new Audio.Sound();
const EndingView = ({ navigation }) => {
  const {
    setStoryFinished,
    storyFinished,
    showFinishedModal,
    setShowFinishedModal,
    updateMarker,
  } = useContext(UserLocationContext);

  const [isCalling, setIsCalling] = useState(false);

  const endGame = async () => {
    navigation.navigate('HomeView');
    setStoryFinished(false);
    setShowFinishedModal(false);
    updateMarker(55.59422981350562, 13.01321370453578, 'Start Position');

    await sound.unloadAsync();
  };

  const playExtra = async () => {
    await sound.loadAsync(require('../assets/tracks/extramaterial.mp3'), {
      shouldPlay: true,
    });
    await sound.setPositionAsync(0);
    await sound.playAsync();
    setIsCalling(true);
  };

  return (
    <SafeAreaView style={styles.storyContainer}>
      <Text style={styles.h2}>Extramaterial</Text>

      <Image style={styles.image} source={require('../assets/prisonImg.jpg')} />
      <View style={styles.storyContent}>
        <Text style={styles.endingBodyText}>
          För att försöka förstå hur man kan göra något sådant som den
          misstänkte mannen kunde göra bestämde vi oss för att slå honom en
          signal. Han hade då suttit ett år på Kumla, Sveriges högriskfängelse
        </Text>
      </View>

      {isCalling && (
        <View style={styles.centeredView}>
          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={styles.storyText}
          >
            Ringer upp den dömde mannen ...
          </Animatable.Text>
        </View>
      )}

      <View style={styles.storyButtonContainer}>
        <Pressable style={styles.button} onPress={playExtra}>
          <Text style={styles.textButton}>Lyssna</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={endGame}>
          <Text style={styles.textButton}>Avsluta ljudvandringen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EndingView;
