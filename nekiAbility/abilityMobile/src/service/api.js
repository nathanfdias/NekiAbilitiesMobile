import axios from "axios";
import {
  getUserLocalStorage,
  setUserLocalStorage
} from "../context/authProvider/util";

/* This is creating a new instance of axios with the baseURL and headers. */
const instance = axios.create({
  baseURL: "https://neki-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

/* This is adding the access token to the header of the request. */
instance.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    if (user !== null) {
      config.headers["Authorization"] = "Bearer " + user?.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default instance;