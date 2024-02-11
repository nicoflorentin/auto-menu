import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Define una función asincrónica para obtener los datos de la API
export const fetchLogin = createAsyncThunk('login/fetchLogin', async () => {
  const response = await fetch('http://localhost:3001/api/dish/sinjwt');
  // const data = await response.json();
  return { user: '', token: '123' };
});

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: '',
    token: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  reducers: {},
})

export default loginSlice.reducer