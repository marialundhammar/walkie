import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './src/screens/HomeView';
import MapView from './src/screens/MapView';
import { MyStackParamList } from './src/types/types';
import { createContext, useState } from 'react';
import UserLocationProvider from './src/context/userLocationContext';

const Stack = createNativeStackNavigator<MyStackParamList>();

export default function App() {
  return (
    <UserLocationProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen name="MapView" component={MapView} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserLocationProvider>
  );
}
