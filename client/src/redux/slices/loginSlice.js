import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { delay } from '../../utilities/delay';

// Define una función asincrónica para obtener los datos de la API
export const fetchLogin = createAsyncThunk('login/fetchLogin', async (loginData) => {
  const response = await axios.post('http://localhost:3001/api/login', loginData)
  await delay()
  return response.data
});

export const fetchSignUp = createAsyncThunk('login/fetchSignUp', async (SignUpData) => {
  const response = await axios.post('http://localhost:3001/api/user', SignUpData)
  await delay()
  return response.data
});


const initialState = {
  data: { username: '', name: '', token: '' },
  loading: false,
  error: null
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logOut(state) {
      state.data.username = ''
      state.data.name = ''
      state.data.token = ''
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
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
})

export const { logOut } = loginSlice.actions
export default loginSlice.reducer