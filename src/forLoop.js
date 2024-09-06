// const arr=[1,2,3,4,'Abc']
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for(let i=0;i<10;i++){
//     const ele=i;
//     if(i==3){
//         console.log(`${i} is repeated`);
//     }
//     console.log(ele)
// }


// const arr=[1,2,3,4,5,6];
// const sum=0;
// for(let i=0;i<arr.length;i++){
//     let max=arr[i];
//     for (let j=0;j<arr.length;j++) {
//         if(arr[j]>max){
//             max=arr[j]
//         }
//         console.log(`Max is ${max} and index is ${j}`);
//     }
//     console.log(`Max is ${max} `)
// }

//Break And Continue
for(let i=0;i<10;i++){
    if(i%2==0){
        console.log(`${i} is divided by 2`)
        continue;
    }
    else if(i%3==0 && i%2==1){
        console.log(`${i} is divided by 3 and not 2`)
        continue;
    }
    else if(i%3==0 && i%2==0){
        console.log(`${i} is divided by 3 and  2`)
        break;
    }
    else{
        console.log(`${i} is number`)
    }
}