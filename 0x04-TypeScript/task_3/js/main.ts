interface printTeacherFunction {
  firstName: string;
  lastName: string;
};

const printTeacher = (...printTeacherFunction): string => {
  return (`${printTeacherFunction[0][0]}. ${printTeacherFunction[1]}`);
}

console.log(printTeacher("John", "Doe"));
