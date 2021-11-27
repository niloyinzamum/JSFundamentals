let theArray = []

theArray = ["the", "name", "is", "giorgio", 1, 2, 3]

for(let i = 0; i<theArray.length; i++){
    console.log(`at position  ${i} : ${theArray[i]}`)
}
//if reversed
for(let i = theArray.length-1; i>=0; i--){
    console.log(`at position  ${i} : ${theArray[i]}`)
}

//using for of
for(let index of theArray)
    {console.log(index)}

//a bit complex
// theArray.forEach()

//convertig to string
console.log(theArray.toString())

//convert to string by changing the separator 
console.log(theArray.join("#"))

//pop the last element and returns on the last
console.log(theArray.pop())

//push new element and returns new array length
console.log(theArray.push("whew"))


//remove first element and shift elements to lower index
theArray.shift()
console.log(theArray)

//add a new element at the beginning
theArray.unshift('the')
console.log(theArray)

//delete an element keeping that index undefined
delete theArray[3]
console.log(theArray)

//adding new element specifyng how many elements to remove
theArray.splice(7,0, "quack")
console.log(theArray)

//remove an element on the first position safely
theArray.splice(0,1)
console.log(theArray)

theNewArray = ["new", "array"]

//merging two arrays, inside the concat function will be added after last index
let latestArray= theArray.concat(theNewArray)
console.log(latestArray)

//merging morethan one
latestArray = theArray.concat(latestArray, theNewArray)
console.log(latestArray)

//slicing the array and assigning it to a new one (remove first two positions)
console.log(theArray)
latestArray = theArray.slice(2)
console.log(latestArray)

//sorting in an alphabettical manner
latestArray.sort()
console.log(latestArray)

//reverse it
latestArray.reverse()
console.log(latestArray)

numberArray = [2,4,5,6,3,2,5,6]

//asdending order
numberArray.sort(function(a,b){return a-b})
console.log(numberArray)

//descending order
numberArray.sort(function(a,b){return b-a})
console.log(numberArray)

//random order
numberArray.sort(function(a, b){return .5-Math.random()})
console.log(numberArray)

//fisher yates method (1938)


