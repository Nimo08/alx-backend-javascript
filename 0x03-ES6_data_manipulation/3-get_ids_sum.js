export default function getStudentIdsSum(studentList) {
  // add result of previous operations to the current id being processed, 0 is the initial value
  const sum = studentList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sum;
}
