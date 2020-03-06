import axios from 'axios';

export const axiosWithAuthDS = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'https://ds-airbnb.herokuapp.com'
  });
};
