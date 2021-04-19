// const posts = [
//     {title: 'Post one', body:'This is post one'},
//     {title: 'Post two', body:'This is post two'}
// ];
//
// function getPosts(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post, index) =>{
//             output += `<li>${post.title}</li>`;
//         });
//         console.log(output);
//
//     }, 1000);
// }
//
// function createPosts(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     }, 2000)
// }


let p = new Promise((resolve, reject)=>{
    let a = 1+3
    if (a==2)
    {
        resolve('success')
    }
    else {
        reject("reject")
    }
})

p.then((message)=>{
    console.log('in then'+ message)
}).catch((message)=>{
    console.log('in catch'+ message)
})
