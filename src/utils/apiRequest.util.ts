import axios, { AxiosRequestConfig } from 'axios';
import config from '../config/config';
import queryClient from '../config/queryClient.config';

export default async function apiRequest(
  endpoint: string,
  method = 'get',
  data: any = {},
  headers: any = {}
) {
  const url = `${config.base_url}/${endpoint}`;

  const token = localStorage.getItem('token');

  if (token) {
    headers['Authorization'] = token;
  }

  const request: AxiosRequestConfig = {
    method,
    url,
    headers
  };

  if (method.toLocaleLowerCase() === 'get') {
    request.params = data;
  } else if (
    method.toLocaleLowerCase() === 'post' ||
    method.toLocaleLowerCase() === 'put'
  ) {
    request.data = data;
  }

  return axios(request)
    .then((response) => response.data)
    .catch((error) => {
      if (error?.response?.status === 401) {
        queryClient.setQueryData(['@user'], {});
      }
      throw error;
    });
}
