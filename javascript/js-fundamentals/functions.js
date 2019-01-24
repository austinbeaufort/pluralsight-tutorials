// FUNCTION SCOPE

// function startCar(carId) {
//     let message = 'Starting..';
// }

// startCar(123);
// console.log(message); // Error, cannot see inside the function.


// function startCar(carId) {
//     let message = 'Starting..';
//     let startFn = function turnKey() {
//         console.log(message); // 'Starting..'
//     };
//     startFn(); // 'Starting..'
// }
// startCar(123); // visible.


// function startCar(carId) {
//     let message = 'Starting..';
//     let startFn = function turnKey() {
//         let message = 'Override';
//     };
//     startFn();
//     console.log(message) // 'Starting..' // cannot see inside the startFn funtion.
// }
// startCar(123);


// function startCar(carId) {
//     let message = 'Starting..';
// }
// startCar(123);
// console.log(message); // error. Cannot see inside the function.



// BLOCK SCOPE
// if (5 === 5) {
//     let message = 'Equal';
//     console.log(message); // Equal // can see the variable. In same scope.
// }
// console.log(message); // Error // 5 does equal 5, but cannot see inside the block, outside of scope.


// let message = 'Outside'; // global scope.
// if (5 === 5) {
//     let message = 'Equal';
//     console.log(message); // Equal // can see the variable. In same scope.
// }
// console.log(message); // Outside // cannot see in the block scope, but can see 'message' in the global scope.


// if (5 === 5) {
//     var message = 'Equal'; // gets hoisted to top of file, makes it global.
// }
// console.log(message); // equal.



// IIFE's (Immediately invoked function expression)

// (function() {  // put () around the function, it is called immediately and usually
//                // assigned to a variable.
//     console.log('in function');
// })();


// let app = (function() {
//     let carId = 123;
//     console.log('in function');
//     return { };
// })();

// console.log(app);



// CLOSURES

// let app = (function() { // variable 'app' gets set to the return value of the IIFE, {getId: getId};
//     let carId = 123;
//     let getId = function() {
//         return carId; // returns 123
//     };
//     return {
//         getId: getId // key: value is getId function, which returns the value 123.
//     };
// })();

// console.log( app.getId() );



// 'THIS' KEYWORD.

// let fn = function() {
//     console.log(this === window);
// };

// fn(); // true;


// let o = {
//     carId: 123,
//     getId: function() {
//         console.log(this); // 'this' refers to 'o' , the object.
//         return this.carId;
//     }
// };

// console.log( o.getId() ); // 123



// CALL AND APPLY
// let o = {
//     carId: 123,
//     getId: function() {
//         return this.carId;
//     }
// };

// let newCar = { carId: 456 }; // 'this' gets set to newCar object when .call() is used.

// console.log( o.getId.call(newCar) ); // 456
// instead of running getId on 'o', it calls newCar and runs getId on newCar.


// let o = {
//     carId: 123,
//     getId: function(prefix) {
//         return prefix + this.carId;
//     }
// };

// let newCar = { carId: 456 };

// console.log( o.getId('Peter Pan: ')); // 'Peter Pan: 123' 
// calls the getId function and takes 'Peter Pan: ' as the argument. 

// console.log( o.getId.apply(newCar, ['ID: ']) ); // 'ID: 456;
// passes the object to receive the value of 'this'
// also passes an array of arguments. .apply( object, array of arguments);



// BIND

// let o = {
//     carId: 123,
//     getId: function() {
//         return this.carId;
//     }
// };

// let newCar = { carId: 456 };
// let newFn = o.getId.bind(newCar); // creates newFn, which is a new function that calls
//                                   // getId on newCar object.

// console.log( newFn() ); // 456



// ARROW FUNCTIONS

// let getId = () => 123; // getId is a function with no parameters that returns the value '123'.

// console.log( getId() ); // 123

// let getId = prefix => prefix + 123;
// console.log( getId('ID: ') ); // ID: 123

// let getId = (prefix, suffix) => prefix + 123 + suffix;

// console.log( getId('ID: ', '!') ); // ID: 123!



// DEFAULT PARAMETERS

// let trackCar = function(carId, city='NY') {
//     console.log(`Tracking ${carId} in ${city}.`);
// };

// console.log( trackCar(123) ); // Tracking 123 in NY. // when no 2nd parameter entered,
//                               // 'NY' becomes the default value for city.

// console.log( trackCar(123, 'Chicago')); // Tracking 123 in Chicago.