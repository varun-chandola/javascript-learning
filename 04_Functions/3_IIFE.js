// IIFE -> Immediately Invoked Function Expression ()()
// ()() ; => ; stops the context

function one(){
    console.log("DB CONNECTED");
}
one(); // function call


// IIFE
(function two(){
    // named IIFE
    console.log("DB CONNECTED");
})() ; // we have to add ; because this exectution will not stop itself
// ()() this gets referenced and executed at the same time
// passing vals
// ()() // function definition and funciton call at the same time

(function add(num1,num2){
    console.log(num1+num2) // 30
})(10,20); // we have to add ; because this exectution will not stop itself . 
// ()() ; => ; stops the context

(function hello(name){
    console.log(`hi ${name}`); // hi Varun
})("Varun") ; // we have to add ; because this exectution will not stop itself

((name)=>{
    console.log(`hi , your name is ${name}`) //hi , your name is Varun
})("Varun");