import React, { useContext, useEffect } from 'react';
import { Animated, View, Text } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';
import * as Animatable from 'react-native-animatable';

const DistanceBanner = () => {
  const { distance } = useContext(UserLocationContext);

  const distanceOneDec = Math.round(distance * 1000);

  return (
    <View>
      <Text style={styles.distanceText}>
        ca {distanceOneDec} meter till nästa
      </Text>
    </View>
  );
};

export default DistanceBanner;
