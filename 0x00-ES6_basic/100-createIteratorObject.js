#!/usr/bin/node

/**
 * Write a function named createIteratorObject, that will take into argument
 * a report Object created with the previous function createReportObject.
 *
 * This function will return an iterator to go through every employee in every department.
*/

export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const result = [];

  for (const value of Object.values(employees)) {
    for (const employee of value) result.push(employee);
  }

  return result;
}
