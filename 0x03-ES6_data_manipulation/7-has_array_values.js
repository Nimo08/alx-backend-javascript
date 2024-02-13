export default function hasValuesFromArray(set, array) {
  // loop through the array
  for (const value of Object.values(array)) {
    // return false if any value is not found
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
