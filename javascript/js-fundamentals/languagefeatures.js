// constants must be initialized.

// console.log(carId);
// let carId = 100; // throws an error

// console.log(carId);
// var carId = 100; // undefined.

// use 'let' if possible.

// if (true) {
//     let carId = 100;
// }
// console.log(carId); // undefined, let has block scoping.

// if (true) {
//     var carId = 100;
// }
// console.log(carId); // 100, var has global scoping.

// REST PARAMETERS.

// function sendCars(...allCarIds) {
//     allCarIds.forEach( id => console.log(id));
// }

// sendCars(100, 200, 555);

// function sendCars(day, ...allCarIds) {
//     allCarIds.forEach( id => console.log(id));
// }

// sendCars('Monday', 100, 200, 255);


// DESTRUCTURING ARRAYS
// let carIds = [1, 2, 5]; // assigning the array to a variable.
// let [car1, car2, car3] = carIds; // assigning each array item a new variable.

// console.log(car1, car2, car3); // logging the new variables.

// let carIds = [1, 2, 5];
// let car1, remainingCars; // can declare multiple variables on the same line.
// [car1, ...remainingCars] = carIds;

// console.log(car1, remainingCars); // first element will get stored in car1
//                                   // everything else will get stored in the remainingCars array.


// let carIds = [1, 2, 5];
// let remainingCars;
// [, ...remainingCars] = carIds; // because of the comma we skip value 1.

// console.log(remainingCars); //  [2, 5];


// let carIds = [100, 200, 300];
// let [car1, car2] = carIds; // 300 is not assigned a variable and therefore does not get a variable.

// console.log(car1, car2); // 100, 200


// let carIds = [100, 200, 300];
// let [car1, car2, ...theRest] = carIds; // puts 300 into an array

// console.log(car1, car2, theRest); // 100, 200, [300]


// let carIds = [100, 200, 300];
// let car1, car2, theRest;

// [, car2, ...theRest] = carIds; // nothing before first comma, first array item gets skipped. 

// console.log(car1, car2, theRest); //  undefined, 200, [300]



// DESTRUCTURING OBJECTS

// let car = { id: 5000, style: 'converrtible' };
// let { id, style } = car;

// console.log(id, style);


// let car = { id: 5000, style: 'converrtible' };
// let id, style;
// ({ id, style } = car); // must use parenthesis around the statement so javascript knows we are destructuring an object.

// console.log(id, style);


// SPREAD SYNTAX
// function startCars(car1, car2, car3) {
//     console.log(car1, car2, car3);
// }

// let carIds = [100, 300, 500];
// startCars(...carIds);  // 100 300 500


// function startCars(car1, car2, car3) {
//     console.log(car1, car2, car3);
// }

// let carCodes = 'abc'; // spread syntax works on strings also.
// startCars(...carCodes); // a b c


// function startCars(car1, car2, car3, ...rest) { // log car1 = 1, car 2 = 2, car 3 = 3, rest = [4, 5, 6];
//     console.log(car1, car2, car3, rest);
// }

// let carIds = [1, 2, 3, 4, 5, 6];
// startCars(...carIds); // takes in all six ids



// TYPEOF

// alert(typeof(1));
// console.log(typeof( function() {} )); // function
// console.log(typeof({})); // object. 
// console.log(typeof(null)); // object.
// console.log(typeof(undefined)); // undefined.
// console.log(typeof(NaN)); // number.



// COMMON TYPE CONVERSIONS

// convert to string
// myString.toString();

// convert to int.
// myNum.parseInt('55');

// convert to float.
// myFloat.parseFloat('55.99');

// console.log(parseInt('55abc')); // 55

// console.log(parseFloat('55.88abc')); // 55.88

// console.log(parseFloat('ABC55.88abc')); // NaN // the value being parsed must start with a digit.



// CONTROLLING LOOPS

// let i = 0;
// for(; i < 12; i++) { // i was declared above so the starting parameter is optional.
//     if ( i === 8 ) { // this loop does nothing until i = 8. When i = 8, break the loop and console.log(i);
//         break; // break exits the loop.
//     }
// }

// console.log(i) // 8


// for(let i = 0; i < 4; i++) { 
//     if ( i === 2 ) {
//         continue; // if i === 2, go back to top of loop, skip anything below.
//     }
//     console.log(i) // 0, 1, 3 // two was skipped because of conditional statement.
// }


// for(let i = 0; i < 5; i++) {  // loop result: 0, 1, 2, 3
//     console.log(i); // logs 3
//     if (i === 3) { // then breaks the loop.
//         break;
//     }
// }


// for(let i = 0; i < 5; i++) {
//     if (i === 3) { // if i === 3, go back to top of loop, skip anything below.
//         continue;
//     }
//     console.log(i); // 0, 1, 2, 4
// }



