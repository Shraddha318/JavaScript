const arr=[1,2,3,4,5,6];
console.log(arr.length);
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr.push(7))
console.log(arr.toString());
console.log(arr.pop());
console.log(arr.toString());

const myarr=new Array(1,2,3,4,5,6,7,7,5,2,3)
console.log(myarr.length)
console.log(typeof myarr)

const newarr=myarr.join()
console.log(newarr.length)
console.log(newarr)
console.log(newarr.toString())

const newarr2=myarr.slice(0,4)
console.log(newarr2.toString())
const newarr3=myarr.splice(0,4)//Splice manipulates the original array
console.log(newarr3.toString())
console.log(myarr.toString())
console.log(Array.from("Shraddha"))
console.log(Array.of(1,2,3,4,5,6,7,7,8,9))
