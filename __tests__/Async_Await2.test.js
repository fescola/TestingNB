const Async_Await2 = require('../app/Async_Await2.js');


test('the data is peanut butter', async () => {
  await expect(Async_Await2.nivell2()).resolves.toBe("hola");
});

// test('the fetch fails with an error', async () => {
//   await expect(Async_Await2.nivell2()).rejects.toMatch('error');
// });