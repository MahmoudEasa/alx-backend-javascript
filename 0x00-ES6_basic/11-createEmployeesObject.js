#!/usr/bin/node

/**
 * Write a function named createEmployeesObject that will receive two arguments:
 * @departmentName: String
 * @employees: Array of Strings
 *
 * The function should return an object with the following format:
 * {
 *   $departmentName: [
 *     $employees,
 *   ],
 * }
*/

export default function createEmployeesObject(departmentName, employees) {
  return (
    {
      [departmentName]: [...employees],
    }
  );
}
