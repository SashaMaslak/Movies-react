import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b1ed6db84db5d6eba5aed4dde918fe90';

export const fetchTrendingFilms = async () => {
  const {data:{results}} = await axios.get(`/trending/movie/week?api_key=${API_KEY}&page=1&language=en`);
  return results;
};

export const fetchFilmsByQuery = async (query) => {
  const {data:{results}} = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
  return results;
};

export const fetchFilmsById = async (id) => {
  const {data} = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchCast = async (id) => {
  const {data} = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};
