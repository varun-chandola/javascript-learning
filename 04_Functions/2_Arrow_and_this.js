// console.log(this) : => {} // in node/vs code
// global object of the browser -> window 
// cannot use this. inside  functions  (remember) . context do not work in the case of functions 
// this. can only be used inside objects .

// this is used for current context of scope
// this. helps to access the variables of the scope
const user = {
    name : "Varun" ,
    price : 300 , 
    grettingMesssage : function(){
        console.log(`${this.name} , Welcome`)
    }
}

user.grettingMesssage()
user.name = "Vishal"
user.grettingMesssage()



// // let us see what is the value of the context i.e this is
const sample =  {
    myName : "Varun" ,
    course : "B.Tech" ,
    age : 22 ,
    city : "Dehradun",
    detail : function(){
        console.log(`Welcome , ${this.myName} persuing ${this.course}  in ${this.city} , age ${this.age} `);
        console.log("the current context i.e this is : ");
        console.log(this)
    }
}
sample.detail()
// /*
// Welcome , Varun persuing B.Tech  in Dehradun , age 22 
// the current context i.e this is : 
// {
//   myName: 'Varun',
//   course: 'B.Tech',
//   age: 22,
//   city: 'Dehradun',
//   detail: [Function: detail]
// }
//  */

sample.myName = "Vishal"
sample.course = "Physiotherapy"
sample.detail()
/*
Welcome , Vishal persuing Physiotherapy  in Dehradun , age 22 
the current context i.e this is :
{
  myName: 'Vishal',
  course: 'Physiotherapy',
  age: 22,
  city: 'Dehradun',
  detail: [Function: detail]
// }
//  */


// /////        ARROW FUNCTIONS and using this in functions
// // 1 . normal functions 
function learn(){
    let firstName = "Varun" ;
    console.log(this.firstName) // undefined
    console.log(this)
}

learn()  // call

// // 2. function expression
const learn2 = function(){
    let Name = "Varun" ;
    console.log(this.Name) // undefined
    console.log(this)
}
learn2()  // call

// // 3 . arrow function
const learn3 = () =>{
    let myName = "Varun"
    console.log(this.myName) // undefined
    console.log(this) // {} because global scope 
} 
learn3() // call



const addBoth = (num1 ,num2) =>{
    return num1 + num2 ;
}
console.log(addBoth(10,20));

// implicit return  // these are used in react
const addingVals = (num1 , num2 ) =>  num1 + num2
console.log(addingVals(10,20)) // 30
// another way to do same
const adding = (num1 , num2) => (num1 + num2)
console.log(adding(10,20)) // 30
// returning object 
// const add = (num1 , num2) => ({name : "Varun"})