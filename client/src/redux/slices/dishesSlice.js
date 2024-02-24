// En tu archivo slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dishServices from '../../services/dishServices'

// Define una función asincrónica para obtener los datos de la API
export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async (payload) => {
  return await dishServices.getDishes(payload)
});

export const deleteDish = createAsyncThunk('dishes/deleteDish', async (payload) => {
  const { id, token } = payload
  return await dishServices.deleteDish(id, token).then(() => id)

});

export const createDish = createAsyncThunk('dishes/createDish', async (payload) => {
  const { values, token } = payload
  return await dishServices.createDish(values, token)
});

export const editDish = createAsyncThunk('dishes/editDish', async (payload) => {
  const { id, body, token } = payload
  return await dishServices.editDish(id, body, token)
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
      })
      .addCase(createDish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
      .addCase(editDish.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editDish.fulfilled, (state, action) => {
        state.loading = false;
        state.dishes.push(action.payload);
      })
      .addCase(editDish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteDish.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDish.fulfilled, (state, action) => {
        state.loading = false;
        state.dishes = state.dishes.filter(element => element.id !== action.payload)
      })
      .addCase(deleteDish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { clearDishes } = dishesSlice.actions
export default dishesSlice.reducer;