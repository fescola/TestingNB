const Async_Await = require('../app/Async_Await.js');

test('Busca employee y salari', () => {
    const result = Async_Await.getEmployee(1);

  expect(result).toBe(4000);
});
