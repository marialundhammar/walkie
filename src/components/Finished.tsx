import React, { useContext } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';

const Finished = () => {
  const { showFinishedModal, setShowFinishedModal, setStoryFinished } =
    useContext(UserLocationContext);

  const listenToExtra = () => {
    setStoryFinished(true);
    setShowFinishedModal(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showFinishedModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.h3}>SLUT!</Text>
          <Pressable
            style={[styles.button, styles.button]}
            onPress={() => setShowFinishedModal(false)}
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
