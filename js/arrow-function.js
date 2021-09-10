"use strict";
// regular function
function addNew(number1, number2) {
    const result = number1 + number2;
    return result;
}
const outputNew = addNew(5, 10);
// arrow function
const addNewArrow = (number1, number2) => number1 + number2;
const outputNewArrow = addNewArrow(5, 10);
// arrow function multi line
const addNewArrowMultiple = (number1, number2) => {
    const result = number1 + number2;
    return result;
};
const outputNewArrowMultiple = addNewArrowMultiple(5, 10);
// arrow function void
const justConsoleArrow = (number) => console.log(number);
