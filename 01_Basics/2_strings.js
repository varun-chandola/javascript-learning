const name = 'varun'
const age = 22
// console.log('hi my name is '+name+' and i am '+age+' years old') (not reccmnd)
console.log(`hey , my name is ${name} and i am ${age} year old`)   //(inside ``)
/*
const name = 'varun' is equivalent to 
const name = new String('varun') 
they both return key/value pairs so we can use funcitons on them like .length,.toUpperCase() ,.toLowerCase(),.indexOf(),.charAt() ... etc
*/

// const collegeName = new String('Graphic Era');
const collegeName = 'Graphic Era'
console.log(collegeName[0])  // G
console.log(collegeName[2]) // a     ... and so on 
console.log(collegeName.toUpperCase());  // GRAPHIC ERA
console.log(collegeName.toLowerCase()); // graphic era
console.log(collegeName.indexOf('E')); // 8
console.log(collegeName.length); // 11
console.log(collegeName.charAt(4));  // h (0 base indexing)


const inputName = '           varun            '
const newInputName = inputName.trim();
console.log(inputName)  // op ->                   varun   
console.log(newInputName) // op -> varun