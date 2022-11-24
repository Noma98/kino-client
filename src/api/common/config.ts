import {AxiosRequestConfig} from 'axios';

export const SERVER_TEST = '';
export const SERVER_PROD = '';

export const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: SERVER_TEST,
  responseType: 'json',
};
