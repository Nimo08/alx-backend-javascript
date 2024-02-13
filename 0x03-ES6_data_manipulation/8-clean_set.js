export default function cleanSet(set, startString) {
  // arrau to contain portions of set that start with startString
  const result = [];
  for (const value of set) {
    // check if current value starts with startString
    if (value.startsWith(startString)) {
      // append the rest of the string
      result.push(value.substring(startString.length));
    }
  }
  // concatenate elements of array into a single string
  return result.join('-');
}
