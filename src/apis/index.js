import axios from "axios";

const repos = axios.create({
  baseURL: "https://gh-trending-api.herokuapp.com/repositories",
});

const devs = axios.create({
  baseURL: "https://gh-trending-api.herokuapp.com/developers",
});

/**
 * @param  {string} response
 */
const successHandler = (response) => {
  return response;
};

/**
 * @param  {} error
 */
const errorHandler = (error) => {
  return Promise.reject(error);
};

repos.interceptors.response.use(
  (response) => successHandler(response),
  (error) => {
    return errorHandler(error);
  }
);

devs.interceptors.response.use(
  (response) => successHandler(response),
  (error) => {
    return errorHandler(error);
  }
);

export const getTrendingRepoApi = async () => {
  try {
    const response = await repos.get();
    return response;
  } catch (err) {
    throw err;
  }
};

export const getTrendingDevApi = async () => {
  try {
    const response = await devs.get();
    return response;
  } catch (err) {
    throw err;
  }
};
