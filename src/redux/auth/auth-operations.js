import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'services/axious-settings'
import * as userApi from 'services/user-api'

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register', async credentials => {
    try {
      return userApi.registerUser(credentials)
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    return userApi.loginUser(credentials)
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    return userApi.logoutUser()
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      return userApi.fetchCurrentUser()
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
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