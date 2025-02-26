
// let sum =0;
// let i=0
// while(i<=5){
//     sum+=i;
//     i++;
// }
// console.log(sum);

// let arr=[];
// let i=5;
// let j=0;
// while(i>0){
//     arr[j]=i;
//     i--;
//     j++;
// }
// console.log(arr)

// Run it in browser as prompt is part of js but is not included in node.js
// let arr = [];
// let tea;
// do {//prompt for user input
//     tea = prompt('Enter your favorite tea or type "stop"');
//     if (tea !== 'stop') {
//         arr.push(tea);
//     }
// } while (tea !== 'stop');

// let arr=[2,4,6]
// let i=0;
// let number=[]
// do{
//     //number[i]=arr[i]*2
//    number.push(arr[i]*2);
// i++;
// }while(i<arr.length);
// console.log(number)

// let arr=[2,4,6]
// let number=[]
// for(let i of arr){
//     number.push(i*2);
// }
// console.log(number)

// let cities=['Paris','New York','London','Tokyo']
// let copy=[]
// for(let i of cities){
//     copy.push(i);
// }
// console.log(copy)


// let tea=['green tea','black tea','chai','oolong tea']
// let selected=[];
// for(let i of tea){
//     if(i=='chai'){
//         break;
//     }else{
//         selected.push(i)
//     }
// }
// console.log(selected)

// let cities=['Paris','New York','London','Tokyo']
// let selected=[]
// for(let i of cities){
//     if(i=='London') continue;
//     selected.push(i);
// }
// console.log(selected)

// let number=[1,2,3,4,5]
// let small=[]
// for(let i of number){
//     if(i==4){
//         break;
//     }
//     small.push(i);
// }


// let obj = {
//     Europe: 10000,
//     NewYork: 20000,
//     Berlin: 23445,
//     Tokyo: 12345
// };
//
// let population = {};
// for (let i in obj) {
//     if (i === 'Berlin') {
//         break;
//     }
//     population[i] = obj[i];
// }
//
// console.log(population);

//
// let obj = {
//     Europe: 100000,
//     NewYork: 200000,
//     Berlin: 234450,
//     Tokyo: 123450
// };
// let city={}
// for(let i in obj){
//     if(obj[i]<120000){
//         continue;
//     }
//     city[i]=obj[i]
// }
// console.log(city);
//

// let tea=['green tea','black tea','chai','oolong tea']
// let arr=[]
// tea.forEach(function(ele){
//     if(ele=='chai') return;
//     arr.push(ele);
// });
// console.log(arr)

// let cities=['Paris','New York','London','Tokyo']
// let arr=[]
// cities.forEach((city)=>{
//     if(city=='London') return;
//     arr.push(city);
// })
// console.log(arr)

// let arr=[2,5,7,9]
// let a=[]
// for(let i of arr){
//     if(i==7) continue;
//     a.push(2*i);
// }
// console.log(a);

let tea=['green tea','black tea','oolong tea','chai']
let arr=[]
for(let i of tea){
    if(i.length>9) break;
    arr.push(i);
}
console.log(arr)