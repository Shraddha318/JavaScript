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
const nums=[]
myNums.forEach((num)=>{
    if(num>4){
        nums.push(num)
    }
})
console.log(nums)