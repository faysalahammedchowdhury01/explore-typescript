// regular function
function addNew(number1: number, number2: number): number {
  const result: number = number1 + number2;
  return result;
}
const outputNew = addNew(5, 10);

// arrow function
const addNewArrow = (number1: number, number2: number): number =>
  number1 + number2;
const outputNewArrow = addNewArrow(5, 10);

// arrow function multi line
const addNewArrowMultiple = (number1: number, number2: number): number => {
  const result: number = number1 + number2;
  return result;
};
const outputNewArrowMultiple = addNewArrowMultiple(5, 10);

// arrow function void
const justConsoleArrow = (number: number): void => console.log(number);
