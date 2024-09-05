const string1=" Shraddha"
const repo=3;
console.log(`My name is ${string1} and repository count is ${repo}`);
const name=new String('Shraddha Tripathi');
//Original value of string is not changed, as it is in stack creates new memory
console.log(name)
console.log(name[2])
console.log(name.__proto__)
console.log(name.constructor)
console.log(name.length)
console.log(name.at(2))
const newName=new String(name.trim())//Trim:to remove starting and end spaces
console.log(newName)
console.log(name.endsWith("i"))
console.log(name.indexOf("a"))
console.log(name.lastIndexOf("b"))
console.log(name.substr(0,2))
console.log(name.substr(1,2))
console.log(name.codePointAt("r"))
const anoName=new String(name.slice(2,-1))
console.log(anoName)
const anoName1=new String(name.slice(1,3))
console.log(anoName1)
console.log(anoName.split(" "))