//[{}.{}]
//["",""]
// const arr=[1,2,3,4,5,6,7,8,9];

//for of loo[
//for(const iterator of object ){}
// for (const number of arr) {
//     console.log(`${number}`);
// }

// const greeting="Hello, World!";
// for (const greetingElement of greeting) {
//     console.log(`${greetingElement}`);
// }

//Maps
// const map=new Map();
// map.set('IN','India');
// map.set('US','United States');
// console.log(map);
// for (const mapElement of map) {
//     console.log(mapElement);
//     console.log(map.get(mapElement));
// }

// for (const [key,value] of map) {
//     console.log(key +':'+ value);
//
// }

//Object are not iterables .We cannot iterate using forof loop
// const obj={
//     name:'Shraddha',
//     id:1
// }
// for (const objElement of obj) {
//     console.log(objElement);
// }

//For in loop
//Objects can be iterated using for in loop
// const obj={
//     name:'Shraddha',
//     id:1
// }
// for (const objKey in obj) {
//     console.log(objKey);
//     console.log(obj[objKey]);
// }
//
// const ar=[1,2,3,4,5,6,7,8,9,10];
// for (const arKey in ar) {
//     console.log(ar[arKey]);
// }

//Maps
// const map=new Map();
// map.set('IN','India');
// map.set('US','United States');
// console.log(map);
// for (const mapKey in map) {
//     console.log(map[mapKey]);
// }

//ForEach
// let alphabets,alphabet;
// const arr=["a","b","c","d","e","f"];
// arr.forEach(function(item){
//     console.log(item)
// })
// arr.forEach(arrs=>{console.log(arrs)
// })

const name=[
{
    name:"a"
},
{
    name:"b"
},
{
    name:"c"
}
]
name.forEach((names)=>{
    console.log(names)
})