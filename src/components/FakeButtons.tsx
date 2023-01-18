import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import styles from '../assets/styles/styles';
import { UserLocationContext } from '../context/userLocationContext';

const FakeButtons = () => {
  const { updateUserLocation } = useContext(UserLocationContext);

  const fakeUserLocation1 = () => {
    updateUserLocation(55.59435538950568, 13.013241100411376);
  };

  const fakeUserLocation2 = () => {
    updateUserLocation(55.59551758186783, 13.013496581119055);
  };

  const fakeUserLocation3 = () => {
    updateUserLocation(55.59267028199996, 13.01421795796289);
  };

  const fakeUserLocation4 = () => {
    updateUserLocation(55.59123156110095, 13.016593774734927);
  };

  const fakeUserLocation5 = () => {
    updateUserLocation(55.59312389421599, 13.019219154211706);
  };
  return (
    <View style={styles.fakeButtonContainer}>
      <Button title="Fake UserLocation1" onPress={fakeUserLocation1} />
      <Button title="Fake UserLocation2" onPress={fakeUserLocation2} />
      <Button title="Fake UserLocation3" onPress={fakeUserLocation3} />
      <Button title="Fake UserLocation4" onPress={fakeUserLocation4} />
      <Button title="Fake UserLocation5" onPress={fakeUserLocation5} />
    </View>
  );
};

export default FakeButtons;
