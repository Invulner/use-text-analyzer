import { estimateReadingTime } from '../../src/utils/estimateReadingTime';

describe('estimateReadingTime', () => {
  const defaultWPM = 250;
  const cjkWPM = 500;

  it('should return the correct reading time for various word counts with default WPM', () => {
    expect(estimateReadingTime(0, defaultWPM)).toEqual({
      minutes: 0,
      seconds: 0,
      total: 0,
      text: 'less than a minute read',
    });

    expect(estimateReadingTime(100, defaultWPM)).toEqual({
      minutes: 0,
      seconds: 24,
      total: 24,
      text: 'less than a minute read',
    });

    expect(estimateReadingTime(250, defaultWPM)).toEqual({
      minutes: 1,
      seconds: 0,
      total: 60,
      text: '1 min read',
    });

    expect(estimateReadingTime(275, defaultWPM)).toEqual({
      minutes: 1,
      seconds: 6,
      total: 66,
      text: '1 min read',
    });

    expect(estimateReadingTime(500, defaultWPM)).toEqual({
      minutes: 2,
      seconds: 0,
      total: 120,
      text: '2 min read',
    });
  });

  it('should return the correct reading time for various word counts with CJK WPM', () => {
    expect(estimateReadingTime(0, cjkWPM)).toEqual({
      minutes: 0,
      seconds: 0,
      total: 0,
      text: 'less than a minute read',
    });

    expect(estimateReadingTime(250, cjkWPM)).toEqual({
      minutes: 0,
      seconds: 30,
      total: 30,
      text: 'less than a minute read',
    });

    expect(estimateReadingTime(500, cjkWPM)).toEqual({
      minutes: 1,
      seconds: 0,
      total: 60,
      text: '1 min read',
    });

    expect(estimateReadingTime(750, cjkWPM)).toEqual({
      minutes: 1,
      seconds: 30,
      total: 90,
      text: '1 min read',
    });

    expect(estimateReadingTime(1000, cjkWPM)).toEqual({
      minutes: 2,
      seconds: 0,
      total: 120,
      text: '2 min read',
    });
  });
});
