export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);

  if ((weakMap.get(endpoint) || 0) >= 5) {
    if (!weakMap.has(endpoint)) {
      weakMap.set(endpoint, 0);
    }

    const count = weakMap.get(endpoint);

    weakMap.set(endpoint, count + 1);

    if (count + 1 >= 5) {
      throw new Error("Endpoint load is high");
    }
  }
}
