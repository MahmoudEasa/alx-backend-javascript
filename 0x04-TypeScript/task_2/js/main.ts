console.log("5. Advanced types Part 1");
console.log("");

interface GeneralInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
};


interface DirectorInterface extends GeneralInterface {
  workDirectorTasks(): string;
};


interface TeacherInterface extends GeneralInterface {
  workTeacherTasks(): string;
};


class Director implements DirectorInterface {
  workFromHome(): string {
    return ("Working from home");
  }

  getCoffeeBreak(): string {
    return ("Getting a coffee break");
  }

  workDirectorTasks(): string {
    return ("Getting to director tasks");
  }
}


class Teacher implements TeacherInterface {
  workFromHome(): string {
    return ("Cannot work from home");
  }

  getCoffeeBreak(): string {
    return ("Cannot have a break");
  }

  workTeacherTasks(): string {
    return ("Getting to work");
  }
}

const createEmployee = (salary: number | string): Teacher | Director => {
  if ((typeof salary === "number") && (salary < 500)) return (new Teacher());
  else return (new Director());
}

const t1 = createEmployee(200);
const d1 = createEmployee(1000);
const d2 = createEmployee("$500");

console.log("Teacher Obj");
console.log("");
console.log(t1);
console.log(t1.workFromHome());
console.log(t1.getCoffeeBreak());
if (t1 instanceof Teacher) console.log(t1.workTeacherTasks());

console.log("\n");
console.log("Director Obj");
console.log("");
console.log(d1);
console.log(d1.workFromHome());
console.log(d1.getCoffeeBreak());
if (d1 instanceof Director) console.log(d1.workDirectorTasks());
console.log(d2);
console.log("\n");


console.log("6. Creating functions specific to employees");
console.log("");
const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee instanceof Director);
}

const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee))
    console.log(employee.workDirectorTasks());
  else
    console.log(employee.workTeacherTasks());
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log("\n");


console.log("7. String literal types");
console.log("");
type Subjects = ("Math" | "History");

const teachClass = (todayClass: Subjects): string => {
  return (`Teaching ${todayClass}`);
}


console.log(teachClass("Math"));
console.log(teachClass("History"));
console.log("\n");
