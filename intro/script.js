console.log("Hello World!");  // prints Hello World! in the console of the browser

/* loops and strings in the javascripts*/ 
// we use the loops in the javascript to repeat the same task again and again
// here we will be covering two parts

// 1. loops and 2. strings
// why loops are used?
// loops are used to repeat the same task again and again
// for example, if we want to print the numbers from 1 to 10, we can use the loops

/////////////// types of loops in javascripts ////
// 1. for loop : used when we know the number of iterations
// syntax of the for loops //////
// for(initialization; condition; increment/decrement){
//     // code to be executed
// }

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// second example of the for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// template literals 

// while loops //
// we use the while loops when we dont know how many time we need to run
// depends on the conditions

// syntax of the while loops
// initialization
// while(condition){
//     // code to be executed
//     // increment/decrement
// }

let i=1; // initialization
while(i<=5){// condition
    console.log("Count using while loop: " + i);// code to be executed
    i++;// increment
}

// do wile loops in the javascipt

// it runs the code at least once even if the condition is false
// syntax of the do while loops
// initialization
// do{
//     // code to be executed
//     // increment/decrement
// }while(condition);

