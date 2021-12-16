import axios from "axios";

const instance = axios.create({
  baseURL: "/",
});

/* -------------------- Handle Success and Error from Endpoints ------------------*/
const successHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => {
    return errorHandler(error);
  }
);
/* -------------------- End of Success and Error handling ----------------*/

export const getTrendingRepoApi = async () => {
  try {
    const url = "/repositories";
    const response = await instance.get(url);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getTrendingDevApi = async () => {
  try {
    const url = "/developers";
    const response = await instance.get(url);
    return response;
  } catch (err) {
    throw err;
  }
};
