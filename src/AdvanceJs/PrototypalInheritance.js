/*Prototypal Inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. This allows for code reuse and a clear object hierarchy. In JavaScript, every object has a prototype, and an object can use the properties and methods defined on its prototype.*/

function person(name) {
    this.name=name;
}
person.prototype.greet=function () {
    console.log(`Hello,${this.name}`)
}
let a=new person('Shraddha')
a.greet();

// Constructor Function
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

// Adding Methods to the Prototype
Animal.prototype.makeSound = function() {
    console.log(`${this.name} says ${this.sound}`);
};

// Creating a New Constructor Function for a Specific Animal
function Dog(name) {
    Animal.call(this, name, 'Woof'); // Inherit properties from Animal
}

// Setting the Prototype of Dog to an Instance of Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding Additional Method to Dog
Dog.prototype.bark = function() {
    console.log(`${this.name} barks`);
};

// Creating an Instance of Dog
let myDog = new Dog('Buddy');

// Calling Methods
myDog.makeSound(); // Output: Buddy says Woof
myDog.bark();      // Output: Buddy barks

