import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // console.log("logging the error", error);
    // alert("An unexpected error occurred.");
    console.log(error);
    toast.error('An unexpected error occurred.');
  }

  return Promise.reject(error);
});

export function getCities() {
  try {
    return axios.get(
      'https://raw.githubusercontent.com/stephn2027/FCCweb/main/myProjects/citySearch/jp.json'
    );
  } catch (error) {
    console.log(error);
  }
}
export function getCars() {
  try {
    return axios.get(
      'https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json'
    );
  } catch (error) {
    console.log(error);
  }
}
