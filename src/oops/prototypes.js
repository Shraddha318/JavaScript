let c={
    cpu:12
}

let l={
    screen:'HD',
    __proto__:c
}

let h={

}

console.log(`computer`,l.__proto__);

Object.setPrototypeOf(h,l)
console.log('h',l)

/*
In JavaScript, every object has a prototype. A prototype is also an object, and it contains properties and methods that can be inherited by other objects. This mechanism is often referred to as prototypal inheritance.

    Functions of Prototypes
Inheritance:

    Prototypes allow objects to inherit properties and methods from another object. This is helpful in reducing code duplication.

    Sharing Methods:

    When you define a method on a prototype, all instances of that object type can access that method. This is memory efficient, as the method is stored in a single place.

    Dynamic Properties:

    Properties and methods can be added to prototypes even after the objects are created. This allows for dynamic and flexible code.

    Prototype Chain:

    Objects can have a chain of prototypes. When trying to access a property or method, JavaScript first looks for it on the object itself, then moves up the prototype chain until it finds it or reaches the end of the chain.

*/

// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating an instance of Person
const alice = new Person('Alice', 30);

// Calling the greet method, which is inherited from the prototype
alice.greet();