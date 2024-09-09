"use strict";
// 100 Days Of Coding Challenge!
/** Question 129
Explain how this behaves differently in arrow functions compared to traditional functions.*/
//-------------------------------------------------------------------------------------------
// Define an object with two functions: traditionalFunction and arrowFunction
const obj = {
    // Property: name
    name: 'John',
    // Traditional function with explicit binding
    traditionalFunction: function () {
        // Use an arrow function to preserve the context
        setTimeout(() => {
            console.log(this.name); // unexpected output: undefined
        }, 1000);
    }.bind(this), // Bind the function to the object
    // Arrow function with explicit binding
    arrowFunction: () => {
        // Use an arrow function to preserve the context
        setTimeout(() => {
            console.log(obj.name); // the expected output: John
        }, 1000);
    }
};
// Call the traditional function
obj.traditionalFunction();
// Call the arrow function
obj.arrowFunction();
