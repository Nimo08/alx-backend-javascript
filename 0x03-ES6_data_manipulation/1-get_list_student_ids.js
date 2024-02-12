export default function getListStudentIds(array) {
  // check if argument is array
  if (Array.isArray(array)) {
    // element represents each individual value in the array
    return array.map((element) => element.id);
  }
  return [];
}
