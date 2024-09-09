// 100 Days Of Coding Challenge!

/** Question 128: “Leverage arrow functions for seamless parameter multiplication.”
Create an arrow function that takes multiple parameters and returns the product of all parameters.*/

//---------------------------------------------------------------------------------------------------

// Define an arrow function 'multiply' that takes multiple parameters
const multiply = (...args: number[]): number => {
    // Use the reduce method to multiply all the arguments together
    return args.reduce((acc, current) => acc * current, 1);
}

// Log the result of calling 'multiply' with the arguments 1, 2, 3, and 4
console.log(multiply(1, 2, 3, 4)); // Output: 24
