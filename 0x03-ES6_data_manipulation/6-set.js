export default function setFromArray(array) {
  // extract values from array
  const values = Object.values(array);
  // pass values to set
  const arraySet = new Set(values);
  return arraySet;
}
