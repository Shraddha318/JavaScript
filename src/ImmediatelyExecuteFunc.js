//Immediately Invoked Function Expression(IIFE)
//Sometimes there is a problem with global scope pollution(var,func etc),to remove it we use iife.
// (function exec() {
//     console.log("Exe")
// })()
 //():First Parenthesis->Function definition
//():Second Parenthesis_>Execution call

//In Arrow function form
//For two IIFE in one program ,use semicolon at the end
    (()=>{
        console.log("Exe")
    })();

    (function one(){
        console.log("One")
    })();