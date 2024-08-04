import { caesarCipher } from './caesarCipher';

test('caesarCipher function', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(caesarCipher('Z', -1)).toBe('Y');
});