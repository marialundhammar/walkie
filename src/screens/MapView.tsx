import { SafeAreaView, Text, Pressable } from 'react-native';
import Map from '../components/Map';
import AudioPlayer from '../components/AudioPlayer';
import React, { useContext, useEffect, useState } from 'react';
import { UserLocationContext } from '../context/userLocationContext';
import ModalComponent from '../components/Modal';
import styles from '../assets/styles/styles';
import FakeButtons from '../components/FakeButtons';
import Finished from '../components/Finished';

const MapView = ({ navigation }) => {
  const { setShowModal, storyFinished, showFinishedModal, navigateToHome } =
    useContext(UserLocationContext);
  const [showFakeButtons, setShowFakeButtons] = useState<Boolean>(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    if (storyFinished) {
      navigation.navigate('EndingView');
    }
    if (navigateToHome) {
      navigation.navigate('HomeView');
    }
  }, [navigation, storyFinished, navigateToHome]);

  return (
    <SafeAreaView style={styles.containerMap}>
      <Pressable
        style={styles.buttonFake}
        onPress={() => setShowFakeButtons(!showFakeButtons)}
      >
        <Text style={styles.textButton}>🥸</Text>
      </Pressable>

      <ModalComponent />

      {showFinishedModal && <Finished />}

      {showFakeButtons && <FakeButtons />}

      <Map />
      <AudioPlayer />
    </SafeAreaView>
  );
};

export default MapView;
