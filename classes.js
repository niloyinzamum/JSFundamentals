//literal meaning - a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality.
//In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state and implementations of behavior.

class theClass {
    constructor(){
        console.log("this will run when the object is created")
    }

    foo() {
        console.log("this will run when the object when object calls this")
    }
}

const bar = new theClass()
bar.foo()