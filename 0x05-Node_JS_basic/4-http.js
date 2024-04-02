// Create a small HTTP server using Node's HTTP module
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

const port = 1245;
const hostname = 'localhost';

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

module.exports = app;
