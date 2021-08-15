import {axiosMapInstance} from './services';

export const getLocationDetailsAPI = data =>
  axiosMapInstance.get(
    `?format=json&lat=${data?.latitude}&lon=${data?.longitude}`,
  );
