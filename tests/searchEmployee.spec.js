// exercise-bonus.test.js

const searchEmployee = require('../src/searchEmployee');

describe('5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função', () => {

  it ('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  
  it ('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });
  
  it ('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });
  
  it ('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  
  it ('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => {
      searchEmployee('1256', 'specialities');
    }).toThrow(new Error('ID não identificado'));
  });
  
  it ('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => {
      searchEmployee('1256', 'specialitie');
    }).toThrow();
    expect(() => {
      searchEmployee('8579', 'firstNami');
    }).toThrow();
  });
  
  it ('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => {
      searchEmployee('8579-6', 'firstNa');
    }).toThrow(new Error('Informação indisponível'));
  });
});