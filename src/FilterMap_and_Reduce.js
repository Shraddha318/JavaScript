// const coding=['js','java','cpp','c']
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values)//Will print empty array,as foreach will not return any value

const myNums=[1,2,3,4,5,6,7,8,9]
//const nums=myNums.filter((num)=>num>1)
// const nums=myNums.filter((num)=>{
//     //without returning will show empty array
//     return num>4
// })

//Returning using ForEach
// const nums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         nums.push(num)
//     }
// })
// console.log(nums)

// const nums=[1,2,3,4,5,6,7]
// // const newNum=nums.map((num)=>{
// //     return num+10;
// // })
// const newNum=nums.map((num)=>num*10).map((num)=>num+10).filter((num)=>num>30)
// console.log(newNum)

//reduce
const nums=[1,2,3,4,5,6,7]
// const myTotal=nums.reduce(function (accumulator,currentvalue){
//     console.log(`Accumulator ${accumulator} and current value is ${currentvalue}`)
//     return accumulator+currentvalue;
// },0)

// const myTotal = nums.reduce((accumulator, currentValue) => {
//     console.log(`Accumulator ${accumulator} and current value is ${currentValue}`);
//     return accumulator + currentValue;
// }, 0);
const myTotal = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


console.log(myTotal)
