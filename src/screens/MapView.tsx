import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import Map from '../components/Map';

export default function HomeView({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MapView</Text>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
