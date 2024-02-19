// 2 ways of making objects 
// 1. Literals , 2. Constructors
// Constructor declaration makes singleton object
// singleton -> Object.create()

// 1. object Literals
// object creates key : value pairs
// each key is used as string in objects
const user = {
    // key : value
    name : 'varun',
    age : 22,
    yob : 2001,
    location : 'haldwani',
    isLoggedIn : false,
    email : 'varun7122001@gmail.com',
    "College Name" : 'Graphic Era' /* important */
}

user.name = 'Varun Chandola'
// different ways to access memebers of the objects
console.log(user.email);  // varun7122001@gmail.com
console.log(user['email']);  // varun7122001@gmail.com
// if we use . to access keys / values of objects so we cannot access the College Name key in the object user . that is why we use ObjectName["KeyName"] to access

// more correct manner
// console.log(user.College Name); // error
// that why "key": notation is good
console.log(user["College Name"]); // Graphic Era

// // how to use Symbol as key in object
const symbolKey = Symbol("Key1");
const myDetail = {
  myName: "Varun",
  myAge: 22,
  myYOB: 2001,
  symbolKey: "key1", // this is string data type
  [symbolKey]: "Key1", // [key] : value // is syntax to use symbol is objs
};
console.log(myDetail["symbolKey"]) // key1 // but it access string variable named as symbolKey
console.log(typeof myDetail.symbolKey) // String // but we need Symbol

console.log(myDetail[symbolKey]); // key1 // that how we access Symbol in objs


user.greetings = function(){
    console.log("greetings 1");
}

user.greetingsTwo = function(){
    console.log(`greetings 2 , ${user.name}`);
    //greetings 2 , Varun Chandola
    // another way 
    console.log(`greetings 2 , ${user["name"]}`)
    //greetings 2 , Varun Chandola
}

console.log(user.greetings())
console.log(user.greetingsTwo())