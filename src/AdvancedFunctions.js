// Storing a function inside a variable
//Provides features called Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their containing scope during the compilation phase.

// However, hoisting behaves differently for function declarations and function expressions:

// Uncommenting the following line will throw an error because 'greet' is not initialized yet
// due to the nature of hoisting for function expressions. The variable 'a' is hoisted, but not its assignment.
// greet(); // Uncaught ReferenceError: Cannot access 'greet' before initialization

const a = function greet() {
    console.log("Hello");
};

// Now 'a' is assigned, so this works
a();

console.log(a);
console.log(typeof a);


//Anonymous Function-Function without a name
const b=function(c,d){
    return c+d;
}
console.log(b);
console.log(b(2,3));
