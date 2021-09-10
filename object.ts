// const student: {
//   name: string;
//   id: string;
//   subjects: string[];
// } = {
//   name: 'faysal',
//   id: '101',
//   subjects: ['math', 'physics', 'chemistry'],
// };

type Student = {
  name: string;
  id: string;
  subjects: string[];
};

const student: Student = {
  name: 'faysal',
  id: '101',
  subjects: ['math', 'physics', 'chemistry'],
};

function getSalary(person: { name: string; salary: number }): number {
  return person.salary;
}

const salary: number = getSalary({ name: 'Faysal', salary: 100000 });
