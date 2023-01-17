import React, { useContext } from 'react';
import { Modal, Text, View, Pressable, ActivityIndicator } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';
import { Audio } from 'expo-av';
import styles from '../assets/styles/styles';

const ModalComponent = () => {
  const { showModal, setShowModal, distance, locationLoaded } =
    useContext(UserLocationContext);

  const distanceOneDec = Math.round(distance * 10) / 10;

  const closeModalEvents = async () => {
    setShowModal(!showModal);

    let player: any = new Audio.Sound();

    await player.loadAsync(require('../assets/tracks/instruction.mp3'), {
      shouldPlay: true,
    });
    await player.setPositionAsync(0);
    await player.playAsync();
  };

  if (!locationLoaded) {
    return (
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>
              <View style={styles.containerColumn}>
                <ActivityIndicator size="large" color="#83F8A4" />
              </View>
            </Text>
            <Text style={styles.modalText}>Hämtar din position ...</Text>
          </View>
        </View>
      </Modal>
    );
  }
  if (locationLoaded) {
    return (
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Du är {distanceOneDec} km från startplatsen. Medans du tar dig dit
              kommer du att få lyssna på en introduktion.
            </Text>
            <Pressable
              style={[styles.button, styles.button]}
              onPress={() => closeModalEvents()}
            >
              <Text style={styles.textButton}>Start instruction</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.button]}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.textButton}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
};

export default ModalComponent;
