import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const studentsByField = {};

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!studentsByField[field]) studentsByField[field] = [];
      studentsByField[field].push(firstname);
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
module.exports = readDatabase;
