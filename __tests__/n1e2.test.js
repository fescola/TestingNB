const n1e2 = require('../app/n1e2.js');
jest.mock('./__mocks__/n1e2.js')
var obj1;
test('mock', () => {
  expect(n1e2.instantObj(obj1, `rx7`, `vehicle`)).toBe(undefined);
});

