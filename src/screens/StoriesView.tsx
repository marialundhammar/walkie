import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
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
        <View style={styles.content}>
          <Text style={styles.text}>5 km 1,5 timme</Text>
          <Text style={styles.bodyText}>
            Fusce id convallis libero, id viverra ligula. Mauris sit amet
            viverra mi. Donec egestas leo ante, quis sodales eros gravida
            veloecenas quis velit non urna ornare interdum. Nunc a metus tempor
            sem blandit faucib
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('MapView')}
          >
            <Text style={styles.textButton}>Start</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30,30,30)',
  },

  content: {
    flex: 1,
    alignItems: 'flex-start',
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

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textButton: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
  },

  bodyText: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 0.25,
    margin: 16,
  },

  button: {
    backgroundColor: '#83F8A4',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 32,
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
