const marvel_heros = ['ironMan','spiderMan','captainAmerica']
const dc_heros = ['batman','superman','flash']
marvel_heros.push(dc_heros)
console.log(marvel_heros)  
// ['ironMan','spiderMan','captainAmerica',[ 'batman', 'superman', 'flash']

console.log(marvel_heros[3]) // [ 'batman', 'superman', 'flash' ]

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
// ['ironMan','spiderMan','captainAmerica','batman','superman','flash']
//  concat returns a new array

//......................................................................

// spread operator  -> a better way apporach than .concat()
const marvel = ['ironMan','spiderMan','captainAmerica']
const dc = ['batman','superman','flash']
const spreadAllHeros = [...marvel,...dc];
console.log(spreadAllHeros);

// ['ironMan','spiderMan','captainAmerica','batman','superman','flash']
//......................................................................

// Array.from() and Array.of() operations on array

const makeArray = Array.from("VARUN");
console.log(makeArray); // [ 'V', 'A', 'R', 'U', 'N' ]

const firstName = 'varun'
const lastName = 'chandola'
const country = 'india'
const state = 'uttarakhand'

const arrOf = Array.of(firstName,lastName,country,state);
console.log(arrOf); // [ 'varun', 'chandola', 'india', 'uttarakhand' ]