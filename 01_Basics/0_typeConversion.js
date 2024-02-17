// DATA TYPE CONVERSION CONFUSION

// let score = 33 ;
let score = "33abc"; // now the type becomes string (before it was number)
console.log(typeof score); // string
console.log(typeof(score)); // string

let convertedToNumber = Number(score);
console.log(typeof convertedToNumber); // number

console.log(score);
console.log(convertedToNumber);
// but in case of 33abc => NaN

// "33" => 33
// "33abc" => NaN
//  true => 1 / false => 0


// for booelan
// 1 => true / 0 => false
// "" => false 
// "Varun" => true

// let isLoggedIn = true
// let isLoggedIn = 1 ;
let isLoggedIn = "Varun";
// let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);
console.log(booleanIsLoggedIn);


// operations
console.log(3**3); // this becomes a**b => a^b => 3**3 => 27

console.log(1+2) ; // 3
console.log("1" + 2 + 2); // 122 treated as string
console.log(2 + 2 + "1"); // 41 treated as int and merged a string

// comparision checks
console.log("2" == 2) ; // true
console.log("2" === 2) ;  // false
// == converts their data type to same
// === is strict check and it checks the values and the data type . if both are same then only it results true . else if results false
console.log(100 === 100) ; // true