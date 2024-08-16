// plugins/my-plugin/src/utils/httpClient.ts
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://acceleratedmobilepageurl.googleapis.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url: string) => {
  const response = await httpClient.get(url);
  return response.data;
};

export const post = async (url: string, data: any) => {
  const response = await httpClient.post(url, data);
  return response.data;
};