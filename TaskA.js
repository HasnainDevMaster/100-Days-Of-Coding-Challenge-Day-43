"use strict";
// 100 Days Of Coding Challenge!
/** Question 127:
Convert a traditional function expression to an arrow function.*/
//----------------------------------------------------------------
// Traditional function expression
function add(x, y) {
    return x + y;
}
// log 'add' function
console.log(add(2, 7)); // Output: 9
// Equivalent arrow function
const addArrow = (x, y) => x + y;
// log 'addArrow' function
console.log(addArrow(2, 7)); // Output: 9
