function aFunc(param, callback){
    const something = "something"
    callback(param, something)
}

aFunc("a string", (param, something)=>{
    console.log(param, something)
})