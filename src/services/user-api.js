import axios from 'axios';
import {token} from './axious-settings'

export async function registerUser(userData) {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    return data;
}

export async function loginUser(loginData) {
    const { data } = await axios.post('/users/login', loginData);
    token.set(data.token);
    return data;
}

export async function logoutUser() {
    await axios.post('/users/logout');
    token.unset();
}

export async function fetchCurrentUser() {
    const { data } = await axios.get('/users/current');
      return data;
}