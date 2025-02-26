// const arr=[1,2,3,4,5,6];
// console.log(arr.length);
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr.push(7))
// console.log(arr.toString());
// console.log(arr.pop());
// console.log(arr.toString());
//
// const myarr=new Array(1,2,3,4,5,6,7,7,5,2,3)
// console.log(myarr.length)
// console.log(typeof myarr)
//
// const newarr=myarr.join()
// console.log(newarr.length)
// console.log(newarr)
// console.log(newarr.toString())
//
// const newarr2=myarr.slice(0,4)
// console.log(newarr2.toString())
// const newarr3=myarr.splice(0,4)//Splice manipulates the original array
// console.log(newarr3.toString())
// console.log(myarr.toString())
// console.log(Array.from("Shraddha"))
// console.log(Array.of(1,2,3,4,5,6,7,7,8,9))


// const tea=['green tea','black tea','oolong tea']
// const first=tea[0];
// console.log(first);
//
// const cities=['London','Tokyo','Paris','New York']
// const third=cities[2]
// console.log(third)
//
// const teaTypes=new Array('Herbal tea','White tea','Masala chai');
// teaTypes[1]='Jasmine tea'
// console.log(teaTypes[1])

// const citiesVisited=['Mumbai,Sydney']
// citiesVisited.push('Berlin')
// console.log(citiesVisited[citiesVisited.length-1])
// citiesVisited[citiesVisited.length]="Amsterdam"
// console.log(citiesVisited)
//
// const teaOrder=["Chai","Iced tea","Matcha","Earl grey"]
// teaOrder.pop();
// console.log(teaOrder);

//Soft copy
// const popularTree=['Grren tea','Oolong tea','Chai'];
// const softCopyTeas=popularTree;
// popularTree.pop()
// console.log(softCopyTeas)
// console.log(popularTree)

//Hard copy
const topCitties=['Berlin','Singapore','New York']
const hardCopyCities=[...topCitties]
console.log(hardCopyCities)
topCitties.pop()
console.log(hardCopyCities)


//Merge two array
const euro=['Paris','Rome']
const asia=['Tokyo','BangKok']
let world=euro.concat(asia)
console.log(world)

const cityBucket=["Kyoto","Cape town","London","Vancouver"];
let isLondonInList=cityBucket.includes('London')
console.log(isLondonInList)