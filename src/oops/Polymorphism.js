class Bird{
    fly(){
        return 'Flying...'
    }
}
class Penguin extends Bird{
    fly(){
        return `Penhuin can't fly`;
    }
}
let b=new Bird()
let p=new Penguin()
console.log(b.fly())
console.log(p.fly())