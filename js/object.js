"use strict";
// const student: {
//   name: string;
//   id: string;
//   subjects: string[];
// } = {
//   name: 'faysal',
//   id: '101',
//   subjects: ['math', 'physics', 'chemistry'],
// };
const student = {
    name: 'faysal',
    id: '101',
    subjects: ['math', 'physics', 'chemistry'],
};
function getSalary(person) {
    return person.salary;
}
const salary = getSalary({ name: 'Faysal', salary: 100000 });
