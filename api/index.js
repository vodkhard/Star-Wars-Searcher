'use strict';

const routes = require("./routes");

const Hapi = require('@hapi/hapi');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
    routes: {
      cors: true
    }
  });

  routes.forEach(r => server.route(r));

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
