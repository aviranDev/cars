import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem('test'))
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      localStorage.setItem('test', JSON.stringify(state.value))

    },
    decrement: (state) => {
      if (state.value < 0) {
        return;
      }
      state.value -= 1
      localStorage.setItem('test', JSON.stringify(state.value))
    },
  },
});

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer