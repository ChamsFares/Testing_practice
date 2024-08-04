import { calculator } from './calculator';

test('calculator object', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.multiply(2, 3)).toBe(6);
});