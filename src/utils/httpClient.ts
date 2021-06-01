import axios, { AxiosRequestConfig } from 'axios';

const url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

const getInstance = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: '/',
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  });
};

const httpClient = getInstance({
  baseURL: url,
});

export default httpClient;
