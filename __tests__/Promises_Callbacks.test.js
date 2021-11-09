const Promises_Callbacks = require('../app/Promises_Callbacks.js');

test(' Busca salary desde employee', () => {
    return Promises_Callbacks.getEmployee(1)
    .then(employee => Promises_Callbacks.getSalary(employee))
    .then(salary => {
      expect(salary).toBe(4000);
    });
  });
  
  test('ID fora de rang', () => {
    return expect(Promises_Callbacks.getEmployee(5)).rejects.toThrow(Error);
  });