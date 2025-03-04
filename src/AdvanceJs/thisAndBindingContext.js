// this-and-binding-context.js

const per = {
    name: 'a',
    greet() {
        console.log(`hi, ${this.name}`);
    }
};

// Original object method
per.greet(); // Output: hi, a

// Assigning method to a variable
const g = per.greet;
g(); // Output: hi, undefined (or an error in strict mode)

// Using bind to create a new function with 'this' set to a specific value
const bound = per.greet.bind({ name: 'John' });
bound(); // Output: hi, John

// Using call to invoke the function with 'this' set to a specific value
per.greet.call({ name: 'Alice' }); // Output: hi, Alice

// Using apply to invoke the function with 'this' set to a specific value
per.greet.apply({ name: 'Bob' }); // Output: hi, Bob


/*bind()
Purpose: Creates a new function that, when called, has its this keyword set to the provided value. It does not immediately invoke the function.*/
const person = {
    name: 'Alice',
    greet: function(greeting) {
        console.log(`${greeting}, ${this.name}`);
    }
};

const boundGreet = person.greet.bind({ name: 'Bob' });
boundGreet('Hello'); // Output: Hello, Bob

/*call()
Purpose: Invokes the function immediately, with a given this value and arguments provided individually.*/
const person = {
    name: 'Alice',
    greet: function(greeting) {
        console.log(`${greeting}, ${this.name}`);
    }
};

person.greet.call({ name: 'Charlie' }, 'Hi'); // Output: Hi, Charlie


/*apply()
Purpose: Invokes the function immediately, with a given this value and arguments provided as an array.*/
const person = {
    name: 'Alice',
    greet: function(greeting) {
        console.log(`${greeting}, ${this.name}`);
    }
};

person.greet.apply({ name: 'Dana' }, ['Good morning']); // Output: Good morning, Dana
