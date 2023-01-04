import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-think';

const initialState = {
  favoriteAnimal: 'duck',
};
