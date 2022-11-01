import axios from 'axios';

const requestApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    dataType: 'json',
    'Content-Type': import.meta.env.VITE_APP_TYPE,
    'X-Requested-With': import.meta.env.VITE_APP_REQUEST,
  },
});

export default requestApi;
