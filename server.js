const http = require('http');

const PORT = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from pure Node.js on port 4000!\n');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
