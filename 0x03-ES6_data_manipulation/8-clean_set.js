export default function cleanSet(set, startString) {
  // check if startString is undefined or empty
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  // convert set into array to make it iterable
  return [...set]
    // filter out elements not starting with startString
    .filter((element) => (element !== undefined ? element.startsWith(startString) : ''))
  // remove startString from beginning of each element using slice
    .map((element) => (element !== undefined ? element.slice(startString.length) : ''))
    .join('-');
}
