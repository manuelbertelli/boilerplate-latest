const sum = require('./sum');

test('initializing app', () => {
  expect(sum(1, 2)).toBe(2);
});
