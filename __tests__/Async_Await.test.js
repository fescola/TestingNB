const Async_Await = require('../app/Async_Await.js');

test(' Busca salary desde employee', () => {
  return Async_Await.getEmployee(1)
  .then(employee => Async_Await.getSalary(employee))
  .then(salary => {
    expect(salary).toBe(4000);
  });
});


test('ID fora de rang', () => {
  return expect(Async_Await.getEmployee(5)).rejects.toThrow(Error);
});