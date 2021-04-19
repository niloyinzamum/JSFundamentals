// setTimeout(myFunction, 3000);
//
// function myFunction() {
//     console.log("done")
// }

setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    console.log(    d.getHours() + ":" +
        d.getMinutes()
        + ":" +
        d.getSeconds())

}