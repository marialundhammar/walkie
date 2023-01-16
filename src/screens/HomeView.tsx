import { StyleSheet, SafeAreaView, Text, Pressable, Image } from 'react-native';

export default function HomeView({ navigation }) {
  const title = `Let's start`;

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../assets/loga.png')} />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('StoriesView')}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#83F8A4',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 32,
  },

  image: {
    marginBottom: 32,
  },
});
