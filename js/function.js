"use strict";
// function
function add(number1, number2) {
    const result = number1 + number2;
    return result;
}
const sum = add(1, 5);
// const sum2 = add(1, '5');
// no return / void
function justConsole(number) {
    console.log(number);
}
justConsole(5);
// multi purpose | not good - has error
// function add2(
//   number1: number | string,
//   number2: number | string
// ): number | string {
//   const result: number | string = number1 + number2;
//   return result;
// }
// const output1 = add2(5, 4);
// const output2 = add2('faysal', 'fahim');
