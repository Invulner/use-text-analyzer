import { calculateCharFrequencies } from '../../src/utils/calculateCharFrequencies';

describe('calculateCharFrequencies', () => {
  it('should return an empty map when the input text is empty', () => {
    const result = calculateCharFrequencies('', true);
    expect(result.size).toBe(0);
  });

  it('should calculate character frequencies correctly with case sensitivity', () => {
    const text = 'Hello, WOrld!';
    const result = calculateCharFrequencies(text, false);
    expect(result.get('H')).toBe(1);
    expect(result.get('e')).toBe(1);
    expect(result.get('l')).toBe(3);
    expect(result.get('o')).toBe(1);
    expect(result.get('O')).toBe(1);
    expect(result.get(',')).toBe(1);
    expect(result.get('W')).toBe(1);
    expect(result.get('r')).toBe(1);
    expect(result.get('d')).toBe(1);
    expect(result.get('!')).toBe(1);
    expect(result.size).toBe(10);
  });

  it('should calculate character frequencies correctly without case sensitivity', () => {
    const text = 'Hello, WOrld!';
    const result = calculateCharFrequencies(text, true);
    expect(result.get('h')).toBe(1);
    expect(result.get('e')).toBe(1);
    expect(result.get('l')).toBe(3);
    expect(result.get('o')).toBe(2);
    expect(result.get(',')).toBe(1);
    expect(result.get('w')).toBe(1);
    expect(result.get('r')).toBe(1);
    expect(result.get('d')).toBe(1);
    expect(result.get('!')).toBe(1);
    expect(result.size).toBe(9);
  });
});
