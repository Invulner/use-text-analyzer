import { findMostAndLeastFrequent } from '../../src/utils/findMostAndLeastFrequent';

describe('findMostAndLeastFrequent', () => {
  it('should return the most and least frequent items from the map', () => {
    const map1 = new Map<string, number>();
    map1.set('apple', 3);
    map1.set('banana', 2);
    map1.set('orange', 1);
    expect(findMostAndLeastFrequent(map1)).toEqual(['apple', 'orange']);

    const map2 = new Map<string, number>();
    map2.set('apple', 1);
    map2.set('banana', 2);
    map2.set('orange', 3);
    expect(findMostAndLeastFrequent(map2)).toEqual(['orange', 'apple']);

    const map3 = new Map<string, number>();
    map3.set('apple', 2);
    map3.set('banana', 2);
    map3.set('orange', 2);
    expect(findMostAndLeastFrequent(map3)).toEqual(['apple', 'apple']);

    const map4 = new Map<string, number>();
    expect(findMostAndLeastFrequent(map4)).toEqual(['', '']);
  });
});
