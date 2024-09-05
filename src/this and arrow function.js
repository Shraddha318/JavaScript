// const user={
//     name:"JavaScript",
//     price:999,
//     welcome:function(){
//         console.log(`${this.name} has price: ${this.price}`)
//         console.log(this)
//     }
// }
//
// user.welcome();
// user.name="C++"
// user.welcome()
// console.log(this)

// const one=function (){
//     let name="Shraddha"
//     console.log(this.name)
// }
// one();

// const two=()=>{
//     let name="Shraddha"
//     console.log(this.name)
// }
// two()

// const addTwo=(n1,n2)=>{
//     return n1+n2;
// }
// console.log(addTwo(3,2))

//Implicit Function

// const addTwo=(n1,n2)=>n1+n2;
// console.log(addTwo(3,2))

// const addTwo=(n1,n2)=>(n1+n2);
// console.log(addTwo(3,2))

const print=(n1,n2)=>({username:"SHRADDHA"});
console.log(print())