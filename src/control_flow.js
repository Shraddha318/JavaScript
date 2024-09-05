// if
// if(condition){
//
// }

//if-else
// if(2==="2"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//if-else if
// const a=20;
// if(a<10){
//     console.log(`Value of a is ${a}`);
// }
// else if(a>10 && a<=20){
//     console.log(`Value of a is ${a}`);
// }
// else{
//     console.log(`Value of a is ${a}`);
// }

//Empty objects detect
// const empObj={
// }
// if(Object.keys(empObj).length===0){
//     console.log(empObj)
//     console.log("Object is Empty")
// }

//Nullish Coalescing Operator

let val1;
// val1=5??10
// console.log(val1)
// val1=null??10
val1=undefined??15
val2=null??undefined??10??13
console.log(val1)
console.log(val2)