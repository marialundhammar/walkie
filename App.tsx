import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './src/screens/HomeView';
import MapView from './src/screens/MapView';
import EndingView from './src/screens/EndingView';
import StoriesView from './src/screens/StoriesView';
import { MyStackParamList } from './src/types/types';
import UserLocationProvider from './src/context/userLocationContext';

const Stack = createNativeStackNavigator<MyStackParamList>();

export default function App() {
  return (
    <UserLocationProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen name="MapView" component={MapView} />
          <Stack.Screen name="StoriesView" component={StoriesView} />
          <Stack.Screen name="EndingView" component={EndingView} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserLocationProvider>
  );
}
