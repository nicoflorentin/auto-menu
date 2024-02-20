// En tu archivo slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dishServices from '../../services/dishServices'

// Define una función asincrónica para obtener los datos de la API
export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async (token) => {
  return await dishServices.getDishes(token)
});

export const createDish = createAsyncThunk('dishes/createDish', async (body, token) => {
  return await dishServices.createDish(body, token)
});

// Define un slice para manejar el estado relacionado con los datos de la API
export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    loading: false,
    error: null,
    dishes: []
  },
  reducers: {
    clearDishes(state) {
      state.dishes = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.loading = false;
        state.dishes = action.payload.data;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createDish.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDish.fulfilled, (state, action) => {
        state.loading = false;
        state.dishes.push(action.payload);
      })
      .addCase(createDish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDishes } = dishesSlice.actions
export default dishesSlice.reducer;