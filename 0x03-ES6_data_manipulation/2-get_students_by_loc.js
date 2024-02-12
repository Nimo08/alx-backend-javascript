export default function getStudentsByLocation(studentList, city) {
  // ensure that only elements with a match to the city are in the filtered array
  const newArray = studentList.filter((element) => element.location === city);
  return newArray;
}
