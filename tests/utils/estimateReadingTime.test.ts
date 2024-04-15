import { estimateReadingTime } from '../../src/utils/estimateReadingTime';

describe('estimateReadingTime', () => {
  const wordsPerMinute = 250;

  it('should return the correct reading time for various word counts', () => {
    expect(estimateReadingTime(0, wordsPerMinute)).toEqual({
      minutes: 0,
      seconds: 0,
      total: 0,
      text: 'less than a minute read',
    });

    expect(estimateReadingTime(100, wordsPerMinute)).toEqual({
      minutes: 0,
      seconds: 24,
      total: 24,
      text: 'less than a minute read',
    });

    expect(estimateReadingTime(250, wordsPerMinute)).toEqual({
      minutes: 1,
      seconds: 0,
      total: 60,
      text: '1 min read',
    });

    expect(estimateReadingTime(275, wordsPerMinute)).toEqual({
      minutes: 1,
      seconds: 6,
      total: 66,
      text: '1 min read',
    });

    expect(estimateReadingTime(500, wordsPerMinute)).toEqual({
      minutes: 2,
      seconds: 0,
      total: 120,
      text: '2 min read',
    });
  });
});
