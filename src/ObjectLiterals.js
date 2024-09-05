//Objects Literals
const mysmb=Symbol("key1")
const jsuser={
    name:"JavaScript",
    "Id":"ie123",
    [mysmb]:"key",
    location:"Chandigarh",
    num:192,
    isLoggedIn:true
}
//Objects calling
console.log(jsuser);
// console.log(jsuser.name);
// console.log(jsuser["location"]);
// console.log(jsuser["num"]);
// console.log(jsuser["Id"]);
// console.log(jsuser.Id)
// console.log(jsuser[mysmb])
// console.log(jsuser[mysmb]["name"]);
 // Changing values of objects
jsuser.name="Shraddha"
console.log(jsuser.name);
//Object.freeze(jsuser);//No changes can be made into objects
//jsuser.name="JavaScript"
console.log(jsuser)
jsuser.greeting=function (){
    console.log("Hello "+jsuser.name);
}
console.log(jsuser.greeting)
console.log(jsuser.greeting());