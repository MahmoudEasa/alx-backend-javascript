const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  try {
    const file_content = fs.readFileSync(path, 'utf-8');
    let data = null;
    if (file_content.length) data = file_content.split('\n').splice(1);
    let data_len = 0
    const field_obj = {};
    if (data) {
      data.forEach((e) => {
        const line = e.split(',');
        const line_len = line.length;
        if (line_len > 0) {
          data_len++;
          const filed = line[line_len - 1];
          const first_name = line[0];
          if (filed in field_obj) {
            field_obj[filed].data.push(first_name);
            field_obj[filed].count++;
          }
          else field_obj[filed] = {
            data: [first_name],
            count: 1
          };
        }
      })
  
      console.log(`Number of students: ${data_len}`);
      for (field in field_obj) {
        const data = field_obj[field].data.join(', ');
        const f_len = field_obj[field].count;
        console.log(`Number of students in ${field}: ${f_len}. List: ${data}`);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = countStudents;