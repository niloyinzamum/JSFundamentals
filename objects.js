testObject = {
    theValue : "world",
    firstKey: "first value",
    secondKey: "second value",
    aFunc :function aFobjectFunction1(){
        let theValue = "hello"
        console.log(this.theValue+ ` ${theValue}`)
    },
    aFobjectFunction :function (){
        let theValue = "hello"
        console.log(theValue)
    },
    secondFunction(){
        console.log("second function")
    }
}

// console.log(testObject.firstKey)
testObject.aFunc()
// console.log(testObject.aFobjectFunction())
// console.log(testObject.secondFunction())
console.log(testObject)

//using for in is the only 
for(let i in testObject){
    console.log(i)
    console.log(testObject[i])
}

testObject.firstKey = "new value"
console.log(testObject.firstKey)

testObject["third_key"] = "value for third key"

console.log(testObject.third_key)