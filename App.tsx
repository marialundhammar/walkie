import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './src/screens/HomeView';
import MapView from './src/screens/MapView';
import EndingView from './src/screens/EndingView';
import StoriesView from './src/screens/StoriesView';
import { MyStackParamList } from './src/types/types';
import UserLocationProvider from './src/context/userLocationContext';
import { Animated } from 'react-native';

const Stack = createNativeStackNavigator<MyStackParamList>();

const fadeIn = {
  type: 'fade',
  duration: 500,
};

export default function App() {
  return (
    <UserLocationProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="HomeView"
            component={HomeView}
            options={{
              animation: 'fade',
            }}
          />
          <Stack.Screen
            name="MapView"
            component={MapView}
            options={{
              animation: 'fade',
            }}
          />
          <Stack.Screen
            name="StoriesView"
            component={StoriesView}
            options={{
              animation: 'fade',
            }}
          />
          <Stack.Screen
            name="EndingView"
            component={EndingView}
            options={{
              animation: 'fade',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserLocationProvider>
  );
}
