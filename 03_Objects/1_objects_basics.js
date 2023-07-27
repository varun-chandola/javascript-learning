// 2 ways of making objects 
// 1. Literals , 2. Constructors
// Constructor declaration makes singleton object
// singleton -> Object.create

// object Literals
const userObject = {
    // key : value
    name : 'varun',
    age : 22,
    yob : 2001,
    location : 'haldwani',
    isLoggedIn : false,
    email : 'varun7122001@gmail.com',
    /* important */ "College Name" : 'Graphic Era'
}
userObject.name = 'varun chandola'
// different ways to access memebers of the objects
console.log(userObject.email);
console.log(userObject['email']);  // more correct manner
// console.log(userObject.College Name); // that why "key": notation is good
console.log(userObject["College Name"]);

userObject.greetings = function(){
    console.log("greetings 1");
}

userObject.greetingsTwo = ()=>{
    console.log(`greetings 2 , ${userObject.name}`);
}

userObject.greetingsThree = function(){
    console.log(`greetings 3 , ${this.name}`);
}
console.log(userObject.greetings())
console.log(userObject.greetingsTwo())
console.log(userObject.greetingsThree());