import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Define una función asincrónica para obtener los datos de la API
export const fetchRestaurantData = createAsyncThunk('restaurant/fetchRestaurantData', async (payload) => {
  return payload
});


const initialState = {
  data: {},
  loading: false,
  error: null
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    clearData(state) {
      state.data.username = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        localStorage.setItem('user', JSON.stringify(action.payload.data));
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
})

export const { clearData } = loginSlice.actions
export default loginSlice.reducer