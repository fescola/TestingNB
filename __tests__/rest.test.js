const rest = require('../app/rest.js');

test('subtracts 2 - 1 to equal 1', () => {
  expect(rest(2 , 1)).toBe(1);
});