import React, { useContext } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';

const Finished = () => {
  const {
    showFinishedModal,
    setShowFinishedModal,
    setStoryFinished,
    setNavigateToHome,
    updateMarker,
  } = useContext(UserLocationContext);

  const listenToExtra = () => {
    setStoryFinished(true);
    setShowFinishedModal(false);
  };

  const closeModal = () => {
    setShowFinishedModal(false);
    setNavigateToHome(true);
    updateMarker(55.59422981350562, 13.01321370453578, 'Start Position');
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showFinishedModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.h3}>SLUT!</Text>
          <Pressable
            style={[styles.button, styles.button]}
            onPress={closeModal}
          >
            <Text style={styles.textButton}>Close</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.button]}
            onPress={listenToExtra}
          >
            <Text style={styles.textButton}>Extramaterial</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Finished;
