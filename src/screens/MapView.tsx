import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import Map from '../components/Map';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

const HomeView = () => {
  const playSound = async () => {
    console.log('clicked');

    const { sound: playbackObject } = await Audio.Sound.createAsync(
      require('../assets/sample-3s.mp3'),
      { shouldPlay: true }
    );

    console.log(playbackObject);
    await playbackObject.playAsync;
    console.log('playing');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>MapView</Text>
      <Button title="Play Sound" onPress={playSound} />
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeView;
