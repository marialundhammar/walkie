import React, { useEffect } from 'react';
import { Animated, View, Text } from 'react-native';
import styles from '../assets/styles/styles';

const ProgressBar = (duration) => {
  const barWidth = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: 240,
      duration: duration.duration,
      useNativeDriver: false,
    }).start();
  });

  const getDuration = (duration) => {
    let time: number = duration / 1000;
  };

  getDuration(duration.duration);

  return (
    <View style={styles.barContainer}>
      <Text>{duration.duration}</Text>
      <Animated.View style={[styles.progressBar, { width: barWidth }]} />
    </View>
  );
};

export default ProgressBar;
