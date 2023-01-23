import React, { useContext, useEffect } from 'react';
import { Animated, View, Text, Modal, Pressable } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';
import * as Animatable from 'react-native-animatable';

const PlayingIntroModal = () => {
  return (
    <View style={styles.introModal}>
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.storyText}
      >
        Spelar introduktion..
      </Animatable.Text>

      <Text style={styles.modalText}>
        Om du inte hör något - se till att Tyst Läge är avstängt
      </Text>
    </View>
  );
};

export default PlayingIntroModal;
