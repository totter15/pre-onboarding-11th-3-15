import axios from 'axios';

export const OWNER = 'facebook';
export const REPO = 'react';
const BASE_URL = 'https://api.github.com/';

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
