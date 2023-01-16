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
import styles from '../assets/styles/styles';

const StoriesView = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.storyContainer}>
      <LinearGradient
        colors={['rgba(138,165,178,0.8)', 'transparent']}
        style={styles.storyContainer}
      >
        <Text style={styles.h2}>
          Mysteriet i Terrariet, Folkets Park, Malmö
        </Text>
        <Image
          style={styles.image}
          source={require('../assets/banner-story.jpg')}
        />
        <View style={styles.storyContent}>
          <Text style={styles.storyText}>2 km, 40 minuter</Text>
          <Text style={styles.storyBodyText}>
            Mordet i terrariet är en historia i fem delar som utspelar i
            Folketspark. Du kommer få följa med på en ca 2 kilometer lång
            vandring genom konstiga sammanträffanden och hemligheter. Se till
            att din mobil är fulladdad och att du har med dig bra hörlurar. Ta
            dig till startplatsen och följ sedan instruktionerna i mobilen och i
            hörlurarna.
          </Text>
          <Text style={styles.storyBodyText}>
            Ta dig till startplatsen och följ sedan instruktionerna i mobilen
            och i hörlurarna.
          </Text>
        </View>

        <View style={styles.storyButtonContainer}>
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

export default StoriesView;
