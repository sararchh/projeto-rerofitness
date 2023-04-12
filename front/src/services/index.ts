import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
})

api.interceptors.request.use((config:any) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.authorization = `Bearer ` + token;
  }
  return config;
})

export default api;