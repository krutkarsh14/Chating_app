import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://${window.location.hostname}:5000/api`,
});

// Add interceptor to append JWT token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('chat-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
