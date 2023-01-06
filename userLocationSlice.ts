import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as Location from 'expo-location';

export interface UserLocationState {
  lat: number;
  long: number;
}

const initalState: UserLocationState = {
  lat: 0,
  long: 0,
};

export const fetchUserLocation = createAsyncThunk<{
  userLatLong: UserLocationState;
}>('fetchUserLocation', async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status == 'granted') {
    const location = await Location.getCurrentPositionAsync({});
    const lat = location.coords.latitude;
    const long = location.coords.longitude;
    return {
      userLatLong: {
        lat: lat,
        long: long,
      },
    };
  } else {
    throw 'Error';
  }
});

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState: initalState,
  reducers: {},
});

export default userLocationSlice.reducer;
