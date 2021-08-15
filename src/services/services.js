import axios from 'axios';
import {OPEN_STREET_MAP_BASE_URL} from '../utils/constants/urls';

// axios instance for location
export const axiosMapInstance = axios.create({
  baseURL: OPEN_STREET_MAP_BASE_URL,
  timeout: 2500,
});

const handleRequest = config => config;

const handleError = error => {
  let parsed_error = Object.assign({}, error);
  return Promise.reject(parsed_error);
};

const handleResponse = response => Promise.resolve(response?.data);

axiosMapInstance.interceptors.request.use(handleRequest);
axiosMapInstance.interceptors.response.use(handleResponse, handleError);
