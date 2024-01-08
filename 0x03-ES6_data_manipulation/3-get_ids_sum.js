const getStudentIdsSum = (listOfStudents) => (
  listOfStudents.reduce((sumNum, currentNum) => (sumNum + currentNum.id), 0)
);

export default getStudentIdsSum;
