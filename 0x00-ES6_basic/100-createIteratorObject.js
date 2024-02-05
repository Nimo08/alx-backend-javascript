export default function createIteratorObject(report) {
  let deptIdx = 0;
  let employeeIdx = 0;

  const depts = Object.keys(report.allEmployees);

  return {
    next() {
      if (deptIdx >= depts.length) {
        return { done: true };
      }

      const currentDept = depts[deptIdx];
      const currentEmployees = report.allEmployees[currentDept];
      const employee = currentEmployees[employeeIdx];

      employeeIdx += 1;

      if (employeeIdx >= currentEmployees.length) {
        employeeIdx = 0;
        deptIdx += 1;
      }

      return {
        value: employee,
        done: false,
      };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
