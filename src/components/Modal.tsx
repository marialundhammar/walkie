import React, { useContext } from 'react';
import { Alert, Modal, Text, View, Pressable, StyleSheet } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';
import { Audio } from 'expo-av';

const ModalComponent = () => {
  const { showModal, setShowModal, distance } = useContext(UserLocationContext);

  const closeModalEvents = async () => {
    setShowModal(!showModal);

    const player = new Audio.Sound();

    await player.loadAsync(require('../assets/instruction.mp3'), {
      shouldPlay: true,
    });

    await player.setPositionAsync(0);
    await player.playAsync();

    console.log('after');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setShowModal(!showModal);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Du är {distance} km från startplatsen. Medans du tar dig dit kommer
            du att få lyssna på en introduktion.
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => closeModalEvents()}
          >
            <Text style={styles.textStyle}>Sätt igång introduktionen</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    height: 200,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#83F8A4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 2,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalComponent;
