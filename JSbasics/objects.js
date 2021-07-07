let obj = new Object();
let object1 = {};
object1= {
    value1: "john",
    "last name": "doe",
    age : 30,
}

let ishe = "gender male";

object1.likesto = "eat"
object1.todelete = "this value"
object1["doesn't like"] = "cats"
object1[ishe] = true
// alert( user.key ) // undefined, keys cannot be assigned with . operator
let fruit = "apple"
let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};



delete object1.todelete;

console.log(object1)
console.log(object1["doesn't like"])
console.log(object1["last name"])
console.log(object1.value1)
console.log(bag)

//------------------------------------------Property Value Short Hand--------------------------------
function makeUser(name, age) {
    return {
        name, // same as name: name
        age,  // same as age: age
        // ...
    };}

//-----------------------Closure--------------------------------
// <!DOCTYPE html>
// <script>
//     "use strict";
//     let value="this"
//     function getFunc() {
//     let value = "test";
//
//     let func = new Function(value, 'alert(value)');
//
//     return func;
// }
//
//     getFunc()(); // error: value is not defined
// </script>