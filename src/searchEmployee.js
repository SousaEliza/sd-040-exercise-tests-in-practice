const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const getEmployeeInfo = (paramId) => {
  const data = professionalBoard;
  for (let index = 0; index < data.length; index += 1) {
    if (data[index].id === paramId) {      
      const employeeInfo = data[index];
      return employeeInfo;
    }
  }
  throw new Error('ID não identificado');
};

const searchEmployee = (id, employeeInfo) => {
  const data = getEmployeeInfo(id);
  if (employeeInfo === 'firstName' 
    || employeeInfo === 'lastName' 
      || employeeInfo === 'specialities') {
    return data[employeeInfo];
  } 
  throw new Error('Informação indisponível');
};

module.exports = searchEmployee;