import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useContext,
  useRef,
} from 'react';
import { SafeAreaView, Text, Pressable, Animated, View } from 'react-native';
import type { ViewStyle } from 'react-native';
import Logo from "../components/Logo";
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

export default function HomeView({ navigation }) {
  const { setNavigateToHome } = useContext(UserLocationContext);

  const FadeInView: FC<FadeInViewProps> = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

    useEffect(() => {
      setNavigateToHome(false);
    });

    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.containerColumn}>
      <FadeInView
        style={{
          marginBottom: 120,
        }}
      >
        <Logo />
      </FadeInView>

      <View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('StoriesView')}
        >
          <Text style={styles.textButton}>Starta</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
