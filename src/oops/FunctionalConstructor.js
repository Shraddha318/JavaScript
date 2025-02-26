/*Functional constructors in JavaScript are a way to create objects using functions. They provide an alternative to using class-based or prototype-based inheritance and can be quite straightforward.*/
/*Functional constructors are a simple and flexible way to create objects, and they don't involve the complexities of prototype chains or new keyword usage. They're useful when you want to create objects in a more straightforward and readable manner.*/
// Functional constructor for creating a person object
// function createPerson(name, age) {
//     return {
//         name: name,
//         age: age,
//         greet: function() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         }
//     };
// }
//
// // Creating an instance of a person
// const bob = createPerson('Bob', 25);
//
// // Calling the greet method
// bob.greet(); // Output: Hello, my name is Bob and I am 25 years old.
//

//For creating a object use new keyword
// function Person(name ,age){
//     this.name=name;
//     this.age=age;
// }
//
// let person=new Person(`A`,1);
// console.log(person)

// function tea(type){
//     this.type=type;
//     this.des=function (){
//         return `Tea id of type ${this.type}`;
//     }
// }
// let lemon=new tea('Lemon Tea');
// console.log(lemon)
// console.log(lemon.des())

// function Animal(species){
//     this.species=species;
// }
//
// Animal.prototype.sound=function (){
//     return `${this.species} makes a sound`
// }
//
// let dog =new Animal('Dog');
// console.log(dog)
// console.log(dog.sound())

