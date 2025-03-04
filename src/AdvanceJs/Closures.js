//Closure are functions ,they remember the environment in which they created.
// This means that function can retain the variables which are declared outside of it.

function out() {
    let count=0;
    return function () {
        count++;
        return count;
    }
}

let inc=out();
console.log(inc)
console.log(inc())

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

let counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1


function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

let sayHello = createGreeting('Hello');
let sayHi = createGreeting('Hi');
console.log(sayHello('Alice')); // Output: Hello, Alice!
console.log(sayHi('Bob'));      // Output: Hi, Bob!
