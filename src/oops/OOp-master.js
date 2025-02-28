// let car={
//     model:2023,
//     brand:'Maruti',
//     price:1000000,
//     start:function (){
//         return `${this.brand} got started in ${this.price}`
//     }
// };
// console.log(car.start())
//
// function Person(name,age){
//     this.name=name
//     this.age=age
// }
//
// Person.prototype.lang=function (){
//     return `${this.name} speaks English`
// }
//
// Array.prototype.ac=function (){
//     return `Custom methon ${this} `
// }
// let a=new Person('A',23);
// let mynewA=[1,2,3];
// console.log(mynewA.ac())
//

//Classes

class A{
    constructor(make,model) {
        this.make=make
        this.model=model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class B extends A{
    drive(){
        return `${this.make} :Inheriatnce example`
    }
}

let bb=new B("Maruti","Swift")
console.log(bb.drive())
console.log(bb.start())