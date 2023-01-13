import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

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

  return (
    <View style={styles.barContainer}>
      <Animated.View style={[styles.progressBar, { width: barWidth }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    width: 300,
  },

  progressBar: {
    height: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    width: 200,
  },
});

export default ProgressBar;