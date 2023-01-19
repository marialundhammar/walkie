import React, { useContext, useMemo } from 'react';
import { SafeAreaView, Text, Image, View, Pressable } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';

const EndingView = ({ navigation }) => {
  const {
    setStoryFinished,
    storyFinished,
    showFinishedModal,
    setShowFinishedModal,
  } = useContext(UserLocationContext);

  const EndGame = () => {
    navigation.navigate('HomeView');
    setStoryFinished(false);
    setShowFinishedModal(false);
  };

  return (
    <SafeAreaView style={styles.containerColumn}>
      <Text style={styles.h2}>Extramaterial</Text>
      <Image style={styles.image} source={require('../assets/prisonImg.jpg')} />
      <Text style={styles.storyText}>
        Efter att vi spelat in dokumentären hörde den nu dömde mördaren av sig
        och ville ge sin berättelse
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Lyssna</Text>
      </Pressable>

      <View>
        <Pressable style={styles.button} onPress={EndGame}>
          <Text style={styles.textButton}>Avsluta</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EndingView;
