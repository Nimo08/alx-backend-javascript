export default function groceriesList() {
  const groceriesMap = new Map();
  // add key-value pairs to the map
  groceriesMap.set('Apples', 10);
  groceriesMap.set('Tomatoes', 10);
  groceriesMap.set('Pasta', 1);
  groceriesMap.set('Rice', 1);
  groceriesMap.set('Banana', 5);

  return groceriesMap;
}
