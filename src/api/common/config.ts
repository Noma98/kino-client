import {AxiosRequestConfig} from 'axios';

export const SERVER_TEST = 'http://34.168.112.175:8080';
export const SERVER_PROD = '';

export const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: SERVER_TEST,
  responseType: 'json',
};
