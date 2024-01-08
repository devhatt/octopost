import axios from 'axios';

export const fetchModules = axios.create({
  baseURL: 'http://localhost:3000',
});
