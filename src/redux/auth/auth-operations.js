import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'services/axious-settings'
import * as userApi from 'services/user-api'
import Alert from '@material-ui/Alert'

const register = createAsyncThunk('auth/register', async credentials => {
    try {
      return userApi.registerUser(credentials)
    } catch (error) {
      <Alert severity="error">Ooops! {error.mesage}</Alert>
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    return userApi.loginUser(credentials)
  } catch (error) {
    <Alert severity="error">Ooops! {error.mesage}</Alert>
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    return userApi.logoutUser()
  } catch (error) {
    <Alert severity="error">Ooops! {error.mesage}</Alert>
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      return userApi.fetchCurrentUser()
    } catch (error) {
      <Alert severity="error">Ooops! {error.mesage}</Alert>
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;