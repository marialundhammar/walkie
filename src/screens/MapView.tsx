import { SafeAreaView, Text, Pressable } from 'react-native';
import Map from '../components/Map';
import AudioPlayer from '../components/AudioPlayer';
import React, { useContext, useEffect, useState } from 'react';
import { UserLocationContext } from '../context/userLocationContext';
import ModalComponent from '../components/Modal';
import styles from '../assets/styles/styles';
import FakeButtons from '../components/FakeButtons';

const MapView = () => {
  const { setShowModal } = useContext(UserLocationContext);
  const [showFakeButtons, setShowFakeButtons] = useState<Boolean>(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <SafeAreaView style={styles.containerMap}>
      <Pressable
        style={styles.button}
        onPress={() => setShowFakeButtons(!showFakeButtons)}
      >
        <Text style={styles.textButton}>Fake Your Locations</Text>
      </Pressable>

      <ModalComponent />

      {showFakeButtons && <FakeButtons />}

      <Map />
      <AudioPlayer />
    </SafeAreaView>
  );
};

export default MapView;
