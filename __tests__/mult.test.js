const mult = require('../app/mult.js');

test('multiplies 2*3 and outputs 6', () => {
  expect(mult(2, 3)).toBe(6);
});