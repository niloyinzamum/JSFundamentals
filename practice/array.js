let anArray = ["first", "word", 1, 2, true, false, {
    anObj:"theValue",
    more:{
        foo: "bar",
        foo1: "bar1",
        aFunc: ()=>{
            console.log("something")
        }
    }
}]

//regular for loop
// for(i=0; i<anArray.length; i++){
//     console.log(anArray[i])
// }

//for in loop
// for(index in anArray)
// {
//     console.log(anArray[index])
// }

//for each loop (calls a function for each element in an array)
// anArray.forEach(theFunc)

// function theFunc(element, index, theArrray){
//     console.log("element: "+element)
//     console.log("index: "+index)
//     console.log("theArray:"+theArrray)
// }

//for of loop
for (elements of anArray){
    console.log(elements)
}