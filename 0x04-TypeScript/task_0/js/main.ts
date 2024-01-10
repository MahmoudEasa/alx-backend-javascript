interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'firstName1',
  lastName: 'lastName1',
  age: 20,
  location: 'location1'
}

const student2: Student = {
  firstName: 'firstName2',
  lastName: 'lastName2',
  age: 20,
  location: 'location2'
}

const studentsList: Array<Student> = [student1, student2];

console.table(studentsList);
