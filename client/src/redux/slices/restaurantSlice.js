import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { restaurantServices } from 'services/restaurantServices';

// Define una función asincrónica para obtener los datos de la API
export const fetchRestaurantData = createAsyncThunk('restaurant/fetchRestaurantData', async (payload) => {
  const data = restaurantServices.getRestaurantByName(payload)
  return data
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
      .addCase(fetchRestaurantData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data[0];
      })
      .addCase(fetchRestaurantData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
})

export const { clearData } = restaurantSlice.actions
export default restaurantSlice.reducer