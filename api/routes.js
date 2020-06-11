const api = require("./lib/axios");

const resources = [
  "people",
  "planets",
  "films",
  "species",
  "vehicles",
  "starships",
]

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      const res = await api.get('/');
      return res.data;
    }
  },
  {
    method: 'GET',
    path: '/search',
    handler: async (request, h) => {
      const { q } = request.query
      const results = await Promise.all(resources.map(resource => api.get(`/${resource}/?search=${q}`)));
      return results.map((result, ind) => ({
        resource: resources[ind],
        ...result.data
      }));
    }
  },
  {
    method: 'GET',
    path: '/details',
    handler: async (request, h) => {
      const { uri } = request.query
      const res = await api.get(uri);

      if (res.status === 200) {
        return res.data;
      }
    }
  }
]
