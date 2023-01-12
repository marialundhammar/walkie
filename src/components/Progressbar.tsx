import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const ProgressBar = (duration) => {
  console.log('this is duration', duration);
  const barWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: 100,
      //duration here
      duration: 5000,
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
  },

  progressBar: {
    height: 30,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
});

export default ProgressBar;
