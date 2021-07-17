function aFunc(param, callback){
    const something = "something"
    console.log(something)
    callback(something, param)

    console.log(something)
}
aFunc("new", setTimeout((somethingArg, paramArg)=>{console.log(`${somethingArg} ${paramArg}`)},3000))
// setTimeout(aFunc("new", (somethingArg, paramArg)=>{console.log(`${somethingArg} ${paramArg}`)}),3000)