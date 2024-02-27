const http = require('http');
const fs = require('fs').promises;
let db = null;
if (process.argv.length === 3)
  db = process.argv[2];

const countStudents = (path) => new Promise((resolve, rejects) => {
  fs.readFile(path, 'utf-8').then((d) => {
    const data = d.split('\n').splice(1);
    let dataLen = 0;
    const fieldObj = {};
    if (data) {
      data.forEach((e) => {
        if (e.length) {
          const line = e.split(',');
          const lineLen = line.length;
          dataLen += 1;
          const filed = line[lineLen - 1];
          const firstName = line[0];
          if (filed in fieldObj) {
            fieldObj[filed].data.push(firstName);
            fieldObj[filed].count += 1;
          } else {
            fieldObj[filed] = {
              data: [firstName],
              count: 1,
            };
          }
        }
      });
    }

    let result = `Number of students: ${dataLen}\n`

    for (const field in fieldObj) {
      if (field in fieldObj) {
        const data = fieldObj[field].data.join(', ');
        const fLen = fieldObj[field].count;
        result += `Number of students in ${field}: ${fLen}. List: ${data}\n`;
      }
    }
    resolve(result);
  }).catch(() => {
    rejects(new Error('Cannot load the database'));
  });
});

const app = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/') {
    // Home page route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url.pathname === '/students') {
    // Students page route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let result = `This is the list of our students`;
    countStudents(db).then((data) => {
      result += '\n' + data;
      result = result.slice(0, -1)
      res.end(result);
    }).catch(() => res.end(result));
  } else {
    // Default route for unknown paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
module.exports = app;
