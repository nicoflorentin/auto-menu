import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { delay } from '../../utilities/delay';
import { LOCAL_URL } from '../../services/const'

// Define una función asincrónica para obtener los datos de la API
export const fetchLogin = createAsyncThunk('login/fetchLogin', async (loginData) => {
  console.log(loginData)
  const response = await axios.post(`${LOCAL_URL}/api/login`, loginData)
  await delay()
  return response.data
});

export const fetchSignUp = createAsyncThunk('login/fetchSignUp', async (SignUpData) => {
  const response = await axios.post(`${LOCAL_URL}/api/user`, SignUpData)
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
      localStorage.removeItem('user');
    },
    storeUserGlobal(state, action) {
      state.data = action.payload
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
        console.log(action.payload.data);
        localStorage.setItem('user', JSON.stringify(action.payload.data));
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchSignUp.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
})

export const { logOut, storeUserGlobal } = loginSlice.actions
export default loginSlice.reducer