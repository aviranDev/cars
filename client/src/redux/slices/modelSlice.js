import { createSlice } from '@reduxjs/toolkit'

export const modelSlice = createSlice({
  name: 'models',
  initialState: {
    models: [],
    brands: [],
  },
  reducers: {
    getModelsData: (state, action) => {
      state.models = action.payload
    },
    getBrandsData: (state, action) => {
      state.brands = action.payload
    },
  },
})

export const { getBrandsData, getModelsData } = modelSlice.actions

export default modelSlice.reducer