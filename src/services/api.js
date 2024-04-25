import axios from 'axios';

const advertsEndpoint = axios.create({
  baseURL: 'https://6620469c3bf790e070af731f.mockapi.io/api/',
});

export const fetchAdverts = async () => {
  const { data } = await advertsEndpoint.get('/general-campers-ingo');
  return data;
};
