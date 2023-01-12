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

  const fakeUserLocation1 = () => {
    updateUserLocation(55.5942, 13.013);
  };

  const fakeUserLocation2 = () => {
    updateUserLocation(55.59338, 13.01635);
  };

  /*   <TextInput
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
 */

  return (
    <SafeAreaView style={styles.container}>
      <Text>MapView</Text>
      <AudioPlayer />

      <Button title="Fake UserLocation1" onPress={fakeUserLocation1} />
      <Button title="Fake UserLocation2" onPress={fakeUserLocation2} />

      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30,30,30)',
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
