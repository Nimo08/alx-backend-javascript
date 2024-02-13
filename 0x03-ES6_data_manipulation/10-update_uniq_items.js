export default function updateUniqueItems(groceriesMap) {
  // check if groceriesMap is a map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process: argument is not a Map');
  }
  // loop through entries of the map
  for (const [key, value] of groceriesMap.entries()) {
    if (value === 1) {
      groceriesMap.set(key, 100);
    }
  }
}
