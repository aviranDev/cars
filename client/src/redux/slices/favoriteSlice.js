import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: null,
}

export const favoriteSlice = createSlice({
  name: 'length',
  initialState,
  reducers: {
    updated: (state) => {
      const length = localStorage.getItem('favorites');
      state.amount = JSON.parse(length).length
    },
  },
})

export const { updated } = favoriteSlice.actions

export default favoriteSlice.reducer