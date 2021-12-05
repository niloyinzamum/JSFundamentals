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

class MasterCLass{
    objVal;

    constructor(classVar){
        this.objVal =  classVar
        console.log("classvar: "+classVar)     
        console.log("objVal: "+this.objVal)     
    }
    
    anotherFunc(takesValue){
        console.log(this.objVal) 
        console.log(takesValue)
    }
    }
   
 class ChildClass extends MasterCLass{
    aNewFunc(){
        this.anotherFunc(56)
    }
 }   

const masterObj =new MasterCLass(25)
masterObj.anotherFunc("this")

const ChildClassObj = new ChildClass("childObject")
ChildClassObj.anotherFunc(5)
ChildClassObj.aNewFunc()

class ANewMasterClass{
    aVariable=10;
    constructor(aVariable){
        this.aVariable = aVariable
    }
    aMethod(){
        console.log("this method says "+this.aVariable)
    }
}

class ANewChildClass extends ANewMasterClass{
    
    constructor(aNewVariable){
        super(aNewVariable)
    }
    childMethod(){
        console.log("in child method: "+this.aVariable)
        console.log(this.aVariable)
        this.aMethod()
    }
}

const childObj = new ANewChildClass(21)
childObj.childMethod()
// ------------------------------------------------------------------------------
class Animal{
    name;
    constructor(name){
        this.name = name
    }

    run(speed){
        this.speed= speed
        console.log("speed: "+ speed)
    }

    stop(){
        this.speed =0
        console.log("speed: "+ this.speed)
        } 
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    hide(){
        console.log(this.name+ " hides")
    }
}
const dogObj = new Dog("dog")
dogObj.run(10)
dogObj.stop()
dogObj.hide()

//---------------------------------------------------
class Parent{
    _hairColor
    #FaceBookAccount
    _bloodGroup
    charitableCompany

    constructor(hairColor, faceBook, bloodGroup, charitableCompany){
        hairColor = this._hairColor
        faceBook = this.#FaceBookAccount
        bloodGroup = this._bloodGroup
        charitableCompany = this.charitableCompany
    }

    get hairColor(){
        return this._hairColor
    }

    get charitableCompanyFunc(){
        return "has charitable company"
    }
}

class Child extends Parent{

}


const parentObj = new Parent("red","available", "B+ve", " ")
console.log(parentObj.charitableCompanyFunc) //public method 
const child1Obj = new Child()
console.log(childObj.hairColor)