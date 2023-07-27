// object creation using constructor
const anyObject = new Object(); 
// { id: '123dd', userName: 'varunchandola', isLoggedIn: false }

const instaUser = { }
// { id: '123dd', userName: 'varunchandola', isLoggedIn: false }
instaUser.id = '123dd'
instaUser.userName = 'varunchandola'
instaUser.isLoggedIn = false

console.log(instaUser);
//..........................................................................................
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
    2:'two',
    3:'three'
}
const obj2 = {
    4:'four',
    5:'five',
    6:'six'
}

// to add more
// obj1[9] = 'nine'
// obj2[11] 'eleven'

const spreadObj3 = {...obj1 ,...obj2};
console.log(spreadObj3) 
// {'1': 'one','2': 'two','3': 'three','4': 'four','5': 'five','6': 'six'}