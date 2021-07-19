let promise = new Promise((resolve, reject)=>{
    if(0>09)
    {
        resolve("resolved")
        reject(new Error("erro msg"))
    }
    else reject(new Error("errr"))
})

promise.then((result)=>{console.log(result)})
.catch(err=>{console.log(err)})