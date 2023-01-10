import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Map from '../components/Map';
import AudioPlayer from '../components/AudioPlayer';
import React, { useContext, useState } from 'react';
import { UserLocationContext } from '../context/userLocationContext';

const MapView = () => {
  const [lat, onChangelat] = useState(null);
  const [long, onChangelong] = useState(null);

  const { updateUserLocation, userLocation } = useContext(UserLocationContext);

  const fakeUserLocation = () => {
    updateUserLocation(55.5942, 13.013);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>MapView</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangelat}
        value={lat}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangelong}
        value={long}
        keyboardType="numeric"
      />

      <Button title="Fake UserLocation" onPress={fakeUserLocation} />

      <AudioPlayer />

      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MapView;
