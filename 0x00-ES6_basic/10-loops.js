export default function appendToEachArrayValue(array, appendString) {
  // create new array and push modified values into it
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}