// En tu archivo slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define una función asincrónica para obtener los datos de la API
export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async () => {
  const response = await fetch('http://localhost:3001/api/dish/sinjwt');
  const data = await response.json();
  return data;

});

// Define un slice para manejar el estado relacionado con los datos de la API
export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    loading: false,
    error: null,
    data: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dishesSlice.reducer;