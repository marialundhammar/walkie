import React, { useContext, useEffect } from 'react';
import { Animated, View, Text, Modal, Pressable } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';
import * as Animatable from 'react-native-animatable';

const PlayingIntroModal = () => {
  const { setIsPlayingIntro } = useContext(UserLocationContext);

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.storyText}
        >
          Spelar introduktion..
        </Animatable.Text>

        <Text style={styles.modalText}></Text>
      </View>
    </Modal>
  );
};

export default PlayingIntroModal;
