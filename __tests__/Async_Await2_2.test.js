'use strict';
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('Espera 2 seg i diu hola', () => {
  const Async_Await2_2 = require('../app/Async_Await2_2.js');
  Async_Await2_2.nivell2();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});