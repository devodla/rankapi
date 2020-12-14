const axios = require('axios');

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character',
});

exports.api = api;
