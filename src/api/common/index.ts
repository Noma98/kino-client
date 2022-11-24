import initializeAxios from '@/api/common/setup';
import {axiosRequestConfig} from '@/api/common/config';

export const axiosInstance = initializeAxios(axiosRequestConfig);

const getAxios = async <ResponseType, ParamType>(
  url: string,
  queryParams?: ParamType,
  config?: any,
) =>
  axiosInstance.get<ResponseType>(url, {
    ...(queryParams && {params: queryParams}),
    ...config,
  });

const postAxios = async <ResponseType, BodyType, ParamType>(
  url: string,
  body: BodyType,
  queryParams?: ParamType,
) =>
  axiosInstance.post<ResponseType>(url, body, {
    ...(queryParams && {params: queryParams}),
  });

const putAxios = async <ResponseType, BodyType, ParamType>(
  url: string,
  body: BodyType,
  queryParams?: ParamType,
) =>
  axiosInstance.put<ResponseType>(url, body, {
    ...(queryParams && {params: queryParams}),
  });

const patchAxios = async <ResponseType, BodyType, ParamType>(
  url: string,
  body?: BodyType,
  queryParams?: ParamType,
) =>
  axiosInstance.patch<ResponseType>(url, body, {
    ...(queryParams && {params: queryParams}),
  });

const deleteAxios = async <ResponseType, BodyType, ParamType>(
  url: string,
  body?: BodyType,
  queryParams?: ParamType,
) =>
  axiosInstance.delete<ResponseType>(url, {
    ...(body && {data: body}),
    ...(queryParams && {params: queryParams}),
  });

export default {
  getAxios,
  postAxios,
  putAxios,
  patchAxios,
  deleteAxios,
};
