// The JS engine goes through two phases....

// 1. Creation Phase 
// 2. Execution Phase. 

// At the creation phase our code is scanned and ALL variables (used with the 'var' keyword) and function declarations gets stored in memory. Variable names are given space in
// memory and are given the default value of 'undefined' and the whole function declaration block also gets placed into memory.
// Then during the execution phase, these variables and functions are already available to the JS engine, which is why you can call a function before it's declared, because that 
// call will 'point' to the function within memory.
// This behaviour of memory storage is what is called 'Hoisting' and happens within each function block too, where any variables declared within a function are stored in 'local'
// memory for that function to use.

//Easy explanation: if you hoist (call) your variable before defining it it will say undefined case first needs to be defined and then called. But functions by themselvs
// can be hoisted at the top (not in case of being declared in a variable) so if you call a function before declaring it it will work. 
//But not in variable AT ANY CASE.