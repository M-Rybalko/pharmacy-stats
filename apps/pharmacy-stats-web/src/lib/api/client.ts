import axios from 'axios';

const baseURL = 'http://localhost:4455';
export const client = axios.create({baseURL});
