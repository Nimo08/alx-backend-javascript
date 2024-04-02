// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
