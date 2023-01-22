import React, { useContext } from 'react';
import { Button, Pressable, View, Text } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';

const FakeButtons = () => {
  const { updateUserLocation, setShowFakeButtons } =
    useContext(UserLocationContext);

  const fakeUserLocation1 = () => {
    updateUserLocation(55.59435538950568, 13.013241100411376);
    //setShowFakeButtons(false);
  };

  const fakeUserLocation2 = () => {
    updateUserLocation(55.59551758186783, 13.013496581119055);
    //setShowFakeButtons(false);
  };

  const fakeUserLocation3 = () => {
    updateUserLocation(55.59267028199996, 13.01421795796289);
    //setShowFakeButtons(false);
  };

  const fakeUserLocation4 = () => {
    updateUserLocation(55.59123156110095, 13.016593774734927);
    //setShowFakeButtons(false);
  };

  const fakeUserLocation5 = () => {
    updateUserLocation(55.59312389421599, 13.019219154211706);
    //setShowFakeButtons(false);
  };
  return (
    <View style={styles.fakeButtonContainer}>
      <Pressable style={styles.fakeButtons} onPress={fakeUserLocation1}>
        <Text style={styles.textButtonBorder}>User Location 1</Text>
      </Pressable>
      <Pressable style={styles.fakeButtons} onPress={fakeUserLocation2}>
        <Text style={styles.textButtonBorder}>User Location 2</Text>
      </Pressable>
      <Pressable style={styles.fakeButtons} onPress={fakeUserLocation3}>
        <Text style={styles.textButtonBorder}>User Location 3</Text>
      </Pressable>
      <Pressable style={styles.fakeButtons} onPress={fakeUserLocation4}>
        <Text style={styles.textButtonBorder}>User Location 4</Text>
      </Pressable>
      <Pressable style={styles.fakeButtons} onPress={fakeUserLocation5}>
        <Text style={styles.textButtonBorder}>User Location 5</Text>
      </Pressable>
      {/*     <Text style={styles.fakeButtonText}>
        OBS!! Denna ruta måste hållas öppen för att Fake Mode ska vara aktiverat
      </Text> */}
    </View>
  );
};

export default FakeButtons;
