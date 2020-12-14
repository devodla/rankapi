const express = require('express');
const axios = require('axios');

const app = express();
const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

app.get('/characters', async (req, res) => {
  const { page } = req.params;
  const { data } = await api.get('/character');
  const dataFormatted = data.results.map(result => {
    const {id, name, status, species, type, gender } = result;
    const LocationName= result.location.name;

    return {id, name, status, species, type, gender, LocationName};
  });

  const dataResponse = dataFormatted.map(r);
  return res.json(dataFormatted);
});

app.listen(3333, () => {
  console.log('Server run in 3333');
});
