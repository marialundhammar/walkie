import { StyleSheet, SafeAreaView, Text } from 'react-native';
import Map from '../components/Map';
import AudioPlayer from '../components/AudioPlayer';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

const MapView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MapView</Text>
      <AudioPlayer />
      <Provider store={store}>
        <Map />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapView;
