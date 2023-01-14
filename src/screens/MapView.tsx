import { StyleSheet, SafeAreaView, Button } from 'react-native';
import Map from '../components/Map';
import AudioPlayer from '../components/AudioPlayer';
import React, { useContext, useEffect } from 'react';
import { UserLocationContext } from '../context/userLocationContext';
import ModalComponent from '../components/Modal';

const MapView = () => {
  const { updateUserLocation, setShowModal, showModal } =
    useContext(UserLocationContext);

  const fakeUserLocation1 = () => {
    updateUserLocation(55.5942, 13.013);
  };

  const fakeUserLocation2 = () => {
    updateUserLocation(55.59338, 13.01635);
  };

  const fakeUserLocation3 = () => {
    updateUserLocation(55.594084960120625, 13.013083680733859);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ModalComponent />
      <Button title="Fake UserLocation1" onPress={fakeUserLocation1} />
      <Button title="Fake UserLocation2" onPress={fakeUserLocation2} />
      <Button title="Fake UserLocation3" onPress={fakeUserLocation3} />

      <Map />
      <AudioPlayer />
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
function setShowModal(arg0: boolean) {
  throw new Error('Function not implemented.');
}
