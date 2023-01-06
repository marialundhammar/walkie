import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userLocationSlice from './userLocationSlice';

const rootReducer = combineReducers({
  userLocation: userLocationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
