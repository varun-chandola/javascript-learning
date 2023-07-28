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