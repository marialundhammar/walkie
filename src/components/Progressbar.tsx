import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import styles from '../assets/styles/styles';

const ProgressBar = (duration) => {
  console.log('this is duration', duration);
  const barWidth = new Animated.Value(0);

  console.log('progressbar', duration.duration);

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: 240,
      duration: duration.duration,
      useNativeDriver: false,
    }).start();
  });

  const getDuration = (duration) => {
    let time: number = duration / 1000;
    console.log(time);
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
