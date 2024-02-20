// rest operator
// rest operator is used when we don't know the number of arguments that are going to be passed in the function parameter

// the result of ... rest operator is an array of arguments
function restOperatorDemo(...nums){
    return nums
}
console.log(restOperatorDemo(100,200,300,400))
// [ 100, 200, 300, 400 ]
const result = restOperatorDemo(10,20,30,40,50)
console.log(result) 
// [ 10, 20, 30, 40, 50 ]

function restContinued(val1,val2,val3,...restValues){
    return restValues
}
const res = restContinued(1,2,3,4,5,6,7,8,9,10)
console.log(res)
// val1 = 1 , val2 = 2 ,val3 = 3
//  ...restValues = [4, 5,  6, 7,8, 9, 10] 



// ...........
function displayName() {
    console.log("V")
    console.log("A")
    console.log("R")
    console.log("U")
    console.log("N")
}

// displayName ----------> function reference
// displayName() -----------> function execute
displayName()

function userLogin(userName){
    if(userName === undefined){
        console.log("Enter Valid Username")
        return;
    }
    return `${userName} just logged in` ;
}

console.log(userLogin("Varun")) // Varun just logged in
console.log(userLogin()) // enter valid username

function userLoginGreet(username = "DefaultName"){ // if undefined userLoginGreet() => DefaultName
    if(!username){ // for "" => userLoginGreet("")
        console.log("Enter valid username")
        return;
    }
    return `${username} just logged in`;
}

console.log(userLoginGreet("Varun")) // Varun just loggged in
console.log(userLoginGreet("")) // Enter Valid Username
console.log(userLoginGreet()) // DefaultName just logged in



// 2 . passing objects in function
const detail = {
    name : "Varun" , 
    age : 22 , 
    city : "haldwani"
}

function handleObject(anyObj){
    return `${anyObj.name} , age ${anyObj.age} , from ${anyObj.city}` ;
}

console.log(handleObject(detail)) // Varun , age 22 , from haldwani

console.log(handleObject({
    name : "abc" , 
    age : 20 , 
    city : "delhi"
}))


//3.  passing array in functions
function returnSecondValue(anyArray){
    return anyArray[1];
}

const myArr = [10,20,30,40,50];
console.log(returnSecondValue(myArr)); // 20
console.log(returnSecondValue([1,2,3,4,5,6])); // 2