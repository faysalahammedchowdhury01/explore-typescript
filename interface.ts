interface Player {
  name: string;
  club: string;
  salary: number;
  // wife is optional
  wife?: string;
}

const messi: Player = {
  name: 'Leo Messi',
  club: 'PSG',
  salary: 35000000,
  wife: 'Rocuzzo',
};

const hannan: Player = {
  name: 'Abdul Hannan',
  club: 'Mehmadan',
  salary: 12000,
};

interface Employee {
  name: string;
  age: number;
  designation: string;
  salary: number;
}

interface Developer extends Employee {
  languages: string[];
  codeEditor: string;
}

const musk: Developer = {
  name: 'Elon Musk',
  age: 35,
  designation: 'Alien',
  salary: 10000000000000,
  languages: ['javascript', 'python'],
  codeEditor: 'VS Code',
};
