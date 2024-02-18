const ind_bat = ['Kohli','Sachin','Dhoni']
const ind_bowl = ['Shami','Chahal','Bumrah']
ind_bat.push(ind_bowl)
console.log(ind_bat)
// //[ 'Kohli', 'Sachin', 'Dhoni', [ 'Shami', 'Chahal', 'Bumrah' ] ]
console.log(ind_bat[3]) // [ 'Shami', 'Chahal', 'Bumrah' ]

// .concat() 
//  Combines two or more arrays. This method returns a new array without modifying any existing arrays. the previous array remain same

const ind_team = ind_bat.concat(ind_bowl);
console.log(ind_team);
// [ 'Kohli', 'Sachin', 'Dhoni', 'Shami', 'Chahal', 'Bumrah' ]


//......................................................................

// spread operator  -> a better way apporach than .concat()
const bat = ["kohli","Dhoni","Sachin"]
const bowl = ['Shami','Siraj','Chahal']
const team = [...bat , ...bowl];
console.log(team);

// [ 'kohli', 'Dhoni', 'Sachin', 'Shami', 'Siraj', 'Chahal' ]


// Array.from() and Array.of() operations on array
const sample = "VARUN" ;
const makeArray = Array.from(sample);
console.log(makeArray); // [ 'V', 'A', 'R', 'U', 'N' ]

console.log(Array.isArray(sample)); // false

const firstName = 'Varun'
const lastName = 'Chandola'
const country = 'India'
const state = 'Uttarakhand'

const arrOf = Array.of(firstName,lastName,country,state);
console.log(arrOf); // [ 'varun', 'chandola', 'india', 'uttarakhand' ]