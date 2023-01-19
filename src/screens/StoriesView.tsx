import React from 'react';
import { Pressable, SafeAreaView, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../assets/styles/styles';
import { Feather, FontAwesome } from '@expo/vector-icons';

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
          <View style={styles.containerRow}>
            <FontAwesome name="map-marker" size={24} color="#B862B0" />
            <Text style={styles.storyText}>
              Start: Folkets Park, Möllevången
            </Text>
          </View>
          <View style={styles.containerRow}>
            <Feather name="clock" size={24} color="#B862B0" />
            <Text style={styles.storyText}>Tid: ca 40 minuter </Text>
          </View>

          <Text style={styles.storyBodyText}>
            Mordet i terrariet är en historia i fem delar som utspelar i
            Folketspark. Du kommer få följa med på en ca 1,5 kilometer lång
            vandring genom konstiga sammanträffanden och hemligheter. Se till
            att din mobil är fulladdad och att du har med dig bra hörlurar.
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
