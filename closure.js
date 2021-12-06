//a variable declared in a function is only available to that function or scopes like loops and conditions
function aFunction(){
    let hello = "hello"
    console.log(hello)
}
// console.log(hello) //this will throw an error (hello is not defined)
aFunction()
// -------------------------------------------
function anotherFunction(foo, bar){
    console.log(`${foo} and ${bar} are just names that are used for naming to give an explaination`)
    let count = 0;
    return function(){ //nested function
        return count++
    };
}

let bar = anotherFunction("foo", "bar") //nested function can be returned as a property as a object     or as a result
console.log(bar()) 
console.log(bar())
console.log(bar())

//in JavaScript, functions, code blocks and the scripts are part of a hidden object called "Lexical Environment".   
//lexical environment keeps 2 kinds of records 
//1. an object that is called environment record, keeps the information of all the variables as its properties and
// some other information like this.
//2.Information about the outer lexical environment that is associated with the outer code.

//All functions remember the Lexical Environment in which they were made.
// all functions have the hidden property named [[Environment]], that keeps the reference to the Lexical
// Environment where the function was created

//if we look at the output: the outer function runs only once

//the outer layer is it's outer lexical environment thus it remembers the previous value
//and updates it inside.
// if there was no nexted function it wouldn't have no outer environment and everytime count would have become
// count = 0
// closure is a function that remembers its outer variables stored in its outer lexical environment and can
//access it. in javascript all the functions are closures.
  
