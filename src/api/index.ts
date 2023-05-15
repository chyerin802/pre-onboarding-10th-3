import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url: string, request?: AxiosRequestConfig<object>) => baseInstance.get(url, request),
  delete: (url: string, request?: AxiosRequestConfig<object>) => baseInstance.delete(url, request),
  post: (url: string, data?: object, config?: AxiosRequestConfig<object> | undefined) =>
    baseInstance.post(url, data, config),
};

export default apiRequest;
