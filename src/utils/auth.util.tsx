import axios, { AxiosRequestConfig } from 'axios';
import jwt from 'jsonwebtoken';

import { REACT_APP_API_URL } from '../config';

export const authenticatedAxios = (path: string, config: AxiosRequestConfig) => {
  let { headers } = config;
  if (!headers) {
    headers = {};
  }
  headers['Authorization'] = `bearer ${window.localStorage.getItem('ses-login-token')}`;
  config.headers = headers;
  config.timeout = 3000;
  return axios(`${REACT_APP_API_URL}/${path}`, config);
};

export const decodeToken = (token: string | null) =>
  token ? (jwt.decode(token, { json: true }) as Record<string, any>) : { user: null };
