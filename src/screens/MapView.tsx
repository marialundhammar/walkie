import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import Map from '../components/Map';
import { Audio } from 'expo-av';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';

const HomeView = () => {
  let sound = new Audio.Sound();

  sound.loadAsync(require('../assets/sample-3s.mp3'));
  console.log('loaded');

  const playSound = async () => {
    console.log('playing');
    await sound.playAsync();
    await sound.unloadAsync();
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
