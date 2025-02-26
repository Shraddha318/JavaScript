// function myfunc() {
//     console.log("Hello, IdeaProjects!");
// }
// myfunc();

// function addTwoNumber(a,b){
//    //  console.log(b+a)
//    return a+b;
// }
// // addTwoNumber(1,2)
// const c=addTwoNumber(4, 2);
// console.log(addTwoNumber("1", "2"));
// console.log(addTwoNumber(1, 2 ));
// console.log(addTwoNumber(c));

// function logInUser(username){
//     if(!username){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(logInUser());
// console.log(logInUser('John Doe'));

// function logInUser(username="sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(logInUser());


// function calCartPrice(val1,val2,...num1){
//     return num1;
// }
// console.log(calCartPrice(1,2,3,4,5,4,2,3));

// const user={
//     name:"JavaScript",
//     price:250,
//     edition:2021
// }
// function handleObject(object){
//     console.log(`Book name id ${object.name} and price is ${JSON.stringify(object.price)} `)
//
// }
// // handleObject(user)
// handleObject({
//     name:"JavaScript",
//     price:250
// });

// const myArray=[1,2,3,4,5,6,7,8,9,10];
//
// function myfunc(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//    sum+=arr[i];
//     }
//     return sum;
// }
// console.log("Sum is: "+myfunc(myArray));
//
// function getArray(getArr){
//     return getArr[1];
// }
// console.log("Second element is: "+getArray(myArray));

// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`
// }
//
// console.log(makeTea('Green tea'));

// function OrderTea(teaType){
//     function confirmOrder(){
//         return `Order Confirmed for ${teaType}`
//     }
//     return confirmOrder();
// }
//
// console.log(OrderTea('Chai'))

/*
// First-class function: A function that can be treated as a variable.
function makeTea(tea) {
 return tea;
}

// A function that takes another function as a parameter
function process(tea) {
 // Calling the passed function with 'Earl grey' as the argument
 return tea('Earl grey');
}

// Assigning the result of process(makeTea) to variable 'x'
let x = process(makeTea);

// Logging the value of 'x' to the console
console.log(x); // Output: 'Earl grey'
*/

function a(teatype){
 return `Making ${teatype}`;
}

function createtea(a){
 return a('Green tea');
}
let c=createtea(a);
console.log(c)