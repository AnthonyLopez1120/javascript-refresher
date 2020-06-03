//Callback functions - functions that are passerd inot other functions as arguments
// const functionFeeder = function(callback){
//     callback('Hello from the Function Feeder')
// }

// functionFeeder((string) =>{// invoking the function
//     alert(string)// alert a function that pops up in a browser
// })

//the above functionFeeder is now a higher order function. It is taking a function as a parameter and executes a function when called with a function as the argument

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------]
//This function, sayHello, is set up to be reusable. It will be introduced as a argument later
function sayHello(name){
    console.log(`Hello, ${name}`)
}

function callSayHelloWithAnthony(callback){
    const innerName = 'Anthony'
    callback(innerName)
}
//The callback in the above function will become sayHello when we invoke

callSayHelloWithAnthony(sayHello)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------]