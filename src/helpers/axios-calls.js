/* eslint-disable no-unused-vars */
import axios from "axios";

export const getQuote = async () => {
  return await axios.get("http://localhost:3000/quotes/");
};

export const getAll = async () => {
  return await axios.get("http://localhost:3000/quotes/all");
};

export const getPopular = async () => {
  return await axios.get("http://localhost:3000/quotes/popular");
};

export const getById = async (id) => {
  return await axios.get("http://localhost:3000/quotes/id/" + id);
};

export const getByWords = async (words) => {
    console.log(words);
  return await axios({
    method: "get",
    url: "http://localhost:3000/quotes/words",
    headers: {},
    params: {
      words: words,
    },
  });
};
