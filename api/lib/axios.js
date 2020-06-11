const axios = require('axios')

const baseAxios = axios.create({
  baseURL: 'https://swapi.dev/api'
})

module.exports = baseAxios;
