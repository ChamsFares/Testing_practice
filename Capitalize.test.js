import { capitalize  } from './Capitalize';

test('capitalize function', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('WORLD');
    expect(capitalize('123')).toBe('123');
});