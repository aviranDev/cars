import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counterSlice';
import modelsReducer from '../slices/modelSlice';
import favoritesReducer from '../slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    models: modelsReducer,
    counter: counterSlice,
    favorites: favoritesReducer
  },
});