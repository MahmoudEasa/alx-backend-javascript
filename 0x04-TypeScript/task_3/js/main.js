;
var printTeacher = function () {
    var printTeacherFunction = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        printTeacherFunction[_i] = arguments[_i];
    }
    return ("".concat(printTeacherFunction[0][0], ". ").concat(printTeacherFunction[1]));
};
console.log(printTeacher("John", "Doe"));
