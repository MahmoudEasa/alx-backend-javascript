const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let result = 'This is the list of our students';
        for (const field in data) {
          if (field in data) {
            const sortedData = data[field].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
            const nameLen = sortedData.length;
            const names = sortedData.join(', ');
            result += `\nNumber of students in ${field}: ${nameLen}. List: ${names}`;
          }
        }
        response.status(200).send(result);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if ((major !== 'CS') || (major !== 'SWE')) response.status(500).send('Major parameter must be CS or SWE');

    readDatabase(process.argv[2])
      .then((data) => {
        const names = data[major].join(', ');
        response.status(200).send(`List: ${names}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
module.exports = StudentsController;
