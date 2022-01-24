import axios from 'axios';

// export const API_URL = 'https://share-my-gdrive.herokuapp.com/api';
// export const API_URL = 'http://localhost:8000';
export const API_URL = 'https://infinity-gdrive.space';

const $api = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}/api`,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

export default $api;