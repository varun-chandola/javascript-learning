// object creation using constructor
const anyObject = new Object(); 
// { id: '123dd', userName: 'varunchandola', isLoggedIn: false }

const instaUser = { }
// { id: '123dd', userName: 'varunchandola', isLoggedIn: false }
instaUser.id = '123dd'
instaUser.userName = 'varunchandola'
instaUser.isLoggedIn = false

console.log(instaUser);
//...................................................................................
// nesting of objects
const user = {
    email : 'user@gmail.com',
    fullName : {
        fullUserName : {
            firstName : 'first',
            LastName : 'last'
        }
    }
}

console.log(user);
/*{
    email: 'user@gmail.com',
    fullName: { fullUserName: { firstName: 'first', LastName: 'last' } }
  }
*/
console.log(user.fullName);
// { fullUserName: { firstName: 'first', LastName: 'last' } }
console.log(user.fullName.fullUserName);
// { firstName: 'first', LastName: 'last' }
console.log(user.fullName.fullUserName.firstName);
// 'first'
console.log(user.fullName.fullUserName.LastName);
// 'last'

const obj1 ={
    1:'one',
    2:'two'
}
const obj2 = {
    3:'three',
    4:'four',
}

// to add more
// obj1[9] = 'nine'
// obj2[11] 'eleven'

// ................................................
// assigning the values of objects to other objects
let obj3 = Object.assign({} , obj1 , obj2) ;
// console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

let objAssign = Object.assign(obj1,obj2);
// Object.assign() =>.assign(target: T, source: U)
// so we give target to .assign() as {} so that all the objects gets assign to a new object
// if we do .assign(obj1 , obj2) => the objects are assigned to obj1 and it gets changed to values combining obj1 + obj2 . that why we use {} so that all other objects remain same
console.log(obj1);
console.log(objAssign);

let target = {
    1 : "A" , 
    2 : "B"
}
let source = {
    3 : "C",
    4 : "D"
}

let result = Object.assign(target , source);
console.log(target) // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
console.log(source) // { '3': 'C', '4': 'D' }
console.log(result) // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }


let result2 = Object.assign({} , target , source)
console.log(target); // { '1': 'A', '2': 'B' }
console.log(source); //{ '3': 'C', '4': 'D' }
console.log(result2); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }



// another way : using spread operations 
const spreadObj3 = {...obj1 ,...obj2};
console.log(spreadObj3) 
// {'1': 'one','2': 'two','3': 'three','4': 'four','5': 'five','6': 'six'}



// we can also find the keys and values of objects
let keyVal = {
    city : "Haldwani" , 
    state : "Uttarakhand",
    country : "india"
}

console.log(Object.keys(keyVal)) 
// [ 'city', 'state', 'country' ]
console.log(Object.values(keyVal))
// [ 'Haldwani', 'Uttarakhand', 'india' ]