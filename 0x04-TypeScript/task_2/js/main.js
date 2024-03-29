console.log("5. Advanced types Part 1");
console.log("");
;
;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ("Working from home");
    };
    Director.prototype.getCoffeeBreak = function () {
        return ("Getting a coffee break");
    };
    Director.prototype.workDirectorTasks = function () {
        return ("Getting to director tasks");
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ("Cannot work from home");
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ("Cannot have a break");
    };
    Teacher.prototype.workTeacherTasks = function () {
        return ("Getting to work");
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if ((typeof salary === "number") && (salary < 500))
        return (new Teacher());
    else
        return (new Director());
};
var t1 = createEmployee(200);
var d1 = createEmployee(1000);
var d2 = createEmployee("$500");
console.log("Teacher Obj");
console.log("");
console.log(t1);
console.log(t1.workFromHome());
console.log(t1.getCoffeeBreak());
if (t1 instanceof Teacher)
    console.log(t1.workTeacherTasks());
console.log("\n");
console.log("Director Obj");
console.log("");
console.log(d1);
console.log(d1.workFromHome());
console.log(d1.getCoffeeBreak());
if (d1 instanceof Director)
    console.log(d1.workDirectorTasks());
console.log(d2);
console.log("\n");
console.log("6. Creating functions specific to employees");
console.log("");
var isDirector = function (employee) {
    return (employee instanceof Director);
};
var executeWork = function (employee) {
    if (isDirector(employee))
        console.log(employee.workDirectorTasks());
    else
        console.log(employee.workTeacherTasks());
};
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log("\n");
console.log("7. String literal types");
console.log("");
var teachClass = function (todayClass) {
    return ("Teaching ".concat(todayClass));
};
console.log(teachClass("Math"));
console.log(teachClass("History"));
console.log("\n");
