import fs from 'fs';

async function readDatabase(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');
    const studentsPerField = {};

    for (const line of lines) {
      const [firstname, , , field] = line.split(',').map((item) => item.trim());

      if (!studentsPerField[field]) {
        studentsPerField[field] = [];
      }

      studentsPerField[field].push(firstname);
    }

    return studentsPerField;
  } catch (error) {
    throw new Error('Cannot read the database');
  }
}

export default readDatabase;
