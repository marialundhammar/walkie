import React, { useContext } from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';
import { Audio } from 'expo-av';
import styles from '../assets/styles/styles';

const ModalComponent = () => {
  const { showModal, setShowModal, distance } = useContext(UserLocationContext);

  const distanceOneDec = Math.round(distance * 10) / 10;

  const closeModalEvents = async () => {
    setShowModal(!showModal);

    let player: any = new Audio.Sound();

    await player.loadAsync(require('../assets/instruction.mp3'), {
      shouldPlay: true,
    });
    await player.setPositionAsync(0);
    await player.playAsync();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Du är {distanceOneDec} km från startplatsen. Medans du tar dig dit
            kommer du att få lyssna på en introduktion.
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => closeModalEvents()}
          >
            <Text style={styles.textStyle}>Sätt igång introduktionen</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
