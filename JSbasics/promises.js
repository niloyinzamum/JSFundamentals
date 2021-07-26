let promise = new Promise((resolve, reject)=>{
    if(9>0)
    {
        resolve("resolved");
        reject(new Error("erro msg"));
    }
else reject(new Error("errr"))
})

// promise.then((result)=>{console.log(result)})
//     .catch(err=>{console.log(err)})
// .finally(()=>{console.log("finally")})

let testPromise = new Promise((resolve, reject)=>{
    if(14<16){
        resolve("resolved")
    }else{
        reject(new Error("error"), "rejected")
    }
})

testPromise
    // .then(console.log)
    .then((value)=>{console.log(value)})
.catch((err)=>{console.log(err)})
.finally(()=>{console.log("finally")})