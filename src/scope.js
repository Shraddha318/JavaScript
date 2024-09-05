// let a=10;
// var b=2;
// const c=9;
// {
//     let d=1;//Follows block scope
//     var e=12;//Does not follow block scope
//     const f=9;//Follows block scope
// }
// //console.log(d)
// console.log(e)
// //console.log(f)

//Nested Scope
//Closure:Nested Function is able to access the elements of functions above
// function one(){
//     const username="Shraddha"
//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     //console.log(website) //Out of block scope
//     two();
//     console.log(two)
// }
// one();

function addone(num){
    return num+1;
}
console.log(addone(2));

const add2=function addtwo(nums){
    return nums+2;
}
console.log(add2)
