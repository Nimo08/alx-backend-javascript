// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const fields = lines[0].split(',');
        const counts = {};
        const fieldLists = {};

        for (let i = 1; i < lines.length; i += 1) {
          const values = lines[i].split(',');
          const fieldIndex = fields.indexOf('field');
          const fieldValue = values[fieldIndex];

          if (!counts[fieldValue]) {
            counts[fieldValue] = 0;
            fieldLists[fieldValue] = [];
          }
          counts[fieldValue] += 1;
          fieldLists[fieldValue].push(values[0]);
        }

        console.log(`Number of students: ${lines.length - 1}`);
        Object.keys(counts).forEach((field) => {
          console.log(`Number of students in ${field}: ${counts[field]}. List: ${fieldLists[field].join(', ')}`);
        });

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const hostname = 'localhost';
const port = 1245;

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

module.exports = app;
