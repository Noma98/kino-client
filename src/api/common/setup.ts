import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from 'axios';
import useStorageToken from '@/hooks/User/useStorageToken';

const onFullfilled = (res: AxiosResponse<any>) => {
  return res;
};
const onRejected = (err: AxiosError<any>) => {
  return Promise.reject(err);
};

const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);
  const {getStorageToken} = useStorageToken();

  axiosInstance.interceptors.request.use(async (existedConfig: any) => {
    const existedUserInfo = await getStorageToken();
    const token = existedUserInfo?.accessToken;

    if (token) {
      existedConfig.headers.Authorization = token;
    }
    return existedConfig;
  });

  axiosInstance.interceptors.response.use(onFullfilled, onRejected);
  return axiosInstance;
};
export default initializeAxios;
