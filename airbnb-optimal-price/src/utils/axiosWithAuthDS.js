import axios from "axios";

export const axiosWithAuthDS = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: "" //put path to DS heroku here
  });
};
