const hapi = require('hapi');

// init Server
const server = new Hapi.Serve();

// Add Connection
server.connection({
  port: 5000,
  host: 'localhost'
});

// Start server
server.start((err) => {
  if (err) {
    throw err:
  }
  console.log(`Server started at: ${server.info.uri}`);
});
