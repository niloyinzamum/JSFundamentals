//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.
function greeting(name){
    console.log('hello '+ name);
}

function ProcessUserInput(callback) {
    var name = "birdie"

    //---------but first processUserInput function will run first-------------
    console.log("---------but first processUserInput function will run first--------------")

    //2. greeting function is taking the name as argument here and getting 
    //revoked inside this function  
    callback(name)
}

//1. sending the greeting function through this argument 
ProcessUserInput(greeting)


//--------------------------------another 
function foo(value, vari){
    console.log(`doing something with this ${vari}`)
    console.log(value)
}

function bar(value, callback){
    let vari = "variable"
    callback(value, vari)
}

bar("another value", foo)