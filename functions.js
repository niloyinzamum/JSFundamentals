function aRegFunc(args1, args2){
    console.log("aRegFunc")
}
// -----------------------------------------
let anArrowFunc = (x ,y)=>{
    console.log("arrow function")
}
//------------------------------------------

let anAnonymusFunc = function (p, q) {
    console.log("anonymus function")
}
//------------------------------------------

let anObj = {
    name: "theName",
    objFunc1 :function objFunction(){
        console.log(`with regular function ${this.name}`)
    },

    anotherFunc(){
        console.log(`with regular function ${this.name}`)
    } ,

    afunc : function (){
        console.log(`with anonymus function ${this.name}`)
    }, 

    arrow : ()=>{
        console.log(`with anonymus function ${this.name}`) //arrow function doesn'nt have a this
    }, 

}

//-----------------------------------------
aRegFunc();
anArrowFunc();
anAnonymusFunc();

anObj.objFunc1();
anObj.anotherFunc();
anObj.afunc();
anObj.arrow();

