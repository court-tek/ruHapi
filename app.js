const Hapi = require('hapi');

// Add Connection
const server = Hapi.server({
  port: 8000,
  host: 'localhost'
});

// Home Route
server.route({
  method:'GET',
  path:'/',
  handler: (request, reply) => {
    reply('Hello String');
  }
});
// Start server
const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();
