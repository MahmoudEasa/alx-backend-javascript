export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const result = [];

  for (const value of Object.values(employees)) {
    for (const employee of value) result.push(employee);
  }

  return result;
}
