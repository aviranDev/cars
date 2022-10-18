import { useState, useEffect } from 'react';
import storage from '../tools/storage';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

const useFavorites = () => {
  const [favorites, setFavorites] = useState(storage.get('favorites'));
  const dispatch = useDispatch();

  useEffect(() => {
    storage.set('favorites', favorites);
  });

  const addFavotires = (car) => {
    const findCarInFavorite = favorites.find(val => val._id === car._id);
    if (!findCarInFavorite) {
      setFavorites([car, ...favorites])
      dispatch(increment())
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(favorite => favorite._id !== id));
    dispatch(decrement())
  };

  return { favorites, addFavotires, removeFavorite };
}

export default useFavorites;