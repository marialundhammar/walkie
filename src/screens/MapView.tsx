import { SafeAreaView, Text, Pressable } from 'react-native';
import Map from '../components/Map/Map.ios';
import AudioPlayer from '../components/AudioPlayer';
import React, { useContext, useEffect } from 'react';
import { UserLocationContext } from '../context/userLocationContext';
import Modal from '../components/Modal';
import styles from '../assets/styles/styles';
import FakeButtons from '../components/FakeButtons';
import Finished from '../components/Finished';
import DistanceBanner from '../components/DistanceBaner';
import PlayingIntro from '../components/PlayingIntro';

const MapView = ({ navigation }) => {
  const {
    setShowModal,
    storyFinished,
    showFinishedModal,
    navigateToHome,
    setShowFakeButtons,
    showFakeButtons,
    locationLoaded,
    isPlayingIntro,
  } = useContext(UserLocationContext);

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

  const fakeButtonMode = () => {
    setShowFakeButtons(!showFakeButtons);
  };

  return (
    <SafeAreaView style={styles.containerMap}>
      {locationLoaded && <DistanceBanner />}
      <Pressable style={styles.buttonFake} onPress={fakeButtonMode}>
        <Text style={styles.textButton}>🥸</Text>
      </Pressable>

      <Modal />
      {isPlayingIntro && <PlayingIntro />}
      {showFinishedModal && <Finished />}

      {showFakeButtons && <FakeButtons />}

      <Map />
      <AudioPlayer />
    </SafeAreaView>
  );
};

export default MapView;
