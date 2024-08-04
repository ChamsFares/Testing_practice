import { reverse } from './reverseString';

test('reverseString function', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('Hello, World!')).toBe('!dlroW ,olleH');
  expect(reverse('12345')).toBe('54321');
});