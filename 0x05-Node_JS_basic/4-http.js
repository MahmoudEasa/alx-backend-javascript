const http = require('node:http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
