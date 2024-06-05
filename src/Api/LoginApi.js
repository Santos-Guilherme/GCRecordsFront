import axios from 'axios';
import { API_ADDRESS } from './constant';

export async function buscarLogin(login) {
  const response = await axios.post(`${API_ADDRESS}/login/entrar`, login);
  return response.data;
}

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
