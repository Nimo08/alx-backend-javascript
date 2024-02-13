export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // check if the endpoint exists in the WeakMap
  if (weakMap.has(endpoint)) {
    let count = weakMap.get(endpoint);
    count += 1;
    // update the count in the WeakMap
    weakMap.set(endpoint, count);

    // check if the count >= 5
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // if the endpoint is not in the WeakMap yet, add it with a count of  1
    weakMap.set(endpoint, 1);
  }
}
