import axios from 'axios';

export const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://reqres.in/api/',
});