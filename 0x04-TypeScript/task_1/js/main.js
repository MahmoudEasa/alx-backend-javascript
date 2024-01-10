;
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
;
var printTeacher = function (firstName, lastName) {
    return ("".concat(firstName[0], ". ").concat(lastName));
};
console.log(printTeacher("John", "Doe"));
// Writing a class
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return ('Currently working');
    };
    StudentClass.prototype.displayName = function () {
        return (this.firstName);
    };
    return StudentClass;
}());
var student1 = new StudentClass('Mahmoud', 'Easa');
console.log(student1.workOnHomework());
console.log(student1.displayName());
