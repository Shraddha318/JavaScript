function* generator(){
    yield 1
    yield 2
    yield 3
}
let gen=generator()
let gen2=generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen2.next().value)

//next->Iterator

// Iterator Example
const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Generator Example
function* generatorno() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorno();

console.log(gen.next().value); // Outputs: 1
console.log(gen.next().value); // Outputs: 2
console.log(gen.next().value); // Outputs: 3
console.log(gen.next().value); // Outputs: undefined

/*Iterators are objects that define a sequence and potentially a return value upon their termination.

Generators are special functions that produce iterators and allow pausing and resuming the execution of code.*/