const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    let data = null;
    if (fileContent.length) data = fileContent.split('\n').splice(1);
    let dataLen = 0;
    const fieldObj = {};
    if (data) {
      data.forEach((e) => {
        const line = e.split(',');
        const lineLen = line.length;
        if (lineLen > 0) {
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

    console.log(`Number of students: ${dataLen}`);
    for (const field in fieldObj) {
      if (field in fieldObj) {
        const data = fieldObj[field].data.join(', ');
        const fLen = fieldObj[field].count;
        console.log(`Number of students in ${field}: ${fLen}. List: ${data}`);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = countStudents;
