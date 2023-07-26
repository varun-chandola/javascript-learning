// primitive (stack) , non-primitive (heap)
/*
stack -> copy of the variable (no change in original variable)
heap -> reference of the original variable (changes original variable)
 */

// copy passed -> original value remains the same
let collegeName = "Graphic Era";
let fullCollegeName = collegeName;
fullCollegeName = "Graphic Era Hill University , Dehradun";
console.log(collegeName)
console.log(fullCollegeName)


// reference passed (heap) -> original value get modified
let userOne = {
    email : 'user@gmail.com',
    paytmId : 'phoneNO@paytm',
    phoneNumber : 9090909090
}
let userTwo = userOne;
userTwo.email = 'varun7122001@gmail.com';
userTwo.phoneNumber = '9999999999';

console.log(userOne)
console.log(userTwo)

/* output    user1
{
    email: 'varun7122001@gmail.com',
    paytmId: 'phoneNO@paytm',
    phoneNumber: '9999999999'
  }
             user2
  {
    email: 'varun7122001@gmail.com',
    paytmId: 'phoneNO@paytm',
    phoneNumber: '9999999999'
  }
*/