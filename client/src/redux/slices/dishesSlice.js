// En tu archivo slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dishServices from '../../services/dishServices'

// Define una función asincrónica para obtener los datos de la API
export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async (payload) => {
  const { token, filters } = payload
  return await dishServices.getDishes(token, filters)
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
  const { id, values, token } = payload
  return await dishServices.editDish(id, values, token)
});

export const archiveDish = createAsyncThunk('dishes/archiveDish', async (payload) => {
  const { dish, token } = payload
  return await dishServices.archiveDish(dish, token)
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
    clearError(state) {
      state.error = null
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
        state.dishes = action.payload.data
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
        state.dishes.push(action.payload.data)
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
        // state.dishes = state.dishes.filter(element => element.id !== action.payload.data.id)
        // state.dishes.push(action.payload.data);
      })
      .addCase(editDish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(archiveDish.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(archiveDish.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload) // aca esta el nuevo elemento con el archived modificado

        state.dishes = state.dishes.filter(element => element.id !== action.payload.data.id)
        state.dishes.push(action.payload.data);
      })
      .addCase(archiveDish.rejected, (state, action) => {
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

export const { clearDishes, clearError } = dishesSlice.actions
export default dishesSlice.reducer;