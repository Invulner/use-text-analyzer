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

  it('should correctly count special characters', () => {
    const text = '!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~';
    const result = calculateCharFrequencies(text, true);
    expect(result.size).toBe(31);
    expect(result.get('!')).toBe(1);
    expect(result.get('@')).toBe(1);
    expect(result.get('#')).toBe(1);
    expect(result.get('$')).toBe(1);
    expect(result.get('%')).toBe(1);
    expect(result.get('^')).toBe(1);
    expect(result.get('&')).toBe(1);
    expect(result.get('*')).toBe(1);
    expect(result.get('(')).toBe(1);
    expect(result.get(')')).toBe(1);
    expect(result.get('_')).toBe(1);
    expect(result.get('+')).toBe(1);
    expect(result.get('-')).toBe(1);
    expect(result.get('=')).toBe(1);
    expect(result.get('[')).toBe(1);
    expect(result.get(']')).toBe(1);
    expect(result.get('{')).toBe(1);
    expect(result.get('}')).toBe(1);
    expect(result.get('|')).toBe(1);
    expect(result.get(';')).toBe(1);
    expect(result.get(':')).toBe(1);
    expect(result.get("'")).toBe(1);
    expect(result.get('"')).toBe(1);
    expect(result.get(',')).toBe(1);
    expect(result.get('.')).toBe(1);
    expect(result.get('<')).toBe(1);
    expect(result.get('>')).toBe(1);
    expect(result.get('/')).toBe(1);
    expect(result.get('?')).toBe(1);
    expect(result.get('`')).toBe(1);
    expect(result.get('~')).toBe(1);
  });

  it('should correctly count emojis and other Unicode characters', () => {
    const text = '😀🚀🌟éñö';
    const result = calculateCharFrequencies(text, true);
    expect(result.size).toBe(6);
    expect(result.get('😀')).toBe(1);
    expect(result.get('🚀')).toBe(1);
    expect(result.get('🌟')).toBe(1);
    expect(result.get('é')).toBe(1);
    expect(result.get('ñ')).toBe(1);
    expect(result.get('ö')).toBe(1);
  });

  it('should handle different whitespace characters correctly', () => {
    const text = ' \t\n\r';
    const result = calculateCharFrequencies(text, true);
    expect(result.size).toBe(0);
  });

  it('should handle a mix of alphanumeric and non-alphanumeric characters correctly', () => {
    const text = 'Mix of characters: abc123!@#$';
    const result = calculateCharFrequencies(text, true);
    expect(result.size).toBe(21);
    expect(result.get('m')).toBe(1);
    expect(result.get('i')).toBe(1);
    expect(result.get('x')).toBe(1);
    expect(result.get('o')).toBe(1);
    expect(result.get('f')).toBe(1);
    expect(result.get('h')).toBe(1);
    expect(result.get('r')).toBe(2);
    expect(result.get('e')).toBe(1);
    expect(result.get('a')).toBe(3);
    expect(result.get('b')).toBe(1);
    expect(result.get('c')).toBe(3);
    expect(result.get('t')).toBe(1);
    expect(result.get('s')).toBe(1);
    expect(result.get('1')).toBe(1);
    expect(result.get('2')).toBe(1);
    expect(result.get('3')).toBe(1);
    expect(result.get(':')).toBe(1);
    expect(result.get('!')).toBe(1);
    expect(result.get('@')).toBe(1);
    expect(result.get('#')).toBe(1);
    expect(result.get('$')).toBe(1);
  });
});
