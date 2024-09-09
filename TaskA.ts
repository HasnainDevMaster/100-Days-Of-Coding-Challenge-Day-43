// 100 Days Of Coding Challenge!

/** Question 127: “Simplify your code with arrow functions!”
Convert a traditional function expression to an arrow function.*/

//----------------------------------------------------------------

// Traditional function expression
function add(x: number, y: number): number {
    return x + y;
  }
  
  // log 'add' function
  console.log(add(2, 7)); // Output: 9

  // Equivalent arrow function
  const addArrow = (x: number, y: number): number => x + y;

  // log 'addArrow' function
  console.log(addArrow(2, 7)); // Output: 9
  