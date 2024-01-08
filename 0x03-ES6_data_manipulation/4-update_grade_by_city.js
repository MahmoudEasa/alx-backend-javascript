// city: String
// newGrades: Array of “grade” objects

const updateStudentGradeByCity = (listOfStudents, city, newGrades) => (
  listOfStudents.filter((el) => el.location === city)
    .map((el) => {
      const student = el;
      student.grade = 'N/A';
      return newGrades.map((item) => {
        if (student.id === item.studentId) student.grade = item.grade;
        return (student);
      })[0];
    })
);

export default updateStudentGradeByCity;
