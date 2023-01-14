import React, { useContext } from 'react';
import { Alert, Modal, Text, View, Pressable, StyleSheet } from 'react-native';
import { UserLocationContext } from '../context/userLocationContext';

const ModalComponent = () => {
  const { showModal, setShowModal, distance } = useContext(UserLocationContext);
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
            onPress={() => setShowModal(!showModal)}
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
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#83F8A4',
    paddingHorizontal: 32,
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
