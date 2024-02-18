// stack memory (for : primitive data types)
// copy (call by value ) (no changes in the original value) 

// heap memory (for : non primitive data types)
// reference (call by reference ) (original value also gets changed)

/*
stack -> copy of the variable (no change in original variable)
heap -> reference of the original variable (changes original variable)
 */

// copy passed -> original value remains the same (primitive data type)
let collegeName = "Graphic Era";
let fullCollegeName = collegeName;
fullCollegeName = "Graphic Era Hill University , Dehradun";
console.log(collegeName) // Graphic Era
console.log(fullCollegeName) // Graphic Era Hill University , Dehradun



// reference passed (heap)(non primitive data type) -> original value get modified
let appUser = {
  userMail : "varun@google.com" , 
  userUpi : "99@paytm"
}

let newUser = appUser ;
newUser.userMail = "varun7122001@gmail.com" ;

console.log(appUser)   // { userMail: 'varun7122001@gmail.com', userUpi: '99@paytm' }
console.log(newUser)   // { userMail: 'varun7122001@gmail.com', userUpi: '99@paytm' }

/*          output : 

            appUser
{ 
  userMail: 'varun7122001@gmail.com', 
  userUpi: '99@paytm' 
}
            
              newUser
{ 
  userMail: 'varun7122001@gmail.com', 
  userUpi: '99@paytm' 
}

*/