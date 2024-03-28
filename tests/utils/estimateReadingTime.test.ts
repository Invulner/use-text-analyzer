import { estimateReadingTime } from '../../src/utils/estimateReadingTime';

describe('estimateReadingTime', () => {
  it('should return the correct reading time based on the word count', () => {
    expect(estimateReadingTime(0)).toBe(0);
    expect(estimateReadingTime(100)).toBe(30);
    expect(estimateReadingTime(200)).toBe(60);
    expect(estimateReadingTime(250)).toBe(75);
    expect(estimateReadingTime(500)).toBe(150);
  });
});
