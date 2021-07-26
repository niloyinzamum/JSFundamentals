
// async function f(){
//     return 1
// }
// f().then(console.log)

// async function f(){
//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(()=>{resolve("resolved")}, 2000)
//     } )
//
//     let result = await promise
//     console.log(result)
// }
//
// f()

async function f()
{
    try {
        let response = await fetch('http://no-such-url');
    } catch(err) {
        console.log(err); // TypeError: failed to fetch
    }
}
f()