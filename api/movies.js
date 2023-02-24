import client from "./client";

const endpoint = "/starships/";

const getMovies = (pageNumber) => client.get(`${endpoint}/?page=${pageNumber}`);

export default {
  getMovies,
};
