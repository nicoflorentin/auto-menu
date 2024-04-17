import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { restaurantServices } from 'services/restaurantServices';

// Define una función asincrónica para obtener los datos de la API
export const fetchRestaurantData = createAsyncThunk('restaurant/fetchRestaurantData', async (payload) => {
  const data = await restaurantServices.getRestaurantByName(payload)
  return data
})

export const fetchRestaurantById = createAsyncThunk('restaurant/fetchRestaurantById', async (payload) => {
  const { restaurantId, token } = payload
  const data = await restaurantServices.getRestaurantById(restaurantId, token)
  return data
});

export const editRestaurantById = createAsyncThunk('restaurant/editRestaurantById', async (payload) => {
  const { restaurantId, body, token } = payload
  const data = await restaurantServices.editRestaurant(restaurantId, body, token)
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
      state.data = {}
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
      .addCase(fetchRestaurantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchRestaurantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editRestaurantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editRestaurantById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(editRestaurantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
})

export const { clearData } = restaurantSlice.actions
export default restaurantSlice.reducer