/**
 * Finds the most and least frequent items in the given map.
 * @param {Map<string, number>} map - The map to analyze.
 * @returns {[string, string]} An array containing the most and least frequent items.
 */
export function findMostAndLeastFrequent(map: Map<string, number>): [string, string] {
  let mostFrequent = '';
  let leastFrequent = '';
  let maxCount = 0;
  let minCount = Number.MAX_SAFE_INTEGER;

  map.forEach((count, item) => {
    if (count > maxCount) {
      mostFrequent = item;
      maxCount = count;
    }

    if (count < minCount) {
      leastFrequent = item;
      minCount = count;
    }
  });

  return [mostFrequent, leastFrequent];
}
