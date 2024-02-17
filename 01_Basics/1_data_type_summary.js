/* 
typeof of all values
undefined => undefined
Null => Object ..............null ka typeof(null) object aata hai
Boolean => boolean
Number => number
String => string
Object => object 
*/

/*
JavaScript is a dynamically typed language. 
This means you don't have to specify the data type of a variable when you declare it. 
It also means that data types are automatically converted as-needed during script execution
*/

// on the basis of how data is stored and accessed . there are 2 data types
// 1 . primitive (call by value)

// String
// Number
// Boolean
// null
// undefined
// BigInt
// Symbol    // unique values  // its return type is symbol

let name = "Varun" ;         //  String
let age = 20 ;              //   Number
let isLoggedIn = true ;    //    boolean
let temp = null;          //     null
let userEmail ;          //      undefined

const id = Symbol('123');     // symbol
const anotherId = Symbol('123');
// these both are different even though they both have same vals in them . 
// they both are different because they are symbols
console.log(id === anotherId) // false . because both values are different 


// 2. Non Primitive (reference) (call by reference)
// Array , Objects , Functions

const names = ["varun" , "vishal" , "vaibhav"] ; // typeof => object

// typeof object
let myDetails = {
    name : "varun" ,  
    age : 22 ,
    College : "graphic era",
    StudentId : 210111069
}

// typeof(myFunction) => function (also known as function object)
let myFunction = function(){
    console.log("hello world");
}

console.log(typeof(names)) // object
console.log(typeof myDetails) // object
console.log(typeof myFunction) // function