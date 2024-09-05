const user=new Object()
user.id=101
user.name="Shraddha"
user.email="shraddha@gmail.com"
user.password="123456"
console.log(user)
const user1={
    fullname:{
        userfullname:{
        username:"Shraddha",
        lastname:"Tripathi",
        }
    }
}
console.log(user1)
console.log(user1.fullname.userfullname.username)

const obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
const obj2={
    5:"e",
    6:"f"
}
const obj3 ={
    7:"g"
}
// const obj4=Object.assign({},obj1,obj2,obj3);
// console.log(obj4)
// console.log(obj4==obj1)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)

const user2=[
    {
        username:"Shraddha",
        lastname:"Tripathi",
        email:"shraddha@gmail.com"

    },{
    username:"Edha",
    }
]
console.log(user2[1].username)
console.log(user2[0])