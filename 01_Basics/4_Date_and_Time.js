// date and time format
//  YYYY-MM-DDTHH:mm:ss.sssZ

// let anyDate = new Date(year , month , day) => the month starts with 0 

// anyDate.toLocaleString() => 
// toLocaleString() => output => jis tarah hum date likhte hai dd / mm / yy , time
// example anyDate = new Date(2024 , 1, 18) => output => 18/2/2024 , 12:00:00 am

// toDateString() => output => day mm dd yy => jaise angrez karte hai
// anyDate = new Date(2024,1,18) => output => sun feb 18 2024

// .toLocaleDateString() => output like .toLocaleString() wihout timestamp
// anyDate = new Date("2024-1-18") => output => 18/1/2024


let myDate = new Date() ; // this assigns the current date to myDate
// console.log(myDate)
// console.log(typeof myDate) // object 
 
// console.log(myDate.toLocaleString()) // today's date => 18//2/2024 8:56:56 pm
// console.log(myDate.toDateString()) // sun feb 18 2024

let newDate = new Date("2001-12-07");
// console.log(newDate) 

let aDate = new Date(2024 , 1 ,18 )
console.log(aDate.toLocaleString())
console.log(aDate.toDateString())

// console.log(newDate.toDateString())  // fri dec 07 2001
// console.log(newDate.toLocaleString()) // 7/12/2001 , 5:30:00 am
// // console.log(newDate.toLocaleDateString) 
// console.log(newDate.toLocaleTimeString()) // 5:30 :00 am
// console.log(newDate.toISOString())  // 2001-12-07T00:00:00.000z

console.log("................")
let ddate = new Date("2024-1-29") ;
console.log(ddate)
console.log(ddate.toDateString())
console.log(ddate.toLocaleString())
console.log(ddate.toLocaleDateString());