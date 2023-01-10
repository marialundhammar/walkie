import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StoriesView = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(138,165,178,0.8)', 'transparent']}
        style={styles.container}
      >
        <Text style={styles.h2}>Mysteriet på Värnhem</Text>
        <Image
          style={styles.image}
          source={require('../assets/banner-story.jpg')}
        />
        <Text style={styles.text}>5 km 1,5 timme</Text>
        <Text style={styles.bodyText}>
          Fusce id convallis libero, id viverra ligula. Mauris sit amet viverra
          mi. Donec egestas leo ante, quis sodales eros gravida veloecenas quis
          velit non urna ornare interdum. Nunc a metus tempor sem blandit faucib
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MapView')}
        >
          <Text style={styles.textButton}>Start</Text>
        </Pressable>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30,30,30)',
  },

  h2: {
    color: 'white',
    fontSize: 32,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    margin: 16,
    marginTop: 64,
  },
  text: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    margin: 16,
  },

  textButton: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    margin: 16,
  },

  bodyText: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 0.25,
    margin: 16,
  },

  button: {
    backgroundColor: '#83F8A4',
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 16,
    margin: 64,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 16,
    width: 360,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StoriesView;
